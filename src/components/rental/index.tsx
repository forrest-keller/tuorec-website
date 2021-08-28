import {
  Button,
  Container,
  Grid,
  Heading,
  Icon,
  Link,
  Stat,
  StatHelpText,
  StatNumber,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Image from "next/image";
import { RichText } from "components/rich-text";
import { RentalFragment } from "../../../generated/graphql/base";
import { GiQuill } from "react-icons/gi";
import RouterLink from "next/link";
import { constants } from "utilities/constants";
import truncate from "truncate";

export const Rental: FunctionComponent<RentalFragment> = ({
  name,
  photo,
  content,
  price,
}) => {
  return (
    <Grid gap={5}>
      <Grid
        gap={10}
        autoFlow={{ lg: "column" }}
        autoColumns={{ lg: "2fr 3fr" }}
        alignItems="center"
      >
        <Image
          priority
          src={photo.url}
          alt={name}
          width={500}
          height={500}
          layout="responsive"
          objectFit="cover"
        />
        <Grid height="min-content" gap={5}>
          <Heading as="h1" variant="h1">
            {name}
          </Heading>
          <Heading as="h2" variant="h6">
            {truncate(content.text, 100)}
          </Heading>
          <Grid
            justifyItems="end"
            alignItems="center"
            autoFlow="column"
            gap={5}
          >
            <Grid autoFlow="column" alignItems="center" gap={5}>
              <Stat>
                <StatNumber>{`$${price}`}</StatNumber>
                <StatHelpText>Per Day</StatHelpText>
              </Stat>
              <Link href={constants.rentalFormUrl} isExternal>
                <Button leftIcon={<Icon as={GiQuill} />}>Request</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Container>
        <RichText content={content.json} />
      </Container>
    </Grid>
  );
};
