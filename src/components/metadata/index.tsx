import { FunctionComponent } from "react";
import Head from "next/head";

export interface MetadataProps {
  title?: string;
  description?: string;
}

export const Metadata: FunctionComponent<MetadataProps> = ({
  title,
  description,
}) => {
  return (
    <Head>
      <title>{title ? `${title} - OREC` : "OREC"}</title>
      <meta name="description" content={description} />
    </Head>
  );
};
