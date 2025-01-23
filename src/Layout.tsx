import React from "react";
import { ScrollView, YStack } from "tamagui";

export type LayoutProps = {
  navbar: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  return (
    <YStack height="100vh" justifyContent="space-between">
      <YStack>{props.navbar}</YStack>
      <ScrollView>
        {props.main}
        <YStack>{props.footer}</YStack>
      </ScrollView>
    </YStack>
  );
};
