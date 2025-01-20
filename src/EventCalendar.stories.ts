import { Meta, StoryObj } from "@storybook/react";
import { EventCalendar } from "./EventCalendar";
import { fn } from "@storybook/test";

export default { component: EventCalendar } as Meta;

type Story = StoryObj<typeof EventCalendar>;

export const Default: Story = {
  args: {
    tag: "Event",
    title: "What We Do This Month",
    subtitle: "Come and enjoy the moment",
    align: "center",
    primaryButton: {
      label: "Show Event Calendar",
      onPress: fn(),
    },
    events: [
      {
        title: "Gatherloop Connect & Learn",
        datetime: "2025-02-01T12:00:00Z",
        imageSource:
          "https://plus.unsplash.com/premium_photo-1663127045456-09e1362c3b47?blend=000000&blend-alpha=10&blend-mode=normal&blend-w=1&crop=faces%2Cedges&h=630&mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAxNzIyODY5fA&ixlib=rb-4.0.3",
      },
      {
        title: "English Day",
        datetime: "2025-02-06T12:00:00Z",
        imageSource:
          "https://img.freepik.com/premium-photo/creative-business-people-discussion_13339-72977.jpg",
      },
      {
        title: "Meetup Web - HTML & CSS",
        datetime: "2025-02-07T07:00:00Z",
        imageSource:
          "https://images.unsplash.com/photo-1556636530-6b7482d80e3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcGVyfHwwfHx8fDE2MjA3MzY4MDE&ixlib=rb-1.2.1&q=80&w=1080",
      },
      {
        title: "Coding Day",
        datetime: "2025-02-07T12:00:00Z",
        imageSource:
          "https://lemonlearning.com/wp-content/uploads/2023/06/picture-efficacite-maximale-gestion-complet-projet.jpg",
      },
      {
        title: "Workshop Board Game",
        datetime: "2025-02-08T12:00:00Z",
        imageSource:
          "https://miro.medium.com/v2/resize:fit:1104/1*jYGjUDeXz0d9NMWR_SIErg.jpeg",
      },
      {
        title: "English Day",
        datetime: "2025-02-13T12:00:00Z",
        imageSource:
          "https://img.freepik.com/premium-photo/creative-business-people-discussion_13339-72977.jpg",
      },
      {
        title: "Meetup Web - Server Node.js",
        datetime: "2025-02-14T07:00:00Z",
        imageSource:
          "https://images.unsplash.com/photo-1556636530-6b7482d80e3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcGVyfHwwfHx8fDE2MjA3MzY4MDE&ixlib=rb-1.2.1&q=80&w=1080",
      },
      {
        title: "Coding Day",
        datetime: "2025-02-14T12:00:00Z",
        imageSource:
          "https://lemonlearning.com/wp-content/uploads/2023/06/picture-efficacite-maximale-gestion-complet-projet.jpg",
      },
      {
        title: "Bedah Buku",
        datetime: "2025-02-15T15:00:00Z",
        imageSource:
          "https://img.freepik.com/free-photo/group-people-reading-books-therapy-session_23-2148856223.jpg",
      },
      {
        title: "English Day",
        datetime: "2025-02-20T12:00:00Z",
        imageSource:
          "https://img.freepik.com/premium-photo/creative-business-people-discussion_13339-72977.jpg",
      },
      {
        title: "Meetup Android - Introduction",
        datetime: "2025-02-21T07:00:00Z",
        imageSource:
          "https://media.istockphoto.com/id/1334906074/photo/web-designer-working-with-multiple-devices.jpg?b=1&s=170667a&w=0&k=20&c=gQtc5l3nwoegnM8fc9jKzOCbh709i1FYE1p8gljrtOs=",
      },
      {
        title: "Coding Day",
        datetime: "2025-02-21T12:00:00Z",
        imageSource:
          "https://lemonlearning.com/wp-content/uploads/2023/06/picture-efficacite-maximale-gestion-complet-projet.jpg",
      },
      {
        title: "Diskusi Software Engineer",
        datetime: "2025-02-22T07:00:00Z",
        imageSource:
          "https://lemonlearning.com/wp-content/uploads/2023/06/picture-efficacite-maximale-gestion-complet-projet.jpg",
      },
      {
        title: "English Day",
        datetime: "2025-02-27T12:00:00Z",
        imageSource:
          "https://img.freepik.com/premium-photo/creative-business-people-discussion_13339-72977.jpg",
      },
      {
        title: "Meetup Game Dev - Introduction",
        datetime: "2025-02-28T07:00:00Z",
        imageSource:
          "https://media.istockphoto.com/id/1334906074/photo/web-designer-working-with-multiple-devices.jpg?b=1&s=170667a&w=0&k=20&c=gQtc5l3nwoegnM8fc9jKzOCbh709i1FYE1p8gljrtOs=",
      },
      {
        title: "Coding Day",
        datetime: "2025-02-28T12:00:00Z",
        imageSource:
          "https://lemonlearning.com/wp-content/uploads/2023/06/picture-efficacite-maximale-gestion-complet-projet.jpg",
      },
    ],
  },
};
