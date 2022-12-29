import { createBrowserRouter } from "react-router-dom";
import AddTask from "../components/Pages/AddTask/AddTask";
import CompletedTask from "../components/Pages/CompletedTask/CompletedTask";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Login from "../components/Pages/Login/Login";
import MyTasks from "../components/Pages/MyTasks/MyTasks";
import SignUp from "../components/Pages/SignUp/SignUp";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <AddTask />
            },
            {
                path: '/addTask',
                element: <AddTask />,
            },
            {
                path: '/myTasks',
                element: <PrivateRoute> <MyTasks /> </PrivateRoute>
            },
            {
                path: '/completedTasks',
                element: <PrivateRoute> <CompletedTask /> </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />,
            }
        ]
    }


])


export default router;