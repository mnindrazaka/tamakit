import { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "./PageHeader";
import { fn } from "@storybook/test";

export default { component: PageHeader } as Meta;

type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: {
    title: "Get lifetime access",
    subtitle: "Get early access to 210+ components and free updates.",
    tag: "Pricing",
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

export const Centered: Story = {
  args: {
    title: "Get lifetime access",
    subtitle: "Get early access to 210+ components and free updates.",
    tag: "Pricing",
    align: "center",
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
