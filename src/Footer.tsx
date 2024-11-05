import { Github, Linkedin } from "@tamagui/lucide-icons";
import React from "react";
import { Anchor, Image, Paragraph, XStack, YStack } from "tamagui";

export type FooterProps = {
  logoImageSource: string;
  tagline: string;
  copyrightText: string;
  socialMediaLink?: {
    github?: string;
    linkedin?: string;
  };
  links: { title: string; subLinks: { title: string; href: string }[] }[];
};

export const Footer = (props: FooterProps) => {
  return (
    <YStack padding="$5" gap="$8">
      <XStack
        justifyContent="space-between"
        gap="$5"
        $md={{ flexDirection: "column" }}
      >
        <YStack flex={1}>
          <Image
            resizeMode="contain"
            aspectRatio={16 / 9}
            width={180}
            source={{ uri: props.logoImageSource }}
            defaultSource={{ uri: props.logoImageSource }}
          />
          <Paragraph size="$5">{props.tagline}</Paragraph>
        </YStack>

        <XStack flex={1} gap="$5" flexWrap="wrap">
          {props.links.map((link) => (
            <YStack
              gap="$3"
              flexBasis="22%"
              $sm={{ flexBasis: "45%" }}
              key={link.title}
            >
              <Paragraph color="$gray10">{link.title}</Paragraph>
              {link.subLinks.map((subLink) => (
                <Anchor
                  key={subLink.title}
                  href={subLink.href}
                  textDecorationLine="none"
                >
                  {subLink.title}
                </Anchor>
              ))}
            </YStack>
          ))}
        </XStack>
      </XStack>
      <YStack borderWidth="$0.25" borderColor="$gray5"></YStack>
      <XStack
        justifyContent="space-between"
        gap="$3"
        $sm={{ flexDirection: "column-reverse", alignItems: "center" }}
      >
        <Paragraph color="$gray10" $sm={{ textAlign: "center" }}>
          {props.copyrightText}
        </Paragraph>
        <XStack gap="$5">
          {props.socialMediaLink?.linkedin && (
            <Anchor href={props.socialMediaLink.linkedin}>
              <Linkedin />
            </Anchor>
          )}

          {props.socialMediaLink?.github && (
            <Anchor href={props.socialMediaLink.github}>
              <Github />
            </Anchor>
          )}
        </XStack>
      </XStack>
    </YStack>
  );
};
