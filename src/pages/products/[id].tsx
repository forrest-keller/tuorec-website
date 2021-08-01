import { Container } from "@chakra-ui/react";
import { Product } from "components";
import {
  getServerPageProduct,
  getServerPageProductIds,
  ProductFragment,
} from "generated";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export interface Props {
  product: ProductFragment;
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const res = await getServerPageProductIds({});

  return {
    fallback: false,
    paths: res.props.data.products.map((product) => ({
      params: { id: product.id },
    })),
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const res = await getServerPageProduct({
    variables: { id: ctx?.params?.id as string | undefined },
  });

  if (!res.props.data.product) {
    throw new Error("Product not found.");
  }

  return { props: { product: res.props.data.product } };
};

const ProductPage: NextPage<Props> = ({ product }) => {
  return (
    <Container>
      <Product {...product} />
    </Container>
  );
};

export default ProductPage;
