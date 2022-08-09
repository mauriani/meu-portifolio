import { Fragment } from "react";

import { SkillList } from "../../utils/skillsList";

import { CardSkill, IconContainer, TextContainer } from "./styles";

export function Card() {
  console.log(SkillList);

  return (
    <Fragment>
      {SkillList.map((skill) => {
        return (
          <CardSkill color={skill.color} key={skill.id}>
            <IconContainer>{skill.icon}</IconContainer>

            <TextContainer>
              <h1>{skill.titleTec}</h1>
              <p>{skill.description}</p>
            </TextContainer>
          </CardSkill>
        );
      })}
    </Fragment>
  );
}
