import React, {FunctionComponent} from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import {publicRoutes} from "../routes";

const AppRouter: FunctionComponent = () => {
    // const {isAuth} = useTypedSelector(state => state.auth)
    return (
        // isAuth
        //     ?
        //     <Routes>
        //         {privateRoutes.map(route => <Route {...route}/>)}
        //     </Routes>
        //     :
            <Routes>
                {publicRoutes.map(route => <Route {...route} />)}
            </Routes>
    );
};

export default AppRouter;