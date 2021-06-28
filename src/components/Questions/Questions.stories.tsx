import React from "react";
import { Questions } from "./Questions";
import { storiesOf } from "@storybook/react";
import { colours } from "theme/colours";
import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";

const story = storiesOf("Components/Questions", module);

story.add("Questions Component", () => {
  return (
    <ThemeProvider
      theme={{
        main: select("Theme", ["blue", "yellow", "pink", "orange"], "orange"),
      }}
    >
      <div style={{ width: "800px", background: colours.orangeBackground }}>
        <Questions
          questions={[
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
          ]}
          onChange={action("Correct")}
          isCorrect={boolean("Is correct", false)}
        />
      </div>
    </ThemeProvider>
  );
});
