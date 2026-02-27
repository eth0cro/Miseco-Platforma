import { Locale, t } from '../../lib/i18n';

export function RecentActivity({ locale }: { locale: Locale }) {
  const rows = [
    t(locale, 'app.activity.row1'),
    t(locale, 'app.activity.row2'),
    t(locale, 'app.activity.row3'),
  ];

  return (
    <section className="card panel">
      <h3>{t(locale, 'app.activity.title')}</h3>
      <ul>
        {rows.map((row) => (
          <li key={row} style={{ marginBottom: 8, color: 'var(--muted)' }}>
            {row}
          </li>
        ))}
      </ul>
    </section>
  );
}
