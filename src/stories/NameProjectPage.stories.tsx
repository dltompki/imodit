import type { Meta, StoryObj } from "@storybook/react";

import { NameProjectPage } from "./NameProjectPage.tsx";
import {
  withRouter,
  reactRouterParameters,
} from "storybook-addon-remix-react-router";

const meta = {
  title: "Name Project Screen",
  component: NameProjectPage,
  decorators: [withRouter],
} satisfies Meta<typeof NameProjectPage>;

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
      path: "/create/name",
      handle: "Create Project",
    },
  }),
};

export const Default: Story = {
  args: {
    projects: [],
    setProjects: () => {},
    ...routeParameters,
  },
};
