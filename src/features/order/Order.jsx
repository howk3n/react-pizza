import Utils from "@/utils";

// Test ID: IIDSAT
const order = {
  id: "ABCDEF",
  customer: "Jonas",
  phone: "123456789",
  address: "Arroios, Lisbon , Portugal",
  priority: true,
  estimatedDelivery: "2027-04-25T10:00:00",
  cart: [
    {
      pizzaId: 7,
      name: "Napoli",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: "Diavola",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: "Romana",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: "-9.000,38.000",
  orderPrice: 95,
  priorityPrice: 19,
};

function Order() {
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
