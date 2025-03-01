import { StoryObj } from "@storybook/react";
import { Topbar } from "./Topbar";
import { withRouter } from "storybook-addon-remix-react-router";

export default {
  title: "Topbar",
  component: Topbar,
  argTypes: {
    currentRoute: { control: "text" },
  },
  decorators: [withRouter],
};

type Story = StoryObj<typeof Topbar>;

export const Homepage: Story = {
  args: {
    title: "Home",
  },
};

export const Learn: Story = {
  args: {
    title: "Learn",
  },
};

export const Create: Story = {
  args: {
    title: "Create",
  },
};
