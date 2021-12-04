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
    boxShadow: { control: "boolean" },
    title: { control: "text" },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
    disabledButton: { control: "boolean" },
    iconPosition: {
      options: ["none", "left", "right"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  title: "Default",
  varient: "default",
  disabledButton: false,
  size: "md",
  boxShadow: true,
  iconPosition: "none",
};
DefaultButton.parameters = {
  controls: {
    exclude: ["varient"],
  },
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  title: "Default",
  varient: "outline",
  iconPosition: "none",
};
OutlineButton.parameters = {
  controls: {
    exclude: ["varient", "backgroundColor"],
  },
};

export const TextButton = Template.bind({});
TextButton.args = {
  title: "Default",
  varient: "text",
};
TextButton.parameters = {
  controls: {
    exclude: ["varient", "backgroundColor", "iconPosition"],
  },
};
