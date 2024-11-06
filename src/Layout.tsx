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
        maxWidth={1440}
        paddingHorizontal="$8"
        $xs={{ paddingHorizontal: "$5" }}
      >
        {props.main}
      </YStack>
      <YStack>{props.footer}</YStack>
    </YStack>
  );
};
