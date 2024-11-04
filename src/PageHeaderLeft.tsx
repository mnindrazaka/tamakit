import React from "react";
import { H1, Paragraph, YStack } from "tamagui";

export type PageHeaderLeftProps = {
  title: string;
  subtitle: string;
  tag?: string;
};

export const PageHeaderLeft = (props: PageHeaderLeftProps) => {
  return (
    <YStack gap="$3">
      {props.tag && (
        <Paragraph color="$blue11" size="$5">
          {props.tag}
        </Paragraph>
      )}
      <H1>{props.title}</H1>
      <Paragraph size="$6">{props.subtitle}</Paragraph>
    </YStack>
  );
};
