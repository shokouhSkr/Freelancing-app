import { useEffect, useRef, MutableRefObject } from "react";

export const useClickOutside = (handler: () => void): MutableRefObject<null | HTMLElement> => {
  const ref = useRef<null | HTMLElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    }

    document.addEventListener("click", handleClick, true); // for disabling bubbling feature

    // clean up fn
    return () => document.removeEventListener("click", handleClick, true);
  }, [handler]);

  return ref;
};
