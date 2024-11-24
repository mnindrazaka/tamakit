import { Meta, StoryObj } from "@storybook/react";
import { LogoGridWithTile } from "./LogoGridWithTile";

export default { component: LogoGridWithTile } as Meta;

type Story = StoryObj<typeof LogoGridWithTile>;

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
