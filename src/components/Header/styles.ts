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

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 30%;

  input {
    /* Para tirar a marca do input */
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 70%;
    border: 1px solid var(--iron);
    background: inherit;
  }

  /* Para causar o efeito de diminuição da barra */
  input:focus {
    width: 100%;
    background: white;
  }

  transition: width 0.2s ease-out, color 0.2s ease-out;
`;
