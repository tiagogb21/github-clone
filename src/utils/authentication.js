/* eslint-disable no-undef */
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.AUTHENTICATE,
});

const getAuthentication = async () => {
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();
  return login;
};

export const getBranchesData = async (owner, repo) => {
  return await octokit.request(`GET /repos/${owner}/${repo}/branches`, {
    owner: owner,
    repo: repo,
  });
};

export const authenticate = getAuthentication();
