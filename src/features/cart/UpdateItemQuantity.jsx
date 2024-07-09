import BUTTON_TYPES from '@/constants/ButtonTypes';
import Button from '@/ui/Button';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

UpdateItemQuantity.propTypes = {
  itemId: PropTypes.number,
  currentQuantity: PropTypes.number,
};
function UpdateItemQuantity({ itemId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <Button
        type={BUTTON_TYPES.ROUND}
        onClick={() => dispatch(decreaseItemQuantity(itemId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type={BUTTON_TYPES.ROUND}
        onClick={() => dispatch(increaseItemQuantity(itemId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
