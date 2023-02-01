import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/TableData/Home/Home";
import UserDetailRoute from "../Components/TableData/Home/UserDetailRoute/UserDetailRoute";
import Main from "../Layout/Main/Main";

const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/userDetails/:id',
            element: <UserDetailRoute></UserDetailRoute>,
            loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        }
    ]
}])

export default router;