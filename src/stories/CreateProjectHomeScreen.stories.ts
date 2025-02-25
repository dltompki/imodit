import type { Meta, StoryObj } from "@storybook/react";

import { CreateProjectHomeScreen } from "./CreateProjectHomeScreen.tsx";

const meta = {
  title: "Create Project Home Screen",
  component: CreateProjectHomeScreen,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
} satisfies Meta<typeof CreateProjectHomeScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    projects: []
  },
};

export const OneProject: Story = {
  args: {
    projects: [
      {
        title: "Install a new Engine!",
        description: "Being Reviewed",
        image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-73743260-1553736466.jpg?crop=1.00xw:0.916xh;0,0.0534xh&resize=980:*",
      }
    ]
  }
};

export const TwoProjects: Story = {
  args: {
    projects: [
      {
        title: "Install a new Engine!",
        description: "Being Reviewed",
        image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-73743260-1553736466.jpg?crop=1.00xw:0.916xh;0,0.0534xh&resize=980:*",
      },
      {
        title: "Install a new Engine 2!",
        description: "Being Reviewed",
        image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-73743260-1553736466.jpg?crop=1.00xw:0.916xh;0,0.0534xh&resize=980:*",
      }
    ]
  }
};
