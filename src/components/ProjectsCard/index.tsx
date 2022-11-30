import { Fragment } from "react";
import { Card } from "./styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { projectsList } from "../../utils/ProjectsList";

export function ProjectsCard() {
  const handleClick = (url: string) => {
    window.open(url);
  };

  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 1,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
    },
  });

  return (
    <Fragment>
      <div ref={ref} className="keen-slider" style={{ paddingLeft: 16 }}>
        {projectsList.map((item) => {
          return (
            <div className={item.id} key={item.id}>
              <Card>
                <img src={item.img} alt="" />

                <figcaption>
                  <h2>Saiba mais</h2>
                  <p>{item.descriptionInformation}</p>
                  <button onClick={() => handleClick(item.url)}>
                    Mais informações
                  </button>
                </figcaption>
              </Card>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
