import { ComponentStyleConfig } from "@chakra-ui/react";

export const Text: ComponentStyleConfig = {
  variants: {
    primary: {},
    subtle: {
      textColor: "blackAlpha.700",
      fontSize: "sm",
    },
  },
  defaultProps: {
    variant: "primary",
  },
};
