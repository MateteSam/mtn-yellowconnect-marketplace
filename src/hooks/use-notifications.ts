'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from './use-auth';
import type { Notification } from '@/lib/types';
import { authFetch } from '@/lib/auth-fetch';

export function useNotifications() {
    const { user } = useAuth();
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);
    const [unreadCount, setUnreadCount] = useState(0);

    const fetchNotifications = useCallback(async () => {
        if (!user) return;
        try {
            const res = await authFetch('/api/notifications');
            if (res.ok) {
                const data = await res.json();
                setNotifications(data);
                setUnreadCount(data.filter((n: Notification) => !n.read).length);
            }
        } catch (error) {
            console.error('Failed to fetch notifications:', error);
        } finally {
            setLoading(false);
        }
    }, [user]);

    useEffect(() => {
        fetchNotifications();
        // Poll for new notifications every 30 seconds
        const interval = setInterval(fetchNotifications, 30000);
        return () => clearInterval(interval);
    }, [fetchNotifications]);

    const markAsRead = async (id: string) => {
        try {
            const res = await authFetch(`/api/notifications/${id}/read`, {
                method: 'PATCH',
            });
            if (res.ok) {
                setNotifications(prev =>
                    prev.map(n => (n.id === id ? { ...n, read: true } : n))
                );
                setUnreadCount(prev => Math.max(0, prev - 1));
            }
        } catch (error) {
            console.error('Failed to mark notification as read:', error);
        }
    };

    const markAllAsRead = async () => {
        // For simplicity, we'll just mark them one by one or implement a bulk API
        // For now, let's just update the UI and assume a bulk API exists or mark individually
        const unreadIds = notifications.filter(n => !n.read).map(n => n.id);
        await Promise.all(unreadIds.map(id => markAsRead(id)));
    };

    const requestDesktopPermission = async () => {
        if ('Notification' in window) {
            const permission = await window.Notification.requestPermission();
            return permission === 'granted';
        }
        return false;
    };

    const showDesktopNotification = (title: string, options?: NotificationOptions) => {
        if ('Notification' in window && window.Notification.permission === 'granted') {
            new window.Notification(title, options);
        }
    };

    return {
        notifications,
        loading,
        unreadCount,
        markAsRead,
        markAllAsRead,
        fetchNotifications,
        requestDesktopPermission,
        showDesktopNotification,
    };
}
