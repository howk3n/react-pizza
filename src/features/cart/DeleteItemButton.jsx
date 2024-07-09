import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import BUTTON_TYPES from '@/constants/ButtonTypes';
import Button from '@/ui/Button';
import { deleteItem } from './cartSlice';

DeleteItemButton.propTypes = {
  itemId: PropTypes.number,
};
function DeleteItemButton({ itemId }) {
  const dispatch = useDispatch();

  return (
    <Button
      type={BUTTON_TYPES.SMALL}
      onClick={() => dispatch(deleteItem(itemId))}
    >
      Remove
    </Button>
  );
}

export default DeleteItemButton;
