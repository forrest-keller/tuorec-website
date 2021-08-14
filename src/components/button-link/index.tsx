import { Button, ButtonProps } from "@chakra-ui/react";
import { LinkProps } from "next/link";
import { FunctionComponent } from "react";
import RouterLink from "next/link";

export interface ButtonLinkProps
  extends Omit<ButtonProps, "href" | "as">,
    LinkProps {}

export const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  href,
  as,
  children,
  ...rest
}) => {
  return (
    <RouterLink href={href} as={as} {...rest} passHref>
      <Button as="a" {...rest}>
        {children}
      </Button>
    </RouterLink>
  );
};
