import {
  Box,
  Container,
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
import { getDescription } from "utilities/text";

export interface PostProps extends PostFragment {
  hideTimestamp?: boolean;
}

export const Post: FunctionComponent<PostProps> = ({
  title,
  content,
  photo,
  createdAt,
  updatedAt,
  hideTimestamp = false,
}) => {
  return (
    <Grid gap={5}>
      <Grid
        alignItems="center"
        gap={10}
        autoFlow={{ md: "column" }}
        autoColumns={{ md: "1fr 2fr" }}
      >
        <Image
          priority
          src={photo.url}
          alt={title}
          width={100}
          height={100}
          layout="responsive"
          objectFit="cover"
        />
        <Grid height="min-content" gap={5}>
          <Box>
            {!hideTimestamp && (
              <Wrap spacing={5}>
                <WrapItem>
                  <Text variant="subtle" width="max-content">
                    {`Created: ${dayjs(createdAt).format("MMM D, YYYY h:m a")}`}
                  </Text>
                </WrapItem>
                {updatedAt !== createdAt && (
                  <WrapItem>
                    <Text variant="subtle" width="max-content">
                      {`Updated: ${dayjs(updatedAt).format(
                        "MMM D, YYYY h:m a"
                      )}`}
                    </Text>
                  </WrapItem>
                )}
              </Wrap>
            )}
            <Heading as="h1" variant="h1">
              {title}
            </Heading>
          </Box>
          <Heading as="h2" variant="h6">
            {getDescription(content.text)}
          </Heading>
        </Grid>
      </Grid>
      <Container>
        <RichText content={content.json} />
      </Container>
    </Grid>
  );
};
