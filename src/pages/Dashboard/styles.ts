import styled, { keyframes } from "styled-components";
import imageBackground from "../../assets/background.png";

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

export const Container = styled.main`
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
      font-weight: 300;

      animation: ${FadeInAnimation} 1s 0.5s forwards;
    }

    p {
      font-size: 1.5rem;
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
    height: 34.375rem;
    width: 34.375rem;
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

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: var(--gray-800);

  padding: 3rem;

  > div {
    display: flex;
    justify-content: center;

    h1 {
      color: var(--gray-100);
      font-size: 2.5rem;
      font-weight: 300;
      margin-bottom: 1rem;
      border-bottom: solid 4.5px var(--blue-300);
      margin-bottom: 2rem;
    }
  }

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
  align-items: center;

  width: 100%;
  height: auto;

  > div {
    display: flex;

    > h1 {
      color: var(--gray-100);
      font-size: 2.5rem;
      font-weight: 300;
      margin-top: 1rem;
      margin-bottom: 8px;
      border-bottom: solid 4.5px var(--blue-300);
    }
  }
`;

export const ContentSkills = styled.div`
  display: flex;
  justify-content: center;
`;

export const Skills = styled.div`
  max-width: 75rem;
  /* espaçamento para o conteudo n]ao ficar colodo*/

  margin: 2rem auto;
  /* espaçamento para o conteudo n]ao ficar colodo*/
  padding: 0 2rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 1rem;
  align-items: flex-start;
`;
