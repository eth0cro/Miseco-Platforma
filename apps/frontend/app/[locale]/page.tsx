import Link from 'next/link';
import { LanguageSwitcher } from '../../components/LanguageSwitcher';
import { Locale, locales, t } from '../../lib/i18n';

const publicTabs = ['home', 'about', 'branches', 'jobs', 'news', 'contact', 'login'];
const intranetTabs = ['settlements', 'scheduler', 'storage', 'chat', 'repairs', 'video'];

export default function LocaleHome({ params }: { params: { locale: Locale } }) {
  const locale = locales.includes(params.locale) ? params.locale : 'hr';

  return (
    <>
      <header>
        <div>
          <strong>MISECO</strong>
          <div>Sports LBS GmbH</div>
        </div>
        <LanguageSwitcher locale={locale} />
      </header>
      <main>
        <h1>{t(locale, 'site.title')}</h1>
        <p>{t(locale, 'site.subtitle')}</p>

        <h2>{t(locale, 'site.public')}</h2>
        <ul>
          {publicTabs.map((tab) => (
            <li key={tab}>
              <Link href={`/${locale}/${tab}`}>{t(locale, `tabs.${tab}`)}</Link>
            </li>
          ))}
        </ul>

        <h2>{t(locale, 'site.intranet')}</h2>
        <ul>
          {intranetTabs.map((tab) => (
            <li key={tab}>
              <Link href={`/${locale}/app/${tab}`}>{t(locale, `intranet.${tab}`)}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
