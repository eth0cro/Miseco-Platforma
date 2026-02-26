'use client';

import { useRouter } from 'next/navigation';

export function LanguageSwitcher({ locale }: { locale: string }) {
  const router = useRouter();

  return (
    <select
      aria-label="language-switcher"
      value={locale}
      onChange={(e) => {
        const nextLocale = e.target.value;
        localStorage.setItem('miseco_locale', nextLocale);
        document.cookie = `miseco_locale=${nextLocale}; path=/; max-age=31536000`;
        router.push(`/${nextLocale}`);
      }}
    >
      <option value="hr">HR</option>
      <option value="en">EN</option>
      <option value="de">DE</option>
    </select>
  );
}
