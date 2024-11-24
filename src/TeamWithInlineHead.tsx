import { Avatar, H5, Paragraph, XStack, YStack } from "tamagui";
import { PageHeader } from "./PageHeader";
import { ReactNode } from "react";

export type TeamWithInlineHeadProps = {
  title: string;
  subtitle: string;
  members: {
    name: string;
    role: string;
    imageSource: string;
    socialMediaLinks: {
      href: string;
      icon: ReactNode;
    }[];
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
                {member.socialMediaLinks.map(({ href, icon }) => (
                  <a key={href} href={href}>
                    {icon}
                  </a>
                ))}
              </XStack>
            </YStack>
          </XStack>
        ))}
      </XStack>
    </XStack>
  );
};
