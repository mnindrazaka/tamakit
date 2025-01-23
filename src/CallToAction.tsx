import { Button, XStack, YStack } from "tamagui";
import { PageHeader } from "./PageHeader";

export type CallToActionProps = {
  title: string;
  subtitle: string;
  primaryButton: {
    label: string;
    onPress: () => void;
  };
  secondaryButton: {
    label: string;
    onPress: () => void;
  };
};

export const CallToAction = (props: CallToActionProps) => {
  return (
    <XStack
      padding="$8"
      elevation="$1"
      justifyContent="space-between"
      alignItems="center"
      gap="$5"
      $md={{
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
      flexWrap="wrap"
      backgroundColor="$backgroundPress"
    >
      <YStack maxWidth={640} flexShrink={0}>
        <PageHeader title={props.title} subtitle={props.subtitle} />
      </YStack>
      <XStack
        gap="$3"
        $sm={{
          flexDirection: "column",
          alignSelf: "stretch",
        }}
      >
        <Button onPress={props.secondaryButton.onPress} size="$5">
          {props.secondaryButton.label}
        </Button>
        <Button theme="active" onPress={props.primaryButton.onPress} size="$5">
          {props.primaryButton.label}
        </Button>
      </XStack>
    </XStack>
  );
};
