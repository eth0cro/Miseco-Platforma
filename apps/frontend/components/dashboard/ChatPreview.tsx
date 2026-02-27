import { Locale, t } from '../../lib/i18n';

export function ChatPreview({ locale }: { locale: Locale }) {
  return (
    <section className="card panel">
      <h3>{t(locale, 'app.chatPreview.title')}</h3>
      <p style={{ color: 'var(--muted)' }}>{t(locale, 'app.chatPreview.row1')}</p>
      <p style={{ color: 'var(--muted)' }}>{t(locale, 'app.chatPreview.row2')}</p>
      <button className="btn" style={{ marginTop: 8 }}>
        {t(locale, 'app.chatPreview.open')}
      </button>
    </section>
  );
}
