import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Image from "next/image";
import { RichText } from "components/rich-text";
import { RentalFragment } from "../../../generated/graphql/base";

export const Rental: FunctionComponent<RentalFragment> = ({
  name,
  description,
  photo,
  content,
}) => {
  return (
    <Grid gap={10}>
      <Grid
        gap={10}
        autoFlow={{ lg: "column" }}
        autoColumns={{ lg: "2fr 3fr" }}
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
          <Heading as="h2" variant="h6">
            {description}
          </Heading>
        </Grid>
      </Grid>
      <RichText content={content.json} />
    </Grid>
  );
};