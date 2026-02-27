'use client';

import { usePathname, useRouter } from 'next/navigation';

export function LanguageSwitcher({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <select
      aria-label="language-switcher"
      value={locale}
      onChange={(e) => {
        const nextLocale = e.target.value;
        const segments = (pathname || '/').split('/').filter(Boolean);
        if (segments.length === 0) {
          router.push(`/${nextLocale}`);
        } else {
          segments[0] = nextLocale;
          router.push(`/${segments.join('/')}`);
        }
        localStorage.setItem('miseco_locale', nextLocale);
        document.cookie = `miseco_locale=${nextLocale}; path=/; max-age=31536000`;
      }}
    >
      <option value="hr">HR</option>
      <option value="en">EN</option>
      <option value="de">DE</option>
    </select>
  );
}
