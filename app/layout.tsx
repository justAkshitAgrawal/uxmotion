import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "./globals.css";

export const metadata = {
  title: "UX Motion - Beautiful UI Components",
  description:
    "Beautifully animated, production-ready UI components built with React + motion.dev. The design system for feeling.",
};

const banner = (
  <Banner storageKey="ux-motion-banner">
    ✨ New micro-interactions added! Explore the gallery →
  </Banner>
);
const navbar = (
  <Navbar
    logo={<b>UX Motion</b>}
    // ... Your additional navbar options
  />
);
const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © UX Motion. Built with motion.dev
  </Footer>
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          copyPageButton={false}
          editLink={false}
          feedback={{
            content: "",
          }}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
