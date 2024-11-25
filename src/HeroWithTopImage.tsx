import { Button, H1, Image, Paragraph, XStack, YStack } from "tamagui";

export type HeroWithTopImageProps = {
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

export const HeroWithTopImage = (props: HeroWithTopImageProps) => {
  return (
    <YStack>
      <Image
        aspectRatio={30 / 9}
        width="100%"
        height="100%"
        defaultSource={{ uri: props.imageSource }}
        source={{ uri: props.imageSource }}
      />
      <XStack
        padding="$6"
        justifyContent="center"
        gap="$5"
        $sm={{ flexDirection: "column", padding: "$3" }}
      >
        <H1 flex={1} maxWidth={480} $sm={{ size: "$9" }}>
          {props.title}
        </H1>
        <YStack flex={1} maxWidth={480} gap="$5">
          <Paragraph size="$6">{props.subtitle}</Paragraph>
          <XStack gap="$5" $sm={{ flexDirection: "column" }}>
            <Button
              theme="active"
              size="$5"
              onPress={props.primaryButton.onPress}
            >
              {props.primaryButton.label}
            </Button>
            <Button size="$5" onPress={props.secondaryButton.onPress}>
              {props.secondaryButton.label}
            </Button>
          </XStack>
        </YStack>
      </XStack>
    </YStack>
  );
};
