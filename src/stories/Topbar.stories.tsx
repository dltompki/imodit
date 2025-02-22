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
    title: "/",
  },
};

export const Learn: Story = {
  args: {
    title: "/learn",
  },
};

export const Create: Story = {
  args: {
    title: "/create",
  },
};
