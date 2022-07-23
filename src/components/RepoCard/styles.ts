import styled, { css } from "styled-components";

import { AiOutlineFork } from "react-icons/ai";
import { RiBookMarkLine, RiStarLine } from "react-icons/ri";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid var(--iron);
  border-radius: 6px;
`;

export const TopSide = styled.div`
  > header {
    display: flex;
    align-items: center;

    > a {
      margin-left: 8px;
      font-size: 14px;
      font-weight: 600;
      color: var(--polo-blue);
      text-decoration: none;
    }

    &:focus,
    &:hover {
      text-decoration: underline;
    }
  }

  > p {
    margin: 8px 0 16px;
  }
`;

export const BotSide = styled.div``;

const iconCss = css`
  width: 16px;
  height: 16px;
  fill: var(--loblolly);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCss}
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCss}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCss}
`;
