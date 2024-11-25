import { Paragraph, XStack, YStack } from "tamagui";
import { PageHeader } from "./PageHeader";

export type StatsProps = {
  title: string;
  subtitle: string;
  items: {
    title: string;
    subtitle: string;
  }[];
};

export const Stats = (props: StatsProps) => {
  return (
    <YStack gap="$5" alignItems="center">
      <YStack maxWidth={640}>
        <PageHeader
          title={props.title}
          subtitle={props.subtitle}
          align="center"
        />
      </YStack>

      <XStack gap="$10" $sm={{ flexDirection: "column" }}>
        {props.items.map((item, index) => (
          <>
            <YStack alignItems="center">
              <Paragraph size="$10" theme="alt1" textAlign="center">
                {item.title}
              </Paragraph>
              <Paragraph size="$5" textAlign="center">
                {item.subtitle}
              </Paragraph>
            </YStack>
            {index < props.items.length - 1 ? (
              <YStack
                borderRightWidth="$0.5"
                borderColor="$gray5"
                $sm={{ display: "none" }}
              />
            ) : null}
          </>
        ))}
      </XStack>
    </YStack>
  );
};
