import { H3, Image, XStack, YStack } from "tamagui";

export type LogoGridProps = {
  title: string;
  items: { imageSource: string; href: string }[];
};

export const LogoGrid = (props: LogoGridProps) => {
  return (
    <YStack alignItems="center" gap="$5">
      <H3>{props.title}</H3>
      <XStack
        justifyContent="center"
        alignSelf="stretch"
        gap="$5"
        flexWrap="wrap"
      >
        {props.items.map((item) => (
          <YStack
            flexBasis="23%"
            $md={{ flexBasis: "33%", padding: "$3" }}
            $sm={{ flexBasis: "48%", padding: "$3" }}
            padding="$8"
          >
            <Image
              resizeMode="contain"
              aspectRatio={16 / 9}
              width="100%"
              height="100%"
              defaultSource={{ uri: item.imageSource }}
              source={{ uri: item.imageSource }}
            />
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
};
