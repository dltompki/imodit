import type { Meta, StoryObj } from "@storybook/react";

import ProjectCard from "./ProjectCard.tsx";

const meta = {
  component: ProjectCard,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Install a new Engine!",
    description: "Being Reviewed",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-73743260-1553736466.jpg?crop=1.00xw:0.916xh;0,0.0534xh&resize=980:*",
  },
};
