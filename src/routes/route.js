import { createBrowserRouter } from "react-router-dom";
import Browse from "../pages/browse";
import Login from "../pages/login";
import ForgotPass from "../pages/forgotPass";

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Login></Login>
    },
    {
        path:'/browse',
        element:<Browse></Browse>
    },
    {
        path:'/forget password',
        element:<ForgotPass></ForgotPass>
    }
])
export default appRouter;