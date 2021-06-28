import styled from "styled-components";
import { colours } from "theme/colours";

const pickBackgroundColour = (props: any) => {
  switch (props.theme.main) {
    case "blue":
      return colours.blueBackground;
    case "pink":
      return colours.pinkBackground;
    case "yellow":
      return colours.yellowBackground;
    case "green":
      return colours.greenBackground;
    default:
      return colours.orangeBackground;
  }
};

export const TestPageOuterContainer = styled.div`
  background: ${pickBackgroundColour};
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
`;

export const TestPageContainer = styled.div`
  width: calc(100% - 32px);
  max-width: 1000px;
  padding: 32px 16px;
`;

export const QuestionHeader = styled.h1`
  color: ${colours.white};
  font-weight: 500;
  text-align: center;
  margin: 40px 0;
`;

export const QuestionDescription = styled.p`
  color: ${colours.white};
  text-align: center;
  font-size: 20px;
  margin: 25px 0;
`;
