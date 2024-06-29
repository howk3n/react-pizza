import Utils from "@/utils";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? (
            <p>{Utils.number.formatCurrency(unitPrice)}</p>
          ) : (
            <p>Sold out</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
