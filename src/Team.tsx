import { Github, Globe, Linkedin } from "@tamagui/lucide-icons";
import React from "react";
import { Anchor, Avatar, H1, H5, Paragraph, XStack, YStack } from "tamagui";

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
        <H1 textAlign="center">{props.title}</H1>
        <Paragraph size="$5" textAlign="center">
          {props.subtitle}
        </Paragraph>
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
              <Avatar.Fallback bc="red" />
            </Avatar>
            <YStack>
              <H5 textAlign="center">{member.name}</H5>
              <Paragraph color="$blue11" textAlign="center">
                {member.role}
              </Paragraph>
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
        ))}
      </XStack>
    </YStack>
  );
};
