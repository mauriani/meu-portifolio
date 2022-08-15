import { Fragment } from "react";

import { SkillList } from "../../utils/SkillsList";

import { CardSkill, IconContainer, TextContainer } from "./styles";

export function Card() {
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
