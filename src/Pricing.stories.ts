import { Meta, StoryObj } from "@storybook/react";
import { Pricing } from "./Pricing";
import { fn } from "@storybook/test";

export default { component: Pricing } as Meta;

type Story = StoryObj<typeof Pricing>;

export const Default: Story = {
  args: {
    title: "Get Lifetime Access",
    subtitle:
      "Get access to 200+ components and free updates. Customize it to your needs, and make it yours today!",
    tag: "Pricing",
    items: [
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
    ],
  },
};
