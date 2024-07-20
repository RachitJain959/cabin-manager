import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  // Detect click outside Modal to close Modal
  useEffect(
    function () {
      function handleClick(e) {
        // if reference exists & ref contains e.target i.e. click, then close the modal window
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
