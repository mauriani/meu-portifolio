import {
  Container,
  PhotoContainer,
  About,
  ContainerSkills,
  ContentSkills,
} from "./styles";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";

import person from "../../assets/mauriani.png";
import avatar from "../../assets/avatar.png";

export function Dashboard() {
  return (
    <main>
      <Header />
      <section id="dashboard">
        <Container>
          <div>
            <h1>Desenvolvedora Front-End</h1>
            <p>Mauriani Maciel Lima</p>
          </div>
          <PhotoContainer>
            <img src={person} alt="" object-fit="contain" />
          </PhotoContainer>
        </Container>
      </section>

      <section id="about">
        <About>
          <div>
            <h1>Sobre mim</h1>
          </div>

          <div>
            <div>
              <img src={avatar} alt="" />
            </div>

            <p>
              Olá, meu nome é Mauriani Maciel Lima, tenho 26 anos e estou
              cursando Sistemas de informação na UCL (Universidade Centro
              Leste). Atualmente sou desenvolvedora mobile é a stack que uso é o
              React Native. Meu trabalho no caso é focado em um aplicativo de
              gestão escolar, onde o aluno pode assistir aulas e monitorar seu
              rendimento escolar. <br />
              Sou extremamente apaixonada pelo que faço. Minha paixão por
              técnologia iniciou quando realmente comecei a desenvolver, anos
              atrás me formei em técnica informática mas não sentia interesse,
              hoje isso é bastante diferente.
            </p>
          </div>
        </About>
      </section>

      <section id="skills">
        <ContainerSkills>
          <div>
            <h1>Habilidades</h1>
          </div>
        </ContainerSkills>

        <ContentSkills>
          <Card />
        </ContentSkills>
      </section>

      <section id="contact"></section>
    </main>
  );
}
