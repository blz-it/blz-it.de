import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import type { LocalePath } from "~/i18n";
import { Dropdown } from "./Dropdown";

interface Props {
  lang: string;
  paths: LocalePath[];
}

export const LanguageDropdown = ({ lang, paths }: Props) => (
  <Dropdown
    item={lang.toUpperCase()}
    icon={<ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />}
    options={paths.map(({ lang }) => lang.toUpperCase())}
    onChange={(option) =>
      window.location.assign(
        paths.find(({ lang }) => lang.toUpperCase() === option)?.path || "",
      )
    }
  />
);
