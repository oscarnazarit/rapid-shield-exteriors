import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.facebook.com *.fbcdn.net",
              "frame-src 'self' *.facebook.com *.fbcdn.net https://*.sanity.io",
              "img-src 'self' data: blob: *.facebook.com *.fbcdn.net *.fbsbx.com https://cdn.sanity.io https://*.bbb.org",
              "font-src 'self' data: *",
              "style-src 'self' 'unsafe-inline' *.facebook.com *.fbcdn.net",
              // Sanity Studio needs to reach its API, asset CDN, uploads, and live (websocket) APIs
              "connect-src 'self' *.facebook.com *.fbcdn.net https://*.sanity.io wss://*.sanity.io https://*.api.sanity.io https://*.apicdn.sanity.io",
              "worker-src 'self' blob:",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
