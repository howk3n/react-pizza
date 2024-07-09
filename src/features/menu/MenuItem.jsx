import PropTypes from 'prop-types';
import Utils from '@/utils';
import Button from '@/ui/Button';
import BUTTON_TYPES from '@/constants/ButtonTypes';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItemButton from '../cart/DeleteItemButton';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

MenuItem.propTypes = {
  pizza: PropTypes.object,
};
function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizza.id));
  const isInCart = currentQuantity !== 0;

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  function handleAddToCart() {
    if (soldOut) return;
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex flex-grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{Utils.number.formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut &&
            (!isInCart ? (
              <Button type={BUTTON_TYPES.SMALL} onClick={handleAddToCart}>
                Add to cart
              </Button>
            ) : (
              <div className="flex items-center gap-3 sm:gap-8">
                <UpdateItemQuantity
                  itemId={id}
                  currentQuantity={currentQuantity}
                />
                <DeleteItemButton itemId={id} />
              </div>
            ))}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
