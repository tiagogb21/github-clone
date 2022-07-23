import React from "react";

import {
  Container,
  Flex,
  Avatar,
  Row,
  Column,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
  BlogIcon,
  PeopleIcon,
} from "./styles";

interface Props {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
}

const ProfileData: React.FC<Props> = ({
  username,
  name,
  avatarUrl,
  followers,
  following,
  company,
  location,
  email,
  blog,
}) => {
  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} alt={username} />
        <article>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </article>
      </Flex>
      <Row>
        <li>
          <PeopleIcon />
          <span>{followers}</span>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <span>{following}</span>
          <span>following</span>
        </li>
      </Row>
      <Column>
        {/* Verificando se company existe */}
        {company && (
          <li>
            <CompanyIcon />
            <span>{company}</span>
          </li>
        )}
        {/* Verificando se company existe */}
        {location && (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        )}
        {/* Verificando se company existe */}
        {email && (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        )}
        {/* Verificando se company existe */}
        {blog && (
          <li>
            <BlogIcon />
            <span>{blog}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default ProfileData;
