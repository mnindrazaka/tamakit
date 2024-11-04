import React from "react";
import { H1, H2, H3, Image, XStack, YStack } from "tamagui";

export type LogoGridWithTileProps = {
  title: string;
  items: { imageSource: string; href: string }[];
};

export const LogoGridWithTile = (props: LogoGridWithTileProps) => {
  return (
    <YStack alignItems="center" gap="$5">
      <H3>{props.title}</H3>
      <XStack
        justifyContent="center"
        alignSelf="stretch"
        $sm={{ gap: "$3" }}
        gap="$10"
        flexWrap="wrap"
      >
        {props.items.map((item) => (
          <YStack
            flexBasis="20%"
            $md={{ flexBasis: "33%" }}
            $sm={{ flexBasis: "40%", padding: "$5" }}
            padding="$8"
            elevation="$1"
            borderRadius="$5"
          >
            <Image
              resizeMode="contain"
              aspectRatio={16 / 9}
              width="100%"
              height="100%"
              defaultSource={{ uri: item.imageSource }}
              source={{ uri: item.imageSource }}
            />
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
};
