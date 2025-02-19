import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";
import { Github, Linkedin } from "@tamagui/lucide-icons";

export default { component: Footer } as Meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    logoImageSource: "https://img.logoipsum.com/297.svg",
    copyrightText: "© 2024 Tamakit All rights reserved.",
    socialMediaLinks: [
      {
        href: "https://github.com/mnindrazaka",
        icon: <Github />,
      },
      {
        href: "https://linkedin.com/in/mnindrazaka",
        icon: <Linkedin />,
      },
    ],
    tagline: "Create beautiful websites remarkably fast.",
    links: [
      {
        title: "Company",
        subLinks: [
          { title: "Why Envelope", href: "#" },
          { title: "Our Story", href: "#" },
          { title: "Careers", href: "#" },
          { title: "Press", href: "#" },
          { title: "FAQs", href: "#" },
        ],
      },
      {
        title: "Product",
        subLinks: [
          { title: "How It Works", href: "#" },
          { title: "Pricing", href: "#" },
          { title: "Use Cases", href: "#" },
          { title: "Integrations", href: "#" },
          { title: "SAML SSO", href: "#" },
        ],
      },
      {
        title: "Resources",
        subLinks: [
          { title: "Blog", href: "#" },
          { title: "Partnerships", href: "#" },
          { title: "Case Studies", href: "#" },
          { title: "Integrations", href: "#" },
          { title: "Media Assets", href: "#" },
        ],
      },
      {
        title: "Legal",
        subLinks: [
          { title: "Terms of Service", href: "#" },
          { title: "Privacy Policy", href: "#" },
          { title: "Offer Terms", href: "#" },
          { title: "License", href: "#" },
        ],
      },
    ],
  },
};

export const WithTitle: Story = {
  args: {
    title: "TAMAKIT",
    copyrightText: "© 2024 Tamakit All rights reserved.",
    socialMediaLinks: [
      {
        href: "https://github.com/mnindrazaka",
        icon: <Github />,
      },
      {
        href: "https://linkedin.com/in/mnindrazaka",
        icon: <Linkedin />,
      },
    ],
    tagline: "Create beautiful websites remarkably fast.",
    links: [
      {
        title: "Company",
        subLinks: [
          { title: "Why Envelope", href: "#" },
          { title: "Our Story", href: "#" },
          { title: "Careers", href: "#" },
          { title: "Press", href: "#" },
          { title: "FAQs", href: "#" },
        ],
      },
      {
        title: "Product",
        subLinks: [
          { title: "How It Works", href: "#" },
          { title: "Pricing", href: "#" },
          { title: "Use Cases", href: "#" },
          { title: "Integrations", href: "#" },
          { title: "SAML SSO", href: "#" },
        ],
      },
      {
        title: "Resources",
        subLinks: [
          { title: "Blog", href: "#" },
          { title: "Partnerships", href: "#" },
          { title: "Case Studies", href: "#" },
          { title: "Integrations", href: "#" },
          { title: "Media Assets", href: "#" },
        ],
      },
      {
        title: "Legal",
        subLinks: [
          { title: "Terms of Service", href: "#" },
          { title: "Privacy Policy", href: "#" },
          { title: "Offer Terms", href: "#" },
          { title: "License", href: "#" },
        ],
      },
    ],
  },
};
