'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const { t, i18n, ready } = useTranslation();
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after client-side rendering
  useEffect(() => {
    setMounted(true);
    if (process.env.NODE_ENV === 'development') {
      console.log('Header mounted:', { ready, language: i18n.language });
      console.log('Header translations:', t('name'), t('home'), t('cv'));
    }
  }, [ready, t, i18n]);

  // Render a consistent <nav> structure during server rendering
  if (!mounted || !ready) {
    return (
      <nav className="flex justify-between items-center p-4 bg-light-primary dark:bg-dark-primary rounded-b-lg shadow-soft no-print">
        <Link href="/" className="text-2xl font-bold">
          Loading...
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/">Home</Link>
          <Link href="/cv">CV</Link>
          <div className="flex items-center space-x-2">
            <Globe size={20} />
            <button className="text-gray-600">EN</button>
            <button className="text-gray-600">FR</button>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    );
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-light-primary dark:bg-dark-primary rounded-b-lg shadow-soft no-print">
      <Link href="/" className="text-2xl font-bold">
        {t('name')}
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/">{t('home')}</Link>
        <Link href="/cv">{t('cv')}</Link>
        <div className="flex items-center space-x-2">
          <Globe size={20} />
          <button
            onClick={() => changeLanguage('en')}
            className={i18n.language === 'en' ? 'font-bold text-blue-600' : 'text-gray-600'}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('fr')}
            className={i18n.language === 'fr' ? 'font-bold text-blue-600' : 'text-gray-600'}
          >
            FR
          </button>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}