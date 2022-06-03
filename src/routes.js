import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import repositories from "./repositories";


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