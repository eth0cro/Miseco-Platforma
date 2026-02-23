import hr from '../i18n/messages/hr.json';
import en from '../i18n/messages/en.json';
import de from '../i18n/messages/de.json';

export const locales = ['hr', 'en', 'de'] as const;
export type Locale = (typeof locales)[number];

const dictionary = { hr, en, de };

export function t(locale: Locale, key: string): string {
  return (dictionary[locale] as Record<string, string>)[key] ?? key;
}
