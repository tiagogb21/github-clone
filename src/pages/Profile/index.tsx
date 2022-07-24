import React, { useContext, useEffect, useState } from "react";
import { repoCards, languages } from "../../utils/data";

import { Container, Main, LeftSide, RightSide, Repos } from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MyContext from "../../MyContext";
import { useNavigate } from "react-router-dom";

// interface Data {
//   user?: APIUser;
//   repos?: APIRepo[];
//   error?: string;
// }

const Profile: React.FC = () => {
  const { userData, setUserData } = useContext(MyContext);

  const navigate = useNavigate();

  if (!userData) navigate("/");

  useEffect(() => {
    const verifyUserData = () => {
      if (!userData) {
        const teste = localStorage.getItem("userdata");
        return teste && setUserData(JSON.parse(teste));
      }
    };
    verifyUserData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Main>
          <LeftSide>
            <ProfileData
              // Username
              username={userData.login}
              // Full Name
              name={userData.name}
              // Avatar
              avatarUrl={userData.avatar_url}
              // Followers
              followers={userData.followers}
              // Following
              following={userData.following}
              // Company
              company={userData.company}
              // Location
              location={userData.location}
              // email
              email={userData.email}
              // Blog
              blog={userData.blog}
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
