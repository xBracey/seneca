import _ from "lodash";
import { randomiseQuestions } from "./randomiseQuestions";

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

describe("Test randomise questions", () => {
  it("Randomised Question does not equal original", () => {
    const shuffledQuestions = randomiseQuestions(questions);

    expect(_.isEqual(questions, shuffledQuestions)).toBe(false);
  });
});
