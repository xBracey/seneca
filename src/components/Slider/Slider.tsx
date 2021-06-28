import React from "react";
import {
  SliderContainer,
  SliderBackground,
  SliderActive,
  SliderOption,
  SliderOptions,
} from "./Slider.styled";

export interface ISlider {
  answer: string;
  setAnswer: (answer: string) => void;
  options: string[];
}

export const Slider = ({ answer, setAnswer, options }: ISlider) => {
  const optionsComponent = options.map((option, optionIndex) => (
    <SliderOption
      key={optionIndex}
      onClick={() => setAnswer(option)}
      isActive={answer === option}
    >
      {option}
    </SliderOption>
  ));

  const optionIndex = options.findIndex((option) => option === answer);

  return (
    <SliderContainer>
      <SliderBackground>
        <SliderActive optionIndex={optionIndex} optionLength={options.length} />
        <SliderOptions>{optionsComponent}</SliderOptions>
      </SliderBackground>
    </SliderContainer>
  );
};
