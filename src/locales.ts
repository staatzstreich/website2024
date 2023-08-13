import "./i18n";

type SupportedLocale = "de" | "en";

const supportedLocalesInternal: SupportedLocale[] = ["de", "en"];
const fallbackLocale = "en";
const supportedLocales = supportedLocalesInternal as string[];

/** Returns the first detected language that is supported
 * @param i18n An instance of i18next
 */
function getLanguage(i18n: { languages: readonly string[] }): SupportedLocale {
  const language = i18n.languages.find((l) =>
    supportedLocales.includes(l as SupportedLocale)
  );
  if (language) {
    return language as SupportedLocale;
  }
  // To make Typescript happy. i18n.languages should always include the fallback.
  return fallbackLocale;
}

export type { SupportedLocale };
export { supportedLocales, fallbackLocale, getLanguage };
