import React from "react";
import { H1, Paragraph, YStack } from "tamagui";

export type PageHeaderProps = {
  title: string;
  subtitle: string;
  tag?: string;
};

export const PageHeader = (props: PageHeaderProps) => {
  return (
    <YStack gap="$3">
      {props.tag && (
        <Paragraph color="$blue11" textAlign="center" size="$5">
          {props.tag}
        </Paragraph>
      )}
      <H1 textAlign="center">{props.title}</H1>
      <Paragraph size="$6" textAlign="center">
        {props.subtitle}
      </Paragraph>
    </YStack>
  );
};
