import React, { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./component/NotFound.jsx";
import ProductList from "./component/ProductList.jsx";

// this function is used for individual rendering when neeeded 
const Cart = React.lazy(() => import("./component/Cart.jsx"));
const ProductDetails = React.lazy(() =>
  import("./component/ProductDetails.jsx")
);

// for routing from one to another component without refreshing the page 
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/product-details/:id",
        element: (
          <Suspense
            fallback={
              <h1 className="text-3xl text-center mt-30 py-30 font-semibold">
                Loading...
              </h1>
            }
          >
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense
            fallback={
              <h1 className="text-3xl text-center mt-30 py-30 font-semibold">
                Loading...
              </h1>
            }
          >
            <Cart />
          </Suspense>
        ),
      },
    ],
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
