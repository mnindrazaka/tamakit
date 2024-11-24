import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import { Menu } from "@tamagui/lucide-icons";

export default { component: Navbar } as Meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    logoImageSource: "https://img.logoipsum.com/297.svg",
    links: [
      { title: "Components", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Marketplace", href: "#" },
      { title: "Support", href: "#" },
    ],
    mobileMenuIcon: Menu,
  },
};
