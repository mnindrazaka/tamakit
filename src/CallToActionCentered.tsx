import React from "react";
import { YStack } from "tamagui";
import { PageHeader } from "./PageHeader";

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
      $sm={{ padding: "$5" }}
    >
      <YStack maxWidth={640} gap="$5">
        <PageHeader
          title={props.title}
          subtitle={props.subtitle}
          align="center"
          primaryButton={props.primaryButton}
          secondaryButton={props.secondaryButton}
        />
      </YStack>
    </YStack>
  );
};
