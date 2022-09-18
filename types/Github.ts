export interface Repository {
  id: string;
  fullName: string;
  description: string;
  stargazers: number;
  watchers: number;
  openIssues: number;
  url: string;
}
export interface RepositoryData {
  id: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  open_issues_count: number;
  html_url: string;
}

export type Repositories = {
  repositories: Repository[];
};

export interface ProfileData {
  public_repos: number;
  public_gists: number;
}
