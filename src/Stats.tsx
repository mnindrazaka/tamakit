import React from "react";
import { H1, Paragraph, XStack, YStack } from "tamagui";

export type StatsProps = {
  title: string;
  subtitle: string;
  items: {
    title: string;
    subtitle: string;
  }[];
};

export const Stats = (props: StatsProps) => {
  return (
    <YStack gap="$5" alignItems="center">
      <YStack gap="$5" maxWidth={640}>
        <H1 textAlign="center">{props.title}</H1>
        <Paragraph size="$5" textAlign="center">
          {props.subtitle}
        </Paragraph>
      </YStack>

      <XStack gap="$10" $sm={{ flexDirection: "column" }}>
        {props.items.map((item, index) => (
          <>
            <YStack alignItems="center">
              <Paragraph size="$10" color="$blue11" textAlign="center">
                {item.title}
              </Paragraph>
              <Paragraph size="$5" textAlign="center">
                {item.subtitle}
              </Paragraph>
            </YStack>
            {index < props.items.length - 1 ? (
              <YStack
                borderRightWidth="$0.5"
                borderColor="$gray5"
                $sm={{ display: "none" }}
              />
            ) : null}
          </>
        ))}
      </XStack>
    </YStack>
  );
};
