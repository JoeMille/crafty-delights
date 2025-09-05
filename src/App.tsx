import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

const App: React.FC = () => {
    return (
        <div className="app">
            <Navbar />
            <LandingPage />
        </div>
    );
};

export default App;
