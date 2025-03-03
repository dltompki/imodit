import type { Meta, StoryObj } from "@storybook/react";

import { withRouter } from "storybook-addon-remix-react-router";
import { LearnGuidePage } from "./LearnGuidePage";

const meta = {
  title: "Learn Guide Page",
  component: LearnGuidePage,
  decorators: [withRouter],
} satisfies Meta<typeof LearnGuidePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
