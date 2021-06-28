import React from "react";
import "@testing-library/jest-dom";
import { Questions } from "./";
import { render } from "@testing-library/react";

describe("Test Questions Component", () => {
  const props = {};

  const component = <Questions {...props} />;

  describe(`Test props ${JSON.stringify(props)}`, () => {
    it("Renders correctly", () => {
      const { container } = render(component);
  
      expect(container).toMatchSnapshot();
    });
  })
});
