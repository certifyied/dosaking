import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    // Use both window.scrollTo and document.documentElement.scrollTop for maximum compatibility
    // Set scrollTop directly first for immediate effect (no animation)
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
    
    // Also use window.scrollTo for additional compatibility
    window.scrollTo(0, 0);
  }, [pathname]);

  // Ensure scroll is at top on initial mount
  useEffect(() => {
    const scrollToTop = () => {
      // Direct scrollTop assignment for immediate effect (no animation)
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
      
      // Also use window.scrollTo for additional compatibility
      window.scrollTo(0, 0);
    };

    // Immediate scroll
    scrollToTop();

    // Use requestAnimationFrame to ensure DOM is fully ready
    requestAnimationFrame(() => {
      scrollToTop();
    });

    // Also ensure after a brief delay to handle any async rendering
    const timeoutId = setTimeout(scrollToTop, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  return null;
};

