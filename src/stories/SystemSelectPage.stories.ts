import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import { SystemSelectPage } from "./SystemSelectPage";

const meta = {
  title: "Systems Select Page",
  component: SystemSelectPage,
  decorators: [withRouter],
} satisfies Meta<typeof SystemSelectPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
