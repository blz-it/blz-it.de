import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import { buildLink } from "../../routing/buildLink";
import { getPathLang } from "../../routing/lang";
import { NavigationItem } from "../Header.astro";
import { Dropdown } from "./Dropdown";

type SkillsDropdownProps = {
  astroPath: string;
};

const downChevron = <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />;

export const SkillsDropdown = ({ astroPath }: SkillsDropdownProps) => {
  const { t, i18n } = useTranslation();

  const lang = getPathLang(astroPath);
  if (!lang) return null;

  const skills: NavigationItem[] = [
    {
      name: "Mobile",
      href: buildLink("mobile-applications-development", i18n.language),
    },
    {
      name: "Full Stack",
      href: buildLink("it-software-solutions-for-business", i18n.language),
    },
  ];

  return (
    <Dropdown
      item={t("layout.header.skills")}
      icon={downChevron}
      options={skills.map((skill) => skill.name)}
      onChange={(skillName) => {
        const skill = skills.find((skill) => skill.name === skillName)!;
        return (location.href = skill.href);
      }}
    />
  );
};
