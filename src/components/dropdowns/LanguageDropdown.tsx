import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getPathLang, pathWithoutLanguage } from "../../routing/lang";
import { Dropdown } from "./Dropdown";

type LanguageDropdownProps = {
  astroPath: string;
};

const upDownChevron = (
  <ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />
);

export const LanguageDropdown = ({ astroPath }: LanguageDropdownProps) => {
  const { i18n } = useTranslation();

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
