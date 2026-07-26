export type GitHubRepository = {
  id: number;
  name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  language: string | null;
  topics: string[];
  updated_at: string;
  stargazers_count: number;
  fork: boolean;
};

const GITHUB_USER = "murilobsantos";

export async function getPublicRepositories(): Promise<GitHubRepository[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) return [];

    const repositories = (await response.json()) as GitHubRepository[];
    return repositories.filter((repository) => !repository.fork);
  } catch {
    // A página continua útil em builds offline ou quando a API do GitHub falhar.
    return [];
  }
}
