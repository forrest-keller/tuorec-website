import { Box, Divider, Grid, GridItem, Heading } from "@chakra-ui/react";
import { Pricing } from "components";
import { Card } from "components/card";
import { RichText } from "components/rich-text";
import { ProductFragment } from "generated/graphql";
import Image from "next/image";
import { FunctionComponent } from "react";

export const Product: FunctionComponent<ProductFragment> = ({
  name,
  description,
  pricings,
  photo,
}) => {
  return (
    <Card
      title={name}
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
      rightElements={pricings.map((pricing) => (
        <Pricing {...pricing} />
      ))}
    />
  );
};
