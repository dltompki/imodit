import type { Meta, StoryObj } from "@storybook/react";

import Checklist from "./Checklist.tsx";

const meta = {
  component: Checklist,
} satisfies Meta<typeof Checklist>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: "Checklist",

    items: ["Safety Gloves", "Protective Helmet", "Ear Plugs"],
  },
};
