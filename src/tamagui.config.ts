import { config } from "@tamagui/config";
import { createTamagui, TamaguiInternalConfig } from "@tamagui/core";

const appConfig: TamaguiInternalConfig = createTamagui(config);

export type AppConfig = typeof appConfig;

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
