'use client';

import { useEffect } from 'react';

export default function NoCache() {
  useEffect(() => {
    // Simple, non-aggressive cache prevention
    const preventBfCache = () => {
      // Add unload handler to prevent bfcache (but don't force reload)
      window.addEventListener('beforeunload', () => {
        // This prevents the page from being stored in bfcache
      });
    };
    
    preventBfCache();
    
    // Set basic cache-control meta tags if they don't exist
    if (typeof document !== 'undefined') {
      const addMetaTag = (name: string, content: string) => {
        if (!document.querySelector(`meta[name="${name}"]`) && !document.querySelector(`meta[http-equiv="${name}"]`)) {
          const meta = document.createElement('meta');
          if (name.includes('cache') || name === 'pragma' || name === 'expires') {
            meta.httpEquiv = name;
          } else {
            meta.name = name;
          }
          meta.content = content;
          document.head.appendChild(meta);
        }
      };
      
      addMetaTag('cache-control', 'no-cache, no-store, must-revalidate, max-age=0');
      addMetaTag('pragma', 'no-cache');
      addMetaTag('expires', '0');
    }
  }, []);

  return null; // This component doesn't render anything
}
