// import Icon from "@tamagui/lucide-icons";
import { Avatar, H5, Paragraph, XStack, YStack } from "./ui";
import { PageHeader } from "./PageHeader";

export type TeamWithInlineHeadProps = {
  title: string;
  subtitle: string;
  members: {
    name: string;
    role: string;
    imageSource: string;
    socialMediaLink: {
      github?: string;
      linkedin?: string;
      web?: string;
    };
  }[];
};

export const TeamWithInlineHead = (props: TeamWithInlineHeadProps) => {
  return (
    <XStack gap="$5" $md={{ flexDirection: "column" }}>
      <YStack maxWidth={480} gap="$3">
        <PageHeader title={props.title} subtitle={props.subtitle} />
      </YStack>

      <XStack gap="$8" flexWrap="wrap">
        {props.members.map((member) => (
          <XStack
            key={member.name}
            alignItems="center"
            gap="$3"
            flexBasis="30%"
            $md={{ flexBasis: "45%" }}
            $sm={{ flexBasis: "100%" }}
          >
            <Avatar circular size="$10">
              <Avatar.Image src={member.imageSource} />
              <Avatar.Fallback backgroundColor="red" />
            </Avatar>
            <YStack gap="$3">
              <YStack>
                <H5>{member.name}</H5>
                <Paragraph color="$blue11">{member.role}</Paragraph>
              </YStack>
              <XStack gap="$3">
                {member.socialMediaLink.github && (
                  <a href={member.socialMediaLink.github}>
                    {/* <Icon.Github size="$1" /> */}
                  </a>
                )}

                {member.socialMediaLink.linkedin && (
                  <a href={member.socialMediaLink.linkedin}>
                    {/* <Icon.Linkedin size="$1" /> */}
                  </a>
                )}

                {member.socialMediaLink.web && (
                  <a href={member.socialMediaLink.web}>
                    {/* <Icon.Globe size="$1" /> */}
                  </a>
                )}
              </XStack>
            </YStack>
          </XStack>
        ))}
      </XStack>
    </XStack>
  );
};
