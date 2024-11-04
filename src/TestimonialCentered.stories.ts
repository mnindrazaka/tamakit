import { Meta, StoryObj } from "@storybook/react";
import { TestimonialCentered } from "./TestimonialCentered";

export default { component: TestimonialCentered } as Meta;

type Story = StoryObj<typeof TestimonialCentered>;

export const Default: Story = {
  args: {
    items: [
      {
        name: "Sarah Johnson",
        role: "Senior UI Designer, Logoipsum",
        content:
          '"As a senior UI designer at Logoipsum Inc, I have had the pleasure of using Chakra UI for several of our projects. I have to say, it has been an absolute game-changer for our team."',
        logoImageSource: "https://img.logoipsum.com/332.svg",
        profileImageSource: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      },
      {
        name: "David Smith",
        role: "Lead Developer, ABC Inc",
        content:
          '"As a lead developer at ABC Inc, I have had the opportunity to work with Chakra UI on multiple projects. I can confidently say that it is one of the best UI libraries I have ever used."',
        logoImageSource: "https://img.logoipsum.com/332.svg",
        profileImageSource: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      },
      {
        name: "Sarah Johnson",
        role: "Senior UI Designer, Logoipsum",
        content:
          '"As a senior UI designer at Logoipsum Inc, I have had the pleasure of using Chakra UI for several of our projects. I have to say, it has been an absolute game-changer for our team."',
        logoImageSource: "https://img.logoipsum.com/332.svg",
        profileImageSource: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      },
    ],
  },
};
