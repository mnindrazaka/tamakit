import { Image, XStack, YStack } from "tamagui";
import { PageHeader } from "./PageHeader";

export type ImageGalleryProps = {
  imageSources: string[];
  maxColumn: number;
  title: string;
  subtitle: string;
  primaryButton?: {
    label: string;
    onPress: () => void;
  };
  secondaryButton?: {
    label: string;
    onPress: () => void;
  };
  align?: "left" | "center";
};

export const ImageGallery = (props: ImageGalleryProps) => {
  return (
    <YStack gap="$5">
      <PageHeader
        title={props.title}
        subtitle={props.subtitle}
        primaryButton={props.primaryButton}
        secondaryButton={props.secondaryButton}
        align={props.align}
      />
      <YStack gap="$3">
        {Array.from(
          new Array(Math.ceil(props.imageSources.length / props.maxColumn))
        ).map((_, i) => (
          <XStack gap="$3">
            {props.imageSources
              .slice(i * props.maxColumn, i * props.maxColumn + props.maxColumn)
              .map((imageSource) => (
                <Image
                  aspectRatio={4 / 3}
                  source={{
                    uri: imageSource,
                  }}
                  flex={Math.floor(Math.random() * 9) % 2 === 0 ? 1.5 : 2}
                />
              ))}
          </XStack>
        ))}
      </YStack>
    </YStack>
  );
};
