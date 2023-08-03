import ReactDOM from "react-dom/client";
import {lazy, Suspense, useState} from "react";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import RestaruentMenu from "./components/RestaruentMenu";
import ProfileFn from "./components/ProfileFn";
import Shimmer from "./components/Shimmer";

import { Provider } from "react-redux";
import store from "./redux/store";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import UserContext from "./utils/userContext";
import Cart from "./components/Cart";

// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
const AboutUs = lazy(() => import("./components/AboutUs"));

const AppLayout = () => {
  const [users, setUsers] = useState({
    name: "Daniel",
    email: "daniel@gmail.com",
  });
  return (
    <>
    <Provider store={store}>
      <UserContext.Provider
        value={{
          userName: users,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
      </Provider>
    </>
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
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <AboutUs />
          </Suspense>
        ),
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
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
