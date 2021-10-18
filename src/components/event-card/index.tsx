import {
  Grid,
  Stat,
  StatHelpText,
  StatNumber,
  Tag,
  Text,
} from "@chakra-ui/react";
import { capitalCase } from "change-case";
import { ActivityIcon } from "components/activity-icon";
import { Card } from "components/card";
import dayjs from "dayjs";
import Image from "next/image";
import { FunctionComponent } from "react";
import { EventCardFragment } from "../../../generated/graphql/base";
import { PlacePill } from "components/place-pill";

export const EventCard: FunctionComponent<EventCardFragment> = ({
  id,
  name,
  activities,
  startTime,
  endTime,
  photo,
  place,
  price,
  content,
}) => {
  return (
    <Card
      href={`/events/${id}`}
      overTitleElements={[
        ...(place ? [<PlacePill key={place.id} {...place} />] : []),
        <Text key="time-range" variant="subtle">
          {`${dayjs(startTime).format("MMM D h:m a")} - ${dayjs(endTime).format(
            "MMM D h:m a"
          )}`}
        </Text>,
      ]}
      underTitleElements={activities.map((activity) => (
        <Tag key={activity} colorScheme="blackAlpha">
          <Grid autoFlow="column" alignItems="center" gap={1}>
            <ActivityIcon activity={activity} />
            <Text>{capitalCase(activity)}</Text>
          </Grid>
        </Tag>
      ))}
      title={name}
      description={content.text}
      topRightElements={
        price !== null
          ? [
              <Stat key="price">
                <StatNumber>{`$${price}`}</StatNumber>
                <StatHelpText>Per Person</StatHelpText>
              </Stat>,
            ]
          : []
      }
      photo={
        <Image
          alt={name}
          src={photo.url}
          width={200}
          height={200}
          objectFit="cover"
          layout="responsive"
        />
      }
    />
  );
};
