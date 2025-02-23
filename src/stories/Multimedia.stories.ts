import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Multimedia } from "./Multimedia";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "AddMultimedia",
  component: Multimedia,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    threeD: { control: "boolean" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), threeD: false },
} satisfies Meta<typeof Multimedia>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    threeD: false,
  },
};

export const CarJack3D: Story = {
  args: {
    image: "https://images.contentstack.io/v3/assets/blt62d40591b3650da3/blt075fa6445514f807/658ee44690dcf24aa5646c60/hero_PR1348_HowToUseCarJack_Banner.jpg",
    threeD: true,
  }
};

export const RegularImage: Story = {
  args: {
    image: "https://www.stratstone.com/-/media/stratstone/blog/2024/top-10-best-supercars-of-2024/mclaren-750s-driving-dynamic-hero-1920x774px.ashx",
  }
};