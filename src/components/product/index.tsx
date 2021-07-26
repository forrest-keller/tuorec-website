import { Box, Divider, Grid, GridItem, Heading } from "@chakra-ui/react";
import { Pricing } from "components";
import { RichText } from "components/rich-text";
import { ProductFragment } from "generated/graphql";
import Image from "next/image";
import { FunctionComponent } from "react";

export const Product: FunctionComponent<ProductFragment> = ({
  name,
  pricings,
  photo,
  content,
}) => {
  return (
    <Box layerStyle="card">
      <Grid
        gap={5}
        autoFlow={{ sm: "column" }}
        templateColumns={{ sm: "1fr 3fr" }}
      >
        <GridItem>
          <Image
            src={photo.url}
            width={200}
            height={200}
            objectFit="cover"
            layout="responsive"
          />
        </GridItem>
        <Box>
          <Grid autoFlow={{ md: "column" }}>
            <Heading variant="h3" as="h2">
              {name}
            </Heading>
            <Grid
              justifySelf={{ md: "right" }}
              autoFlow="column"
              width="max"
              gap={10}
            >
              {pricings.map((pricing) => (
                <GridItem>
                  <Pricing key={pricing.id} {...pricing} />
                </GridItem>
              ))}
            </Grid>
          </Grid>
          <RichText content={content.json} />
        </Box>
      </Grid>
    </Box>
  );
};
