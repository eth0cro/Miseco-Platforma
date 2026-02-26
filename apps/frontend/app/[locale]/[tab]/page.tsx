import { notFound } from 'next/navigation';
import { Locale, locales, t } from '../../../lib/i18n';

const publicTabs = ['home', 'about', 'branches', 'jobs', 'news', 'contact', 'login'] as const;
type PublicTab = (typeof publicTabs)[number];

function isPublicTab(value: string): value is PublicTab {
  return (publicTabs as readonly string[]).includes(value);
}

export default function PublicTabPage({ params }: { params: { locale: Locale; tab: string } }) {
  const locale = locales.includes(params.locale) ? params.locale : 'hr';

  if (!isPublicTab(params.tab)) {
    notFound();
  }

  return (
    <main>
      <h1>{t(locale, `tabs.${params.tab}`)}</h1>
      <p>{t(locale, 'site.subtitle')}</p>
    </main>
  );
}
