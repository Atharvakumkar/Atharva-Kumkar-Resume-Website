import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * Fires on every route change and resets the window scroll to the top.
 * Uses plain window.scrollTo(0, 0) — most reliable cross-browser approach.
 * Wrapped in setTimeout(0) so it runs after React flushes the new page
 * to the DOM, preventing race conditions with page transition animations.
 */
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        const id = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
        return () => clearTimeout(id);
    }, [pathname]);

    return null;
}

export default ScrollToTop;
