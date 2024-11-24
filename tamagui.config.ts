import { config } from "@tamagui/config/v3";
import { createTamagui, TamaguiInternalConfig } from "@tamagui/core";

const appConfig: TamaguiInternalConfig = createTamagui(config);

export type AppConfig = typeof appConfig;

export default appConfig;
