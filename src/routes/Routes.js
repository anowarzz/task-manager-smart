import { createBrowserRouter } from "react-router-dom";
import AddTask from "../components/Pages/AddTask/AddTask";
import CompletedTask from "../components/Pages/CompletedTask/CompletedTask";
import MyTasks from "../components/Pages/MyTasks/MyTasks";
import Main from "../layout/Main";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/addTask',
                element: <AddTask />,
            },
            {
                path: '/myTasks',
                element: <MyTasks />
            },
            {
                path: '/completedTasks',
                element: <CompletedTask />
            }
        ]
    }


])


export default router;