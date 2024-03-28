import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";


function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    );
}

export default App;
