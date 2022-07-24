import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  TopSide,
  RepoIcon,
  BotSide,
  StarIcon,
  ForkIcon,
} from "./styles";

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,
}) => {
  const languageClass = language ? language.toLowerCase() : "other";

  return (
    <>
      <Container>
        <TopSide>
          <header>
            <article>
              <RepoIcon />
              <Link to={`/${username}/${reponame}`}>{reponame}</Link>
            </article>
            <article>
              <span>
                <StarIcon />
                <span>{stars}</span>
              </span>
              <span>
                <ForkIcon />
                <span>{forks}</span>
              </span>
            </article>
          </header>
        </TopSide>

        <BotSide>
          <ul>
            <li>
              <div className={`language ${languageClass}`}></div>
              <span>{language}</span>
            </li>
          </ul>
        </BotSide>
      </Container>
    </>
  );
};

export default RepoCard;
