import { Slider } from "components/Slider";
import React, { useEffect, useState } from "react";
import { QuestionsContainer } from "./Questions.styled";
import _ from "lodash";

interface IQuestion {
  answers: string[];
  answer: string;
}

interface IQuestions {
  questions: IQuestion[];
  onCorrect: () => void;
}

export const Questions = ({ questions, onCorrect }: IQuestions) => {
  const [userAnswers, setUserAnswers] = useState(
    questions.map((question) => question.answers[0])
  );

  useEffect(() => {
    if (
      _.isEqual(
        userAnswers,
        questions.map((question) => question.answer)
      )
    ) {
      onCorrect();
    }
  }, [userAnswers]);

  const setAnswer = (answer: string, index: number) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[index] = answer;
    setUserAnswers(newUserAnswers);
  };

  const questionsComponent = questions.map((question, index) => (
    <Slider
      answer={userAnswers[index]}
      setAnswer={(answer) => {
        setAnswer(answer, index);
      }}
      options={question.answers}
    />
  ));

  return <QuestionsContainer>{questionsComponent}</QuestionsContainer>;
};
