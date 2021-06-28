import styled, { css } from "styled-components";
import { colours } from "theme/colours";

interface ISliderActive {
  optionIndex: number;
  optionLength: number;
}

interface ISliderOption {
  isActive: boolean;
}

interface ISliderContainer {
  isOverflow: boolean;
}

const pickLightColour = (props: any) => {
  switch (props.theme.main) {
    case "blue":
      return colours.lightBlue;
    case "pink":
      return colours.lightPink;
    case "yellow":
      return colours.lightYellow;
    case "green":
      return colours.lightGreen;
    default:
      return colours.lightOrange;
  }
};

const pickTextColour = (props: any) => {
  switch (props.theme.main) {
    case "blue":
      return colours.blue;
    case "pink":
      return colours.pink;
    case "yellow":
      return colours.yellow;
    case "green":
      return colours.green;
    default:
      return colours.grey;
  }
};

const calculateSliderPosition = (props: ISliderActive) => {
  const percent = (100 / props.optionLength) * props.optionIndex;
  return `${percent}%`;
};

export const SliderBackground = styled.div`
  height: 80px;
  width: 100%;
  border: 2px solid ${pickLightColour};
  border-radius: 100px;
  position: relative;
  overflow: hidden;
`;

export const SliderActive = styled.div<ISliderActive>`
  position: absolute;
  height: 80px;
  width: calc(100% / ${(props) => props.optionLength});
  background-color: ${pickLightColour};
  left: ${calculateSliderPosition};
  border-radius: 100px;
  transition: all 0.5s;
  z-index: 2;
  border-radius: 2px solid;
`;

export const SliderOptions = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SliderOption = styled.div<ISliderOption>`
  flex: 1;
  text-align: center;
  color: ${(props) => (props.isActive ? pickTextColour(props) : colours.white)};
  font-size: 24px;
  cursor: pointer;
  transition: all 0.5s;
  overflow: auto;
  padding: 20px 10px;
`;

export const SliderContainer = styled.div<ISliderContainer>`
  display: flex;
  padding: 32px 0;

  ${(props) =>
    props.isOverflow
      ? css`
          ${SliderBackground}, ${SliderActive} {
            height: initial;
            min-height: 160px;
          }

          ${SliderOptions} {
            flex-direction: column;
          }

          ${SliderOption} {
            min-height: 80px;
          }
        `
      : null}
`;
