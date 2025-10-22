import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
  /* config options here */
};

const withNextra = nextra({
  defaultShowCopyCode: true,
  latex: true,
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: "vitesse-dark",
    },
  },
});

export default withNextra(nextConfig);
