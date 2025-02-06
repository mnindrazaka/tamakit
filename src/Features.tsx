import { H3, Image, Paragraph, XStack, YStack } from "tamagui";
import { PageHeader } from "./PageHeader";

export type FeaturesProps = {
  align?: "left" | "center";
  tag?: string;
  primaryButton?: {
    label: string;
    onPress: () => void;
  };
  secondaryButton?: {
    label: string;
    onPress: () => void;
  };
  title: string;
  subtitle: string;
  items: {
    imageSource: string;
    title: string;
    subtitle: string;
  }[];
};

export const Features = (props: FeaturesProps) => {
  return (
    <YStack gap="$8">
      <YStack maxWidth={640}>
        <PageHeader
          title={props.title}
          subtitle={props.subtitle}
          tag={props.tag}
          primaryButton={props.primaryButton}
          secondaryButton={props.secondaryButton}
          align={props.align}
        />
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
                width={248}
                defaultSource={{ uri: item.imageSource }}
                source={{ uri: item.imageSource }}
              />
              <YStack>
                <H3>{item.title}</H3>
                <Paragraph size="$5">{item.subtitle}</Paragraph>
              </YStack>
            </YStack>
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
};
