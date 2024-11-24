import { StoryObj } from "@storybook/react";
import { HeroWithTopImage } from "./HeroWithTopImage";
import { fn } from "@storybook/test";

export default {
  component: HeroWithTopImage,
};

type Story = StoryObj<typeof HeroWithTopImage>;

export const Default: Story = {
  args: {
    imageSource:
      "https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
    primaryButton: {
      label: "Buy Now",
      onPress: fn(),
    },
    secondaryButton: {
      label: "Learn More",
      onPress: fn(),
    },
    title: "Create your app remarkable fast",
    subtitle:
      "Choose from over 180+ beautiful and responsive components and build your app twice as fast.",
  },
};
