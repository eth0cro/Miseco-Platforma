import { ReactNode } from 'react';
import { Locale } from '../../lib/i18n';
import { AppTopbar } from './AppTopbar';
import { AppSidebar } from './AppSidebar';

export function AppShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <div className="page-shell">
      <AppTopbar locale={locale} />
      <div className="app-shell">
        <AppSidebar locale={locale} />
        <main className="app-main">{children}</main>
      </div>
    </div>
  );
}
