import { Slider } from "components/Slider";
import React, { useEffect, useState } from "react";
import _ from "lodash";

export interface IQuestion {
  answers: string[];
  answer: string;
}

interface IQuestions {
  questions: IQuestion[];
  onChange: (correctNumber: number) => void;
  isCorrect: boolean;
}

export const Questions = ({ questions, onChange, isCorrect }: IQuestions) => {
  const [userAnswers, setUserAnswers] = useState(
    questions.map((question) =>
      question.answers.find((answer) => answer !== question.answer)
    )
  );

  useEffect(() => {
    onChange(
      _.intersection(
        userAnswers,
        questions.map((question) => question.answer)
      ).length
    );
  }, [userAnswers]);

  const setAnswer = (answer: string, index: number) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[index] = answer;
    setUserAnswers(newUserAnswers);
  };

  const questionsComponent = questions.map((question, index) => (
    <Slider
      key={index}
      answer={userAnswers[index]}
      setAnswer={(answer) => {
        setAnswer(answer, index);
      }}
      options={question.answers}
      isDisabled={isCorrect}
    />
  ));

  return <div>{questionsComponent}</div>;
};
