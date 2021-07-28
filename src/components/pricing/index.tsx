import { Stat, StatHelpText, StatNumber } from "@chakra-ui/react";
import { PricingFragment } from "generated/graphql";
import { FunctionComponent } from "react";

export const Pricing: FunctionComponent<PricingFragment> = ({
  price,
  period,
}) => {
  return (
    <Stat>
      <StatNumber>{`$${price.toFixed(2)}`}</StatNumber>
      {period ? <StatHelpText>{`Per ${period}`}</StatHelpText> : null}
    </Stat>
  );
};
