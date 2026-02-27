import { HTMLAttributes } from 'react';

export function Sheet({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={className} {...props} />;
}
