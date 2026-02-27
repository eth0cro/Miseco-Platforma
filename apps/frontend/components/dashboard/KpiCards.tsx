import { Locale, t } from '../../lib/i18n';

const kpis = [
  { key: 'branches', value: '15' },
  { key: 'workers', value: '52' },
  { key: 'openRepairs', value: '6' },
  { key: 'pendingSettlements', value: '4' },
] as const;

export function KpiCards({ locale }: { locale: Locale }) {
  return (
    <section className="kpi-grid">
      {kpis.map((kpi) => (
        <div key={kpi.key} className="card kpi-card">
          <div>{t(locale, `app.kpi.${kpi.key}`)}</div>
          <div className="value">{kpi.value}</div>
        </div>
      ))}
    </section>
  );
}
