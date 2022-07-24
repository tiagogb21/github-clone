import { USERS } from "./data";

export const fetchUserApi = (username) => {
  const getData = fetch(`${USERS}${username}`)
    .then((response) => response.json())
    .then((data) => data);
  if (!username) return undefined;
  return getData;
};
