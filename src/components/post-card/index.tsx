import { Card } from "components/card";
import Image from "next/image";
import { FunctionComponent } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { sentenceCase } from "change-case";
import { Text } from "@chakra-ui/react";
import { PostCardFragment } from "../../../generated/graphql/base";

dayjs.extend(relativeTime);

export const PostCard: FunctionComponent<PostCardFragment> = ({
  id,
  title,
  photo,
  description,
  createdAt,
}) => {
  const createdAtText = `${sentenceCase(dayjs().to(createdAt))}, ${dayjs(
    createdAt
  ).format("MMM D, YYYY")}`;

  return (
    <Card
      href={`/posts/${id}`}
      overTitleElements={[
        <Text key="created-at" variant="subtle">
          {createdAtText}
        </Text>,
      ]}
      title={title}
      description={description}
      photo={
        <Image
          src={photo.url}
          alt={title}
          width={200}
          height={200}
          objectFit="cover"
          layout="responsive"
        />
      }
    />
  );
};
