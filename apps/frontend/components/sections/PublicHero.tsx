import Link from 'next/link';
import { Locale, t } from '../../lib/i18n';

export function PublicHero({ locale }: { locale: Locale }) {
  return (
    <section className="hero">
      <div className="card" style={{ padding: 28 }}>
        <h1>{t(locale, 'public.hero.title')}</h1>
        <p>{t(locale, 'public.hero.subtitle')}</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href={`/${locale}/branches`}>
            {t(locale, 'public.hero.ctaBranches')}
          </Link>
          <Link className="btn" href={`/${locale}/jobs`}>
            {t(locale, 'public.hero.ctaJobs')}
          </Link>
        </div>
      </div>
      <div className="card hero-visual">
        <strong>{t(locale, 'public.hero.visualTitle')}</strong>
        <span>{t(locale, 'public.hero.visualBody')}</span>
      </div>
    </section>
  );
}
