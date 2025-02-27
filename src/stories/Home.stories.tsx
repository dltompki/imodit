import type { Meta, StoryObj } from "@storybook/react";

import { Home } from "./Home";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
  component: Home,
  decorators: [withRouter],
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
