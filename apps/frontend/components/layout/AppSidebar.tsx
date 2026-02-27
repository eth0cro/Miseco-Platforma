'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale, t } from '../../lib/i18n';

const nav = ['dashboard', 'branches', 'obracun', 'schedule', 'tutorials', 'documents', 'repairs', 'chat', 'profile', 'admin'];

export function AppSidebar({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      {nav.map((item) => {
        const href = item === 'dashboard' ? `/${locale}/app/dashboard` : `/${locale}/app/${item}`;
        const active = pathname === href;
        return (
          <Link key={item} href={href} className={active ? 'active' : ''}>
            {t(locale, `app.sidebar.${item}`)}
          </Link>
        );
      })}
    </aside>
  );
}
