import { useState, useEffect } from "react";

export default function useMounted() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  return { isMounted: mounted };
}
