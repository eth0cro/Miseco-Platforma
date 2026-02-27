import { redirect } from 'next/navigation';
import { Locale } from '../../../lib/i18n';

export default function IntranetIndex({ params }: { params: { locale: Locale } }) {
  redirect(`/${params.locale}/app/dashboard`);
}
