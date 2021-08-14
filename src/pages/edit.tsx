import { Center, Container, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { constants } from "utilities";

const EditPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(constants.editUrl);
  }, [router]);

  return (
    <Container>
      <Center marginTop={10}>
        <Heading as="h1" variant="h1">
          Redirecting...
        </Heading>
      </Center>
    </Container>
  );
};

export default EditPage;
