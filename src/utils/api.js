import { USERS } from "./data";

export const fetchUserApi = async (username) => {
  const getData = await fetch(`${USERS}${username}`)
    .then((response) => response.json())
    .then((data) => data);
  if (!username) return undefined;
  return getData;
};

export const fetchReposApi = async (username) => {
  const getData = await fetch(`${USERS}${username}/repos`)
    .then((response) => response.json())
    .then((data) => data);
  return getData;
};
