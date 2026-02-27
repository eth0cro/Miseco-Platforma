import { Locale, t } from '../../lib/i18n';

export function PublicFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="footer">
      <div className="container">© {new Date().getFullYear()} MISECO Sports LBS GmbH · {t(locale, 'public.footer')}</div>
    </footer>
  );
}
