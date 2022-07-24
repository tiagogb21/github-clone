import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;

  padding: 16px 20px 0 10px;
  border: 1px solid var(--jet-stream);
  border-radius: 6px;

  .wrapper {
    .scale-0 {
      fill: var(--jagged-ice);
    }
    .scale-1 {
      fill: var(--jet-stream);
    }
    .scale-2 {
      fill: var(--summer-green2);
    }
    .scale-3 {
      fill: var(--summer-green);
    }
    .scale-4 {
      fill: var(--cyprus);
    }

    width: 893px;
  }

  span {
    font-size: 11px;
    color: var(--outer-space);
    margin-top: -25px;
    margin-left: 33px;
    padding-bottom: 16px;

    align-self: flex-start;
  }

  text {
    font-size: 11px;
  }
`;
