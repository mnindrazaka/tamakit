import { Meta, StoryObj } from "@storybook/react";
import { Team } from "./Team";

export default { component: Team } as Meta;

type Story = StoryObj<typeof Team>;

export const Default: Story = {
  args: {
    title: "Meet our team",
    subtitle:
      "Jelly brownie candy dessert lemon drops marshmallow pastry. Dessert candy canes jujubes sugar plum cheesecake.",
    members: [
      {
        name: "Camila West",
        role: "Co-Founder / CEO",
        imageSource:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        socialMediaLink: {},
      },
      {
        name: "Mark Linhsorg",
        role: "Co-Founder / CTO",
        imageSource:
          "https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3V5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        socialMediaLink: {},
      },
      {
        name: "Kim Yung",
        role: "Marketing Manager",
        imageSource:
          "https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTd8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        socialMediaLink: {},
      },
      {
        name: "Morgan Adebayo",
        role: "Manager, Business Relations",
        imageSource:
          "https://images.unsplash.com/photo-1524660988542-c440de9c0fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYwfHxibGFjayUyMGd1eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        socialMediaLink: {},
      },
      {
        name: "Bimbo Akintola",
        role: "Chief Operating Officer",
        imageSource:
          "https://images.unsplash.com/photo-1522938974444-f12497b69347?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fGJsYWNrJTIwbGFkeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        socialMediaLink: {},
      },
      {
        name: "Yasmine Jones",
        role: "Head of Human Resources",
        imageSource:
          "https://images.unsplash.com/photo-1574034589502-9f8a1ed46fa7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTMxfHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        socialMediaLink: {},
      },
    ],
  },
};
