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
              "frame-src 'self' *.facebook.com *.fbcdn.net",
              "img-src 'self' data: blob: *.facebook.com *.fbcdn.net *.fbsbx.com",
              "font-src 'self' data: *",
              "style-src 'self' 'unsafe-inline' *.facebook.com *.fbcdn.net",
              "connect-src 'self' *.facebook.com *.fbcdn.net",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
