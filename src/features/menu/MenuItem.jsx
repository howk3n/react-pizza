import PropTypes from 'prop-types';
import Utils from '@/utils';
import Button from '@/ui/Button';
import BUTTON_TYPES from '@/constants/ButtonTypes';

MenuItem.propTypes = {
  pizza: PropTypes.object,
};
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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

          <Button type={BUTTON_TYPES.SMALL}>Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
