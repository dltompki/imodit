import type { Meta, StoryObj } from "@storybook/react";

import { ProjectStepsPage } from "./ProjectStepsPage.tsx";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";

const meta = {
  component: ProjectStepsPage,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { id: "42" },
      },
      routing: { path: "/create/:id" },
    }),
  },
  decorators: [withRouter],
} satisfies Meta<typeof ProjectStepsPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    projects: [
      {
        title: "Install a new Engine!",
        description: "Being Reviewed",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/gettyimages-73743260-1553736466.jpg?crop=1.00xw:0.916xh;0,0.0534xh&resize=980:*",
        id: 0,
        steps: [
          {
            title: "Uninstall Old Engine",
            description: "",
            id: 0,
            images: [
              "https://hips.hearstapps.com/hmg-prod/images/gettyimages-73743260-1553736466.jpg?crop=1.00xw:0.916xh;0,0.0534xh&resize=980:*",
            ],
            threeDImages: [],
            safetyEquipment: [],
            tools: [],
          },
          {
            title: "Reinstall New Engine",
            description: "",
            id: 1,
            images: [
              "https://hips.hearstapps.com/hmg-prod/images/gettyimages-73743260-1553736466.jpg?crop=1.00xw:0.916xh;0,0.0534xh&resize=980:*",
            ],
            threeDImages: [],
            safetyEquipment: [],
            tools: [],
          },
        ],
      },
    ],
    setProjects: () => {},
  },
};
