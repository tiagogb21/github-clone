import React from "react";
import { repoCards, languages } from "../../utils/data";

import { Container, Main, LeftSide, RightSide, Repos } from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Profile: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Main>
          <LeftSide>
            <ProfileData
              // Username
              username={"username"}
              // Full Name
              name={"name"}
              // Avatar
              avatarUrl={"avatar"}
              // Followers
              followers={0}
              // Following
              following={0}
              // Company
              company={"company"}
              // Location
              location={"location"}
              // email
              email={"email"}
              // Blog
              blog={"null"}
            />
          </LeftSide>
          <RightSide>
            <Repos>
              <h2>Random repos</h2>
              <article>
                {repoCards.map((n) => (
                  <RepoCard
                    key={n}
                    username={""}
                    reponame={""}
                    description={""}
                    language={languages[n % 5]}
                    stars={Math.round(Math.random() * 10)}
                    forks={Math.round(Math.random() * 100)}
                  />
                ))}
              </article>
            </Repos>
          </RightSide>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
