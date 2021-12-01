import React from "react";

import { Button } from "./Button";

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {
      options: ["default", "primary", "secondary", "danger"],
      control: { type: "radio" },
    },
    varient: {
      options: ["default", "outline", "text"],
      control: { type: "select" },
    },
    boxShadow: { control: "boolean" },
    title: { control: "text" },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Button {...args} />;
export const ButtonTemplate = Template.bind({});
ButtonTemplate.args = {
  title: "Default",
  varient: "default",
  boxShadow: true,
  size: "md",
  backgroundColor: "#E0E0E0",
};
