import history_file from '../../public/data/history.json';

export async function load_history(skill: string, language: string): Promise<Record<string, Record<string, string>>> {
  const history = (history_file as Record<string, any>)
  return Promise.resolve(history[language][skill])
}
