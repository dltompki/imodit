import type { Meta, StoryObj } from "@storybook/react";

import CongratsShareScreen from "./flows/do/CongratsShareScreen.tsx";

const meta = {
  component: CongratsShareScreen,
} satisfies Meta<typeof CongratsShareScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
