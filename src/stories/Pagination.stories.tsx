import type { Meta, StoryObj } from "@storybook/react";

import Pagination from "./Pagination";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const meta = {
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const HideLeft: Story = {
  args: {
    leftButton: null, // This hides the left button
  },
};

export const HideRight: Story = {
  args: {
    rightButton: null,
  },
};

export const Home: Story = {
  args: {
    rightButton: (
      <Button variant="contained" startIcon={<HomeIcon />}>
        Home
      </Button>
    ),
  },
};

export const Invalid: Story = {
  args: {
    leftButton: "invalid string",
  },
};
