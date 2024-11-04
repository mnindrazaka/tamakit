import React from "react";
import { Button, H1, Paragraph, XStack, YStack } from "tamagui";

export type CallToActionCenteredProps = {
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

export const CallToActionCentered = (props: CallToActionCenteredProps) => {
  return (
    <YStack
      padding="$8"
      elevation="$1"
      justifyContent="center"
      alignItems="center"
      gap="$5"
    >
      <YStack maxWidth={640} gap="$5">
        <H1 textAlign="center">{props.title}</H1>
        <Paragraph size="$6" textAlign="center">
          {props.subtitle}
        </Paragraph>
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
    </YStack>
  );
};
