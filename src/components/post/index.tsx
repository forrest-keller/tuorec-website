import { Card } from "components/card";
import { PostFragment } from "generated";
import Image from "next/image";
import { FunctionComponent } from "react";

export const Post: FunctionComponent<PostFragment> = ({
  id,
  title,
  photo,
  description,
}) => {
  return (
    <Card
      href={`/posts/${id}`}
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
