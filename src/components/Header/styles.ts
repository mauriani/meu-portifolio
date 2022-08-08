import styled from "styled-components";

import { Link } from "react-scroll";

export const Container = styled.header`
  background-color: var(--white);
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.25rem 3.125rem;

  img {
    width: 2.5rem;
  }

  nav {
    display: flex;
  }

  ul {
    list-style: none;
    display: flex;
  }

  a {
    text-decoration: none;
  }

  /* li {
    .active {
      text-decoration: none;
      color: var(--blue-700);
      text-align: center;
      font-size: 1rem;

      cursor: pointer;
      padding: 14px 16px;
    }
    .active:hover {
      background-color: var(--purple-700);
      color: var(--gray-100);
      transition: 0.2s;
    }
  } */

  li {
    margin: 0 15px;
  }

  li:first-child {
    margin-left: 0;
  }

  li:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      margin-bottom: 1rem;
    }

    a {
      padding: 0;
    }
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--blue-700);
  text-align: center;
  font-size: 1rem;

  cursor: pointer;
  padding: 14px 16px;

  :hover {
    background-color: var(--purple-700);
    color: var(--gray-100);
    transition: 0.2s;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;
