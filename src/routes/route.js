import { createBrowserRouter } from "react-router-dom";
import Browse from "../pages/browse";
import Login from "../pages/login";
import ForgotPass from "../pages/forgotPass";
import ProtectedRoute from "./protectedRoute";


const isAuthenticated = () => {
    return Boolean(localStorage.getItem('user')); 
};



const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Login></Login>
    },
    {
        path: '/browse',
        element: (
            <ProtectedRoute isAuthenticated={isAuthenticated()}>
                <Browse />
            </ProtectedRoute>
        ),
    },
    {
        path: '/forget password',
        element: <ForgotPass></ForgotPass>
    }
])
export default appRouter;