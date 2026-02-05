import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-emerald-200 bg-emerald-50 text-emerald-800',
        secondary: 'border-slate-200 bg-slate-100 text-slate-800',
        destructive: 'border-red-200 bg-red-50 text-red-800',
        outline: 'text-foreground',
        verified: 'border-green-200 bg-green-50 text-green-800',
        pending: 'border-yellow-200 bg-yellow-50 text-yellow-800',
        rejected: 'border-red-200 bg-red-50 text-red-800',
        flagged: 'border-orange-200 bg-orange-50 text-orange-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={clsx(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
