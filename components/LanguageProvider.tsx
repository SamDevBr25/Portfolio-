"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { Globe2 } from "lucide-react";

import { languages, localizedContent, type LanguageCode, type LocalizedContent } from "@/content/i18n";
import { projects as baseProjects, type Project } from "@/content/site";
import { cn } from "@/lib/utils";

export type DisplayContent = Omit<LocalizedContent, "projects"> & {
  projects: Project[];
};

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  content: DisplayContent;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const supportedCodes = languages.map((language) => language.code);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const stored = window.localStorage.getItem("spdigital-language");
      const detected = isSupportedLanguage(stored) ? stored : detectLanguage();
      setLanguageState(detected);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("spdigital-language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = "ltr";
  }, [language]);

  const content = useMemo(() => {
    return mergeProjectFallbacks(localizedContent[language] || localizedContent.en);
  }, [language]);

  function setLanguage(nextLanguage: LanguageCode) {
    setLanguageState(nextLanguage);
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);

  if (!value) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return value;
}

export function LanguageSelector({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <label
      className={cn(
        "flex h-9 items-center gap-2 rounded-full border border-ink-900/10 bg-white/70 px-3 text-xs font-semibold text-graphite",
        className
      )}
    >
      <Globe2 className="h-4 w-4 text-ink-500" aria-hidden="true" />
      <span className="sr-only">Select language</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value as LanguageCode)}
        className="max-w-24 bg-transparent outline-none"
        aria-label="Select language"
      >
        {languages.map((option) => (
          <option key={option.code} value={option.code}>
            {option.label} - {option.name}
          </option>
        ))}
      </select>
    </label>
  );
}

function detectLanguage(): LanguageCode {
  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language];

  for (const candidate of candidates) {
    const code = candidate.toLowerCase().split("-")[0];
    if (supportedCodes.includes(code as LanguageCode)) {
      return code as LanguageCode;
    }
  }

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone.toLowerCase();

  if (timezone.includes("lisbon") || timezone.includes("azores") || timezone.includes("madeira")) {
    return "pt";
  }

  if (timezone.includes("madrid")) {
    return "es";
  }

  return "en";
}

function isSupportedLanguage(value: string | null): value is LanguageCode {
  return supportedCodes.includes(value as LanguageCode);
}

function mergeProjectFallbacks(raw: LocalizedContent): DisplayContent {
  const overrides = new Map(
    raw.projects.map((project) => [project.slug, project as Partial<Project>])
  );

  return {
    ...raw,
    projects: baseProjects.map((project) => {
      const override = overrides.get(project.slug);

      return override ? { ...project, ...override } : project;
    })
  };
}
