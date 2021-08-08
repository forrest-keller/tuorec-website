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
import { PersonFragment, PostFragment } from "../../../generated/graphql/base";
import Image from "next/image";
import { RichText } from "components";
import dayjs from "dayjs";

export const Person: FunctionComponent<PersonFragment> = ({
  firstName,
  lastName,
  description,
  content,
  photo,
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
          src={photo.url}
          alt={`${firstName} ${lastName}`}
          width={500}
          height={500}
          layout="responsive"
          objectFit="cover"
        />
        <Grid height="min-content" gap={5}>
          <Box>
            <Heading as="h1" variant="h1">
              {`${firstName} ${lastName}`}
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
