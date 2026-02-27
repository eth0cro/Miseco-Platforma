import Link from 'next/link';
import { Locale, t } from '../../lib/i18n';

const cards = ['about', 'branches', 'news', 'contact'] as const;

export function PublicCards({ locale }: { locale: Locale }) {
  return (
    <section className="cards-grid">
      {cards.map((key) => (
        <article key={key} className="card mini-card">
          <h3>{t(locale, `public.cards.${key}.title`)}</h3>
          <p>{t(locale, `public.cards.${key}.text`)}</p>
          <Link className="btn btn-ghost" href={`/${locale}/${key}`}>
            {t(locale, 'public.cards.readMore')}
          </Link>
        </article>
      ))}
    </section>
  );
}
