import { useEffect, useState } from "react";
import { getPathLang } from "../../routing/lang";
import { Dropdown } from "./Dropdown";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { NavigationItem } from "../Header.astro";
import { buildLink } from "../../routing/buildLink";
import {t } from "i18next";


type SkillsDropdownProps = {
  astroPath: string;
};

const skills: NavigationItem[] = [
  {
    name: "Mobile",
    href: buildLink("mobile-applications-development"),
  },
  {
    name: "Full Stack",
    href: buildLink("it-software-solutions-for-business"),
  },
];

const downChevron = <ChevronDownIcon  className="h-5 w-5" aria-hidden="true" />


export const SkillsDropdown = ({astroPath} : SkillsDropdownProps) => {
  const lang = getPathLang(astroPath);

  useEffect(() => {
    const path = location.pathname;
    console.log(location);
  }, []);

  return (
    lang && (
      <Dropdown
        item={t("layout.header.skills")}
        icon={downChevron}
        options={skills.map(skill => skill.name)}
        onChange={(skillName) =>
          {
            const skill = skills.find(skill => skill.name === skillName)!;
            return (location.href = skill.href);
          }
        }
      />
    )
  );
};
