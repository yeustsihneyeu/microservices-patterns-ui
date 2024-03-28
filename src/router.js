import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import {Event} from "./features/events/Event";
import {Nasa} from "./features/nasa/Nasa";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "events",
                element: <Event />,
            },
            {
                path: "nasa",
                element: <Nasa />,
            },
        ],
    },
]);