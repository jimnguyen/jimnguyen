"use client";

import { useEffect } from "react";

function isReloadNavigation() {
  try {
    const [entry] = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    if (entry) return entry.type === "reload";
    // Fallback for older browsers without the Navigation Timing Level 2 API.
    return performance.navigation?.type === 1;
  } catch {
    return false;
  }
}

export function ScrollReset() {
  useEffect(() => {
    if (window.location.hash && isReloadNavigation()) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  return null;
}
