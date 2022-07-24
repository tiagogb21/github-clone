import styled, { css } from "styled-components";
import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
} from "react-icons/ri";

export const Container = styled.div``;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 24px;

    > h1 {
      font-size: 26px;
      line-height: 1.25;
      color: var(--outer-space);
      font-weight: 600;
    }

    > h2 {
      font-size: 20px;
      color: var(--loblolly);
      font-weight: 300;
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  > div {
    margin-left: 0;
    margin-top: 16px;
  }
`;

export const Avatar = styled.img`
  width: 16%;
  min-width: 60px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const Row = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin: 20px 0;

  li > {
    display: flex;
    align-items: center;

    > span {
      font-size: 14px;
      color: var(--loblolly);
    }
    * {
      margin: 5px;
    }
  }
`;

export const Column = styled.ul`
  li {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  li + li {
    margin-top: 10px;
  }
  span {
    margin-left: 5px;
    /* Para evitar que o texto quebre: */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const iconCss = css`
  width: 16px;
  height: 16px;
  /* Cor dos icones */
  fill: var(--iron);
`;

export const PeopleIcon = styled(RiGroupLine)`
  ${iconCss}
`;

export const CompanyIcon = styled(RiBuilding4Line)`
  ${iconCss}
`;

export const LocationIcon = styled(RiMapPin2Line)`
  ${iconCss}
`;

export const EmailIcon = styled(RiMailLine)`
  ${iconCss}
`;

export const BlogIcon = styled(RiLinksLine)`
  ${iconCss}
`;
