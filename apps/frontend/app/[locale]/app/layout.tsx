import { ReactNode } from 'react';
import { Locale, locales } from '../../../lib/i18n';
import { AppShell } from '../../../components/layout/AppShell';

export default function IntranetLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const locale = locales.includes(params.locale) ? params.locale : 'hr';
  return <AppShell locale={locale}>{children}</AppShell>;
}
