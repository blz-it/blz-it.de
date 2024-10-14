import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Dropdown } from "./Dropdown";

interface Skill {
  name: string;
  href: string;
}

interface Props {
  title: string;
  skills: Skill[];
}

export const SkillsDropdown = ({ title, skills }: Props) => (
  <Dropdown
    item={title}
    icon={<ChevronDownIcon className="h-5 w-5" aria-hidden="true" />}
    options={skills.map(({ name }) => name)}
    onChange={(option) =>
      window.location.assign(
        skills.find(({ name }) => name === option)?.href || "",
      )
    }
  />
);
