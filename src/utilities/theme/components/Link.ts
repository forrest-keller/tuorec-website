import { ComponentStyleConfig } from "@chakra-ui/react";

export const Link: ComponentStyleConfig = {
  baseStyle: ({ colorScheme }) => ({
    color: `${colorScheme}.500`,
    _hover: {
      color: `${colorScheme}.400`,
    },
    _focus: {
      color: `${colorScheme}.400`,
    },
  }),
  variants: {
    primary: {},
    navigation: {
      display: "grid",
      gridAutoFlow: "column",
      justifyItems: "center",
      alignItems: "center",
      gap: 5,
      padding: 5,
      fontSize: "xl",
      fontWeight: "bold",
      color: `blackAlpha.700`,
      _hover: {
        textDecoration: "none",
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
};
