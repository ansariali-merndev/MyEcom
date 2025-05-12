import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./App/Layout";
import { Home } from "./Pages/Home";
import { Register } from "./Pages/Register";
import { Store } from "./Pages/Store";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Cart } from "./Pages/Cart";
import { Login } from "./Pages/Login";
import { Profile } from "./Pages/Profile";
import { ShopProvider } from "./Context/context";
import { ProductDetail } from "./Components/ProductDetail";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/store/:id",
        element: <ProductDetail />,
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <ShopProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </ShopProvider>
  );
};
