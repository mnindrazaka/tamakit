import React from "react";
import { Button, H1, Paragraph, XStack, YStack } from "tamagui";

export type CallToActionProps = {
  title: string;
  subtitle: string;
  primaryButton: {
    label: string;
    onPress: () => void;
  };
  secondaryButton: {
    label: string;
    onPress: () => void;
  };
};

export const CallToAction = (props: CallToActionProps) => {
  return (
    <XStack
      padding="$8"
      elevation="$1"
      justifyContent="space-between"
      alignItems="center"
      gap="$5"
      $md={{
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <YStack maxWidth={640} gap="$3">
        <H1>{props.title}</H1>
        <Paragraph size="$6">{props.subtitle}</Paragraph>
      </YStack>
      <XStack
        gap="$3"
        $sm={{
          flexDirection: "column",
          alignSelf: "stretch",
        }}
      >
        <Button onPress={props.secondaryButton.onPress}>
          {props.secondaryButton.label}
        </Button>
        <Button theme="blue" onPress={props.secondaryButton.onPress}>
          {props.secondaryButton.label}
        </Button>
      </XStack>
    </XStack>
  );
};
