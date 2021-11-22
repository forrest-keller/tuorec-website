import { FunctionComponent } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

export interface LinkProps
  extends Omit<ChakraLinkProps, "as" | "href">,
    Omit<NextLinkProps, "passHref"> {
  hideExternalIcon?: boolean;
}

export const Link: FunctionComponent<LinkProps> = ({
  href,
  as,
  children,
  isExternal,
  hideExternalIcon,
  ...rest
}) => {
  return (
    <NextLink href={href} as={as} passHref {...rest}>
      <ChakraLink isExternal={isExternal} {...rest}>
        {children}
        {isExternal && !hideExternalIcon && (
          <Icon as={FaExternalLinkAlt} marginX={1} width={3} height={3} />
        )}
      </ChakraLink>
    </NextLink>
  );
};
