import { Locale, t } from '../../lib/i18n';
import { LanguageSwitcher } from '../LanguageSwitcher';

export function AppTopbar({ locale }: { locale: Locale }) {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <div>
          <div className="brand">MISECO Intranet</div>
          <div className="brand-sub">{t(locale, 'app.topbar.subtitle')}</div>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <LanguageSwitcher locale={locale} />
          <button className="btn">{t(locale, 'app.topbar.profile')}</button>
        </div>
      </div>
    </header>
  );
}
