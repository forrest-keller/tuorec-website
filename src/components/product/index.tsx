import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { PricingChipFragment, ProductFragment } from "generated";
import { FunctionComponent } from "react";
import Image from "next/image";
import { PricingChip } from "components/pricing-chip";

export const Product: FunctionComponent<ProductFragment> = ({
  name,
  description,
  photo,
  pricings,
}) => {
  return (
    <Stack>
      <Grid
        gap={10}
        autoFlow={{ lg: "column" }}
        autoColumns={{ lg: "1fr 1fr" }}
      >
        <Box>
          <Image
            src={photo.url}
            alt={name}
            width={500}
            height={500}
            layout="responsive"
            objectFit="cover"
          />
        </Box>
        <Grid height="min-content" gap={5}>
          <Heading as="h1" variant="h1">
            {name}
          </Heading>
          <Text variant="subtle">{description}</Text>
        </Grid>
      </Grid>
    </Stack>
  );
};
