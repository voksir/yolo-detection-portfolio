import type { Lang } from "../i18n/types";
import { asset } from "./assets";

export function homePath(lang: Lang): string {
  return lang === "fr" ? asset("fr/") : asset("");
}

export function modelPath(lang: Lang, slug: string): string {
  const prefix = lang === "fr" ? "fr/models" : "models";
  return asset(`${prefix}/${slug}/`);
}

export function sectionId(lang: Lang, section: "about" | "pipeline" | "results" | "models" | "stack"): string {
  if (section === "results" && lang === "fr") return "resultats";
  return section;
}

export function sectionHref(lang: Lang, section: "about" | "pipeline" | "results" | "models" | "stack"): string {
  return `${homePath(lang)}#${sectionId(lang, section)}`;
}

export function langSwitchUrls(pathname: string): { en: string; fr: string } {
  const base = import.meta.env.BASE_URL;
  const normalized = pathname.replace(base, "/").replace(/\/$/, "") || "/";

  if (normalized.startsWith("/fr/models/")) {
    const slug = normalized.replace("/fr/models/", "");
    return {
      en: asset(`models/${slug}/`),
      fr: asset(`fr/models/${slug}/`),
    };
  }

  if (normalized.startsWith("/models/")) {
    const slug = normalized.replace("/models/", "");
    return {
      en: asset(`models/${slug}/`),
      fr: asset(`fr/models/${slug}/`),
    };
  }

  if (normalized === "/fr" || normalized.startsWith("/fr/")) {
    return { en: asset(""), fr: asset("fr/") };
  }

  return { en: asset(""), fr: asset("fr/") };
}

export function resolveHashHref(lang: Lang, href: string): string {
  if (href.startsWith("http") || href.startsWith("#")) {
    if (href === "#results") return sectionHref(lang, "results");
    if (href === "#resultats") return sectionHref(lang, "results");
    if (href.startsWith("#")) return `${homePath(lang)}${href}`;
    return href;
  }
  return href;
}

export function fixContentLinks(html: string, lang: Lang): string {
  return html
    .replace(/href="#results"/g, `href="${sectionHref(lang, "results")}"`)
    .replace(/href="#resultats"/g, `href="${sectionHref(lang, "results")}"`);
}
