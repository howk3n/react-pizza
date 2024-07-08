import PropTypes from 'prop-types';
import BUTTON_TYPES from '@/constants/ButtonTypes';
import Button from '@/ui/Button';
import Utils from '@/utils';

CartItem.propTypes = {
  item: PropTypes.object,
};
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between sm:text-lg">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold sm:text-base">
          {Utils.number.formatCurrency(totalPrice)}
        </p>
        <Button type={BUTTON_TYPES.SMALL}>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
