import React from "react";
import { YStack } from "tamagui";

export type ContainerProps = {
  children: React.ReactNode;
};

export const Container = (props: ContainerProps) => {
  return (
    <YStack
      alignSelf="center"
      width="100%"
      maxWidth={1440}
      paddingHorizontal="$8"
      $xs={{ paddingHorizontal: "$5" }}
    >
      {props.children}
    </YStack>
  );
};
