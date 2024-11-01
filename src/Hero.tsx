import React from "react";
import { Button, H1, Image, Paragraph, XStack, YStack } from "tamagui";

export type HeroProps = {
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
  imageSource: string;
};

export const Hero = (props: HeroProps) => {
  return (
    <XStack
      $sm={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        gap: "$5",
      }}
      gap="$10"
      justifyContent="space-between"
      alignItems="center"
    >
      <YStack
        $sm={{ maxWidth: "100%" }}
        $md={{ maxWidth: 360 }}
        gap="$5"
        maxWidth={480}
      >
        <H1>{props.title}</H1>
        <Paragraph size="$6">{props.subtitle}</Paragraph>
        <XStack gap="$3">
          <Button theme="blue" size="$5" onPress={props.primaryButton.onPress}>
            {props.primaryButton.label}
          </Button>
          <Button size="$5" onPress={props.secondaryButton.onPress}>
            {props.secondaryButton.label}
          </Button>
        </XStack>
      </YStack>
      <YStack flex={1}>
        <Image
          width="100%"
          height="100%"
          aspectRatio={16 / 9}
          defaultSource={{ uri: props.imageSource }}
          source={{ uri: props.imageSource }}
        />
      </YStack>
    </XStack>
  );
};
