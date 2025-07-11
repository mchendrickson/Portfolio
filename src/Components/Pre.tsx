import React from "react";

/**
 * Preloader component that displays a loading animation.
 * 
 * Renders a loading screen that is shown during the initial
 * application load. It uses conditional CSS classes based on the load prop
 * to control visibility - when load is true, it shows the preloader;
 * when false, it hides the preloader with the "preloader-none" class.
 * 
 * The component is used in the main App component to provide a smooth
 * loading experience before the main content is ready to display.
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.load - Whether to show the preloader (true) or hide it (false)
 * @returns {JSX.Element} A div with conditional preloader styling
 */
function Pre(props: any) {
    return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
