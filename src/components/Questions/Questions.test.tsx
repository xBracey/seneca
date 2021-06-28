import React from "react";
import "@testing-library/jest-dom";
import { Questions } from "./";
import { fireEvent, render, screen } from "@testing-library/react";

const questions = [
  {
    answers: ["England", "Germany", "France"],
    answer: "France",
  },

  {
    answers: ["1996", "2000", "2004"],
    answer: "2004",
  },
  {
    answers: ["World Cup", "Euro"],
    answer: "Euro",
  },
];

const isCorrect = false;

describe("Test Questions Component", () => {
  const onChange = jest.fn();

  const props = { questions, onChange, isCorrect };

  const component = <Questions {...props} />;

  describe(`Test props ${JSON.stringify(props)}`, () => {
    it("Renders correctly", () => {
      const { container } = render(component);

      expect(container).toMatchSnapshot();
    });

    it("onChange is executed correctly", () => {
      render(component);

      fireEvent.click(screen.queryByTestId("option-France"));

      expect(onChange).toBeCalledWith(1);
    });
  });
});
