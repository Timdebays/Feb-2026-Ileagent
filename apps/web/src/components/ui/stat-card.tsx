import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import clsx from 'clsx';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  change?: number;
  trend?: 'up' | 'down';
  description?: string;
  className?: string;
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ title, value, icon, change, trend, description, className }, ref) => {
    const displayChange = change !== undefined && trend;

    return (
      <Card ref={ref} className={clsx('relative overflow-hidden', className)}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-slate-600">
            {title}
          </CardTitle>
          {icon && <div className="text-2xl text-emerald-600">{icon}</div>}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-900">{value}</div>
          {(displayChange || description) && (
            <p
              className={clsx('text-xs mt-2', {
                'text-green-600': trend === 'up',
                'text-red-600': trend === 'down',
                'text-slate-500': !displayChange,
              })}
            >
              {displayChange && (
                <>
                  {trend === 'up' ? '↑' : '↓'} {Math.abs(change || 0)}%
                </>
              )}
              {description && !displayChange && description}
            </p>
          )}
        </CardContent>
      </Card>
    );
  }
);

StatCard.displayName = 'StatCard';

export { StatCard };
