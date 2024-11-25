import React from "react";
import { TamaguiProvider, YStack } from "tamagui";
import appConfig from "../tamagui.config";

const colors = {
  dark: "#141414",
  light: "#fff",
};

const preview: import("@storybook/react").Preview = {
  decorators: [
    (story, ctx) => {
      const theme =
        Object.entries(colors).find(
          ([_, value]) => value === ctx.globals.backgrounds?.value
        )?.[0] ?? "light";

      return (
        <TamaguiProvider config={appConfig} defaultTheme={theme}>
          <YStack theme="purple">{story()}</YStack>
        </TamaguiProvider>
      );
    },
  ],
  parameters: {
    backgrounds: {
      values: Object.entries(colors).map(([name, value]) => ({
        name,
        value,
      })),
      default: "Light",
    },
  },
};

export default preview;
