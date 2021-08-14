import { Pill } from "components/pill";
import { FunctionComponent } from "react";
import { PlacePillFragment } from "../../../generated/graphql/base";

export const PlacePill: FunctionComponent<PlacePillFragment> = ({
  id,
  name,
  photos,
}) => {
  return (
    <Pill href={`/places/${id}`} title={name} photoUrl={photos?.[0].url} />
  );
};
