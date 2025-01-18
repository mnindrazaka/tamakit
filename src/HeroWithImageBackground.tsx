import { Image, XStack, YStack } from "tamagui";
import { PageHeader } from "./PageHeader";

export type HeroWithImageBackgroundProps = {
  title: string;
  subtitle: string;
  primaryButton?: {
    label: string;
    onPress: () => void;
  };
  secondaryButton?: {
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
      $sm={{ padding: "$8" }}
      $md={{ padding: "$10" }}
      padding="$19"
      themeInverse
    >
      <YStack
        $sm={{ maxWidth: "100%" }}
        $md={{ maxWidth: 360 }}
        gap="$5"
        maxWidth={480}
      >
        <PageHeader
          title={props.title}
          subtitle={props.subtitle}
          primaryButton={props.primaryButton}
          secondaryButton={props.secondaryButton}
        />
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
          backgroundColor="$background"
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
