import React from "react";
import { Avatar, Image, Paragraph, XStack, YStack } from "tamagui";

export type TestimonialProps = {
  items: {
    name: string;
    role: string;
    profileImageSource: string;
    logoImageSource: string;
    content: string;
  }[];
};

export const Testimonial = (props: TestimonialProps) => {
  return (
    <XStack flexWrap="wrap" gap="$8">
      {props.items.map((item) => (
        <YStack
          key={item.name}
          flexBasis="48%"
          gap="$5"
          $md={{ flexBasis: "100%" }}
        >
          <Paragraph size="$6">{item.content}</Paragraph>
          <XStack
            gap="$5"
            alignItems="center"
            $sm={{
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "$2",
            }}
          >
            <Avatar circular size="$5">
              <Avatar.Image src={item.profileImageSource} />
              <Avatar.Fallback bc="red" />
            </Avatar>
            <YStack>
              <Paragraph size="$5" fontWeight="$10">
                {item.name}
              </Paragraph>
              <Paragraph size="$5">{item.role}</Paragraph>
            </YStack>
            <YStack
              borderRightWidth="$0.5"
              borderColor="$gray6"
              alignSelf="stretch"
            />
            <Image
              aspectRatio={16 / 9}
              resizeMode="contain"
              width={80}
              defaultSource={{ uri: item.logoImageSource }}
              source={{ uri: item.logoImageSource }}
            />
          </XStack>
        </YStack>
      ))}
    </XStack>
  );
};
