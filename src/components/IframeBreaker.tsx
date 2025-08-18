'use client';

import { useEffect } from 'react';

export default function IframeBreaker() {
  useEffect(() => {
    // Check if the current window is inside an iframe
    const isInIframe = () => {
      try {
        return window.self !== window.top;
      } catch (_e) {
        // If we can't access window.top due to cross-origin restrictions,
        // we're likely in an iframe
        return true;
      }
    };

    // Function to break out of iframe
    const breakOutOfIframe = () => {
      try {
        // Try to break out by setting the top window location
        if (window.top && window.top.location) {
          window.top.location.href = window.location.href;
        } else {
          // Fallback: replace the current location
          window.location.replace(window.location.href);
        }
      } catch (_e) {
        // If cross-origin restrictions prevent access to top window,
        // try alternative methods
        console.warn('Cannot access parent frame due to cross-origin restrictions');
        
        // Try to open in a new window/tab
        window.open(window.location.href, '_blank');
        
        // Show a message to the user
        document.body.innerHTML = `
          <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999999;
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            text-align: center;
            padding: 20px;
            box-sizing: border-box;
          ">
            <div>
              <h1 style="font-size: 2.5rem; margin-bottom: 1rem; font-weight: 600;">
                🚫 Iframe Not Allowed
              </h1>
              <p style="font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.9;">
                This portfolio cannot be displayed in an iframe for security reasons.
              </p>
              <a 
                href="${window.location.href}" 
                target="_blank"
                style="
                  display: inline-block;
                  padding: 12px 24px;
                  background: rgba(255, 255, 255, 0.2);
                  color: white;
                  text-decoration: none;
                  border-radius: 8px;
                  border: 2px solid rgba(255, 255, 255, 0.3);
                  font-size: 1.1rem;
                  font-weight: 500;
                  transition: all 0.3s ease;
                  backdrop-filter: blur(10px);
                "
                onmouseover="this.style.background='rgba(255, 255, 255, 0.3)'; this.style.transform='translateY(-2px)';"
                onmouseout="this.style.background='rgba(255, 255, 255, 0.2)'; this.style.transform='translateY(0)';"
              >
                📱 Open in New Tab
              </a>
            </div>
          </div>
        `;
      }
    };

    // Additional iframe detection methods
    const detectIframeByDimensions = () => {
      // Check if window dimensions suggest iframe
      const isSmallWindow = window.innerWidth < screen.width || window.innerHeight < screen.height;
      const hasScrollbars = window.innerWidth !== document.documentElement.clientWidth;
      return isSmallWindow && !hasScrollbars;
    };

    const detectIframeByReferrer = () => {
      // Check if there's a referrer that's different from current origin
      return document.referrer && new URL(document.referrer).origin !== window.location.origin;
    };

    // Comprehensive iframe detection
    const isLikelyInIframe = () => {
      return isInIframe() || detectIframeByDimensions() || detectIframeByReferrer();
    };

    // Check immediately
    if (isLikelyInIframe()) {
      console.warn('Iframe detected! Breaking out...');
      breakOutOfIframe();
    }

    // Also set up a periodic check in case of dynamic iframe injection
    let checkCount = 0;
    const intervalId = setInterval(() => {
      checkCount++;
      
      if (isLikelyInIframe()) {
        console.warn('Iframe detected during periodic check! Breaking out...');
        breakOutOfIframe();
        clearInterval(intervalId);
      }
      
      // Stop checking after 10 attempts (5 seconds)
      if (checkCount >= 10) {
        clearInterval(intervalId);
      }
    }, 500);

    // Set up event listeners for iframe detection
    const handleResize = () => {
      if (isLikelyInIframe()) {
        breakOutOfIframe();
      }
    };

    const handleMessage = (event: MessageEvent) => {
      // Detect if we're receiving messages from a parent frame
      if (event.source !== window && event.source === window.parent) {
        console.warn('Message from parent frame detected - likely in iframe');
        breakOutOfIframe();
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('message', handleMessage);

    // Cleanup
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}
