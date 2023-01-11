import type { SkillData } from "./types";

enum Skill {
  MAD = "08",
  ITSSFB = "09",
}

export const skillsData: Record<Skill, SkillData> = {
  "08": {
    skillNumber: "08",
    skillName: "Mobile Applications Development",
    img: "https:////live.staticflickr.com/65535/52434467221_676ae1bf70_h.jpg",
    nationalTeam: [],
    timelineEntries: [
      {
        title: "WorldSkills 2022 SE",
        date: "13-16 October 2022",
        text: "Hello there",
      },
      {
        title: "WorldSkills 2022 SE",
        date: "13-16 October 2022",
        text: "Hello there",
      },
    ],
  },
  "09": {
    skillNumber: "09",
    skillName: "IT Software Solutions for Business",
    img: "https:////live.staticflickr.com/65535/52434272561_5e10bb3507_h.jpg",
    nationalTeam: [],
    timelineEntries: [
      {
        title: "WorldSkills 2022 SE",
        date: "13-16 October 2022",
        text: "Hello there",
      },
      {
        title: "WorldSkills 2022 SE",
        date: "13-16 October 2022",
        text: "Hello there",
      },
    ],
  },
};
