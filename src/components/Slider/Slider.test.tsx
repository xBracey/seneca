import React from "react";
import "@testing-library/jest-dom";
import { Slider } from "./";
import { render } from "@testing-library/react";

describe("Test Slider Component", () => {
  const props = {};

  const component = <Slider {...props} />;

  describe(`Test props ${JSON.stringify(props)}`, () => {
    it("Renders correctly", () => {
      const { container } = render(component);
  
      expect(container).toMatchSnapshot();
    });
  })
});
