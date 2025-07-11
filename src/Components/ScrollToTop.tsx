import {useEffect} from "react";
import {useLocation} from "react-router-dom";

/**
 * Component that automatically scrolls to the top of the page on route changes.
 * 
 * This component uses React Router's useLocation hook to detect route changes
 * and automatically scrolls the window to the top (0, 0) whenever the pathname
 * changes. This ensures users always start at the top of new pages instead
 * of remaining at their previous scroll position.
 * 
 * The component returns null as it doesn't render any visible UI elements;
 * it only performs the scroll behavior as a side effect.
 * 
 * @returns {null} No visible UI elements
 */
function ScrollToTop() {
    const {pathname} = useLocation();
    
    /**
     * Scrolls to the top of the page when the route changes.
     * 
     * This effect runs whenever the pathname changes, ensuring that
     * users always start at the top of new pages for better navigation
     * experience.
     */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return null;
}

export default ScrollToTop;
