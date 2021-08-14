import { Avatar, Grid, Text } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import RoutingLink from "next/link";

export interface PillProps {
  href: string;
  title: string;
  photoUrl: string;
}

export const Pill: FunctionComponent<PillProps> = ({
  title,
  photoUrl,
  href,
}) => {
  return (
    <RoutingLink href={href} passHref>
      <Grid
        as="a"
        layerStyle="card"
        padding={2}
        paddingRight={4}
        rounded="full"
        autoFlow="column"
        gap={2}
        alignItems="center"
        width="min-content"
      >
        <Avatar size="sm" src={photoUrl} />
        <Text fontWeight="semibold" color="blackAlpha.700" width="max-content">
          {title}
        </Text>
      </Grid>
    </RoutingLink>
  );
};
