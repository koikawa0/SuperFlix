import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";
import Video from "./pages/Video.jsx";
import Panel from "./pages/Panel.jsx";

export default function path() {
    return <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route index path="/explore" element={<Explore/>}/>
            <Route index path="/video/:codigo" element={<Video/>}/>
            <Route index path="/panel" element={<Panel/>}/>
        </Routes>
    </BrowserRouter>
}