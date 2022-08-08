import { Fragment } from "react";

import { FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";

import { CardSkill, IconContainer, TextContainer } from "./styles";

export function Card() {
  return (
    <Fragment>
      <CardSkill color={"#2596be"}>
        <IconContainer>
          <FaReact size={50} />
        </IconContainer>

        <TextContainer>
          <h1>React Native</h1>
          <p>
            O React Native é um Framework para desenvolvimento de aplicativos
            móveis multiplataforma.
          </p>
        </TextContainer>
      </CardSkill>

      <CardSkill color={"#e4a126"}>
        <IconContainer>
          <SiJavascript size={50} />
        </IconContainer>

        <TextContainer>
          <h1>Javascript</h1>
          <p>
            JavaScript é uma linguagem de programação que permite a você
            implementar itens complexos em páginas web.
          </p>
        </TextContainer>
      </CardSkill>

      <CardSkill color={"#db738f"}>
        <IconContainer>
          <SiStyledcomponents size={50} />
        </IconContainer>

        <TextContainer>
          <h1>Styled-Components</h1>
          <p>
            É uma biblioteca usada em React e React native que permite que você
            use estilos ao nível de compoente.
          </p>
        </TextContainer>
      </CardSkill>

      <CardSkill color={"#ffcc21"}>
        <IconContainer>
          <SiFirebase size={50} />
        </IconContainer>

        <TextContainer>
          <h1>Firebase</h1>
          <p>
            O Firebase é a plataforma de desenvolvimento de aplicativos móveis
            do Google que ajuda você a criar, melhorar e expandir seu
            aplicativo.
          </p>
        </TextContainer>
      </CardSkill>

      <CardSkill color={"#2596be"}>
        <IconContainer>
          <SiReact size={50} />
        </IconContainer>

        <TextContainer>
          <h1>ReactJs</h1>
          <p>o React Native é um Framework para desenvolvimento web.</p>
        </TextContainer>
      </CardSkill>

      <CardSkill color={"#0078cf"}>
        <IconContainer>
          <SiTypescript size={50} />
        </IconContainer>

        <TextContainer>
          <h1>Typescript</h1>
          <p>
            TypeScript, um superset da linguagem JavaScript criado pela
            Microsoft para permitir a escrita de scripts com a utilização de
            tipagem estática.
          </p>
        </TextContainer>
      </CardSkill>

      <CardSkill color={"#e44d26"}>
        <IconContainer>
          <SiHtml5 size={50} />
        </IconContainer>

        <TextContainer>
          <h1>HTML</h1>
          <p>
            HTML (Linguagem de Marcação de Hipertexto) é o código que você usa
            para estruturar uma página web e seu conteúdo.
          </p>
        </TextContainer>
      </CardSkill>

      <CardSkill color={"#1572b6"}>
        <IconContainer>
          <SiCss3 size={50} />
        </IconContainer>

        <TextContainer>
          <h1>CSS</h1>
          <p>
            CSS é chamado de linguagem Cascading Style Sheet e é usado para
            estilizar elementos escritos em uma linguagem de marcação como HTML.
          </p>
        </TextContainer>
      </CardSkill>

      <CardSkill color={"#f05033"}>
        <IconContainer>
          <SiGithub size={50} />
        </IconContainer>

        <TextContainer>
          <h1>GIT</h1>
          <p>
            Git é o sistema de controle de versão open source mais usado no
            mundo atualmente! Ele é usado para controlar o histórico de
            alterações de arquivos.
          </p>
        </TextContainer>
      </CardSkill>
    </Fragment>
  );
}
