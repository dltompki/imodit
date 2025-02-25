import { StoryObj } from "@storybook/react";
import { Topbar } from "./Topbar";

export default {
  title: "Topbar",
  component: Topbar,
  argTypes: {
    currentRoute: { control: "text" },
  },
};

type Story = StoryObj<typeof Topbar>;

export const Homepage: Story = {
  args: {
    currentRoute: "/",
  },
};

export const Learn: Story = {
  args: {
    currentRoute: "/learn",
  },
};

export const Create: Story = {
  args: {
    currentRoute: "/create",
  },
};
