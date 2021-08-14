import { Center, Container, Grid, Heading, Icon } from "@chakra-ui/react";
import { ButtonLink } from "components/button-link";
import { Metadata } from "components/metadata";
import { GiHouse, GiTrail, GiTreasureMap } from "react-icons/gi";

const CustomNotFoundPage = () => {
  return (
    <>
      <Metadata title="Page Not Found" />
      <Container>
        <Center marginTop={10}>
          <Grid gap={10}>
            <Heading as="h1" variant="h1">
              <Icon color="green.600" as={GiTrail} marginX={4} />
              We seem to have lost the trail...
            </Heading>
            <Center>
              <ButtonLink leftIcon={<Icon as={GiHouse} />} href="/">
                Go Home
              </ButtonLink>
            </Center>
          </Grid>
        </Center>
      </Container>
    </>
  );
};

export default CustomNotFoundPage;
