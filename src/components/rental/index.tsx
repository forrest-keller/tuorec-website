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

export const Rental: FunctionComponent<RentalFragment> = ({
  name,
  photo,
  content,
  description,
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
          width={100}
          height={100}
          layout="responsive"
          objectFit="cover"
        />
        <Grid height="min-content" gap={5}>
          <Heading as="h1" variant="h1">
            {name}
          </Heading>
          <Heading as="h2" variant="h6">
            {description}
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
              <Link href={process.env.NEXT_PUBLIC_RENTAL_FORM_URL} isExternal>
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
