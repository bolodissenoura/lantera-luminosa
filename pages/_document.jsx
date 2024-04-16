import Document, { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

