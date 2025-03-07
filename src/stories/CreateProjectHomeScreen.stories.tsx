import type { Meta, StoryObj } from "@storybook/react";

import { CreateProjectHomeScreen } from "./CreateProjectHomeScreen.tsx";
import {
  withRouter,
  reactRouterParameters,
} from "storybook-addon-remix-react-router";

const meta = {
  title: "Create Project Home Screen",
  component: CreateProjectHomeScreen,
  decorators: [withRouter],
} satisfies Meta<typeof CreateProjectHomeScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

const routeParameters = {
  reactRouter: reactRouterParameters({
    location: {
      pathParams: {},
      searchParams: {},
      state: {},
    },
    routing: {
      path: "/create",
      handle: "Create Project",
    },
  }),
};

export const Default: Story = {
  args: {
    projects: [],
    ...routeParameters,
    setProjects: () => {}
  },
};

export const OneProject: Story = {
  args: {
    projects: [
      {
        title: "Install a new Engine!",
        description: "Being Reviewed",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/gettyimages-73743260-1553736466.jpg?crop=1.00xw:0.916xh;0,0.0534xh&resize=980:*",
        id: 0,
        steps: [],
      },
    ],
    ...routeParameters,
    setProjects: () => {}
  },
};

export const TwoProjects: Story = {
  args: {
    projects: [
      {
        title: "Install a new Engine!",
        description: "Being Reviewed",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/gettyimages-73743260-1553736466.jpg?crop=1.00xw:0.916xh;0,0.0534xh&resize=980:*",
        id: 0,
        steps: [],
      },
      {
        title: "Install a new Engine 2!",
        description: "Being Reviewed",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/gettyimages-73743260-1553736466.jpg?crop=1.00xw:0.916xh;0,0.0534xh&resize=980:*",
        id: 1,
        steps: [],
      },
    ],
    ...routeParameters,
    setProjects: () => {}
  },
};
