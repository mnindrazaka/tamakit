import { StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { HeroWithAccent } from "./HeroWithAccent";

export default { component: HeroWithAccent };

type Story = StoryObj<typeof HeroWithAccent>;

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
    imageSource:
      "https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
  },
};

export const HeadingInTheRight: Story = {
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
    imageSource:
      "https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
    headingPosition: "right",
  },
};
