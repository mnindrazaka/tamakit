import { Meta, StoryObj } from "@storybook/react";
import { Curriculum } from "./Curriculum";

export default { component: Curriculum } as Meta;

type Story = StoryObj<typeof Curriculum>;

export const Default: Story = {
  args: {
    tag: "Curriculum",
    title: "Everything you learn with Epic React",
    subtitle:
      "Starting with the fundamentals all the way through the latest in React Server Components, you'll learn everything you need to know to build production-ready React applications.",
    topics: [
      {
        title: "React Fundamentals",
        description:
          "Starting with an HTML file and a script, you'll learn React API to build components and manage forms. Learn the fundamentals of building on the web with React.",
        imageSource:
          "https://www.epicreact.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fepic-web%2Fimage%2Fupload%2Fv1723149668%2FReact_Fundamentals.png&w=640&q=75",
        subtopics: ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"],
      },
      {
        title: "React Hooks",
        description:
          "Learn React hooks to add interactivity to your apps and build dynamic websites. You'll learn the core React hooks including useState, useEffect, and useRef.",
        imageSource:
          "https://www.epicreact.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fepic-web%2Fimage%2Fupload%2Fv1723149668%2FReact_Hooks.png&w=640&q=75",
        subtopics: ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"],
      },
      {
        title: "Advanced React APIs",
        description:
          "Learn the hooks and API that React has to offer for complex state management, sharing context throughout your app, focus management and more.",
        imageSource:
          "https://www.epicreact.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fepic-web%2Fimage%2Fupload%2Fv1723149668%2FAdvenced_React_Hooks.png&w=640&q=75",
        subtopics: ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"],
      },
      {
        title: "React Suspense",
        description:
          "Learn how Suspense works under the hood, preparing you for the future of asynchronous state management.",
        imageSource:
          "https://www.epicreact.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fepic-web%2Fimage%2Fupload%2Fv1723149669%2FReact_Suspense.png&w=640&q=75",
        subtopics: ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"],
      },
    ],
  },
};
