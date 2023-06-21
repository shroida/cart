const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "usd",
  style: "currency",
});
const formatCurrency = (number) => {
  return CURRENCY_FORMATTER.format(number);
};
export default formatCurrency;
