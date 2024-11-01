import { StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Hero } from "./Hero";

export default { component: Hero };

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    title: "Create your app remarkable fast",
    subtitle:
      "Choose from over 180+ beautiful and responsive components and build your app twice as fast.",
    primaryButton: {
      label: "Buy Now",
      onPress: fn(),
    },
    secondaryButton: {
      label: "Learn More",
      onPress: fn(),
    },
  },
};
