import { ComponentStyleConfig } from "@chakra-ui/react";

export const Container: ComponentStyleConfig = {
  baseStyle: {
    paddingY: 5,
  },
  variants: {
    lg: {
      maxWidth: "4xl",
    },
    xl: {
      maxWidth: "6xl",
    },
  },
  defaultProps: {
    variant: "lg",
  },
};
