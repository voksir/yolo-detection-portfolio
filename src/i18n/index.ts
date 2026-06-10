import en from "./en";
import fr from "./fr";
import type { Dict, Lang } from "./types";

const dictionaries: Record<Lang, Dict> = { en, fr };

export function getDict(lang: Lang): Dict {
  return dictionaries[lang];
}

export type { Dict, Lang };
