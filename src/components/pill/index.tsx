import { Grid, Text, Box } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import RoutingLink from "next/link";
import Image from "next/image";

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
  const imageSize = 30;

  return (
    <RoutingLink href={href} passHref>
      <Grid
        as="a"
        layerStyle="card"
        padding={2}
        gap={2}
        paddingRight={4}
        rounded="full"
        autoFlow="column"
        alignItems="center"
      >
        <Box
          width={imageSize}
          height={imageSize}
          rounded="full"
          overflow="hidden"
        >
          <Image
            src={photoUrl}
            layout="fixed"
            alt={title}
            width={imageSize}
            height={imageSize}
          />
        </Box>
        <Text fontWeight="semibold" color="blackAlpha.700">
          {title}
        </Text>
      </Grid>
    </RoutingLink>
  );
};
