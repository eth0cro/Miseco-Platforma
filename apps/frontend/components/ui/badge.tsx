import { HTMLAttributes } from 'react';

export function Badge({ className = '', ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={`btn btn-ghost ${className}`.trim()} {...props} />;
}
