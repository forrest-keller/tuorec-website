import { Tag, Text } from "@chakra-ui/react";
import { capitalCase } from "change-case";
import { Card } from "components/card";
import { Pricing } from "components/pricing";
import dayjs from "dayjs";
import { EventFragment } from "generated";
import Image from "next/image";
import { FunctionComponent } from "react";

export const Event: FunctionComponent<EventFragment> = ({
  id,
  name,
  description,
  activities,
  startTime,
  endTime,
  pricing,
  place,
  photo,
}) => {
  const timeRangeText = `${dayjs(startTime).format("MMM D h:ma")} - ${dayjs(
    endTime
  ).format("MMM D h:ma")}`;

  const activityTags = activities.map((activity) => (
    <Tag colorScheme="gray">{activity}</Tag>
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
      topRightElements={pricing ? [<Pricing {...pricing} />] : undefined}
      overTitleElements={[<Text variant="subtle">{timeRangeText}</Text>]}
      underTitleElements={activityTags}
      title={computedTitle}
      description={computedDescription}
      photo={
        computedPhotoUrl ? (
          <Image
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
