import { Dropdown } from "./Dropdown";
import i18n from "i18next";
import { pathWithoutLanguage, getPathLang } from "../../routing/lang";
import { useEffect, useState } from "react";

type LanguageDropdownProps = {
  astroPath: string;
};

export const LanguageDropdown = ({ astroPath }: LanguageDropdownProps) => {
  const [pathWithoutLang, setPathWithoutLang] = useState("/");
  const [lang, setLang] = useState(getPathLang(astroPath));

  useEffect(() => {
    const path = location.pathname;
    setPathWithoutLang(pathWithoutLanguage(path));
    setLang(getPathLang(path) || "");
  }, []);

  return (
    lang && (
      <Dropdown
        item={lang.toUpperCase()}
        options={i18n.languages.map((lang) => lang.toUpperCase())}
        onChange={(option) =>
          (location.href = `/${option.toLowerCase()}${pathWithoutLang}`)
        }
      />
    )
  );
};
