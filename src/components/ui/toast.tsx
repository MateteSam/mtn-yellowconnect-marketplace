import * as React from 'react';

export type ToastActionElement = React.ReactElement;

export type ToastProps = {
  id?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  variant?: 'default' | 'destructive';
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

export function Toast({ title, description, action }: ToastProps) {
  return (
    <div className="rounded-2xl border border-outline-variant/20 bg-surface p-4 shadow-lg">
      {title && <div className="font-bold text-on-surface">{title}</div>}
      {description && <div className="text-sm text-on-surface-variant">{description}</div>}
      {action}
    </div>
  );
}
