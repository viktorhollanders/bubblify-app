import { useEffect, useState } from "react";

export function useMediaQuery(selector: string = "min-width: 1024px") {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia(`(${selector})`);

    function updateMatches() {
      setMatches(mediaQuery.matches);
    }

    updateMatches(); // set on initial render
    mediaQuery.addEventListener("change", updateMatches);
    return () => {
      mediaQuery.removeEventListener("change", updateMatches);
    };
  }, [selector]);

  return { matches };
}
