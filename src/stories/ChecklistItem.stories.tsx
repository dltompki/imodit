import type { Meta, StoryObj } from "@storybook/react";

import ChecklistItem from "./ChecklistItem.tsx";

const meta = {
  component: ChecklistItem,
} satisfies Meta<typeof ChecklistItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Checklist Item",
  },
};
