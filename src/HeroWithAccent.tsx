import { Image, Theme, XStack, YStack } from "tamagui";
import { PageHeader } from "./PageHeader";

export type HeroWithAccentProps = {
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
  headingPosition?: "left" | "right";
};

export const HeroWithAccent = (props: HeroWithAccentProps) => {
  const flexDirection =
    props.headingPosition === "right" ? "row-reverse" : "row";
  return (
    <XStack
      $sm={{
        flexDirection: "column-reverse",
        justifyContent: "center",
        alignItems: "stretch",
      }}
      justifyContent="space-between"
      flexDirection={flexDirection}
    >
      <YStack
        themeInverse
        $sm={{
          maxWidth: "100%",
          padding: "$8",
        }}
        $md={{ maxWidth: 480 }}
        gap="$5"
        justifyContent="center"
        backgroundColor="$background"
        paddingHorizontal="$10"
        paddingVertical="$15"
        flex={1}
      >
        <YStack maxWidth={500}>
          <PageHeader
            title={props.title}
            subtitle={props.subtitle}
            primaryButton={props.primaryButton}
            secondaryButton={props.secondaryButton}
          />
        </YStack>
      </YStack>
      <YStack flex={1}>
        <Image
          width="100%"
          height="100%"
          aspectRatio={4 / 3}
          defaultSource={{ uri: props.imageSource }}
          source={{ uri: props.imageSource }}
        />
      </YStack>
    </XStack>
  );
};
