import type { Meta, StoryObj } from "@storybook/react";

import { CameraView } from "./CameraView";

const meta = {
  component: CameraView,
  tags: ["autodocs"],
} satisfies Meta<typeof CameraView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onCapture: () => {},
  },
};
