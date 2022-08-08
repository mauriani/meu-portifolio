import { Container } from "./styles";

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
              <Link
                activeClass="active"
                smooth
                spy
                to="dashboard"
                className="active"
              >
                Home
              </Link>
            </a>
          </li>

          <li>
            <a href="">
              <Link
                activeClass="active"
                smooth
                spy
                to="about"
                className="active"
              >
                Sobre
              </Link>
            </a>
          </li>

          <li>
            <a href="">
              <Link
                activeClass="active"
                smooth
                spy
                to="skills"
                className="active"
              >
                Habilidades
              </Link>
            </a>
          </li>

          <li>
            <a href="">
              <Link
                activeClass="active"
                smooth
                spy
                to="contact"
                className="active"
              >
                Contato
              </Link>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
