import React, {createContext, useContext} from "react";

/**
 * Interface defining the structure of the preloader context.
 * 
 * Contains a boolean flag indicating whether the preloader animation
 * has completed, allowing components throughout the app to respond
 * to the loading state.
 */
interface PreloaderContextProps {
    preloaderDone: boolean;
}

/**
 * React context for managing preloader state across the application.
 * 
 * Provides a centralized way to share the preloader completion status
 * between components without prop drilling. Defaults to false indicating
 * the preloader is still active.
 */
const PreloaderContext = createContext<PreloaderContextProps>({preloaderDone: false});

/**
 * Custom hook to access the preloader context.
 * 
 * Provides a convenient way for components to consume the preloader
 * state without directly accessing the context. Returns the current
 * preloader completion status.
 * 
 * @returns {PreloaderContextProps} The current preloader context value
 */
export const usePreloader = () => useContext(PreloaderContext);

/**
 * Provider component that wraps the application to provide preloader context.
 * 
 * This component creates the context provider and passes the preloader
 * completion status to all child components. It's used in the main App
 * component to manage the global preloader state.
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.preloaderDone - Whether the preloader animation has completed
 * @param {React.ReactNode} props.children - Child components to be wrapped
 * @returns {JSX.Element} Context provider with children
 */
export const PreloaderProvider: React.FC<{ preloaderDone: boolean; children: React.ReactNode }> = ({
                                                                                                       preloaderDone,
                                                                                                       children,
                                                                                                   }) => {
    return (
        <PreloaderContext.Provider value={{preloaderDone}}>
            {children}
        </PreloaderContext.Provider>
    );
};
