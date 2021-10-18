import { Icon, IconProps } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import {
  GiBackpack,
  GiCampingTent,
  GiHorseshoe,
  GiPaddles,
  GiShakingHands,
  GiWalkingBoot,
  GiWaterSplash,
} from "react-icons/gi";
import { ActivityTypes } from "../../../generated/graphql/base";

export interface ActivityIconProps extends Omit<IconProps, "as"> {
  activity: ActivityTypes;
}

export const ActivityIcon: FunctionComponent<ActivityIconProps> = ({
  activity,
  ...rest
}) => {
  const getActivityIcon = (activity: ActivityTypes) => {
    switch (activity) {
      case ActivityTypes.Backpacking:
        return GiBackpack;
      case ActivityTypes.Camping:
        return GiCampingTent;
      case ActivityTypes.Hiking:
        return GiWalkingBoot;
      case ActivityTypes.Swimming:
        return GiWaterSplash;
      case ActivityTypes.Canoeing:
        return GiPaddles;
      case ActivityTypes.Service:
        return GiShakingHands;
      case ActivityTypes.HorsebackRiding:
        return GiHorseshoe;
      default:
        break;
    }
  };

  return <Icon {...rest} as={getActivityIcon(activity)} />;
};
