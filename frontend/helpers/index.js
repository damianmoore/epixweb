import { useEffect, useRef } from 'react';

function trackPageView(url) {
  try {
    if (window && window._paq) {
      window._paq.push(["setCustomUrl", url]);
      window._paq.push(["setDocumentTitle", document.title]);
      window._paq.push(["trackPageView"]);
    }
  } catch (error) {
    // silences the error in dev mode etc.
  }
}


function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

module.exports = {
  trackPageView,
  useInterval,
};
