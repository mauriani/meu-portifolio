import { Card } from "./styles";

import { ProjectsList } from "../../utils/ProjectsList";
import { Fragment } from "react";

export function ProjectsCard() {
  const handleClick = (url: string) => {
    window.open(url);
  };

  return (
    <Fragment>
      {ProjectsList.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.img} alt="" />

            <figcaption>
              <h2>Saiba mais</h2>
              <p>{item.descriptionInformation}</p>
              <button onClick={() => handleClick(item.url)}>
                Mais informações
              </button>
            </figcaption>
          </Card>
        );
      })}
    </Fragment>
  );
}
