import { Card } from "components/card";
import Image from "next/image";
import { FunctionComponent } from "react";
import truncate from "truncate";
import { PersonCardFragment } from "../../../generated/graphql/base";

export const PersonCard: FunctionComponent<PersonCardFragment> = ({
  id,
  firstName,
  lastName,
  photo,
  content,
}) => {
  return (
    <Card
      href={`/people/${id}`}
      title={`${firstName} ${lastName}`}
      description={content.text}
      photo={
        <Image
          alt={`${firstName} ${lastName}`}
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
