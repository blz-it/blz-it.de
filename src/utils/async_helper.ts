import history_file from "../../public/data/history.json";
import team_file from "../../public/data/team.json";

export async function load_history(
  skill: string,
  language: string
): Promise<Record<string, Record<string, string>>> {
  const history = history_file as Record<string, any>;
  return Promise.resolve(history[language][skill]);
}

export interface TeamMember {
  name: string;
  lastRole: string;
  skill?: string;
  img?: string;
  hasMultipleRoles: boolean;
}

export async function load_team(): Promise<TeamMember[]> {
  const team = team_file as TeamMember[];
  return Promise.resolve(team);
}
