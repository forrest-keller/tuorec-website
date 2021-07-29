import { ComponentStyleConfig } from "@chakra-ui/react";

export const Text: ComponentStyleConfig = {
  variants: {
    primary: {},
    subtle: {
      textColor: "blackAlpha.600",
      fontSize: "sm",
    },
  },
  defaultProps: {
    variant: "primary",
  },
};
