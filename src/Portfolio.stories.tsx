import { Meta, StoryObj } from "@storybook/react";
import { Portfolio } from "./Portfolio";
import { fn } from "@storybook/test";

export default { component: Portfolio } as Meta;

type Story = StoryObj<typeof Portfolio>;

export const Default: Story = {
  args: {
    title: "Featured Portfolio",
    subtitle: "Ice cream pudding dragée macaroon donut marzipan chocolate",
    tag: "Our Portfolio",
    items: [
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
    ],
  },
};
