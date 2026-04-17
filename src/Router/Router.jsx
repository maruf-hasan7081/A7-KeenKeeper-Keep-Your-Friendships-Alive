import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";

import Homepage from "../Pages/Homepage";
import Timeline from "../Pages/Timeline";
import Stats from "../Pages/Stats";
import FriendDetails from "../Pages/FriendDetails";
import NotFound from "../Pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "time",
        element: <Timeline />,
      },
      {
        path: "stas",
        element: <Stats />,
      },
      {
        path: "friend/:id",
        element: <FriendDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);