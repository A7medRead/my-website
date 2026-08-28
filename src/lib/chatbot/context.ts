import {
  identity,
  about,
  skillGroups,
  flagship,
  secondaryProjects,
  experience,
  services,
  contact,
} from "@/lib/content";
import { getAllLogPosts } from "@/lib/log";

/** Compact, factual grounding text for the visitor chatbot's system prompt — built only from
 * content already public on the site (src/lib/content.ts + log post metadata), never anything
 * else. Keeping this to metadata/excerpts (not full log post bodies) bounds prompt size and avoids
 * reproducing full article text verbatim on every request. */
export function buildSiteContext(): string {
  const skillsText = skillGroups
    .map((group) => `${group.label}: ${group.items.join(", ")}`)
    .join("\n");

  const projectsText = [
    `${flagship.name} (${flagship.subtitle}) — ${flagship.description}`,
    ...secondaryProjects.map((p) => `${p.name} — ${p.description}`),
  ].join("\n");

  const servicesText = services.map((s) => `${s.title}: ${s.description}`).join("\n");

  const logPostsText = getAllLogPosts()
    .map((p) => `- "${p.title}" (${p.category}, ${p.date}): ${p.excerpt}`)
    .join("\n");

  return [
    `Name: ${identity.name} (${identity.shortName})`,
    `Title: ${identity.title}`,
    `Location: ${identity.location}`,
    `Site: ${identity.siteUrl}`,
    "",
    "About:",
    about.paragraphs.join(" "),
    "",
    "Skills:",
    skillsText,
    "",
    "Current role:",
    `${experience.role} at ${experience.company} (${experience.range})`,
    experience.responsibilities.join("; "),
    "",
    "Projects:",
    projectsText,
    "",
    "Services offered:",
    servicesText,
    "",
    "Blog posts (title, category, date, excerpt only):",
    logPostsText || "(none yet)",
    "",
    "Contact channels:",
    contact.channels.map((c) => `${c.label}: ${c.value}`).join("\n"),
  ].join("\n");
}
