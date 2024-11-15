import { createBrowserRouter } from "react-router-dom";
import Product from "../pages/product";
import Home from "../pages/home";
import Main from "../pages/productMain";


export const routes = createBrowserRouter([
    {
        index:true,
        element:<Home/>
    },
    {
        path:"/product",
        element:<Product/>
    },
    {
        path:"/main",
        element:<Main/>
    }
])