import { config } from "@tamagui/config";
import { createTamagui, TamaguiInternalConfig } from "tamagui";

const appConfig: TamaguiInternalConfig = createTamagui(config);

export type AppConfig = typeof appConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
