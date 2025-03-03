import type { Meta, StoryObj } from "@storybook/react";

import { QrCodeScanner } from "./QrCodeScanner";
import { IDetectedBarcode } from "@yudiel/react-qr-scanner";

const meta = {
  title: "QrCodeScanner",
  component: QrCodeScanner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof QrCodeScanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onScan: (_detectedCodes: IDetectedBarcode[]) => {
      return;
    },
  },
};
