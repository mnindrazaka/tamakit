import React from "react";
import { TamaguiProvider } from "tamagui";
import appConfig from "../tamagui.config";

const preview: import("@storybook/react").Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => <TamaguiProvider config={appConfig}>{story()}</TamaguiProvider>,
  ],
};

export default preview;
