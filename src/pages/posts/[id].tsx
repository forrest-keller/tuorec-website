import { Container } from "@chakra-ui/react";
import { Post } from "components";
import { Metadata } from "components/metadata";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PostFragment } from "../../../generated/graphql/base";
import {
  getServerPagePost,
  getServerPagePostIds,
} from "../../../generated/graphql/next";

export interface Props {
  post: PostFragment;
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const res = await getServerPagePostIds({});

  return {
    fallback: false,
    paths: res.props.data.posts.map((post) => ({
      params: { id: post.id },
    })),
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const res = await getServerPagePost({
    variables: { id: ctx?.params?.id as string | undefined },
  });

  if (!res.props.data.post) {
    throw new Error("Post not found.");
  }

  return { props: { post: res.props.data.post } };
};

const PostPage: NextPage<Props> = ({ post }) => {
  return (
    <>
      <Metadata title={post.title} />
      <Container variant="xl">
        <Post {...post} />
      </Container>
    </>
  );
};

export default PostPage;
