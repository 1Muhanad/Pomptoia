import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

// Source - https://stackoverflow.com/q/71706064
// Posted by auser, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-06, License - CC BY-SA 4.0

const ReactDOMServer = require("react-dom/server");

const clientHtml = ReactDOMServer.renderToString();

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompt",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
