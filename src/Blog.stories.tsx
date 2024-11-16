import { Meta, StoryObj } from "@storybook/react";
import { Blog } from "./Blog";
import { fn } from "@storybook/test";

export default { component: Blog } as Meta;

type Story = StoryObj<typeof Blog>;

export const Default: Story = {
  args: {
    title: "Latest blog posts",
    subtitle: "Ice cream pudding dragée macaroon donut marzipan chocolate",
    tag: "Our Blog",
    items: [
      {
        title: "2022 Developer Survey",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        imageSource:
          "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzaWduZXIlMjB3b3JraW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        categoryName: "Research",
        author: {
          name: "Rusty Ashworth",
          imageSource:
            "https://xsgames.co/randomusers/assets/avatars/male/71.jpg",
        },
        publishedAt: "December 29, 2022",
        onPress: fn(),
      },
      {
        title: "Women in Tech",
        content:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageSource:
          "https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzaWduZXIlMjB3b3JraW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        categoryName: "Community",
        author: {
          name: "Billye Heyde",
          imageSource:
            "https://xsgames.co/randomusers/assets/avatars/female/20.jpg",
        },
        publishedAt: "November 30, 2022",
        onPress: fn(),
      },
      {
        title: "Using Chakra UI in Sketch",
        content:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.",
        imageSource:
          "https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzaWduZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        categoryName: "Design",
        author: {
          name: "Rico Duhart",
          imageSource:
            "https://xsgames.co/randomusers/assets/avatars/male/53.jpg",
        },
        publishedAt: "October 31, 2022",
        onPress: fn(),
      },
    ],
  },
};
