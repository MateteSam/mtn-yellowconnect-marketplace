'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { useNotifications } from '@/hooks/use-notifications';
import { useToast } from '@/hooks/use-toast';

const NotificationContext = createContext<ReturnType<typeof useNotifications> | null>(null);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
    const notifications = useNotifications();
    const { toast } = useToast();

    useEffect(() => {
        // Request desktop notification permission on mount
        notifications.requestDesktopPermission();
    }, []);

    // Effect to show toast and desktop notification for new notifications
    useEffect(() => {
        const unreadNotifications = notifications.notifications.filter(n => !n.read);
        if (unreadNotifications.length > 0) {
            const latest = unreadNotifications[0];

            // Check if this is a "new" notification (e.g., within the last minute)
            const isNew = (new Date().getTime() - new Date(latest.timestamp).getTime()) < 60000;

            if (isNew) {
                // Respect user's push notification preferences
                // We check if the user has explicitly disabled push notifications
                const pushEnabled = latest.staff?.notification_preferences?.push !== false &&
                    latest.patient?.notification_preferences?.push !== false;

                if (pushEnabled) {
                    // Show in-app toast
                    toast({
                        title: latest.title,
                        description: latest.desc,
                    });

                    // Show desktop notification
                    notifications.showDesktopNotification(latest.title, {
                        body: latest.desc,
                        icon: '/favicon.ico',
                    });
                }
            }
        }
    }, [notifications.notifications, toast]);

    return (
        <NotificationContext.Provider value={notifications}>
            {children}
        </NotificationContext.Provider>
    );
}

export const useNotificationContext = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotificationContext must be used within a NotificationProvider');
    }
    return context;
};
