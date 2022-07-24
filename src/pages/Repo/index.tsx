import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { APIBranch, APICommit } from "../../interfaces";

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
  HeaderFirst,
  Branchs,
  Commits,
  CommitBox,
  CommitsContainer,
} from "./styles";

import { APIRepo } from "../../interfaces/index";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { getBranchesData } from "../../utils/authentication";

interface Data {
  repo?: APIRepo;
  error?: string;
}

const Repo: React.FC = () => {
  const { username, reponame } = useParams();
  const [data, setData] = useState<Data>();

  const [branchesData, setBranchesData] = useState([]);
  const [commitsData, setCommitsData] = useState([]);

  const [targetBranch, setTargetBranch] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data: any = await getBranchesData(username, reponame);
      setBranchesData(data.data);
    };
    getData();
  }, []);

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

  const handleClick = async (e: any, url: any, name: string) => {
    e.target.classList.toggle("active");
    setTargetBranch(name);
    const data = await fetch(url)
      .then((response) => response.json())
      .then((data) => data);
    console.log(data.files);
    setCommitsData(data.files);
  };

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
          <HeaderFirst>
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

            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
              {data.repo.description}
            </p>
          </HeaderFirst>

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

        <Branchs>
          <p>These are the repo branches (click to see the commits):</p>
          {branchesData !== undefined &&
            branchesData.length > 0 &&
            branchesData.map((branch: APIBranch) => (
              <button
                className="deactive"
                key={branch.name}
                onClick={(e) => handleClick(e, branch.commit.url, branch.name)}
              >
                {branch.name}
              </button>
            ))}
        </Branchs>
        <Commits>
          {targetBranch.length > 0 && (
            <p>
              These are the branch{" "}
              <span style={{ fontWeight: "bold" }}>{`${targetBranch}`}</span>{" "}
              commits
            </p>
          )}
          <CommitsContainer>
            {commitsData.length > 0 &&
              commitsData.map((commit: APICommit) => (
                <CommitBox key={commit.id}>
                  <p style={{ fontWeight: "bold" }}>{commit.filename}</p>
                  <p>Additions: {commit.additions}</p>
                  <p>Changes: {commit.changes}</p>
                </CommitBox>
              ))}
          </CommitsContainer>
        </Commits>

        <LinkButton href={data.repo.html_url}>
          <GithubIcon />
          <span>View the repo on GitHub</span>
        </LinkButton>
      </Container>
      <Footer />
    </>
  );
};

export default Repo;
