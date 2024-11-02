import { Meta, StoryObj } from "@storybook/react";
import { Features } from "./Features";
import { fn } from "@storybook/test";

export default { component: Features } as Meta;

type Story = StoryObj<typeof Features>;

export const Default: Story = {
  args: {
    title: "What can you expect?",
    subtitle:
      "A bundle of 210+ ready-to-use, responsive and accessible components with clever structured sourcode files.",
    items: [
      {
        title: "210+ Components",
        subtitle:
          "Chakra UI Pro has 210+ componentsto help you develop your project faster.",
        imageSource:
          "https://img.icons8.com/?size=100&id=24575&format=png&color=000000",
        onPress: fn(),
      },
      {
        title: "Production Ready",
        subtitle:
          "Effortlessly create your next production-ready experience with Chakra UI Pro components.",
        imageSource:
          "https://img.icons8.com/?size=100&id=999&format=png&color=000000",
        onPress: fn(),
      },
      {
        title: "Light & Dark",
        subtitle:
          "All components support a light and a dark color mode out of the box.",
        imageSource:
          "https://img.icons8.com/?size=100&id=26031&format=png&color=000000",
        onPress: fn(),
      },
      {
        title: "Themeable",
        subtitle:
          "Your style. Your brand. Customize the components as you need them. It's that simple.",
        imageSource:
          "https://img.icons8.com/?size=100&id=4669&format=png&color=000000",
        onPress: fn(),
      },
      {
        title: "Fully Responsive",
        subtitle:
          "Responsive components that look great on mobile, tablet and desktop.",
        imageSource:
          "https://img.icons8.com/?size=100&id=1519&format=png&color=000000",
        onPress: fn(),
      },
      {
        title: "Accessible",
        subtitle:
          "Accessibility first. That's why we pay attention to accessibility right from the start.",
        imageSource:
          "https://img.icons8.com/?size=100&id=7276&format=png&color=000000",
        onPress: fn(),
      },
    ],
  },
};
