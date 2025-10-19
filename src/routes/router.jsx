import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Pages/Home";
import CategoryNews from "../components/Pages/CategoryNews";


const router = createBrowserRouter(
[
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
        {
            path:"",
            element: <Home></Home>
        },
        {
            path:"/category/:id",
            element: <CategoryNews></CategoryNews>,
            loader: () => fetch("/news.json"),
        }

    ]
  },
  {
    path: "/auth",
    element: <div>Authentication layout</div>,
  },
  {
    path: "/news",
    element: <div>News layout</div>,
  },
  {
    path: "/*",
    element: <div>Error 404</div>,
  }
]);

export default router;