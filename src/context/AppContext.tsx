/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationKey } from '../translations';

export type Language = 'id' | 'en';
export type Theme = 'dark' | 'light';

interface AppContextType {
  language: Language;
  theme: Theme;
  setLanguage: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
  t: (key: TranslationKey) => string;
  // Raw dictionary access for complex arrays/objects
  dict: typeof translations['id'];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('openclaw_lang');
    return (saved === 'en' || saved === 'id') ? saved : 'id';
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('openclaw_theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  // Apply theme to HTML tag
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('openclaw_lang', lang);
  };

  const setTheme = (themeVal: Theme) => {
    setThemeState(themeVal);
    localStorage.setItem('openclaw_theme', themeVal);
  };

  // Safe translation retriever
  const t = (key: TranslationKey): string => {
    const localized = translations[language];
    // Return key value if found
    if (localized && (localized as any)[key]) {
      return (localized as any)[key];
    }
    // Fallback to ID
    const fallback = translations['id'];
    if (fallback && (fallback as any)[key]) {
      return (fallback as any)[key];
    }
    return String(key);
  };

  const dict = translations[language] || translations['id'];

  return (
    <AppContext.Provider value={{ language, theme, setLanguage, setTheme, t, dict }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
