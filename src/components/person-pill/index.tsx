import { FunctionComponent } from "react";
import { PersonPillFragment } from "../../../generated/graphql/base";
import { Pill } from "components/pill";

export const PersonPill: FunctionComponent<PersonPillFragment> = ({
  id,
  firstName,
  lastName,
  photo,
}) => {
  return (
    <Pill
      href={`/people/${id}`}
      title={`${firstName} ${lastName}`}
      photoUrl={photo.url}
    />
  );
};
