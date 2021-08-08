import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Icon,
  Link,
  Stat,
  StatNumber,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { EventFragment } from "../../../generated/graphql/base";
import RouterLink from "next/link";
import Image from "next/image";
import { GiPencil } from "react-icons/gi";
import { RichText } from "components/rich-text";
import { ActivityIcon } from "components/activity-icon";
import { capitalCase } from "change-case";
import dayjs from "dayjs";
import { PersonPill } from "components/person-pill";
import { PlaceCard } from "components/place-card";

export const Event: FunctionComponent<EventFragment> = ({
  name,
  description,
  activities,
  price,
  startTime,
  endTime,
  people,
  place,
  meetingPlace,
  signUpUrl,
  content,
  photo,
}) => {
  return (
    <Grid gap={5}>
      <Grid
        gap={10}
        autoFlow={{ lg: "column" }}
        autoColumns={{ lg: "2fr 3fr" }}
        alignItems="center"
      >
        <Image
          src={photo.url}
          alt={name}
          width={500}
          height={500}
          layout="responsive"
          objectFit="cover"
        />
        <Grid height="min-content" gap={10}>
          <Box>
            <Text key="time-range" variant="subtle">
              {`${dayjs(startTime).format("MMM D h:m a")} - ${dayjs(
                endTime
              ).format("MMM D h:m a")}`}
            </Text>
            <Heading as="h1" variant="h1">
              {name}
            </Heading>
            <Heading as="h2" variant="h6">
              {description}
            </Heading>
          </Box>
          <Wrap>
            {activities.map((activity) => (
              <WrapItem key={activity}>
                <Tag height="min-content" colorScheme="gray">
                  <Grid autoFlow="column" alignItems="center" gap={1}>
                    <ActivityIcon activity={activity} />
                    <Text fontWeight="semibold">{capitalCase(activity)}</Text>
                  </Grid>
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
          <Grid
            justifyItems="right"
            alignItems="center"
            autoFlow="column"
            gap={5}
          >
            <Grid autoFlow="column" alignItems="center" gap={5}>
              <Stat>
                <StatNumber>{`$${price}`}</StatNumber>
              </Stat>
              <RouterLink href={signUpUrl} passHref>
                <Link isExternal>
                  <Button leftIcon={<Icon as={GiPencil} />}>Sign Up</Button>
                </Link>
              </RouterLink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Container>
        <Grid gap={5}>
          <Wrap>
            {people.map((person) => (
              <WrapItem width="min" key={person.id}>
                <PersonPill {...person} />
              </WrapItem>
            ))}
          </Wrap>
          {place && <PlaceCard {...place} />}
          <RichText content={content.json} />
        </Grid>
      </Container>
    </Grid>
  );
};
