import { Tag, Text } from "@chakra-ui/react";
import { capitalCase } from "change-case";
import { Card } from "components/card";
import dayjs from "dayjs";
import Image from "next/image";
import { FunctionComponent } from "react";
import { EventCardFragment } from "../../../generated/graphql/base";

export const EventCard: FunctionComponent<EventCardFragment> = ({
  id,
  name,
  description,
  activities,
  startTime,
  endTime,
  place,
  photo,
}) => {
  const timeRangeText = `${dayjs(startTime).format("MMM D h:ma")} - ${dayjs(
    endTime
  ).format("MMM D h:ma")}`;

  const activityTags = activities.map((activity) => (
    <Tag key={activity} colorScheme="gray">
      {activity}
    </Tag>
  ));

  const computedPhotoUrl = photo?.url || place?.photos?.[0].url;

  const computedTitle =
    name ||
    `${activities.map((activity) => capitalCase(activity)).join(", ")} in ${
      place?.name
    }`;

  const computedDescription = description || place?.description || "";

  return (
    <Card
      href={`/events/${id}`}
      overTitleElements={[
        <Text key="time-range" variant="subtle">
          {timeRangeText}
        </Text>,
      ]}
      underTitleElements={activityTags}
      title={computedTitle}
      description={computedDescription}
      photo={
        computedPhotoUrl ? (
          <Image
            alt={computedTitle}
            src={computedPhotoUrl}
            width={200}
            height={200}
            objectFit="cover"
            layout="responsive"
          />
        ) : (
          <></>
        )
      }
    />
  );
};
