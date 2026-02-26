import { Locale, locales, t } from '../../../../lib/i18n';

export default function IntranetModulePage({
  params,
}: {
  params: { locale: Locale; module: string };
}) {
  const locale = locales.includes(params.locale) ? params.locale : 'hr';

  return (
    <main>
      <h1>{t(locale, 'intranet.title')}</h1>
      <p>
        {t(locale, 'intranet.module')}: <strong>{params.module}</strong>
      </p>
      <p>{t(locale, 'intranet.rbacNotice')}</p>
    </main>
  );
}
