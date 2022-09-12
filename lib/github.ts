const REPOSITORY_ENDPOINT = `https://api.github.com/repos/tonydotdev/`;
const USER_ENDPOINT = `https://api.github.com/users/TonyDotDev`;

export const getRepositoryFactory = (repository: string) => async () => {
  return fetch(REPOSITORY_ENDPOINT + repository);
};

export const getMyProfile = async () => fetch(USER_ENDPOINT);
