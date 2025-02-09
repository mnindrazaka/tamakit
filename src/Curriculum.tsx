import { H2, H3, H4, Image, Paragraph, Theme, XStack, YStack } from "tamagui";
import { CircleCheck } from "@tamagui/lucide-icons";
import { PageHeader } from "./PageHeader";

export type CurriculumProps = {
  tag?: string;
  title: string;
  subtitle: string;
  align?: "left" | "center";
  primaryButton?: {
    label: string;
    onPress: () => void;
  };
  secondaryButton?: {
    label: string;
    onPress: () => void;
  };
  topics: {
    title: string;
    description: string;
    imageSource: string;
    subtopics: string[];
  }[];
};

export const Curriculum = (props: CurriculumProps) => {
  return (
    <YStack>
      <PageHeader
        tag={props.tag}
        title={props.title}
        subtitle={props.subtitle}
        align={props.align}
        primaryButton={props.primaryButton}
        secondaryButton={props.secondaryButton}
      />
      <YStack gap="$8">
        {props.topics.map((topic) => (
          <XStack gap="$5" key={topic.title} $sm={{ flexDirection: "column" }}>
            <Image
              width="100%"
              maxWidth={240}
              aspectRatio={1 / 1}
              defaultSource={{ uri: topic.imageSource }}
              source={{ uri: topic.imageSource }}
            />
            <YStack
              gap="$2"
              flex={1}
              flexBasis={0}
              maxWidth={640}
              $sm={{ flexBasis: "auto" }}
            >
              <H2>{topic.title}</H2>
              <Paragraph size="$5">{topic.description}</Paragraph>
              {topic.subtopics.map((subtopic) => (
                <XStack gap="$2" key={subtopic}>
                  <Theme name="alt1">
                    <CircleCheck />
                  </Theme>
                  <Paragraph size="$5">{subtopic}</Paragraph>
                </XStack>
              ))}
            </YStack>
          </XStack>
        ))}
      </YStack>
    </YStack>
  );
};
