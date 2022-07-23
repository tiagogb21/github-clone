import styled from "styled-components";

import { BsGithub } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--charade);
  padding: 11px 16px;
`;

export const GithubLogo = styled(BsGithub)`
  fill: var(--white);
  width: 32px;
  height: 32px;
  /* Para evitar que a logo perca sua dimensão: */
  flex-shrink: 0;

  cursor: point;
  &:hover {
    opacity: 0.8;
  }
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;

  input {
    background: var(--white);
    /* Para tirar a marca do input */
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;
  }

  /* Para causar o efeito de diminuição da barra */
  &:focus {
    width: 30%;
  }

  transition: width 0.2s ease-out, color 0.2s ease-out;
`;
