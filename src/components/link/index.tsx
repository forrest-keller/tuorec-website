import { FunctionComponent } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

export interface LinkProps
  extends Omit<ChakraLinkProps, "as" | "href">,
    Omit<NextLinkProps, "passHref"> {}

export const Link: FunctionComponent<LinkProps> = ({
  href,
  as,
  children,
  ...rest
}) => {
  return (
    <NextLink href={href} as={as} passHref {...rest}>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  );
};
