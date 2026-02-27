import { PublicFooter } from '../../../components/layout/PublicFooter';
import { PublicTopbar } from '../../../components/layout/PublicTopbar';
import { Locale, locales, t } from '../../../lib/i18n';

const allowedTabs = ['home', 'about', 'branches', 'jobs', 'news', 'contact', 'login'];

export default function PublicTabPage({ params }: { params: { locale: Locale; tab: string } }) {
  const locale = locales.includes(params.locale) ? params.locale : 'hr';
  const tab = allowedTabs.includes(params.tab) ? params.tab : 'home';

  return (
    <div className="page-shell">
      <PublicTopbar locale={locale} />
      <main className="public-main container">
        <section className="card" style={{ padding: 24 }}>
          <h1>{t(locale, `tabs.${tab}`)}</h1>
          <p style={{ color: 'var(--muted)' }}>{t(locale, 'public.tab.placeholder')}</p>
        </section>
      </main>
      <PublicFooter locale={locale} />
    </div>
  );
}
