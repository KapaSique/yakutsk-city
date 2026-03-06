'use client';

import * as React from 'react';
import { X, Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  onClose?: () => void;
  icon?: React.ReactNode;
  showIcon?: boolean;
}

const variantStyles = {
  info: {
    container: 'bg-blue-50 border-blue-200 text-blue-900',
    icon: 'text-blue-600',
    title: 'text-blue-900',
    close: 'text-blue-600 hover:text-blue-800 hover:bg-blue-100',
  },
  success: {
    container: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    icon: 'text-emerald-600',
    title: 'text-emerald-900',
    close: 'text-emerald-600 hover:text-emerald-800 hover:bg-emerald-100',
  },
  warning: {
    container: 'bg-amber-50 border-amber-200 text-amber-900',
    icon: 'text-amber-600',
    title: 'text-amber-900',
    close: 'text-amber-600 hover:text-amber-800 hover:bg-amber-100',
  },
  error: {
    container: 'bg-red-50 border-red-200 text-red-900',
    icon: 'text-red-600',
    title: 'text-red-900',
    close: 'text-red-600 hover:text-red-800 hover:bg-red-100',
  },
};

const defaultIcons = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: XCircle,
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'info',
      title,
      children,
      onClose,
      icon,
      showIcon = true,
      className,
      ...props
    },
    ref
  ) => {
    const styles = variantStyles[variant];
    const IconComponent = defaultIcons[variant];

    const ariaRole = variant === 'error' ? 'alert' : 'status';
    const ariaLive = variant === 'error' ? 'assertive' : 'polite';

    return (
      <div
        ref={ref}
        role={ariaRole}
        aria-live={ariaLive}
        aria-atomic="true"
        className={cn(
          'relative w-full rounded-lg border px-4 py-3 text-sm',
          'transition-all duration-200',
          styles.container,
          className
        )}
        {...props}
      >
        <div className="flex items-start gap-3">
          {showIcon && (
            <div className={cn('flex-shrink-0 mt-0.5', styles.icon)}>
              {icon || <IconComponent className="h-5 w-5" aria-hidden="true" />}
            </div>
          )}

          <div className="flex-1 min-w-0">
            {title && (
              <h5 className={cn('font-semibold mb-1', styles.title)}>
                {title}
              </h5>
            )}
            <div className="text-sm leading-relaxed">{children}</div>
          </div>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Закрыть уведомление"
              className={cn(
                'flex-shrink-0 rounded-md p-1 transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-offset-2',
                variant === 'info' && 'focus:ring-blue-500',
                variant === 'success' && 'focus:ring-emerald-500',
                variant === 'warning' && 'focus:ring-amber-500',
                variant === 'error' && 'focus:ring-red-500',
                styles.close
              )}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export default Alert;
