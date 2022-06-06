import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import repositories from "./pages/Repositories";


export default function Routes() {
    return(
            <BrowserRouter>
                <switch>
                <Route path="/" exact component={Home} />
                <Route path="/repositories" component={repositories} />
                </switch>
            </BrowserRouter>
        
    )

}