import { Questions } from "components/Questions";
import { randomiseQuestions } from "lib/randomiseQuestions";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  QuestionHeader,
  QuestionDescription,
  TestPageContainer,
  TestPageOuterContainer,
} from "./index.styled";

const questions = [
  {
    answers: ["Cell wall", "Ribosomes"],
    answer: "Cell wall",
  },

  {
    answers: ["Cytoplasm", "Chlorapast", "Neither"],
    answer: "Cytoplasm",
  },
  {
    answers: ["Partially permeable membrane", "Impermeable  membrane"],
    answer: "Partially permeable membrane",
  },
  {
    answers: ["Cellulose", "Mitochondria"],
    answer: "Mitochondria",
  },
];

const themes = ["orange", "yellow", "pink", "blue", "green"];

const Home = () => {
  const [testQuestions, setTestQuestions] = useState([]);

  useEffect(() => {
    setTestQuestions(randomiseQuestions(questions));
  }, []);

  const [questionsCorrect, setQuestionsCorrect] = useState(0);

  const isCorrect = questionsCorrect === questions.length;

  const questionsComponent = testQuestions.length ? (
    <Questions
      questions={testQuestions}
      onChange={setQuestionsCorrect}
      isCorrect={isCorrect}
    />
  ) : null;

  return (
    <ThemeProvider
      theme={{
        main: themes[questionsCorrect],
      }}
    >
      <TestPageOuterContainer>
        <TestPageContainer>
          <QuestionHeader>An animal cell contains:</QuestionHeader>
          {questionsComponent}
          <QuestionDescription>
            {isCorrect ? "The answer is correct" : "The answer is incorrect "}
          </QuestionDescription>
        </TestPageContainer>
      </TestPageOuterContainer>
    </ThemeProvider>
  );
};

export default Home;
