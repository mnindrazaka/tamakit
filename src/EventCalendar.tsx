import { H2, H4, Image, Paragraph, XStack, YStack } from "tamagui";
import dayjs from "dayjs";
import { PageHeader } from "./PageHeader";

export type EventCalendarProps = {
  events: {
    imageSource: string;
    datetime: string;
    title: string;
  }[];
  title: string;
  subtitle: string;
  maxColumn: number;
  primaryButton?: {
    label: string;
    onPress: () => void;
  };
  secondaryButton?: {
    label: string;
    onPress: () => void;
  };
  align?: "left" | "center";
  tag?: string;
};

export const EventCalendar = (props: EventCalendarProps) => {
  return (
    <YStack gap="$5">
      <PageHeader
        title={props.title}
        subtitle={props.subtitle}
        align={props.align}
        primaryButton={props.primaryButton}
        secondaryButton={props.secondaryButton}
        tag={props.tag}
      />
      <XStack gap="$5" flexWrap="wrap">
        {props.events.map((event) => {
          const parsedDatetime = dayjs(new Date(event.datetime));
          return (
            <YStack
              flexBasis="22%"
              $md={{ flexBasis: "30%" }}
              $sm={{ flexBasis: "46%" }}
              $xs={{ flexBasis: "100%" }}
              gap="$5"
              elevation={5}
              borderRadius="$5"
              overflow="hidden"
            >
              <Image aspectRatio={16 / 9} source={{ uri: event.imageSource }} />
              <XStack
                gap="$3"
                alignItems="center"
                paddingLeft="$5"
                paddingRight="$5"
                paddingBottom="$5"
                $sm={{ flexDirection: "column" }}
                $xs={{ flexDirection: "row" }}
              >
                <YStack>
                  <H4 color="$red10" $md={{ size: "$6" }}>
                    {parsedDatetime.format("MMM")}
                  </H4>
                  <H2 $md={{ size: "$8" }}>{parsedDatetime.format("DD")}</H2>
                </YStack>
                <YStack flex={1}>
                  <Paragraph size="$6">
                    {parsedDatetime.format("HH:mm")}
                  </Paragraph>
                  <Paragraph size="$6">{event.title}</Paragraph>
                </YStack>
              </XStack>
            </YStack>
          );
        })}
      </XStack>
    </YStack>
  );
};
