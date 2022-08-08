import { Container, NavLink } from "./styles";

import { Link } from "react-scroll";

import logo from "../../assets/rocket.svg";

export function Header() {
  return (
    <Container>
      <img src={logo} alt="" />

      <nav>
        <ul>
          <li>
            <a href="">
              <NavLink
                activeClass="active"
                smooth={true}
                spy={true}
                to="dashboard"
                className="active"
              >
                Home
              </NavLink>
            </a>
          </li>

          <li>
            <a href="">
              <NavLink
                activeClass="active"
                smooth={true}
                spy={true}
                to="about"
                className="active"
              >
                Sobre
              </NavLink>
            </a>
          </li>

          <li>
            <a href="">
              <NavLink
                activeClass="active"
                smooth={true}
                spy={true}
                to="skills"
                className="active"
              >
                Habilidades
              </NavLink>
            </a>
          </li>

          <li>
            <a href="">
              <NavLink
                activeClass="active"
                smooth={true}
                to="contact"
                spy={true}
                className="active"
              >
                Contato
              </NavLink>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
