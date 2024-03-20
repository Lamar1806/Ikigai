export const extractCoinDetails = (coin) => {
  const cryptoId = coin?.id;
  const cryptoName = coin?.name;
  const cryptoSymbol = coin?.symbol;
  const currentAmount = coin?.current_price;
  const priceChangePercentage24h = coin?.price_change_percentage_24h;
  const priceChange = coin?.price_change_24h;

  return {
    cryptoId,
    cryptoName,
    cryptoSymbol,
    currentAmount,
    priceChangePercentage24h,
    priceChange,
  };
};
