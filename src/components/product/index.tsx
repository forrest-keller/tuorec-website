import { ProductFragment } from "generated";
import { FunctionComponent } from "react";

export const Product: FunctionComponent<ProductFragment> = ({ name }) => {
  return <p>{name}</p>;
};
