import styled from "styled-components";

import { Link } from "react-scroll";

export const Container = styled.header`
  background-color: var(--gray-850);
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.25rem 3.125rem;

  img {
    height: 4rem;
    width: 10rem;
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

  li {
    margin: 0 0.938rem;
  }

  li:first-child {
    margin-left: 0;
  }

  li:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    li {
      margin: 0 0.688rem;
    }

    img {
      margin-bottom: 1rem;
    }
  }
`;

export const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: var(--white);
  text-align: center;
  font-size: 1rem;

  cursor: pointer;
  padding: 14px 16px;

  :hover {
    background-color: var(--purple-300);
    color: var(--gray-100);
    transition: 0.2s;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;
