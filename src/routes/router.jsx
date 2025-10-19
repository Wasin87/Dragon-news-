import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Pages/Home";
import CategoryNews from "../components/Pages/CategoryNews";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import AuthLayout from "../layout/AuthLayout";
import NewsDetails from "../components/Pages/NewsDetails";
import PrivetRoute from "../Provider/PrivetRoute";
import Loading from "../components/Pages/Loading";


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
            hydrateFallbackElement: <Loading></Loading>,
        }

    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
        {
            path:"/auth/login",
            element: <Login></Login>,
        },
        {
            path:"/auth/register",
            element: <Register></Register>,
        },
    ]
  },
  {
    path: "/news-details/:id",
    element: <PrivetRoute>
        <NewsDetails></NewsDetails>
    </PrivetRoute>,
    loader: () => fetch("/news.json"),
     hydrateFallbackElement: <Loading></Loading>
  },
  {
    path: "/*",
    element: <div>Error 404</div>,
  }
]);

export default router;