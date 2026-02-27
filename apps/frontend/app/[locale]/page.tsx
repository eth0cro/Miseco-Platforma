import Link from 'next/link';
import { PublicCards } from '../../components/sections/PublicCards';
import { PublicHero } from '../../components/sections/PublicHero';
import { PublicTopbar } from '../../components/layout/PublicTopbar';
import { PublicFooter } from '../../components/layout/PublicFooter';
import { Locale, locales, t } from '../../lib/i18n';

export default function LocaleHome({ params }: { params: { locale: Locale } }) {
  const locale = locales.includes(params.locale) ? params.locale : 'hr';

  return (
    <div className="page-shell">
      <PublicTopbar locale={locale} />
      <main className="public-main container">
        <PublicHero locale={locale} />
        <PublicCards locale={locale} />

        <section className="split-grid">
          <article className="card mini-card">
            <h3>{t(locale, 'site.public')}</h3>
            <p>{t(locale, 'public.section.publicText')}</p>
            <Link className="btn btn-ghost" href={`/${locale}/about`}>
              {t(locale, 'public.cards.readMore')}
            </Link>
          </article>
          <article className="card mini-card">
            <h3>{t(locale, 'site.intranet')}</h3>
            <p>{t(locale, 'public.section.intranetText')}</p>
            <Link className="btn btn-primary" href={`/${locale}/app/dashboard`}>
              {t(locale, 'public.section.intranetOpen')}
            </Link>
          </article>
        </section>
      </main>
      <PublicFooter locale={locale} />
    </div>
  );
}
