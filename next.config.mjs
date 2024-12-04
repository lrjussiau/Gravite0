/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  poweredByHeader: false,
  serverRuntimeConfig: {
    // Configuration serveur uniquement
  },
  publicRuntimeConfig: {
    // Configuration serveur et client
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Forwarded-For',
            value: '${req.headers["x-forwarded-for"]}'
          }
        ]
      }
    ];
  }
};
