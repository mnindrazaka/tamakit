import React from "react";
import { Paragraph, YStack } from "tamagui";

export type LayoutProps = {
  navbar: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  return (
    <YStack height="100vh" justifyContent="space-between">
      <YStack>{props.navbar}</YStack>
      <YStack
        alignSelf="center"
        width="100%"
        maxWidth={1280}
        $lg={{ maxWidth: 1040 }}
        $md={{ maxWidth: 820 }}
        $sm={{ maxWidth: 640 }}
        $xs={{ maxWidth: 480 }}
        paddingHorizontal="$5"
      >
        {props.main}
      </YStack>
      <YStack>{props.footer}</YStack>
    </YStack>
  );
};
