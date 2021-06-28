import { Questions } from "components/Questions";
import React, { useState } from "react";
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
  const [questionsCorrect, setQuestionsCorrect] = useState(0);

  const isCorrect = questionsCorrect === questions.length;

  return (
    <ThemeProvider
      theme={{
        main: themes[questionsCorrect],
      }}
    >
      <TestPageOuterContainer>
        <TestPageContainer>
          <QuestionHeader>An animal cell contains:</QuestionHeader>
          <Questions
            questions={questions}
            onChange={setQuestionsCorrect}
            isCorrect={isCorrect}
          />
          <QuestionDescription>
            {isCorrect ? "The answer is correct" : "The answer is incorrect "}
          </QuestionDescription>
        </TestPageContainer>
      </TestPageOuterContainer>
    </ThemeProvider>
  );
};

export default Home;
