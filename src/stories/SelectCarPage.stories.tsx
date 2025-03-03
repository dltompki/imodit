import type { Meta, StoryObj } from "@storybook/react";

import { SelectCarPage } from "./SelectCarPage";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
  title: "Select Car Page",
  component: SelectCarPage,
  decorators: [withRouter],
} satisfies Meta<typeof SelectCarPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
