import React, { useContext, useEffect } from "react";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MyContext from "../../MyContext";
import { useNavigate } from "react-router-dom";
import RandomCalendar from "../../components/RandomCalendar";
import { APIRepo } from "../../interfaces";

import { authenticate } from "../../utils/authentication";

const Profile: React.FC = () => {
  const { userData, setUserData, reposData, setReposData } =
    useContext(MyContext);

  const navigate = useNavigate();

  useEffect(() => {
    const verifyUserData = () => {
      const getDataUserFromLocal = localStorage.getItem("userdata");
      const getDataRepoFromLocal = localStorage.getItem("reposdata");
      if (userData.length === 0 && !getDataUserFromLocal) navigate("/");
      if (userData.length === 0) {
        getDataUserFromLocal && setUserData(JSON.parse(getDataUserFromLocal));
        getDataRepoFromLocal && setReposData(JSON.parse(getDataRepoFromLocal));
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
            {userData && (
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
            )}
          </LeftSide>
          <RightSide>
            <Repos>
              <h2>Random repos</h2>
              <article>
                {reposData.length > 0 &&
                  reposData
                    .slice(0, 6)
                    .map((n: APIRepo) => (
                      <RepoCard
                        key={n.id}
                        username={n.owner.login}
                        reponame={n.name}
                        description={n.description}
                        language={n.language}
                        stars={n.stargazers_count}
                        forks={n.forks}
                      />
                    ))}
              </article>
            </Repos>
            <CalendarHeading>
              Random calendar (do not represent actual data)
            </CalendarHeading>
            <RandomCalendar />
          </RightSide>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
