import { Meta, StoryObj } from "@storybook/react";
import { CallToAction } from "./CallToAction";
import { fn } from "@storybook/test";

export default { component: CallToAction } as Meta;

type Story = StoryObj<typeof CallToAction>;

export const Default: Story = {
  args: {
    title: "Ready to Grow?",
    subtitle:
      "With this beautiful and responsive React components you will realize your next project in no time.",
    primaryButton: {
      label: "Start Free Trial",
      onPress: fn(),
    },
    secondaryButton: {
      label: "Learn More",
      onPress: fn(),
    },
  },
};
