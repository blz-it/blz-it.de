export type SkillData = SkillHeadingProps & {
  nationalTeam: PersonProps[];
  timelineEntries: TimeLineEntryProps[];
};

export type SkillHeadingProps = {
  skillNumber: string;
  skillName: string;
  img: string;
};

export type PersonProps = SocialMediaListProps & {
  name: string;
  img: string;
  info?: string;
};

export type SocialMediaListProps = {
  links: SocialMediaButtonProps[];
};

export type SocialMediaButtonProps = {
  icon: string;
  name: string;
  href: string;
};

type TimelineInfoItem = {
  date: string;
  title: string;
  text: string;
};

type TimelinePeriodItem = {
  period: string;
};

export type TimeLineEntryProps = TimelineInfoItem | TimelinePeriodItem;
