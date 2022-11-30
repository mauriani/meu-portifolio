import styled from "styled-components";

export const Card = styled.div`
  width: 30rem;
  height: 25rem;

  border-radius: 5px;
  margin-left: 1rem;

  background-color: var(--gray-900);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    padding: 1rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 3px;
    }
  }

  footer {
    position: absolute;
    background-color: var(--gray-850);
    padding: 2rem;

    bottom: 0.25rem;
    left: 0.25rem;
    right: 0.25rem;

    border-radius: 6px;
    transform: translateY(110%);
    opacity: 0;
    transition: all 0.2s ease-in-out;

    h1 {
      margin: 0 0 20px;
      padding: 0;
      font-size: 1rem;
      color: var(--gray-100);
    }

    p {
      font-size: 0.875rem;
      line-height: 1.75;
      color: var(--gray-100);
    }

    button {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px 0 0;
      padding: 10px 30px;
      background-color: var(--cyan-green-500);
      border: none;
      border-radius: 5px;
      color: var(--white);
      font-size: 0.875rem;

      &:hover {
        box-shadow: 0 0 0 2px var(--cyan-green-500);
        background-color: var(--cyan-green-500);
        opacity: 0.5;
        transition: 0.25s;
      }
    }
  }

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

    div {
      img {
        transform: scale(1.25);
      }
    }

    footer {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    /* div {
      img {
        width: 100%;
        height: 80%;
        object-fit: cover;
      }
    } */
  }
`;
