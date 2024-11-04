import React from "react";
import { H1, Paragraph, XStack, YStack } from "tamagui";

export type StatsWithHighlightProps = {
  title: string;
  subtitle: string;
  items: {
    title: string;
    subtitle: string;
  }[];
};

export const StatsWithHighlight = (props: StatsWithHighlightProps) => {
  return (
    <YStack gap="$5" alignItems="center">
      <YStack gap="$5" maxWidth={640}>
        <H1 textAlign="center">{props.title}</H1>
        <Paragraph size="$5" textAlign="center">
          {props.subtitle}
        </Paragraph>
      </YStack>

      <XStack
        gap="$10"
        theme="blue"
        backgroundColor="$blue11"
        paddingVertical="$5"
        paddingHorizontal="$15"
        borderRadius="$5"
        $sm={{ flexDirection: "column", paddingHorizontal: "$10" }}
      >
        {props.items.map((item) => (
          <YStack alignItems="center" key={item.title}>
            <Paragraph size="$10" color="$gray1" textAlign="center">
              {item.title}
            </Paragraph>
            <Paragraph size="$5" color="$gray1" textAlign="center">
              {item.subtitle}
            </Paragraph>
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
};
