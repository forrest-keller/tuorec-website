import { FunctionComponent } from "react";
import Head from "next/head";

export interface MetadataProps {
  title?: string;
}

export const Metadata: FunctionComponent<MetadataProps> = ({ title }) => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <title>{title ? `${title} - OREC` : "OREC"}</title>
    </Head>
  );
};
