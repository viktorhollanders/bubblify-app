import { useEffect, useState } from "react";

export function useLocalStorage<T>(storageKey: string, initValue: T) {
  const [hasHydrated, setHasHydrated] = useState(false);
  const [state, setState] = useState(initValue);

  useEffect(() => {
    try {
      const result = localStorage.getItem(storageKey);
      setState(result ? JSON.parse(result) : initValue);
    } catch {
      setState(initValue);
    } finally {
      setHasHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (hasHydrated) {
      localStorage.setItem(storageKey, JSON.stringify(state));
    }
  }, [state]);

  return { state, setState, hasHydrated };
}
