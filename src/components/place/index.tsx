import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Icon,
  Link,
  Text,
  GridItem,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { PlaceFragment } from "../../../generated/graphql/base";
import Image from "next/image";
import { RichText } from "components";
import { GiDirectionSigns } from "react-icons/gi";

export const Place: FunctionComponent<PlaceFragment> = ({
  name,
  description,
  location,
  address,
  content,
  photos,
}) => {
  return (
    <Grid gap={5}>
      <Grid height="min-content" gap={5}>
        <Box>
          <Heading as="h1" variant="h1">
            {name}
          </Heading>
        </Box>
        <Heading as="h2" variant="h6">
          {description}
        </Heading>
        <Wrap align="center" spacing={5} justifySelf="end">
          <WrapItem>
            <Text variant="subtle">{address}</Text>
          </WrapItem>
          <WrapItem>
            <Link
              href={`http://maps.google.com/?q=${location.latitude},${location.longitude}`}
              isExternal
            >
              <Button leftIcon={<Icon as={GiDirectionSigns} />}>
                Get Directions
              </Button>
            </Link>
          </WrapItem>
        </Wrap>
        <Grid
          justifyItems="end"
          alignItems="center"
          autoFlow="column"
          gap={5}
        ></Grid>
      </Grid>
      <Grid
        gap={5}
        templateColumns={{ md: photos.length === 1 ? "1fr" : "1fr 1fr" }}
      >
        {photos.map((photo) => (
          <GridItem key={photo.id}>
            <Image
              priority
              layout="responsive"
              src={photo.url}
              blurDataURL={photo.blurUrl}
              alt={name}
              width={500}
              height={400}
              objectFit="cover"
            />
          </GridItem>
        ))}
      </Grid>
      <Container>
        <RichText content={content.json} />
      </Container>
    </Grid>
  );
};
