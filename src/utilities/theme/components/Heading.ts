import { ComponentStyleConfig } from "@chakra-ui/react";

export const Heading: ComponentStyleConfig = {
  variants: {
    h1: ({ colorScheme }) => ({
      bgGradient: `linear(to-br, ${colorScheme}.700, ${colorScheme}.400)`,
      bgClip: "text",
      fontSize: "6xl",
      lineHeight: "initial", // Overrides the bgClip style
    }),
    h2: {
      color: "blackAlpha.900",
      fontSize: "5xl",
    },
    h3: {
      color: "blackAlpha.800",
      fontSize: "4xl",
    },
    h4: {
      color: "blackAlpha.800",
      fontSize: "3xl",
    },
    h5: {
      color: "blackAlpha.700",
      fontSize: "2xl",
    },
    h6: {
      color: "blackAlpha.700",
      fontSize: "xl",
    },
  },
  defaultProps: {
    variant: "h1",
  },
};
