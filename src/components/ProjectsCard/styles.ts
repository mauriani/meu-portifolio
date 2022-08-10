import styled from "styled-components";

export const Card = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 380px;
  border-radius: 10px;
  position: relative;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;

  background-color: var(--gray-900);

  img {
    height: 100%;
    transition: 0.25s;
    object-fit: fill;
  }

  figcaption {
    position: absolute;
    bottom: -85%;
    left: 0;
    width: 100%;

    margin: 0;
    padding: 30px;
    background-color: var(--gray-850);
    box-shadow: 0 0 20px rgba(var(--gray-850), 0.4);
    color: var(--white);
    line-height: 1;
    transition: 0.25s;

    h2 {
      margin: 0 0 20px;
      padding: 0;
    }
    p {
      font-size: 14px;
      line-height: 1.75;
    }
    button {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px 0 0;
      padding: 10px 30px;
      background-color: #1abc9c;
      border: none;
      border-radius: 5px;
      color: var(--white);
      font-size: 0.875rem;
    }
  }

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

    img {
      transform: scale(1.25);
    }

    figcaption {
      bottom: 0;
    }
  }

  @media (max-width: 768px) {
    margin: 1rem 0rem;

    figure {
      margin: 1rem 0rem;
    }
  }
`;
