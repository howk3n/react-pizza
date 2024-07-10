import { useFetcher } from 'react-router-dom';
import BUTTON_TYPES from '@/constants/ButtonTypes';
import Button from '@/ui/Button';
import { updateOrder } from '@/services/apiRestaurant';

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type={BUTTON_TYPES.PRIMARY}>Make priority</Button>
    </fetcher.Form>
  );
}

export async function action({ params: { orderId } }) {
  const data = { priority: true };
  await updateOrder(orderId, data);
  return null;
}

export default UpdateOrder;
