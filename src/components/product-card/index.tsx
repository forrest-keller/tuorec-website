import { PricingChip } from "components";
import { Card } from "components/card";
import { ProductCardFragment } from "generated/graphql";
import Image from "next/image";
import { FunctionComponent } from "react";

export const ProductCard: FunctionComponent<ProductCardFragment> = ({
  id,
  name,
  description,
  pricings,
  photo,
}) => {
  return (
    <Card
      href={`/products/${id}`}
      title={name}
      description={description}
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
      topRightElements={pricings.map((pricing) => (
        <PricingChip key={pricing.id} {...pricing} />
      ))}
    />
  );
};
