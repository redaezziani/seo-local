import { useEffect, useState } from 'react';

function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('en');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Get language from URL params or localStorage
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    const savedLang = urlLang || localStorage.getItem('language') || 'en';
    setCurrentLang(savedLang);

    // Save to localStorage
    if (savedLang) {
      localStorage.setItem('language', savedLang);
    }
  }, []);

  const switchLanguage = (lang: string) => {
    setCurrentLang(lang);
    localStorage.setItem('language', lang);

    // Update URL with new language parameter and reload page
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);

    // Force a full page reload to fetch new data from Sanity
    window.location.href = url.toString();
  };

  // Don't render until client-side to avoid hydration issues
  if (!isClient) {
    return (
      <div className="flex items-center gap-1 bg-zinc-800 rounded-lg p-1">
        <button className="px-3 py-1.5 text-sm font-medium rounded-md text-gray-300">
          EN
        </button>
        <button className="px-3 py-1.5 text-sm font-medium rounded-md text-gray-300">
          FR
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 bg-zinc-800 rounded-lg p-1">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
          currentLang === 'en'
            ? 'bg-blue-500 text-white'
            : 'text-gray-300 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('fr')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
          currentLang === 'fr'
            ? 'bg-blue-500 text-white'
            : 'text-gray-300 hover:text-white'
        }`}
      >
        FR
      </button>
    </div>
  );
}

export default LanguageSwitcher;
