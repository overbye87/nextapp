/* eslint-disable class-methods-use-this */
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { createRequestInterceptor } from '../api/main/axios';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;
    // createRequestInterceptor(ctx)
    // console.log('WHERE', ctx);
    // if (ctx.req && ('cookie' in ctx.req)) {
    //   const rawToken = (ctx.req as any).cookie;
    //   console.log('TTTTTTT', rawToken);
    // }

    // Run the React rendering logic synchronously
    ctx.renderPage = () => originalRenderPage({
      // Useful for wrapping the whole react tree
      enhanceApp: (App) => App,
      // Useful for wrapping in a per-page basis
      enhanceComponent: (Component) => Component,
    });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
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
