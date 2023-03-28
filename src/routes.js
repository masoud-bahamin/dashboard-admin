import Survey from "./Components/Survey/Survey";
import SurveyInfo from "./Components/Survey/SurveyInfo";
import MainDashboard from "./MainDashboard";
import Analytics from "./Pages/Analytics/Analytics";
import Chat from "./Pages/Chat/Chat";
import Content from "./Pages/Content/Content";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Ecommerce from "./Pages/Ecommerce/Ecommerce";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Login from "./Pages/Login/Login";
import DataList from "./Pages/Product/DataList";
import Details from "./Pages/Product/Details";
import DetailsAlt from "./Pages/Product/DetailsAlt";
import ImageList from "./Pages/Product/ImageList";
import ThumbList from "./Pages/Product/ThumbList";
import Register from "./Pages/Register/Register";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import ToDoList from "./TodoList/ToDoList";



const routes = [
    { path: "/", element: <Dashboard /> },
     { path: "/*", element: <Dashboard /> },
    {
        path: "/dashboard", element: <MainDashboard />, children: [
            { path: "default", element: <Dashboard /> },
            { path: "ecommerce", element: <Ecommerce /> },
            { path: "analytics", element: <Analytics /> },
            { path: "content", element: <Content /> },


            { path: "data-list", element: <DataList /> },
            { path: "thumb-list", element: <ThumbList /> },
            { path: "image-list", element: <ImageList /> },
            { path: "details", element: <Details /> },
            { path: "details-alt", element: <DetailsAlt /> },


            { path: "to-do-list", element: <ToDoList /> },
            { path: "chat", element: <Chat /> },
            { path: "survey", element: <Survey /> },
            { path: "survey-info/:id", element: <SurveyInfo /> },
        ]
    },


    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/reset-password", element: <ResetPassword /> },
]

export default routes
