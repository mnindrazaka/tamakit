import { Image, Paragraph, XStack, YStack } from "tamagui";

export type FooterProps = {
  logoImageSource: string;
  tagline: string;
  copyrightText: string;
  socialMediaLinks?: {
    icon: React.ReactNode;
    href: string;
  }[];
  links: { title: string; subLinks: { title: string; href: string }[] }[];
};

export const Footer = (props: FooterProps) => {
  return (
    <YStack
      padding="$8"
      $xs={{ padding: "$5" }}
      gap="$8"
      themeInverse
      backgroundColor="$background"
    >
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
                <a
                  key={subLink.title}
                  href={subLink.href}
                  style={{ textDecoration: "none" }}
                >
                  <Paragraph>{subLink.title}</Paragraph>
                </a>
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
          {props.socialMediaLinks?.map(({ href, icon }) => (
            <a key={href} href={href}>
              {icon}
            </a>
          ))}
        </XStack>
      </XStack>
    </YStack>
  );
};
