import { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "./PageHeader";

export default { component: PageHeader } as Meta;

type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: {
    title: "Get lifetime access",
    subtitle: "Get early access to 210+ components and free updates.",
    tag: "Pricing",
  },
};
