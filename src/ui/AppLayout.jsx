import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '@/features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';
import SearchOrder from '@/features/order/SearchOrder';

// import PropTypes from "prop-types";
// AppLayout.propTypes = {};

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header>
        <SearchOrder />
      </Header>
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
