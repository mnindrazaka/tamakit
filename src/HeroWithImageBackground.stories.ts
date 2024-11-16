import { StoryObj } from "@storybook/react";
import { HeroWithImageBackground } from "./HeroWithImageBackground";
import { fn } from "@storybook/test";

export default {
  component: HeroWithImageBackground,
};

type Story = StoryObj<typeof HeroWithImageBackground>;

export const Default: Story = {
  args: {
    imageSource:
      "https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80",
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
