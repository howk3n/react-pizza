export function formatCurrency(value) {
  console.log(
    value,
    new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'EUR',
    }).format(value)
  );
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
}
