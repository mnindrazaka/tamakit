import { Button, H2, Image, Paragraph, XStack, YStack } from "tamagui";
import { PageHeader } from "./PageHeader";

export type PortfolioProps = {
  title: string;
  subtitle: string;
  tag?: string;
  primaryButton?: {
    label: string;
    onPress: () => void;
  };
  secondaryButton?: {
    label: string;
    onPress: () => void;
  };
  items: {
    imageSource: string;
    title: string;
    content: string;
    categoryName?: string;
    onPress: () => void;
  }[];
};

export const Portfolio = (props: PortfolioProps) => {
  return (
    <YStack gap="$6">
      <PageHeader
        tag={props.tag}
        title={props.title}
        subtitle={props.subtitle}
        primaryButton={props.primaryButton}
        secondaryButton={props.secondaryButton}
        align="center"
      />
      <YStack gap="$10">
        {props.items.map((item, index) => (
          <XStack
            key={item.title}
            gap="$10"
            $gtXs={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
            $xs={{ flexDirection: "column-reverse" }}
            justifyContent="center"
          >
            <Image
              maxWidth={360}
              width="100%"
              aspectRatio={1 / 1}
              source={{ uri: item.imageSource }}
              defaultSource={{ uri: item.imageSource }}
              borderRadius="$5"
            />
            <YStack gap="$5" alignItems="flex-start" maxWidth={360}>
              {item.categoryName && (
                <Paragraph theme="alt1">{item.categoryName}</Paragraph>
              )}
              <H2>{item.title}</H2>
              <Paragraph size="$5">{item.content}</Paragraph>
              <Button onPress={item.onPress}>Read More</Button>
            </YStack>
          </XStack>
        ))}
      </YStack>
    </YStack>
  );
};
