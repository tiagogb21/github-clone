import React from "react";

import { Container, Main, LeftSide, RightSide } from "./styles";

import ProfileData from "../../components/ProfileData";

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            // Username
            userName={"username"}
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
        <RightSide></RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
