import { createBrowserRouter } from "react-router-dom";
import Cart from "@/features/cart/Cart";
import Menu, { menuLoader } from "@/features/menu/Menu";
import CreateOrder from "@/features/order/CreateOrder";
import Order from "@/features/order/Order";
import Home from "@/ui/Home";
import AppLayout from "@/ui/AppLayout";

export const createRouter = () => {
  return createBrowserRouter([
    {
      // Layout Route
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
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
