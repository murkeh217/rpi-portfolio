'use client';

import { useEffect } from 'react';

export default function NoCache() {
  useEffect(() => {
    // Prevent browser caching at the client level
    
    // Add cache-busting to all fetch requests
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
      const [resource, config] = args;
      
      // Add cache-busting query parameter
      const cacheBuster = `_cb=${Date.now()}_${Math.random().toString(36).substring(2)}`;
      
      if (typeof resource === 'string') {
        const separator = resource.includes('?') ? '&' : '?';
        const newResource = `${resource}${separator}${cacheBuster}`;
        
        // Add no-cache headers to request
        const newConfig = {
          ...config,
          headers: {
            ...config?.headers,
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        };
        
        return originalFetch(newResource, newConfig);
      }
      
      return originalFetch(...args);
    };
    
    // Prevent back/forward cache (bfcache) without aggressive reloading
    const preventBfCache = () => {
      // Add unload handler to prevent bfcache (but don't force reload)
      window.addEventListener('beforeunload', () => {
        // This prevents the page from being stored in bfcache
      });
      
      // Optional: Add a more gentle approach for cache busting
      window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
          // Instead of reloading, just log or handle cache state
          console.log('Page loaded from cache, but not forcing reload');
        }
      });
    };
    
    preventBfCache();
    
    // Set cache-control for the current page
    if (typeof document !== 'undefined') {
      // Add meta tags if they don't exist
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
    
    // Cleanup function
    return () => {
      // Restore original fetch if needed
      window.fetch = originalFetch;
    };
  }, []);

  return null; // This component doesn't render anything
}
