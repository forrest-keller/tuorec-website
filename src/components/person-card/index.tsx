import { Card } from "components/card";
import Image from "next/image";
import { FunctionComponent } from "react";
import { PersonCardFragment } from "../../../generated/graphql/base";

export const PersonCard: FunctionComponent<PersonCardFragment> = ({
  id,
  firstName,
  lastName,
  photo,
  description,
}) => {
  return (
    <Card
      href={`/people/${id}`}
      title={`${firstName} ${lastName}`}
      description={description}
      photo={
        <Image
          alt={`${firstName} ${lastName}`}
          src={photo.url}
          width={100}
          height={100}
          objectFit="cover"
          layout="responsive"
        />
      }
    />
  );
};
