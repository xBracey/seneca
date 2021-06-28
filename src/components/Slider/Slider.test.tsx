import React from "react";
import "@testing-library/jest-dom";
import { Slider } from "./";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

const answer = "Test1";
const options = ["Test1", "Test2", "Test3"];
const isDisabledValues = [true, false];
const themeValues = ["orange", "yellow", "pink", "blue", "green"];

describe("Test Slider Component", () => {
  isDisabledValues.forEach((isDisabled) => {
    themeValues.forEach((theme) => {
      const setAnswer = jest.fn();

      const props = {
        answer,
        options,
        isDisabled,
        setAnswer,
      };

      const component = (
        <ThemeProvider
          theme={{
            main: theme,
          }}
        >
          <Slider {...props} />
        </ThemeProvider>
      );

      describe(`Test props ${JSON.stringify(
        props
      )} with theme ${theme}`, () => {
        it("Renders correctly", () => {
          const { container } = render(component);

          expect(container).toMatchSnapshot();
        });

        it("setAnswer is executed on option change", () => {
          render(component);

          fireEvent.click(screen.queryByTestId("option-Test2"));

          if (!isDisabled) {
            expect(setAnswer).toBeCalledWith("Test2");
          } else {
            expect(setAnswer).not.toBeCalledWith("Test2");
          }

          setAnswer.mockClear();
        });
      });
    });
  });
});
