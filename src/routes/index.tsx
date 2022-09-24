import {ReactElement} from "react";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

export interface IRoute {
    path: string;
    element: ReactElement;
    exact?: boolean;
    key: string;
}

export enum RouteNames {
    NOT_FOUND = "*",
    HOME = "/",
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.NOT_FOUND, key: RouteNames.NOT_FOUND, element: <NotFoundPage />},
    {path: RouteNames.HOME, key: RouteNames.HOME, element: <HomePage />},
]