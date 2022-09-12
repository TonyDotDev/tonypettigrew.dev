const REPOSITORY_ENDPOINT = `https://api.github.com/repos/tonydotdev/`;

export const getRepositoryFactory = (repository: string) => async () => {
  return fetch(REPOSITORY_ENDPOINT + repository);
};
