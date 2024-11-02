import React from "react";
import { Button, H1, Image, Paragraph, XStack, YStack } from "tamagui";

export type HeroWithImageBackgroundProps = {
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

export const HeroWithImageBackground = (
  props: HeroWithImageBackgroundProps
) => {
  return (
    <XStack
      position="relative"
      $sm={{ padding: "$5" }}
      $md={{ padding: "$10" }}
      padding="$12"
    >
      <YStack
        $sm={{ maxWidth: "100%" }}
        $md={{ maxWidth: 360 }}
        gap="$5"
        maxWidth={480}
        theme="dark"
      >
        <H1 $sm={{ size: "$9" }}>{props.title}</H1>
        <Paragraph size="$6">{props.subtitle}</Paragraph>
        <XStack gap="$3" $sm={{ flexDirection: "column" }}>
          <Button theme="blue" size="$5" onPress={props.primaryButton.onPress}>
            {props.primaryButton.label}
          </Button>
          <Button size="$5" onPress={props.secondaryButton.onPress}>
            {props.secondaryButton.label}
          </Button>
        </XStack>
      </YStack>
      <YStack
        flex={1}
        top={0}
        bottom={0}
        left={0}
        right={0}
        position="absolute"
        zIndex={-999}
      >
        <YStack
          top={0}
          bottom={0}
          left={0}
          right={0}
          position="absolute"
          backgroundColor="$black1"
          opacity={0.5}
          zIndex={999}
        ></YStack>
        <Image
          width="100%"
          height="100%"
          defaultSource={{ uri: props.imageSource }}
          source={{ uri: props.imageSource }}
        />
      </YStack>
    </XStack>
  );
};
