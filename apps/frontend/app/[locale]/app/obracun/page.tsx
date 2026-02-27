import { EditableGrid } from '../../../../components/tables/EditableGrid';
import { Locale, locales, t } from '../../../../lib/i18n';

export default function ObracunPage({ params }: { params: { locale: Locale } }) {
  const locale = locales.includes(params.locale) ? params.locale : 'hr';

  return (
    <>
      <h1>{t(locale, 'settlement.title')}</h1>
      <div className="toolbar">
        <select className="btn">
          <option>{t(locale, 'settlement.branch')}</option>
          <option>Berlin Mitte</option>
        </select>
        <input className="btn" type="month" />
        <select className="btn">
          <option>FINAL</option>
          <option>INTERIM</option>
        </select>
        <button className="btn btn-primary">{t(locale, 'settlement.submit')}</button>
        <button className="btn">{t(locale, 'settlement.finalize')}</button>
      </div>

      <EditableGrid
        title={t(locale, 'settlement.tableCash')}
        columns={[
          { key: 'date', label: t(locale, 'settlement.date'), type: 'date' },
          { key: 'cash', label: t(locale, 'settlement.cashState'), type: 'number' },
          { key: 'zastra', label: t(locale, 'settlement.zastraState'), type: 'number' },
        ]}
        initialRows={[{ date: '', cash: '', zastra: '' }]}
      />

      <EditableGrid
        title={t(locale, 'settlement.tableTerminals')}
        columns={[
          { key: 'terminal', label: t(locale, 'settlement.terminalCode') },
          { key: 'bills', label: t(locale, 'settlement.billsState'), type: 'number' },
          { key: 'coins', label: t(locale, 'settlement.coinsState'), type: 'number' },
          { key: 'total', label: t(locale, 'settlement.total'), type: 'number' },
        ]}
        initialRows={[{ terminal: '', bills: '', coins: '', total: '' }]}
      />
    </>
  );
}
