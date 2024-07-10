import PropTypes from 'prop-types';
import Utils from '@/utils';

OrderItem.propTypes = {
  item: PropTypes.object,
  isLoadingIngredients: PropTypes.bool,
  ingredients: PropTypes.arrayOf(PropTypes.string),
};
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{Utils.number.formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {!isLoadingIngredients ? ingredients.join(', ') : '...'}
      </p>
    </li>
  );
}

export default OrderItem;
