
'use client';

import { createContext, useContext, useState, ReactNode, useCallback, useMemo, useEffect } from 'react';

interface HeaderProps {
    title?: string;
}

interface LayoutContextType extends HeaderProps {
    setHeaderProps: (props: HeaderProps) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
    const [headerProps, setHeaderProps] = useState<HeaderProps>({});

    const handleSetHeaderProps = useCallback((props: HeaderProps) => {
        // Use a timeout to avoid race condition between unmounting and mounting components
        setTimeout(() => setHeaderProps(props), 0);
    }, []);

    // Clear header props on unmount
    useEffect(() => {
        return () => {
            setHeaderProps({});
        }
    }, []);

    const value = useMemo(() => ({
        ...headerProps,
        setHeaderProps: handleSetHeaderProps,
    }), [headerProps, handleSetHeaderProps]);

    return (
        <LayoutContext.Provider value={value}>
            {children}
        </LayoutContext.Provider>
    );
}

export function useLayout() {
    const context = useContext(LayoutContext);
    if (context === undefined) {
        throw new Error('useLayout must be used within a LayoutProvider');
    }
    return context;
}
