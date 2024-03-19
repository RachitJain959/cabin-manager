import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapture = true) {
  const ref = useRef();

  // Detect click outside Modal to close Modal
  useEffect(
    function () {
      function handleClick(e) {
        // if reference exists & ref contains e.target i.e. click, then close the modal window
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      document.addEventListener("click", handleClick, listenCapture);

      return () =>
        document.removeEventListener("click", handleClick, listenCapture);
    },
    [handler, listenCapture]
  );

  return ref;
}
