export const formatPrice = (value: string) => {
  const checkDecimal = value.split('.');
  console.log(checkDecimal[0]);
  if (Number(checkDecimal[1]) === 0) return 'R$' + checkDecimal[0];

  let valueFormated = parseFloat(value).toFixed(2).replace('.', ',');
  valueFormated = valueFormated.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  return 'R$ ' + valueFormated;
};
