import { Github, Globe, Linkedin } from "@tamagui/lucide-icons";

import { Avatar, H5, Paragraph, XStack, YStack } from "./ui";
import { PageHeader } from "./PageHeader";

export type TeamProps = {
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

export const Team = (props: TeamProps) => {
  return (
    <YStack alignItems="center" gap="$5">
      <YStack maxWidth={640} gap="$3">
        <PageHeader
          title={props.title}
          subtitle={props.subtitle}
          align="center"
        />
      </YStack>

      <XStack gap="$8" flexWrap="wrap">
        {props.members.map((member) => (
          <YStack
            key={member.name}
            alignItems="center"
            gap="$3"
            flexBasis="20%"
            $md={{ flexBasis: "45%" }}
            $sm={{ flexBasis: "40%" }}
          >
            <Avatar circular size="$10">
              <Avatar.Image src={member.imageSource} />
              <Avatar.Fallback backgroundColor="red" />
            </Avatar>
            <YStack>
              <H5 textAlign="center">{member.name}</H5>
              <Paragraph color="$blue11" textAlign="center">
                {member.role}
              </Paragraph>
            </YStack>
            <XStack gap="$3">
              {member.socialMediaLink.github && (
                <a href={member.socialMediaLink.github}>
                  <Github size="$1" />
                </a>
              )}

              {member.socialMediaLink.linkedin && (
                <a href={member.socialMediaLink.linkedin}>
                  <Linkedin size="$1" />
                </a>
              )}

              {member.socialMediaLink.web && (
                <a href={member.socialMediaLink.web}>
                  <Globe size="$1" />
                </a>
              )}
            </XStack>
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
};
