import React, {createContext, useContext} from "react";

interface PreloaderContextProps {
    preloaderDone: boolean;
}

const PreloaderContext = createContext<PreloaderContextProps>({preloaderDone: false});

export const usePreloader = () => useContext(PreloaderContext);

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
