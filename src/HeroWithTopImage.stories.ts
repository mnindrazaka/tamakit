import { StoryObj } from "@storybook/react/*";
import { HeroWithTopImage } from "./HeroWithTopImage";
import { fn } from "@storybook/test";

export default {
  component: HeroWithTopImage,
};

type Story = StoryObj<typeof HeroWithTopImage>;

export const Default: Story = {
  args: {
    imageSource:
      "https://pro.chakra-ui.com/components/marketing/blog/post1.png",
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
