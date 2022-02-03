import {
  Box,
  Container,
  Grid,
  Heading,
  Icon,
  Tag,
  Text,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { PersonFragment } from "../../../generated/graphql/base";
import Image from "next/image";
import { RichText } from "components";
import { GiGraduateCap } from "react-icons/gi";
import { descriptionLength, getDescription } from "utilities/text";

export const Person: FunctionComponent<PersonFragment> = ({
  firstName,
  lastName,
  content,
  photo,
  graduationTime,
}) => {
  const graduationYear = new Date(graduationTime).getFullYear();

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
          <Tag width="min-content" colorScheme="gray">
            <Grid autoFlow="column" alignItems="center" gap={1}>
              <Icon as={GiGraduateCap} />
              <Text
                width="max-content"
                fontWeight="semibold"
              >{`Class of ${graduationYear}`}</Text>
            </Grid>
          </Tag>
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
