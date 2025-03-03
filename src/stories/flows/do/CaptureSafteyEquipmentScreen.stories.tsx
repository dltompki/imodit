import type { Meta, StoryObj } from "@storybook/react";

import CaptureSafteyEquipmentScreen from "./CaptureSafteyEquipmentScreen";
import Paths from "../paths";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";

const meta = {
  component: CaptureSafteyEquipmentScreen,
  tags: ["autodocs"],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { id: "0", stepId: "0" },
      },
      routing: { path: Paths.instructionSaftey },
    }),
    viewport: {
      defaultViewport: "mobile2",
    },
  },
  decorators: [withRouter],
} satisfies Meta<typeof CaptureSafteyEquipmentScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

