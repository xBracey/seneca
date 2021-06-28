import { IQuestion } from "components/Questions";
import _ from "lodash";

export const randomiseQuestions = (questions: IQuestion[]) => {
  const newQuestions = _.shuffle(questions);

  return newQuestions.map((question) => ({
    answers: _.shuffle(question.answers),
    answer: question.answer,
  }));
};
