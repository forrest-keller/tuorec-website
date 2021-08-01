import { Stat, StatHelpText, StatNumber } from "@chakra-ui/react";
import { Card } from "components/card";
import Image from "next/image";
import { FunctionComponent } from "react";
import { RentalCardFragment } from "../../../generated/graphql/base";

export const RentalCard: FunctionComponent<RentalCardFragment> = ({
  id,
  name,
  description,
  photo,
  price,
}) => {
  return (
    <Card
      href={`/rentals/${id}`}
      title={name}
      description={description}
      topRightElements={[
        <Stat key="price">
          <StatNumber>{`$${price}`}</StatNumber>
          <StatHelpText>Per Day</StatHelpText>
        </Stat>,
      ]}
      photo={
        <Image
          src={photo.url}
          alt={name}
          width={200}
          height={200}
          objectFit="cover"
          layout="responsive"
        />
      }
    />
  );
};
