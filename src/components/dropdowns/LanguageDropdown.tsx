import { LanguageIcon } from "@heroicons/react/20/solid";
import { languages, type Language, type LocalePath } from "~/i18n";
import { Dropdown } from "./Dropdown";

interface Props {
  lang: Language;
  paths: LocalePath[];
}

export const LanguageDropdown = ({ lang, paths }: Props) => (
  <Dropdown
    item={{ label: languages[lang], value: lang }}
    leftIcon={<LanguageIcon className="h-5 w-5" aria-hidden="true" />}
    options={paths.map(({ lang }) => ({ label: languages[lang], value: lang }))}
    onChange={(option) => {
      window.location.assign(
        paths.find(({ lang }) => lang === option)?.path || "",
      );
    }}
  />
);
