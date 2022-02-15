import { Card } from "components/card";
import Image from "next/image";
import { FunctionComponent } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { sentenceCase } from "change-case";
import { Text } from "@chakra-ui/react";
import { PostCardFragment } from "../../../generated/graphql/base";
import truncate from "truncate";

dayjs.extend(relativeTime);

export const PostCard: FunctionComponent<PostCardFragment> = ({
  id,
  title,
  photo,
  content,
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
      description={content.text}
      photo={
        <Image
          src={photo.url}
          alt={title}
          width={100}
          height={100}
          objectFit="cover"
          layout="responsive"
        />
      }
    />
  );
};
