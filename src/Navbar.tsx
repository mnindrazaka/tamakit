import { Menu } from "@tamagui/lucide-icons";
import React from "react";
import { Anchor, Button, Image, Popover, XStack, YStack } from "tamagui";

export type NavbarProps = {
  logoImageSource: string;
  links: {
    title: string;
    href: string;
  }[];
};

export const Navbar = (props: NavbarProps) => {
  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="$8"
      $xs={{ paddingHorizontal: "$5" }}
    >
      <YStack>
        <Image
          resizeMode="contain"
          width={160}
          source={{ uri: props.logoImageSource }}
          defaultSource={{ uri: props.logoImageSource }}
          aspectRatio={16 / 9}
        />
      </YStack>
      <XStack gap="$5" $md={{ display: "none" }}>
        {props.links.map((link) => (
          <Anchor href={link.href} key={link.title} textDecorationLine="none">
            {link.title}
          </Anchor>
        ))}
      </XStack>
      <Popover size="$5" allowFlip>
        <Popover.Trigger asChild>
          <Button icon={Menu} $gtMd={{ display: "none" }} />
        </Popover.Trigger>

        <Popover.Content
          borderWidth={1}
          borderColor="$borderColor"
          enterStyle={{ y: -10, opacity: 0 }}
          exitStyle={{ y: -10, opacity: 0 }}
          elevate
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
        >
          <Popover.Arrow borderWidth={1} borderColor="$borderColor" />
          <YStack gap="$3" paddingHorizontal="$5">
            {props.links.map((link) => (
              <Anchor
                href={link.href}
                key={link.title}
                textDecorationLine="none"
              >
                {link.title}
              </Anchor>
            ))}
          </YStack>
        </Popover.Content>
      </Popover>
    </XStack>
  );
};
