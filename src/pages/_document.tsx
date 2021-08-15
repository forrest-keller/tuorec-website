import Document, {
  DocumentContext,
  Html,
  Main,
  NextScript,
  Head,
} from "next/document";

class CustomDocument extends Document {
  private readonly NAME = "Trinity University Outdoor Recreation Club";
  private readonly COLOR = "#14991e";
  private readonly URL = "https://orec.trinity.edu";
  private readonly DESCRIPTION =
    "This student-run organization specializes in taking Trinity students off campus and into the wild side of Texas and surrounding states.";

  public static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={this.NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={this.NAME} />
          <meta name="description" content={this.DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/static/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content={this.COLOR} />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content={this.COLOR} />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="twitter:card" content={this.DESCRIPTION} />
          <meta name="twitter:url" content={this.URL} />
          <meta name="twitter:title" content={this.DESCRIPTION} />
          <meta name="twitter:description" content={this.DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={this.NAME} />
          <meta property="og:description" content={this.DESCRIPTION} />
          <meta property="og:site_name" content={this.NAME} />
          <meta property="og:url" content={this.URL} />
          <meta name="theme-color" content={this.COLOR} />
          <link rel="manifest" href="/site.webmanifest" />
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
