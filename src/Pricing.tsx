import { Button, H1, Paragraph, XStack, YStack } from "./ui";
import { PageHeader } from "./PageHeader";
// import Icon from "@tamagui/lucide-icons";

export type PricingProps = {
  title: string;
  subtitle: string;
  tag?: string;
  items: {
    title: string;
    price: number;
    additionalPriceInfo?: string;
    features: string[];
    buyButton: {
      label: string;
      onPress: () => void;
    };
  }[];
};

export const Pricing = (props: PricingProps) => {
  return (
    <YStack alignItems="center">
      <YStack maxWidth={640}>
        <PageHeader
          title={props.title}
          subtitle={props.subtitle}
          tag={props.tag}
          align="center"
        />
      </YStack>
      <XStack gap="$3" flexWrap="wrap">
        {props.items.map((item) => (
          <YStack
            key={item.title}
            elevation="$1"
            borderWidth="$0.5"
            borderColor="$gray5"
            borderRadius="$6"
            padding="$8"
            gap="$5"
            flexBasis="32%"
            $md={{ flexBasis: "48%" }}
            $xs={{ padding: "$5", flexBasis: "100%" }}
          >
            <YStack gap="$3">
              <Paragraph textAlign="center" size="$5" fontWeight="$6">
                {item.title}
              </Paragraph>
              <H1 textAlign="center">{item.price}</H1>
              {item.additionalPriceInfo && (
                <Paragraph textAlign="center" size="$4" color="$gray10">
                  {item.additionalPriceInfo}
                </Paragraph>
              )}
            </YStack>
            <YStack gap="$3">
              {item.features.map((feature) => (
                <XStack gap="$5" key={feature}>
                  {/* <Icon.Check color="$blue11" /> */}
                  <Paragraph size="$5">{feature}</Paragraph>
                </XStack>
              ))}
            </YStack>
            <Button theme="blue" onPress={item.buyButton.onPress}>
              {item.buyButton.label}
            </Button>
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
};
