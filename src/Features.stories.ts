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
        subtitle: "Tamakit components help you develop your project faster.",
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
    ],
  },
};
