import { ChatPreview } from '../../../../components/dashboard/ChatPreview';
import { KpiCards } from '../../../../components/dashboard/KpiCards';
import { RecentActivity } from '../../../../components/dashboard/RecentActivity';
import { Locale, locales, t } from '../../../../lib/i18n';

export default function DashboardPage({ params }: { params: { locale: Locale } }) {
  const locale = locales.includes(params.locale) ? params.locale : 'hr';

  return (
    <>
      <h1>{t(locale, 'app.dashboard.title')}</h1>
      <div className="toolbar">
        <select className="btn">
          <option>{t(locale, 'app.dashboard.branchSelect')}</option>
          <option>Berlin Mitte</option>
          <option>Hamburg Nord</option>
        </select>
      </div>
      <KpiCards locale={locale} />
      <div className="panel-grid">
        <RecentActivity locale={locale} />
        <ChatPreview locale={locale} />
      </div>
    </>
  );
}
