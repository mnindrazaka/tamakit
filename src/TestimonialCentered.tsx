import React from "react";
import { Avatar, Image, Paragraph, XStack, YStack } from "tamagui";

export type TestimonialCenteredProps = {
  items: {
    name: string;
    role: string;
    profileImageSource: string;
    logoImageSource: string;
    content: string;
  }[];
};

export const TestimonialCentered = (props: TestimonialCenteredProps) => {
  return (
    <XStack flexWrap="wrap" gap="$8">
      {props.items.map((item) => (
        <YStack
          key={item.name}
          flexBasis="30%"
          gap="$5"
          $md={{ flexBasis: "45%" }}
          $sm={{ flexBasis: "100%" }}
          alignItems="center"
        >
          <Image
            aspectRatio={16 / 9}
            resizeMode="contain"
            width={80}
            defaultSource={{ uri: item.logoImageSource }}
            source={{ uri: item.logoImageSource }}
          />
          <Paragraph size="$6" textAlign="center">
            {item.content}
          </Paragraph>
          <YStack alignItems="center" gap="$3">
            <Avatar circular size="$5">
              <Avatar.Image src={item.profileImageSource} />
              <Avatar.Fallback backgroundColor="red" />
            </Avatar>
            <YStack>
              <Paragraph size="$5" fontWeight="$10" textAlign="center">
                {item.name}
              </Paragraph>
              <Paragraph size="$5" textAlign="center">
                {item.role}
              </Paragraph>
            </YStack>
          </YStack>
        </YStack>
      ))}
    </XStack>
  );
};
