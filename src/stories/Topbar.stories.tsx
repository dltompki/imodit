import { StoryObj } from "@storybook/react";
import { Topbar } from "./Topbar";

export default {
  title: "Topbar",
  component: Topbar,
  argTypes: {
    theRoute: { control: "text" },
  },
};

type Story = StoryObj<typeof Topbar>;

export const Homepage: Story = {
  args: {
    theRoute: "/",
  },
};

export const Learn: Story = {
  args: {
    theRoute: "/learn",
  },
};

export const Create: Story = {
  args: {
    theRoute: "/create",
  },
};
