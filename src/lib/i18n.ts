import {
  identity,
  nav,
  sectionIndex,
  now,
  hero,
  about,
  skillGroups,
  flagship,
  secondaryProjects,
  experience,
  services,
  contact,
  beforeAfter,
  ui,
} from "@/lib/content";
import { ar } from "@/lib/content.ar";

export type Locale = "en" | "ar";

const en = {
  identity,
  nav,
  sectionIndex,
  now,
  hero,
  about,
  skillGroups,
  flagship,
  secondaryProjects,
  experience,
  services,
  contact,
  beforeAfter,
  ui,
};

export type SiteContent = typeof en;

export function getContent(locale: Locale = "en"): SiteContent {
  return locale === "ar" ? ar : en;
}

/** Path of the homepage for a locale; section anchors hang off it (`${homePath}#work`). */
export function homePath(locale: Locale = "en") {
  return locale === "ar" ? "/ar" : "/";
}
