import type { Meta, StoryObj } from "@storybook/react";

import CongratsSharePage from "./CongratsSharePage";

const meta = {
  component: CongratsSharePage,
} satisfies Meta<typeof CongratsSharePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
