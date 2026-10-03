import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    const timeout = window.setTimeout(() => {
      document
        .getElementById(decodeURIComponent(hash.slice(1)))
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);

    return () => window.clearTimeout(timeout);
  }, [hash, pathname]);

  return null;
};

export default ScrollToTop;