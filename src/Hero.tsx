import { Image, XStack, YStack } from "tamagui";
import { PageHeader } from "./PageHeader";

export type HeroProps = {
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

export const Hero = (props: HeroProps) => {
  return (
    <XStack
      $sm={{
        flexDirection: "column-reverse",
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
        <PageHeader
          title={props.title}
          subtitle={props.subtitle}
          primaryButton={props.primaryButton}
          secondaryButton={props.secondaryButton}
        />
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
