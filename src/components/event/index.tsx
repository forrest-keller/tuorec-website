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
import Image from "next/image";
import { GiPencil } from "react-icons/gi";
import { RichText } from "components/rich-text";
import { ActivityIcon } from "components/activity-icon";
import { capitalCase } from "change-case";
import dayjs from "dayjs";
import { PersonPill } from "components/person-pill";
import { PlaceCard } from "components/place-card";
import { PlacePill } from "components/place-pill";
import useScrollPosition from "@react-hook/window-scroll";

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
  const scrollY = useScrollPosition(30);
  const shouldShowEventHeader =
    people.length > 0 &&
    meetingPlace !== null &&
    startTime !== null &&
    price !== null &&
    signUpUrl !== null;
  const eventHeader = (
    <Grid marginY={32} justifyItems="center" gap={10}>
      <Wrap align="center" justify="center" spacing={2}>
        <Heading as="h4" variant="h4">
          Meet
        </Heading>
        <WrapItem>
          <Wrap>
            {people.map((person) => (
              <WrapItem width="min" key={person.id}>
                <PersonPill {...person} />
              </WrapItem>
            ))}
          </Wrap>
        </WrapItem>
        <Heading as="h4" variant="h4">
          in
        </Heading>
        {meetingPlace && <PlacePill {...meetingPlace} />}
        <Heading as="h4" variant="h4">
          {`at ${dayjs(startTime).format("h:m a")} on ${dayjs(startTime).format(
            "MMM D"
          )}.`}
        </Heading>
      </Wrap>
      <Grid autoFlow="column" alignItems="center" gap={5}>
        {price !== null && (
          <Stat>
            <StatNumber>{`$${price}`}</StatNumber>
          </Stat>
        )}
        {signUpUrl !== null && (
          <Link href={signUpUrl} isExternal>
            <Button leftIcon={<Icon as={GiPencil} />}>Sign Up</Button>
          </Link>
        )}
      </Grid>
    </Grid>
  );

  return (
    <Grid gap={5}>
      {shouldShowEventHeader && eventHeader}
      <Box
        opacity={scrollY || !shouldShowEventHeader ? 1 : 0.5}
        transitionDuration=".2s"
      >
        <Grid
          gap={10}
          autoFlow={{ lg: "column" }}
          autoColumns={{ lg: "2fr 3fr" }}
          alignItems="center"
        >
          <Image
            priority
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
            ></Grid>
          </Grid>
        </Grid>
        <Container>
          <Grid gap={5}>
            {place && <PlaceCard {...place} />}
            <RichText content={content.json} />
          </Grid>
        </Container>
      </Box>
    </Grid>
  );
};
