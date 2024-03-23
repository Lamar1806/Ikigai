export const extractCoinDetails = (coin) => {
  const cryptoId: string | undefined = coin?.cryptoId;
  const cryptoName: string | undefined = coin?.cryptoName;
  const cryptoSymbol: string | undefined = coin?.cryptoSymbol;
  const currentAmount: number | undefined = coin?.currentAmount;
  const priceChangePercentage24h: number | undefined =
    coin?.priceChangePercentage24h;
  const priceChange24h: number | undefined = coin?.priceChange24h;

  return {
    cryptoId,
    cryptoName,
    cryptoSymbol,
    currentAmount,
    priceChangePercentage24h,
    priceChange24h,
  };
};
