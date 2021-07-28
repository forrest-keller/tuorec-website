import { FunctionComponent } from "react";
import { RichTextContent } from "@graphcms/rich-text-types";

export interface RichTextProps {
  content: RichTextContent;
}

export const RichText: FunctionComponent<RichTextProps> = ({ content }) => {
  return <p>Rich Text</p>;
};
