import {
  Divider,
  Grid,
  Icon,
  LinkBox,
  LinkOverlay,
  Stat,
  StatHelpText,
  StatNumber,
  Tag,
  Text,
} from "@chakra-ui/react";
import { headerCase } from "change-case";
import { ActivityIcon } from "components/activity-icon";
import { Card } from "components/card";
import dayjs from "dayjs";
import Image from "next/image";
import { FunctionComponent } from "react";
import { GiPin } from "react-icons/gi";
import { EventCardFragment } from "../../../generated/graphql/base";
import RouterLink from "next/link";
import { Link } from "components/link";

export const EventCard: FunctionComponent<EventCardFragment> = ({
  id,
  name,
  description,
  activities,
  startTime,
  endTime,
  photo,
  place,
  price,
}) => {
  return (
    <Card
      href={`/events/${id}`}
      overTitleElements={[
        ...(place
          ? [
              <Link fontSize="sm" key="place" href={`/places/${place.id}`}>
                <Grid autoFlow="column" alignItems="center" gap={2}>
                  <Icon as={GiPin} />
                  {place?.name}
                </Grid>
              </Link>,
            ]
          : []),
        <Divider
          orientation="vertical"
          key="divider"
          display={{ base: "none", md: "initial" }}
        />,
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
            <Text>{headerCase(activity)}</Text>
          </Grid>
        </Tag>
      ))}
      title={name}
      description={description}
      topRightElements={[
        <Stat key="price">
          <StatNumber>{`$${price}`}</StatNumber>
          <StatHelpText>Per Person</StatHelpText>
        </Stat>,
      ]}
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
