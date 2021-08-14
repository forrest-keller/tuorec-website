import { FunctionComponent } from "react";
import { NodeRendererType, RichTextContent } from "@graphcms/rich-text-types";
import { RichText as GraphCmsRichText } from "@graphcms/rich-text-react-renderer";
import {
  Heading,
  ListItem,
  OrderedList,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "components/link";
import Image from "next/dist/client/image";

export interface RichTextProps {
  content: RichTextContent;
}

export const RichText: FunctionComponent<RichTextProps> = ({ content }) => {
  const p: NodeRendererType["p"] = ({ children }) => <Text>{children}</Text>;
  const blockquote: NodeRendererType["blockquote"] = ({ children }) => (
    <Text as="blockquote" variant="quote">
      {children}
    </Text>
  );
  const code: NodeRendererType["code"] = ({ children }) => (
    <Text as="code">{children}</Text>
  );
  const underline: NodeRendererType["underline"] = ({ children }) => (
    <Text as="u">{children}</Text>
  );
  const bold: NodeRendererType["bold"] = ({ children }) => (
    <Text as="b">{children}</Text>
  );
  const italic: NodeRendererType["italic"] = ({ children }) => (
    <Text as="i">{children}</Text>
  );
  const h1: NodeRendererType["h1"] = ({ children }) => (
    <Heading as="h2" variant="h2">
      {children}
    </Heading>
  );
  const h2: NodeRendererType["h2"] = ({ children }) => (
    <Heading as="h2" variant="h3">
      {children}
    </Heading>
  );
  const h3: NodeRendererType["h3"] = ({ children }) => (
    <Heading as="h3" variant="h4">
      {children}
    </Heading>
  );
  const h4: NodeRendererType["h4"] = ({ children }) => (
    <Heading as="h4" variant="h5">
      {children}
    </Heading>
  );
  const h5: NodeRendererType["h5"] = ({ children }) => (
    <Heading as="h5" variant="h6">
      {children}
    </Heading>
  );
  const h6: NodeRendererType["h6"] = ({ children }) => (
    <Heading as="h6" variant="h6">
      {children}
    </Heading>
  );
  const a: NodeRendererType["a"] = ({ children, href }) => {
    if (!href) {
      return <Text>{children}</Text>;
    }

    return (
      <Link href={href} isExternal>
        {children}
      </Link>
    );
  };
  const img: NodeRendererType["img"] = ({ src, width, height, title }) => {
    if (!src) {
      return <></>;
    }

    return (
      <Image
        src={src}
        alt={title || ""}
        width={width || 500}
        height={height || 500}
      />
    );
  };
  const ul: NodeRendererType["ul"] = ({ children }) => (
    <UnorderedList>{children}</UnorderedList>
  );
  const ol: NodeRendererType["ol"] = ({ children }) => (
    <OrderedList>{children}</OrderedList>
  );
  const li: NodeRendererType["li"] = ({ children }) => (
    <ListItem>{children}</ListItem>
  );
  const table: NodeRendererType["table"] = ({ children }) => (
    <Table colorScheme="blackAlpha">{children}</Table>
  );
  const table_head: NodeRendererType["table_head"] = ({ children }) => (
    <Thead backgroundColor="green.100">{children}</Thead>
  );
  const table_body: NodeRendererType["table_body"] = ({ children }) => (
    <Tbody>{children}</Tbody>
  );
  const table_row: NodeRendererType["table_row"] = ({ children }) => (
    <Tr>{children}</Tr>
  );
  const table_cell: NodeRendererType["table_cell"] = ({ children }) => (
    <Td>{children}</Td>
  );
  const renderers: NodeRendererType = {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    img,
    p,
    code,
    underline,
    bold,
    italic,
    blockquote,
    ul,
    ol,
    li,
    table,
    table_head,
    table_body,
    table_row,
    table_cell,
  };

  return <GraphCmsRichText content={content} renderers={renderers} />;
};
