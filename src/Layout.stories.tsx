import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./Layout";
import { Paragraph, YStack } from "tamagui";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { fn } from "@storybook/test";
import { Features } from "./Features";
import { StatsWithAccent } from "./StatsWithAccent";
import { LogoGrid } from "./LogoGrid";
import { Team } from "./Team";
import { Pricing } from "./Pricing";
import { CallToAction } from "./CallToAction";
import { Github, Linkedin, Menu } from "@tamagui/lucide-icons";
import { Portfolio } from "./Portfolio";

export default {
  component: Layout,
  parameters: { layout: "fullscreen" },
} as Meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    navbar: (
      <YStack padding="$5" backgroundColor="$accentBackground" theme="dark">
        <Paragraph>Navbar Component</Paragraph>
      </YStack>
    ),
    main: (
      <YStack padding="$5" backgroundColor="$red11" theme="dark" height={1280}>
        <Paragraph>Main Component</Paragraph>
      </YStack>
    ),
    footer: (
      <YStack padding="$5" backgroundColor="$accentBackground" theme="dark">
        <Paragraph>Footer Component</Paragraph>
      </YStack>
    ),
  },
};

export const LandingPage: Story = {
  args: {
    navbar: (
      <Navbar
        mobileMenuIcon={Menu}
        logoImageSource="https://img.logoipsum.com/297.svg"
        links={[
          { title: "Components", href: "#" },
          { title: "Pricing", href: "#" },
          { title: "Marketplace", href: "#" },
          { title: "Support", href: "#" },
        ]}
      />
    ),
    main: (
      <YStack gap="$10" paddingVertical="$8">
        <Hero
          title="Create your app remarkable fast"
          subtitle="Choose from over 180+ beautiful and responsive components and build your app twice as fast."
          imageSource="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
          primaryButton={{
            label: "Buy Now",
            onPress: fn(),
          }}
          secondaryButton={{
            label: "Learn More",
            onPress: fn(),
          }}
        />
        <Features
          title="What can you expect?"
          subtitle="A bundle of 210+ ready-to-use, responsive and accessible components with clever structured sourcode files."
          items={[
            {
              title: "210+ Components",
              subtitle:
                "Tamakit components help you develop your project faster.",
              imageSource: "https://i.ibb.co.com/dJGfDBb/image.png",
            },
            {
              title: "Production Ready",
              subtitle:
                "Effortlessly create your next production-ready experience with Tamakit components.",
              imageSource: "https://i.ibb.co.com/0Z3Fr7Q/image.png",
            },
            {
              title: "Light & Dark",
              subtitle:
                "All components support a light and a dark color mode out of the box.",
              imageSource: "https://i.ibb.co.com/QkLB5Rf/image.png",
            },
            {
              title: "Themeable",
              subtitle:
                "Your style. Your brand. Customize the components as you need them. It's that simple.",
              imageSource: "https://i.ibb.co.com/fFdP4hG/image.png",
            },
            {
              title: "Fully Responsive",
              subtitle:
                "Responsive components that look great on mobile, tablet and desktop.",
              imageSource: "https://i.ibb.co.com/ts45HVh/image.png",
            },
            {
              title: "Accessible",
              subtitle:
                "Accessibility first. That's why we pay attention to accessibility right from the start.",
              imageSource: "https://i.ibb.co.com/VxFpRfL/image.png",
            },
          ]}
        />
        <StatsWithAccent
          title="Why Tamakit?"
          subtitle="Because this beautiful and responsive React components will help your to realize your next project in no time."
          items={[
            { title: "210+", subtitle: "Components" },
            { title: "60%", subtitle: "Less development costs" },
            { title: "25k", subtitle: "GitHub stars" },
          ]}
        />
        <LogoGrid
          title="These and other companies trust us"
          items={[
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
          ]}
        />
        <Portfolio
          title="Featured Portfolio"
          subtitle="Ice cream pudding dragée macaroon donut marzipan chocolate"
          tag="Our Portfolio"
          items={[
            {
              title: "2022 Developer Survey",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique ex in pretium lobortis. Nam posuere volutpat leo at ullamcorper. Praesent id mattis justo, nec dictum nisl. Ut semper ut nunc vel semper. Etiam pellentesque enim eget lectus sodales eleifend. Etiam a semper justo, non aliquet augue.",
              imageSource:
                "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzaWduZXIlMjB3b3JraW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
              onPress: fn(),
            },
            {
              title: "Women in Tech",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique ex in pretium lobortis. Nam posuere volutpat leo at ullamcorper. Praesent id mattis justo, nec dictum nisl. Ut semper ut nunc vel semper. Etiam pellentesque enim eget lectus sodales eleifend. Etiam a semper justo, non aliquet augue.",
              imageSource:
                "https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzaWduZXIlMjB3b3JraW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              onPress: fn(),
            },
            {
              title: "Using Chakra UI in Sketch",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique ex in pretium lobortis. Nam posuere volutpat leo at ullamcorper. Praesent id mattis justo, nec dictum nisl. Ut semper ut nunc vel semper. Etiam pellentesque enim eget lectus sodales eleifend. Etiam a semper justo, non aliquet augue.",
              imageSource:
                "https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzaWduZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              onPress: fn(),
            },
          ]}
        />
        <Team
          title="Meet our team"
          subtitle="Jelly brownie candy dessert lemon drops marshmallow pastry. Dessert candy canes jujubes sugar plum cheesecake."
          members={[
            {
              name: "Camila West",
              role: "Co-Founder / CEO",
              imageSource:
                "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
              socialMediaLinks: [
                {
                  href: "https://github.com/mnindrazaka",
                  icon: <Github size="$1" />,
                },
                {
                  href: "https://linkedin.com/in/mnindrazaka",
                  icon: <Linkedin size="$1" />,
                },
              ],
            },
            {
              name: "Mark Linhsorg",
              role: "Co-Founder / CTO",
              imageSource:
                "https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3V5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
              socialMediaLinks: [
                {
                  href: "https://github.com/mnindrazaka",
                  icon: <Github size="$1" />,
                },
                {
                  href: "https://linkedin.com/in/mnindrazaka",
                  icon: <Linkedin size="$1" />,
                },
              ],
            },
            {
              name: "Kim Yung",
              role: "Marketing Manager",
              imageSource:
                "https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTd8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
              socialMediaLinks: [
                {
                  href: "https://github.com/mnindrazaka",
                  icon: <Github size="$1" />,
                },
                {
                  href: "https://linkedin.com/in/mnindrazaka",
                  icon: <Linkedin size="$1" />,
                },
              ],
            },
            {
              name: "Morgan Adebayo",
              role: "Manager, Business Relations",
              imageSource:
                "https://images.unsplash.com/photo-1524660988542-c440de9c0fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYwfHxibGFjayUyMGd1eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
              socialMediaLinks: [
                {
                  href: "https://github.com/mnindrazaka",
                  icon: <Github size="$1" />,
                },
                {
                  href: "https://linkedin.com/in/mnindrazaka",
                  icon: <Linkedin size="$1" />,
                },
              ],
            },
            {
              name: "Bimbo Akintola",
              role: "Chief Operating Officer",
              imageSource:
                "https://images.unsplash.com/photo-1522938974444-f12497b69347?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fGJsYWNrJTIwbGFkeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
              socialMediaLinks: [
                {
                  href: "https://github.com/mnindrazaka",
                  icon: <Github size="$1" />,
                },
                {
                  href: "https://linkedin.com/in/mnindrazaka",
                  icon: <Linkedin size="$1" />,
                },
              ],
            },
            {
              name: "Yasmine Jones",
              role: "Head of Human Resources",
              imageSource:
                "https://images.unsplash.com/photo-1574034589502-9f8a1ed46fa7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTMxfHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
              socialMediaLinks: [
                {
                  href: "https://github.com/mnindrazaka",
                  icon: <Github size="$1" />,
                },
                {
                  href: "https://linkedin.com/in/mnindrazaka",
                  icon: <Linkedin size="$1" />,
                },
              ],
            },
          ]}
        />
        <Pricing
          title="Get Lifetime Access"
          subtitle="Get access to 200+ components and free updates. Customize it to your needs, and make it yours today!"
          tag="Pricing"
          items={[
            {
              title: "Lite Package",
              features: [
                "Exclusive Single User License",
                "Access to All Pro Components",
                "Limitless Project Implementation",
                "Regular Free Updates",
                "24/7 Dedicated Customer Support",
              ],
              buyButton: {
                label: "Buy Now",
                onPress: fn(),
              },
              price: 99,
              additionalPriceInfo: "plus local taxes",
            },
            {
              title: "Pro Package",
              features: [
                "Exclusive Single User License",
                "Access to All Pro Components",
                "Limitless Project Implementation",
                "Regular Free Updates",
                "24/7 Dedicated Customer Support",
              ],
              buyButton: {
                label: "Buy Now",
                onPress: fn(),
              },
              price: 299,
              additionalPriceInfo: "plus local taxes",
            },
            {
              title: "Regular Package",
              features: [
                "Exclusive Single User License",
                "Access to All Pro Components",
                "Limitless Project Implementation",
                "Regular Free Updates",
                "24/7 Dedicated Customer Support",
              ],
              buyButton: {
                label: "Buy Now",
                onPress: fn(),
              },
              price: 99,
              additionalPriceInfo: "plus local taxes",
            },
          ]}
        />
        <CallToAction
          title="Ready to Grow?"
          subtitle="With this beautiful and responsive React components you will realize your next project in no time."
          primaryButton={{
            label: "Start Free Trial",
            onPress: fn(),
          }}
          secondaryButton={{
            label: "Learn More",
            onPress: fn(),
          }}
        />
      </YStack>
    ),
    footer: (
      <Footer
        copyrightText="© 2024 Tamakit. All rights reserved."
        logoImageSource="https://img.logoipsum.com/297.svg"
        tagline="Create beautiful websites remarkably fast."
        socialMediaLinks={[
          {
            href: "https://github.com/mnindrazaka",
            icon: <Github />,
          },
          {
            href: "https://linkedin.com/in/mnindrazaka",
            icon: <Linkedin />,
          },
        ]}
        links={[
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
        ]}
      />
    ),
  },
};
