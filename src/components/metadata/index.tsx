import { FunctionComponent } from "react";
import Head from "next/head";

export interface MetadataProps {
  title?: string;
}

export const Metadata: FunctionComponent<MetadataProps> = ({ title }) => {
  return (
    <Head>
      <link
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <title>{title ? `${title} - OREC` : "OREC"}</title>
    </Head>
  );
};
