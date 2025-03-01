import type { Meta, StoryObj } from "@storybook/react";

import { CarOrbit } from "./CarOrbit";

const meta = {
  title: "CarOrbit",
  component: CarOrbit,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: {
    setState: { type: "function", control: false },
  },
} satisfies Meta<typeof CarOrbit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
