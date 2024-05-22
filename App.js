import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/Components/Body";
import Header from "./src/Components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import { Provider } from "react-redux";
import { lazy } from "react";
import { Suspense } from "react";
import appStore from "./src/utils/appStore";
import Cart from "./src/Components/Cart";
// import Grocery from "./src/Components/Grocery";
const Grocery = lazy(() => import("./src/Components/Grocery"));
// import RestaurantCard from "./src/Components/RestaurantCard";
/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// Header component for header section: Logo, Nav Items

// RestaurantList is JSON Data for displaying cards

// Restaurant card component: Image, name, cuisine

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const AppLayout = () => {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Grocery is loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
