import { en } from "./en";
import { ko } from "./ko";
import type { Lang } from "../types/resume";

const dictionaries = { en, ko };

export function getUi(lang: Lang) {
  return dictionaries[lang];
}
