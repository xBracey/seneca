import styled from "styled-components";
import { colours } from "theme/colours";

interface ISliderActive {
  optionIndex: number;
  optionLength: number;
}

interface ISliderOption {
  isActive: boolean;
}

const calculateSliderPosition = (props: ISliderActive) => {
  const percent = (100 / props.optionLength) * props.optionIndex;
  return `${percent}%`;
};

export const SliderContainer = styled.div`
  display: flex;
  padding: 32px;
`;

export const SliderBackground = styled.div`
  height: 80px;
  width: 100%;
  border: 2px solid ${colours.lightOrange};
  border-radius: 100px;
  position: relative;
  overflow: hidden;
`;

export const SliderActive = styled.div<ISliderActive>`
  position: absolute;
  height: 80px;
  width: calc(100% / ${(props) => props.optionLength});
  background-color: ${colours.lightOrange};
  left: ${calculateSliderPosition};
  border-radius: 100px;
  transition: all 0.5s;
  z-index: 2;
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
  color: ${(props) => (props.isActive ? colours.grey : colours.white)};
  font-size: 24px;
  cursor: pointer;
  transition: all 0.5s;
`;
