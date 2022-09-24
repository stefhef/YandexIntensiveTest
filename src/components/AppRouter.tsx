import React, {FunctionComponent} from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import {publicRoutes} from "../routes";

const AppRouter: FunctionComponent = () => {
    return (
            <Routes>
                {publicRoutes.map(route => <Route {...route} />)}
            </Routes>
    );
};

export default AppRouter;