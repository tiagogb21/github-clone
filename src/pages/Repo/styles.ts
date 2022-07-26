import styled, { css } from "styled-components";
import { RiBookMarkLine, RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 16px;
  > p {
    font-size: 16px;
  }
`;

export const HeaderRepo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderFirst = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Breadcrumb = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  font-size: 18px;
  > a {
    color: var(--link);
    text-decoration: none;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
    &.username {
      margin-left: 8px;
    }
    &.reponame {
      font-weight: 600;
    }
  }
  > span {
    padding: 0 5px;
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`;

export const Stats = styled.ul`
  margin-top: 16px;
  display: flex;
  align-items: center;
  > li {
    border: 1px solid var(--loblolly);
    padding: 5px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    margin-right: 9px;
    > * {
      margin-right: 7px;
      color: var(--gray);
    }
  }
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;

export const LinkButton = styled.a`
  text-decoration: none;
  margin-top: 24px;
  background: var(--gray-dark);
  padding: 12px 17px;
  border-radius: 24px;
  width: max-content;
  display: flex;
  align-items: center;
  > span {
    color: var(--primary);
  }
  > svg {
    fill: var(--primary);
    margin-right: 10px;
  }
`;

export const GithubIcon = styled(FaGithub)`
  ${iconCSS}
`;

export const Branchs = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;

  > button {
    margin: 10px 0;
    padding: 10px;
    border: none;
  }

  > button:hover {
    cursor: pointer;
    background: var(--daintree);
    color: var(--white);
  }
`;

export const Commits = styled.a`
  display: flex;
  flex-direction: column;

  > button {
    margin: 10px 0;
  }
`;

export const CommitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CommitBox = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  height: 15vh;
  width: 30vh;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: var(--iron);
`;
