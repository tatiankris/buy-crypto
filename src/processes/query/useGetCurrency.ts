import { useQuery } from 'react-query';
import { coinsAPI } from '../../api/api';

export const useGetCurrency = (id: string | null) => {
  return useQuery(['currency', id], async () => {
    if (id) {
      return await coinsAPI.getAssetsItem(id ? id : '');
    }
  });
};
