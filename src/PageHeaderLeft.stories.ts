import { Meta, StoryObj } from "@storybook/react";
import { PageHeaderLeft } from "./PageHeaderLeft";

export default { component: PageHeaderLeft } as Meta;

type Story = StoryObj<typeof PageHeaderLeft>;

export const Default: Story = {
  args: {
    title: "Get lifetime access",
    subtitle: "Get early access to 210+ components and free updates.",
    tag: "Pricing",
  },
};
