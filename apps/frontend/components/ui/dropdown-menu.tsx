import { SelectHTMLAttributes } from 'react';

export function DropdownMenu(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} />;
}
