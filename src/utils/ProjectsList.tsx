import toDo from "../assets/todo.png";
import rentx from "../assets/rentx.png";
import medic from "../assets/medic.png";
import sushi from "../assets/sushi.png";

export const ProjectsList = [
  {
    id: 1,
    img: sushi,
    descriptionInformation: `Esse é um projeto web desenvolvido na disciplina 
    de desenvolvimento web da faculdade ucl.Onde foi usado html, css e 
    javascript para uma página de apresentação.`,
    url: "https://sushiyouagain.netlify.app/",
  },

  {
    id: 2,
    img: toDo,
    descriptionInformation: `ToDoList desenvolvido durante o primeiro modulo 
    do trilha de ReactJs da Rocketseat 2022.`,
    url: "https://heroic-quokka-3c55ef.netlify.app/",
  },

  {
    id: 3,
    img: rentx,
    descriptionInformation: `Esse projeto foi desenvolvido durante o curso de 
    react native ofertado pela rocktseat. O aplicativo possibilita que o
    usuário realize o aluguel de um veículo durante um determinado
    tempo.`,
    url: "https://github.com/mauriani/RentX",
  },

  {
    id: 4,
    img: medic,
    descriptionInformation: `Esse projeto foi desenvolvido durante a disciplina 
    de PI 2 (Projeto integrador). A ideia é que o enfermeiro possa visualizar 
    ficha e horário de medicação dos pacientes através do App.`,
    url: "https://github.com/mauriani/PI-2",
  },
];
