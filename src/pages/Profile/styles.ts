import { RiBookMarkLine } from "react-icons/ri";
import styled from "styled-components";

export const Container = styled.main`
  padding: 16px 24px;
  overflow: hidden;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  padding: 0 16px;

  h1 {
    font-weight: bolder;
  }

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const RightSide = styled.div`
  padding: 0 16px;

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const Repos = styled.div`
  margin-top: 16px;

  > h2 {
    font-size: 16px;
  }
  > article {
    margin-top: 8px;

    display: grid;
    grid-gap: 16px;

    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: minmax(min-content, max-content);
    }
  }
`;

export const CalendarHeading = styled.span`
  font-size: 16px;
  margin: 36px 0 9px;
  display: inline-flex;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const Tab = styled.div`
  background: var(--oslo-gray);
  .content {
    display: flex;
    align-items: center;
    width: min-content;
    padding: 14px 16px;
    border-bottom: 2px solid var(--apricot);
    .label {
      font-size: 14px;
      padding: 0 7px;
      font-weight: 600;
    }
    .number {
      font-size: 12px;
      background: var(--danube);
      padding: 2px 6px;
      border-radius: 24px;
    }
  }
  .line {
    display: flex;
    width: 200vw;
    border-bottom: 1px solid var(--nepal);
    margin-left: -50vw;
  }
  &.mobile {
    margin-top: 16px;
    .content {
      margin: 0 auto;
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
  &.desktop {
    display: none;
    @media (min-width: 768px) {
      display: unset;
      .wrapper {
        display: flex;
        margin: 0 auto;
        max-width: 1280px;
      }
      .offset {
        width: 25%;
        margin-right: 20px;
      }
    }
  }
`;
