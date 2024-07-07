import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Root/Root";
import Login from "../pages/Home/Login/Login";
import About from "../pages/Home/About/About";
import Register from "../pages/register/Register";
import News from "../pages/news/News";
import PrivateRoute from "./privateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path :'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/news.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
             path:'/news/:id',
             element:<PrivateRoute><News></News></PrivateRoute>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;