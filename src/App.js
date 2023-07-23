import ReactDOM from "react-dom/client";
import {lazy, Suspense} from "react";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import RestaruentMenu from "./components/RestaruentMenu";
import ProfileFn from "./components/ProfileFn";
import Shimmer from "./components/Shimmer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
        children: [
          {
            path: "profile",
            element: <ProfileFn />,
          },
        ],
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaruent/:resId",
        element: <RestaruentMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
