'use client';

import { useEffect } from 'react';

export default function VisitTracker() {
  useEffect(() => {
    // Log the visit when component mounts
    const logVisit = async () => {
      try {
        const response = await fetch('/api/log-visit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log('Visit logged successfully:', result.message);
      } catch (error) {
        console.warn('Failed to log visit:', error);
        // Don't throw error to avoid breaking the app
      }
    };

    // Small delay to ensure the page is fully loaded
    const timer = setTimeout(logVisit, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // This component doesn't render anything visible
  return null;
}
