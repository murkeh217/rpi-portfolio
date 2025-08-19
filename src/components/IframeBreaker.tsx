'use client';

import { useEffect } from 'react';

export default function IframeBreaker() {
  useEffect(() => {
    // Check if the current window is inside an iframe
    const isInIframe = () => {
      try {
        return window.self !== window.top;
      } catch (e) {
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
      } catch (e) {
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

    // Use only the most reliable iframe detection method
    const isLikelyInIframe = () => {
      return isInIframe();
    };

    // Check immediately
    if (isLikelyInIframe()) {
      console.warn('Iframe detected! Breaking out...');
      breakOutOfIframe();
    }

    // Remove periodic checks to prevent false positives
    let intervalId: NodeJS.Timeout | null = null;

    // Remove event listeners that can cause false positives

    // Cleanup
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}
