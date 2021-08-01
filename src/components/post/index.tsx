import {
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { PostFragment } from "../../../generated/graphql/base";
import Image from "next/image";
import { RichText } from "components";
import dayjs from "dayjs";

export const Post: FunctionComponent<PostFragment> = ({
  title,
  description,
  content,
  photo,
  createdAt,
  updatedAt,
}) => {
  console.log(createdAt, updatedAt);
  return (
    <Grid gap={5}>
      <Grid
        alignItems="center"
        gap={10}
        autoFlow={{ md: "column" }}
        autoColumns={{ md: "1fr 2fr" }}
      >
        <Box>
          <Image
            src={photo.url}
            alt={title}
            width={500}
            height={500}
            layout="responsive"
            objectFit="cover"
          />
        </Box>
        <Grid height="min-content" gap={5}>
          <Box>
            <Wrap spacing={5}>
              <WrapItem>
                <Text variant="subtle" width="max-content">
                  {`Created: ${dayjs(createdAt).format("MMM D, YYYY h:m a")}`}
                </Text>
              </WrapItem>
              {updatedAt !== createdAt && (
                <WrapItem>
                  <Text variant="subtle" width="max-content">
                    {`Updated: ${dayjs(updatedAt).format("MMM D, YYYY h:m a")}`}
                  </Text>
                </WrapItem>
              )}
            </Wrap>
            <Heading as="h1" variant="h1">
              {title}
            </Heading>
          </Box>
          <Heading as="h2" variant="h6">
            {description}
          </Heading>
        </Grid>
      </Grid>
      <Container>
        <RichText content={content.json} />
      </Container>
    </Grid>
  );
};
