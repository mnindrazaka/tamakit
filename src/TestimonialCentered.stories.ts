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
          '"As a senior UI designer at Logoipsum Inc, I have had the pleasure of using Tamakit for several of our projects. I have to say, it has been an absolute game-changer for our team."',
        logoImageSource: "https://img.logoipsum.com/297.svg",
        profileImageSource: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      },
      {
        name: "David Smith",
        role: "Lead Developer, ABC Inc",
        content:
          '"As a lead developer at ABC Inc, I have had the opportunity to work with Tamakit on multiple projects. I can confidently say that it is one of the best UI libraries I have ever used."',
        logoImageSource: "https://img.logoipsum.com/297.svg",
        profileImageSource:
          "https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRldmVsb3BlciUyMHdpdGglMjBiZWFyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      },
      {
        name: "Sarah Johnson",
        role: "Senior UI Designer, Logoipsum",
        content:
          '"As a senior UI designer at Logoipsum Inc, I have had the pleasure of using Tamakit for several of our projects. I have to say, it has been an absolute game-changer for our team."',
        logoImageSource: "https://img.logoipsum.com/297.svg",
        profileImageSource: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      },
    ],
  },
};
