import { createBrowserRouter } from "react-router-dom";
import Browse from "../pages/browse";
import Login from "../pages/login";

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Login></Login>
    },
    {
        path:'/browse',
        element:<Browse></Browse>
    }
])
export default appRouter;