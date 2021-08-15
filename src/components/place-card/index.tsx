import { Text } from "@chakra-ui/react";
import { Card } from "components/card";
import Image from "next/image";
import { FunctionComponent } from "react";
import { PlaceCardFragment } from "../../../generated/graphql/base";

export const PlaceCard: FunctionComponent<PlaceCardFragment> = ({
  id,
  name,
  description,
  address,
  photos,
}) => {
  return (
    <Card
      href={`/places/${id}`}
      title={name}
      description={description}
      overTitleElements={[
        <Text key="address" variant="subtle">
          {address}
        </Text>,
      ]}
      photo={
        <Image alt={name} src={photos?.[0].url} width={500} height={500} />
      }
    />
  );
};
