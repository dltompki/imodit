import type { Meta, StoryObj } from "@storybook/react";

import RatingFeedbackPage from "./RatingFeedbackPage";

const meta = {
  component: RatingFeedbackPage,
} satisfies Meta<typeof RatingFeedbackPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
