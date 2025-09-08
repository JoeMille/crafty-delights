import React from "react";
import SidebarNav from "./components/SidebarNav";
import LandingPage from "./components/LandingPage";
import SiteFooter from "./components/SiteFooter";

const App: React.FC = () => {
    return (
        <div className="app-layout">
            <SidebarNav />
            <main className="main-content">
                <LandingPage />
                <SiteFooter />
            </main>
        </div>
    );
};

export default App;