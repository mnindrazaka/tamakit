import React from "react";
import { Button, H4, Image, Paragraph, XStack, YStack } from "tamagui";
import { ArrowRight } from "@tamagui/lucide-icons";
import { PageHeader } from "./PageHeader";

export type FeaturesProps = {
  title: string;
  subtitle: string;
  items: {
    imageSource: string;
    title: string;
    subtitle: string;
    onPress: () => void;
  }[];
};

export const Features = (props: FeaturesProps) => {
  return (
    <YStack gap="$8">
      <YStack maxWidth={640}>
        <PageHeader title={props.title} subtitle={props.subtitle} />
      </YStack>

      <XStack gap="$8" flexWrap="wrap">
        {props.items.map((item) => (
          <YStack
            key={item.title}
            flexBasis="30%"
            $md={{ flexBasis: "38%" }}
            $sm={{ flexBasis: "100%" }}
          >
            <YStack
              gap="$3"
              alignItems="flex-start"
              maxWidth={480}
              height="100%"
              justifyContent="space-between"
            >
              <Image
                aspectRatio={1 / 1}
                width={64}
                defaultSource={{ uri: item.imageSource }}
                source={{ uri: item.imageSource }}
              />
              <YStack>
                <H4>{item.title}</H4>
                <Paragraph>{item.subtitle}</Paragraph>
              </YStack>
              <Button
                variant="outlined"
                iconAfter={ArrowRight}
                onPress={item.onPress}
                theme="blue"
              >
                Read More
              </Button>
            </YStack>
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
};
