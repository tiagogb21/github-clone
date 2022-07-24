import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
  HeaderRepo,
} from "./styles";

import { APIRepo } from "../../interfaces/index";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface Data {
  repo?: APIRepo;
  error?: string;
}

const Repo: React.FC = () => {
  const { username, reponame } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${reponame}`).then(
      async (response) => {
        setData(
          response.status === 404
            ? { error: "Repository not found!" }
            : { repo: await response.json() }
        );
      }
    );
  }, [reponame, username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.repo) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Header />
      <Container>
        <HeaderRepo>
          <Breadcrumb>
            <RepoIcon />

            <Link className={"username"} to={`/${username}`}>
              {username}
            </Link>

            <span>/</span>

            <Link className={"reponame"} to={`/${username}/${reponame}`}>
              {reponame}
            </Link>
          </Breadcrumb>

          <p>{data.repo.description}</p>

          <Stats>
            <li>
              <ForkIcon />
              <span>fork</span>
              <b>{data.repo.forks}</b>
            </li>

            <li>
              <StarIcon />
              <span>stars</span>
              <b>{data.repo.stargazers_count}</b>
            </li>
          </Stats>
        </HeaderRepo>

        <LinkButton href={data.repo.html_url}>
          <GithubIcon />
          <span>View on GitHub</span>
        </LinkButton>
      </Container>
      <Footer />
    </>
  );
};

export default Repo;
