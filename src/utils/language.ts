// Get current language from URL params (works with Astro)
export const getCurrentLanguage = (url?: URL): string => {
  if (url) {
    return url.searchParams.get('lang') || 'en';
  }
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang') || localStorage.getItem('language') || 'en';
  }
  return 'en';
};

// Get localized text from internationalized array
export const getLocalizedText = (array: any[], lang?: string): string => {
  if (!array || !Array.isArray(array)) return '';
  const currentLang = lang || 'en';
  return array?.find((item) => item._key === currentLang)?.value || array[0]?.value || '';
};
