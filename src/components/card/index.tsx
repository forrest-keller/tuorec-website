import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { FunctionComponent, ReactElement } from "react";
import Image from "next/image";
import { RichText } from "components/rich-text";
import { Asset, PricingFragment } from "generated";
import { RichTextContent } from "@graphcms/rich-text-types";
import { Pricing } from "components/pricing";

export interface CardProps {
  title: string;
  description: string;
  photo: ReactElement;
  rightElements?: ReactElement[];
}

export const Card: FunctionComponent<CardProps> = ({
  title,
  photo,
  description,
  rightElements,
}) => {
  return (
    <Box layerStyle="card">
      <Grid
        gap={5}
        autoFlow={{ sm: "column" }}
        templateColumns={{ sm: "1fr 3fr" }}
      >
        <GridItem>{photo}</GridItem>
        <Box>
          <Grid autoFlow={{ md: "column" }}>
            <Heading variant="h3" as="h2">
              {title}
            </Heading>
            <Grid
              justifySelf={{ md: "right" }}
              autoFlow="column"
              width="max"
              gap={10}
            >
              {rightElements}
            </Grid>
          </Grid>
          <Text>{description}</Text>
        </Box>
      </Grid>
    </Box>
  );
};
