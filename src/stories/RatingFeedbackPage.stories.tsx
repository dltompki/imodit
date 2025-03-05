import type { Meta, StoryObj } from "@storybook/react";

import RatingFeedbackScreen from "./flows/do/RatingFeedbackScreen.tsx";

const meta = {
  component: RatingFeedbackScreen,
} satisfies Meta<typeof RatingFeedbackScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
