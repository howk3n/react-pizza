import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Utils from '@/utils';
import DeleteItemButton from './DeleteItemButton';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQuantityById } from './cartSlice';

CartItem.propTypes = {
  item: PropTypes.object,
};
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between sm:text-lg">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold sm:text-base">
          {Utils.number.formatCurrency(totalPrice)}
        </p>
        <UpdateItemQuantity
          itemId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItemButton itemId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
