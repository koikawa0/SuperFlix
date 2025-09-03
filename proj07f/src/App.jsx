import React from "react";
import  {createRoot} from "react-dom/client"
import Routes from "./Routes.jsx";

const container = document.getElementById("root");
const origin = createRott(container);

origin.render(<Routes/>)