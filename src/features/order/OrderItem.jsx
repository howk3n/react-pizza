import Utils from "@/utils";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{Utils.number.formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
