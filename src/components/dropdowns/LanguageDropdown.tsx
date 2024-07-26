import { Dropdown } from "./Dropdown";
import i18n from "i18next";
import { pathWithoutLanguage, getPathLang } from "../../routing/lang";
import { useEffect, useState } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

type LanguageDropdownProps = {
  astroPath: string;
};

const upDownChevron = <ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />;

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
        icon={upDownChevron}
        options={i18n.languages.map((lang) => lang.toUpperCase())}
        onChange={(option) =>
          (location.href = `/${option.toLowerCase()}${pathWithoutLang}`)
        }
      />
    )
  );
};
