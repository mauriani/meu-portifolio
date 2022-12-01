import styled, { keyframes } from "styled-components";

const FadeInAnimation = keyframes`  
 0% {
    transform: translateY(10rem) rotateY(-30deg);
  }
  100% {
    transform: translateY(0) rotateY(0);
    opacity: 1;
  }
`;

const FadeImage = keyframes`
 0% {
    transform: scale(1.3);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }`;

export const ContainerDashboard = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;

  padding: 0 3rem;

  div {
    padding: 0 1rem;

    h1 {
      color: var(--gray-100);
      font-size: 2.5rem;
      font-weight: 400;

      animation: ${FadeInAnimation} 1s 0.5s forwards;

      span {
        font-weight: 600;
        background: -webkit-linear-gradient(var(--blue-300), var(--purple-700));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    p {
      font-size: 1.5rem;
      color: var(--gray-200);
      font-weight: 300;
      animation: ${FadeInAnimation} 1s 0.7s forwards;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    padding: 0;
  }
`;

export const PhotoContainer = styled.div`
  margin-top: 1rem;

  animation: ${FadeImage} 2s 0.7s forwards;

  img {
    height: 30rem;
    width: 30rem;
    border-radius: 50%;

    margin-top: 1.25px;
    margin-bottom: 1rem;

    margin-right: 1rem;
    object-fit: cover;

    transition: opacity 1s ease 2s;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    img {
      width: 100%;
      border-radius: 1rem;
      object-fit: cover;
    }
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    color: var(--gray-100);
    font-size: 2.5rem;
    font-weight: 300;
    border-bottom: solid 4.5px var(--purple-300);
    margin: 0.5rem 0;
  }
`;

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--gray-800);

  padding: 1rem 3rem;

  div {
    display: flex;
    flex-direction: row;

    img {
      height: 30rem;
      margin-left: 3rem;
      border-radius: 4px;
    }

    p {
      font-size: 1rem;
      font-weight: 300;
      line-height: 2rem;

      text-align: left;
      margin-left: 3rem;
      margin-right: 10rem;
      color: var(--gray-100);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    padding: 1rem;
    > div {
    }

    div {
      flex-direction: column;

      img {
        width: 100%;

        border-radius: 1rem;
        object-fit: cover;
        margin-left: 0;
      }

      p {
        margin-left: 0;
        margin-right: 0;
        margin-top: 2rem;
      }
    }
  }
`;

export const ContainerSkills = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem 3rem;
`;

export const ContentSkills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  height: 100%;
  width: 100%;

  padding: 1rem 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const ContainerProjects = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--gray-800);

  padding: 1rem 3rem;
`;

export const ContentProjects = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 30rem;

  margin: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const FooterProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 2rem 0;

  h1 {
    font-size: 1rem;
    font-weight: 300;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    border: 0;
    padding: 3px;

    border-bottom-style: solid;
    border-bottom-width: thin;
    border-color: transparent;

    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--blue-300);

    width: auto;
    height: auto;
    cursor: pointer;

    :hover {
      border-color: var(--blue-300);
      border-bottom-style: solid;
      border-bottom-width: thin;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 1rem;
    button {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-right: 1rem;
      width: 8.5rem;
      height: 4rem;

      border-radius: 10px;

      border: 0;

      background-color: var(--gray-850);

      color: var(--gray-100);

      :hover {
        opacity: 0.5;
        transition: 0.2s;
      }
      svg {
        margin-right: 0.65rem;
        color: var(--blue-300);
      }
    }
  }

  footer {
    img {
      width: 11rem;
      height: 9rem;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;

    padding: 1rem;

    div {
      display: flex;
      flex-direction: column;

      button {
        margin-bottom: 0.75rem;
      }
    }
  }
`;
