import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  // useLocation gives us the current URL pathname (e.g., '/menu' or '/cart')
  const { pathname } = useLocation();

  useEffect(() => {
    // Every time the pathname changes, instantly scroll to the top left (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render any HTML, it just runs the logic above
  return null;
}