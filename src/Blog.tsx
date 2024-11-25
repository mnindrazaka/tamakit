import { Avatar, H4, Image, Paragraph, XStack, YStack } from "tamagui";
import { PageHeader } from "./PageHeader";

export type BlogProps = {
  title: string;
  subtitle: string;
  tag?: string;
  items: {
    imageSource: string;
    title: string;
    content: string;
    categoryName?: string;
    author: {
      name: string;
      imageSource: string;
    };
    publishedAt: string;
    onPress: () => void;
  }[];
};

export const Blog = (props: BlogProps) => {
  return (
    <YStack gap="$6">
      <PageHeader
        tag={props.tag}
        title={props.title}
        subtitle={props.subtitle}
      />
      <XStack flexWrap="wrap" gap="$8">
        {props.items.map((item) => (
          <YStack
            key={item.title}
            flexBasis="30%"
            gap="$5"
            cursor="pointer"
            onPress={item.onPress}
            $md={{ flexBasis: "45%" }}
            $sm={{ flexBasis: "100%" }}
          >
            <Image
              width="100%"
              aspectRatio={16 / 9}
              source={{ uri: item.imageSource }}
              defaultSource={{ uri: item.imageSource }}
            />
            <YStack>
              {item.categoryName && (
                <Paragraph theme="alt1">{item.categoryName}</Paragraph>
              )}
              <H4>{item.title}</H4>
              <Paragraph size="$5">{item.content}</Paragraph>
            </YStack>
            <XStack gap="$3">
              <Avatar circular size="$5">
                <Avatar.Image src={item.author.imageSource} />
                <Avatar.Fallback backgroundColor="red" />
              </Avatar>
              <YStack>
                <Paragraph fontWeight="$6">{item.author.name}</Paragraph>
                <Paragraph color="$gray11">{item.publishedAt}</Paragraph>
              </YStack>
            </XStack>
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
};
