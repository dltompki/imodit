import { StoryObj } from "@storybook/react";
import { Step } from "./Step";
import { withRouter } from "storybook-addon-remix-react-router";

export default {
  title: "Steps",
  component: Step,
};

type Story = StoryObj<typeof Step>;

export const StepWithCaption: Story = {
  args: {
    caption: "This is the caption",
    image: "https://placehold.co/600x400",
    instructions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

export const StepWithNoCaption: Story = {
  args: {
    image: "https://placehold.co/600x400",
    instructions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

export const StepWithNoImage: Story = {
  args: {
    image: "",
  },
};
