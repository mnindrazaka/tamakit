import { Image, Theme, XStack, YStack } from "tamagui";
import { PageHeader } from "./PageHeader";

export type HeroWithAccentProps = {
  tag?: string;
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
        flex={1}
        flexBasis={0}
        justifyContent="center"
        backgroundColor="$background"
        $sm={{ flexBasis: "auto" }}
      >
        <PageHeader
          tag={props.tag}
          title={props.title}
          subtitle={props.subtitle}
          primaryButton={props.primaryButton}
          secondaryButton={props.secondaryButton}
          padding="$8"
        />
      </YStack>

      <Image
        width="100%"
        aspectRatio={4 / 3}
        defaultSource={{ uri: props.imageSource }}
        source={{ uri: props.imageSource }}
        flex={1}
        flexBasis={0}
        $sm={{ flexBasis: "auto" }}
      />
    </XStack>
  );
};
