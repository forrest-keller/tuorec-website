import { Card } from "components/card";
import { PostFragment } from "generated";
import Image from "next/image";
import { FunctionComponent } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { sentenceCase } from "change-case";

dayjs.extend(relativeTime);

export const Post: FunctionComponent<PostFragment> = ({
  id,
  title,
  photo,
  description,
  createdAt,
}) => {
  return (
    <Card
      href={`/posts/${id}`}
      overTitleText={`${sentenceCase(dayjs().to(createdAt))}, ${dayjs(
        createdAt
      ).format("MMM D YYYY")}`}
      title={title}
      description={description}
      photo={
        <Image
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
