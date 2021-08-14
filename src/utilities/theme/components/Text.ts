import { ComponentStyleConfig } from "@chakra-ui/react";

export const Text: ComponentStyleConfig = {
  variants: {
    primary: {},
    subtle: {
      textColor: "blackAlpha.700",
      fontSize: "sm",
    },
    quote: ({ colorScheme }) => ({
      borderLeftWidth: 4,
      paddingLeft: 4,
      marginY: 4,
      borderLeftColor: `${colorScheme}.500`,
    }),
  },
  defaultProps: {
    variant: "primary",
  },
};
