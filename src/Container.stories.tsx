import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";
import { Paragraph, YStack } from "tamagui";

export default { component: Container } as Meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <YStack backgroundColor="blue" padding="$5">
        <Paragraph color="white">Lorem Ipsum Dolor Sit Amet</Paragraph>
      </YStack>
    ),
  },
};
