import type { Meta, StoryObj } from "@storybook/react";

import { CameraView } from "./CameraView";

const meta = {
  title: "CameraView",
  component: CameraView,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: {
    setState: { type: "function", control: false },
  },
} satisfies Meta<typeof CameraView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
