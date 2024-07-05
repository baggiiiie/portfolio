/** @type {import('next').NextConfig} */

const myDomain = "yingchaoooo.com";

const nextConfig = {
  rewrites() {
    return {
      beforeFiles: [
        // if the host is `app.acme.com`,
        // this rewrite will be applied
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: `project1.${myDomain}`,
            },
          ],
          destination: "/project1/:path*",
        },
      ],
    };
  },

  async redirects() {
    return [
      {
        source: "/blog",
        destination: `https://blog.${myDomain}`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
