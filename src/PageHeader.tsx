import { Button, H1, Paragraph, XStack, YStack, YStackProps } from "tamagui";

export type PageHeaderProps = {
  title: string;
  subtitle: string;
  tag?: string;
  align?: "left" | "center";
  primaryButton?: {
    label: string;
    onPress: () => void;
  };
  secondaryButton?: {
    label: string;
    onPress: () => void;
  };
} & YStackProps;

export const PageHeader = ({
  title,
  subtitle,
  align = "left",
  tag,
  primaryButton,
  secondaryButton,
  ...ystackProps
}: PageHeaderProps) => {
  const textAlign = align === "left" ? "left" : "center";
  return (
    <YStack gap="$5" {...ystackProps}>
      {tag && (
        <Paragraph theme="alt1" textAlign={textAlign} size="$6">
          {tag}
        </Paragraph>
      )}
      <H1 textAlign={textAlign} $sm={{ size: "$9" }}>
        {title}
      </H1>
      <Paragraph size="$6" textAlign={textAlign}>
        {subtitle}
      </Paragraph>
      <XStack
        gap="$3"
        justifyContent={align === "left" ? "flex-start" : "center"}
        $sm={{ flexDirection: "column" }}
      >
        {primaryButton && (
          <Button size="$5" theme="active" onPress={primaryButton.onPress}>
            {primaryButton.label}
          </Button>
        )}
        {secondaryButton && (
          <Button size="$5" onPress={secondaryButton.onPress}>
            {secondaryButton.label}
          </Button>
        )}
      </XStack>
    </YStack>
  );
};
