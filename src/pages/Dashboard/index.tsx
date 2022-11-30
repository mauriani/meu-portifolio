import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import {
  ContainerDashboard,
  PhotoContainer,
  ContainerTitle,
  ContainerAbout,
  ContainerSkills,
  ContentSkills,
  ContainerProjects,
  ContentProjects,
  FooterProjects,
  ContainerContact,
} from "./styles";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";

import person from "../../assets/mauriani.png";
import avatar from "../../assets/avatar.png";
import gatin from "../../assets/gatin-rocket.png";

import { MyProjects } from "../../components/MyProjects";

export function Dashboard() {
  const handleOpenLink = (url: string) => {
    window.open(url);
  };
  return (
    <main>
      <Header />
      <section id="dashboard">
        <ContainerDashboard>
          <div>
            <h1>
              😉 Ei! Eu sou <br />
              <span>Mauriani Maciel</span>
            </h1>
            <p>Desenvolvedora Front-End</p>
          </div>
          <PhotoContainer>
            <img src={person} alt="foto de mauriani" object-fit="contain" />
          </PhotoContainer>
        </ContainerDashboard>
      </section>

      <section id="about">
        <ContainerAbout>
          <ContainerTitle>
            <h1>Sobre mim</h1>
          </ContainerTitle>

          <div>
            <div>
              <img src={avatar} alt="foto de mauriani" />
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
        </ContainerAbout>
      </section>

      <section id="skills">
        <ContainerSkills>
          <ContainerTitle>
            <h1>Habilidades</h1>
          </ContainerTitle>

          <ContentSkills>
            <Card />
          </ContentSkills>
        </ContainerSkills>
      </section>

      <section id="projects">
        <ContainerProjects>
          <ContainerTitle>
            <h1>Projetos</h1>
          </ContainerTitle>

          <ContentProjects>
            <MyProjects />
          </ContentProjects>

          <FooterProjects>
            <h1>
              Deseja visualizar mais projetos ? Acesse meu{" "}
              <a href="https://github.com/mauriani">GitHub</a>
            </h1>
          </FooterProjects>
        </ContainerProjects>
      </section>

      <section id="contact">
        <ContainerTitle>
          <h1>Contato</h1>
        </ContainerTitle>
        <ContainerContact>
          <div>
            <button
              onClick={() =>
                handleOpenLink(`https://www.linkedin.com/in/maurianimaciel/`)
              }
            >
              <BsLinkedin size={25} />
              Linkedin
            </button>

            <button
              onClick={() =>
                handleOpenLink(`https://www.instagram.com/maurianimaciel/`)
              }
            >
              <BsInstagram size={25} />
              Instagram
            </button>

            <button
              onClick={() => handleOpenLink(`https://github.com/mauriani`)}
            >
              <BsGithub size={25} />
              GitHub
            </button>
          </div>
          <footer>
            <img src={gatin} alt="" />
          </footer>
        </ContainerContact>
      </section>
    </main>
  );
}
