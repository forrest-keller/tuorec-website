import { Container } from "@chakra-ui/react";
import { Product } from "components";
import { GetStaticProps } from "next";

export interface Props {

}

export const getStaticProps: GetStaticProps<> = () => {
  return {}
}

const ProductPage = () => {
  return (
    <Container>
      <Product {} />
    </Container>
  )
};



export default ProductPage;
