import React from 'react';
import ToolBar from "../ToolBar/ToolBar";

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <div>
            <>
                <header>
                    <ToolBar/>
                </header>
                <main>
                    {children}
                </main>
            </>
        </div>
    );
};

export default Layout;