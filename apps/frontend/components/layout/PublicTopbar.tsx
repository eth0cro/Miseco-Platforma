import Link from 'next/link';
import { Locale, t } from '../../lib/i18n';
import { LanguageSwitcher } from '../LanguageSwitcher';

const links = ['home', 'about', 'branches', 'jobs', 'news', 'contact'];

export function PublicTopbar({ locale }: { locale: Locale }) {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <div>
          <div className="brand">MISECO</div>
          <div className="brand-sub">Sports LBS GmbH</div>
        </div>
        <nav className="nav-links">
          {links.map((link) => (
            <Link key={link} href={`/${locale}/${link}`}>
              {t(locale, `tabs.${link}`)}
            </Link>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <LanguageSwitcher locale={locale} />
          <Link className="btn btn-primary" href={`/${locale}/login`}>
            {t(locale, 'tabs.login')}
          </Link>
        </div>
      </div>
    </header>
  );
}
