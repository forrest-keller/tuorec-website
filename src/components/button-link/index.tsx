import { Button, ButtonProps, Link } from "@chakra-ui/react";
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
    <RouterLink href={href} as={as} passHref {...rest}>
      <a style={{ display: "inherit" }}>
        <Button {...rest}>{children}</Button>
      </a>
    </RouterLink>
  );
};
