import { Github, Globe, Linkedin } from "@tamagui/lucide-icons";
import React from "react";
import { Anchor, Avatar, H1, H5, Paragraph, XStack, YStack } from "tamagui";

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
        <H1>{props.title}</H1>
        <Paragraph size="$6">{props.subtitle}</Paragraph>
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
              <Avatar.Fallback bc="red" />
            </Avatar>
            <YStack gap="$3">
              <YStack>
                <H5>{member.name}</H5>
                <Paragraph color="$blue11">{member.role}</Paragraph>
              </YStack>
              <XStack gap="$3">
                {member.socialMediaLink.github && (
                  <Anchor href={member.socialMediaLink.github}>
                    <Github size="$1" />
                  </Anchor>
                )}

                {member.socialMediaLink.linkedin && (
                  <Anchor href={member.socialMediaLink.linkedin}>
                    <Linkedin size="$1" />
                  </Anchor>
                )}

                {member.socialMediaLink.web && (
                  <Anchor href={member.socialMediaLink.web}>
                    <Globe size="$1" />
                  </Anchor>
                )}
              </XStack>
            </YStack>
          </XStack>
        ))}
      </XStack>
    </XStack>
  );
};
