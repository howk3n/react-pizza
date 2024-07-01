import Utils from "@/utils";
import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
// Test ID: IIDSAT
export async function orderLoader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = Utils.dateTime.calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${Utils.dateTime.calcMinutesLeft(
                estimatedDelivery
              )} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>
          (Estimated delivery: {Utils.dateTime.formatDate(estimatedDelivery)})
        </p>
      </div>

      <div>
        <p>Price pizza: {Utils.number.formatCurrency(orderPrice)}</p>
        {priority && (
          <p>Price priority: {Utils.number.formatCurrency(priorityPrice)}</p>
        )}
        <p>
          To pay on delivery:{" "}
          {Utils.number.formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export default Order;
