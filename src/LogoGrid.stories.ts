import { Meta, StoryObj } from "@storybook/react";
import { LogoGrid } from "./LogoGrid";

export default { component: LogoGrid } as Meta;

type Story = StoryObj<typeof LogoGrid>;

export const Default: Story = {
  args: {
    title: "These and other companies trust us",
    items: [
      {
        imageSource: "https://img.logoipsum.com/252.svg",
        href: "#",
      },
      {
        imageSource: "https://img.logoipsum.com/251.svg",
        href: "#",
      },
      {
        imageSource: "https://img.logoipsum.com/297.svg",
        href: "#",
      },
      {
        imageSource: "https://img.logoipsum.com/243.svg",
        href: "#",
      },
      {
        imageSource: "https://img.logoipsum.com/253.svg",
        href: "#",
      },
      {
        imageSource: "https://img.logoipsum.com/249.svg",
        href: "#",
      },
      {
        imageSource: "https://img.logoipsum.com/293.svg",
        href: "#",
      },
      {
        imageSource: "https://img.logoipsum.com/296.svg",
        href: "#",
      },
    ],
  },
};
