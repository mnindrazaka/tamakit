import { Paragraph, XStack, YStack } from "tamagui";
import { PageHeader } from "./PageHeader";

export type StatsWithHighlightProps = {
  title: string;
  subtitle: string;
  items: {
    title: string;
    subtitle: string;
  }[];
};

export const StatsWithHighlight = (props: StatsWithHighlightProps) => {
  return (
    <YStack gap="$5" alignItems="center">
      <YStack maxWidth={640}>
        <PageHeader
          title={props.title}
          subtitle={props.subtitle}
          align="center"
        />
      </YStack>

      <XStack
        gap="$10"
        theme="blue"
        backgroundColor="$blue5"
        paddingVertical="$5"
        paddingHorizontal="$15"
        borderRadius="$5"
        $sm={{ flexDirection: "column", paddingHorizontal: "$10" }}
      >
        {props.items.map((item) => (
          <YStack alignItems="center" key={item.title}>
            <Paragraph size="$10" textAlign="center">
              {item.title}
            </Paragraph>
            <Paragraph size="$5" textAlign="center">
              {item.subtitle}
            </Paragraph>
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
};
