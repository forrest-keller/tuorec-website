import { ComponentStyleConfig } from "@chakra-ui/react";

const link: ComponentStyleConfig = {
  baseStyle: ({ colorScheme }) => ({
    display: "grid",
    gridAutoFlow: "column",
    justifyItems: "center",
    alignItems: "center",
    gap: 5,
    color: `${colorScheme}.500`,
    _hover: {
      color: `${colorScheme}.400`,
    },
  }),
  variants: {
    primary: {},
    navigation: ({ colorScheme }) => ({
      padding: 5,
      fontSize: "xl",
      fontWeight: "bold",
      color: `blackAlpha.700`,
    }),
  },
  defaultProps: {
    variant: "primary",
  },
};

export default link;
