import { FunctionComponent } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { GiDirectionSign } from "react-icons/gi";

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
      <ChakraLink {...rest}>
        {children}
        {isExternal && !hideExternalIcon && (
          <Icon as={GiDirectionSign} marginX={2} />
        )}
      </ChakraLink>
    </NextLink>
  );
};
