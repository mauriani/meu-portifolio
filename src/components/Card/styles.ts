import styled from "styled-components";

export interface IconProps {
  color: string;
}

export const CardSkill = styled.div<IconProps>`
  height: 8rem;
  width: 28rem;

  display: flex;
  flex-direction: row;

  align-items: center;

  padding: 3px;

  background: var(--gray-900);
  border-radius: 10px;

  &:hover {
    transition: all ease-in-out 0.3s;
    border: 8px solid;
    border-image: linear-gradient(45deg, var(--purple-300), var(--yellow-300)) 1;
  }

  &:hover svg {
    color: ${(props) => props.color};
  }

  margin-top: 1rem;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;

  height: 100%;

  width: 20%;

  padding: 8px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  width: 80%;

  h1 {
    font-size: 1.4rem;
    font-weight: 400;

    color: var(--gray-100);
  }

  p {
    font-weight: 300;
    font-size: 0.8rem;
    color: var(--gray-300);

    flex-shrink: 1;
  }
`;
