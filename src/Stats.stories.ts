import { Meta, StoryObj } from "@storybook/react/*";
import { Stats } from "./Stats";

export default { component: Stats } as Meta;

type Story = StoryObj<typeof Stats>;

export const Default: Story = {
  args: {
    title: "Why Tamakit?",
    subtitle:
      "Because this beautiful and responsive React components will help your to realize your next project in no time.",
    items: [
      { title: "210+", subtitle: "Components" },
      { title: "60%", subtitle: "Less development costs" },
      { title: "25k", subtitle: "GitHub stars" },
    ],
  },
};
