import { Dropdown } from "./Dropdown";
import i18n from "i18next";
import { pathWithoutLanguage } from "../../routing/lang";

export type LanguageDropdownProps = {
  currentPath: string;
};

export const LanguageDropdown = ({ currentPath }: LanguageDropdownProps) => {
  const pathWithoutLang = pathWithoutLanguage(currentPath);

  return (
    <Dropdown
      item={i18n.language.toUpperCase()}
      options={i18n.languages.map((lang) => lang.toUpperCase())}
      onChange={(option) =>
        (location.href = `/${option.toLowerCase()}${pathWithoutLang}`)
      }
    />
  );
};
