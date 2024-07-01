import { createBrowserRouter } from "react-router-dom";
import Cart from "@/features/cart/Cart";
import Menu, { menuLoader } from "@/features/menu/Menu";
import CreateOrder from "@/features/order/CreateOrder";
import Order from "@/features/order/Order";
import Home from "@/ui/Home";
import AppLayout from "@/ui/AppLayout";
import Error from "@/ui/Error";

export const createRouter = () => {
  return createBrowserRouter([
    {
      // Layout Route
      element: <AppLayout />,
      errorElement: <Error />, // If the error is not in the menu, then the error will bubble up here and display instead of entire layout
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />, // In case of menu loading error this error will be caught here, and we will still render the rest of the layout
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
        },
      ],
    },
  ]);
};
