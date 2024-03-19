import { useEffect, useState } from 'react';
import axios from 'axios';

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  platforms: { [key: string]: string };
}

export interface CoinListQueryParams {
  include_platform?: boolean;
}

export const useCoinList = (
  params: CoinListQueryParams = { include_platform: true }
): {
  coins: Coin[];
  loading: boolean;
  error: any;
} => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchCoinList = async () => {
      try {
        const response = await axios.get<Coin[]>(
          'https://api.coingecko.com/api/v3/coins/list',
          {
            params,
          }
        );
        setCoins(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCoinList();
  }, [params]);

  return { coins, loading, error };
};
