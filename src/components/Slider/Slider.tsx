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
  isDisabled: boolean;
}

export const Slider = ({ answer, setAnswer, options, isDisabled }: ISlider) => {
  const optionsComponent = options.map((option, optionIndex) => (
    <SliderOption
      key={optionIndex}
      onClick={() => {
        if (!isDisabled) {
          setAnswer(option);
        }
      }}
      isActive={answer === option}
    >
      {option}
    </SliderOption>
  ));

  const optionIndex = options.findIndex((option) => option === answer);

  return (
    <SliderContainer>
      <SliderBackground answerLength={options.length}>
        <SliderActive optionIndex={optionIndex} optionLength={options.length} />
        <SliderOptions>{optionsComponent}</SliderOptions>
      </SliderBackground>
    </SliderContainer>
  );
};
