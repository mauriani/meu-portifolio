import { Fragment } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { projectsList } from "../../utils/ProjectsList";

import { Card } from "./styles";

export function MyProjects() {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 768px)": {
        loop: true,
        mode: "free",
        slides: {
          perView: 1.5,
          spacing: 15,
        },
      },
      "(min-width: 1280px)": {
        loop: true,
        mode: "free",
        slides: { perView: 2.5, spacing: 15 },
      },
    },
  });

  const handleClick = (url: string) => {
    window.open(url);
  };

  return (
    <div ref={sliderRef} className={"keen-slider"}>
      <>
        {projectsList.map((item) => {
          return (
            <Card className="keen-slider__slide" key={item.id}>
              <div>
                <img src={item.img} alt="" />
              </div>

              <footer>
                <h1>Saiba mais</h1>
                <p>{item.descriptionInformation}</p>

                <button onClick={() => handleClick(item.url)}>
                  Mais informações
                </button>
              </footer>
            </Card>
          );
        })}
      </>
    </div>
  );
}
