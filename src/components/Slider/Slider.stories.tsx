import React, { useState } from "react";
import { Slider } from "./Slider";
import { storiesOf } from "@storybook/react";
import { colours } from "theme/colours";
import { boolean } from "@storybook/addon-knobs";

const story = storiesOf("Components/Slider", module);

story.add("Slider Component", () => {
  const [answer, setAnswer] = useState("England");

  return (
    <div style={{ width: "800px", background: colours.orangeBackground }}>
      <Slider
        answer={answer}
        setAnswer={setAnswer}
        options={["England", "Germany", "France"]}
        isDisabled={boolean("Is Disabled", false)}
      />
    </div>
  );
});
