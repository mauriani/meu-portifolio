import { Container, NavLink } from "./styles";

import logo from "../../assets/rocket.svg";

export function Header() {
  return (
    <Container>
      <img src={logo} alt="logo do projeto" />

      <nav>
        <ul>
          <li tabIndex={1}>
            <NavLink
              activeClass="active"
              smooth={true}
              spy={true}
              to="dashboard"
              className="active"
            >
              Home
            </NavLink>
          </li>

          <li tabIndex={2}>
            <NavLink
              activeClass="active"
              smooth={true}
              spy={true}
              to="about"
              className="active"
            >
              Sobre
            </NavLink>
          </li>

          <li tabIndex={3}>
            <NavLink
              activeClass="active"
              smooth={true}
              spy={true}
              to="skills"
              className="active"
            >
              Habilidades
            </NavLink>
          </li>

          <li tabIndex={4}>
            <NavLink
              activeClass="active"
              smooth={true}
              to="projects"
              spy={true}
              className="active"
            >
              Projetos
            </NavLink>
          </li>

          <li tabIndex={5}>
            <NavLink
              activeClass="active"
              smooth={true}
              to="contact"
              spy={true}
              className="active"
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
