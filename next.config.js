const nextConfig = {
  // Disable caching for all pages and API routes
  headers: async () => {
    return [
      {
        // Apply no-cache headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0'
          },
          {
            key: 'Pragma',
            value: 'no-cache'
          },
          {
            key: 'Expires',
            value: '0'
          },
          {
            key: 'Surrogate-Control',
            value: 'no-store'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'none'"
          }
        ]
      },
      {
        // Extra strict no-cache for API routes
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0, private'
          },
          {
            key: 'Pragma',
            value: 'no-cache'
          },
          {
            key: 'Expires',
            value: '0'
          },
          {
            key: 'Surrogate-Control',
            value: 'no-store'
          },
          {
            key: 'Vary',
            value: '*'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'none'"
          }
        ]
      }
    ];
  },
  
  // Force dynamic rendering by disabling static generation
  trailingSlash: false,
  
  // Disable image optimization caching
  images: {
    unoptimized: true,
  },
  
  // Disable build-time caching
  generateBuildId: async () => {
    // Generate a unique build ID each time to prevent caching
    return `build-${Date.now()}-${Math.random().toString(36).substring(2)}`;
  }
};

module.exports = nextConfig;
