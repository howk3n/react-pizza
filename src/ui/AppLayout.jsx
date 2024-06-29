import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./Header";
import CartOverview from "@/features/cart/CartOverview";

AppLayout.propTypes = {};

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
