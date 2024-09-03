import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';


interface Menu {
  id: string;
  name: string;
  parent_id?: string | null;
  depth: number;
  children: Menu[];
  created_at?: string;
  updated_at?: string;
}


type MenusResponse = {
  data: Menu[];
}

const fetchMenus = async (): Promise<MenusResponse> => {
  const { data }: AxiosResponse<MenusResponse> = await axios.get('/api/menus');
  return data;
};

export const useMenus = () => useQuery<MenusResponse, Error>({
  queryKey: ['menus'],
  queryFn: fetchMenus,
});

export const useSaveMenu = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<Menu>, Error, Menu>(
    {
      mutationFn: (newMenu) => {
        return axios.post('/api/menus', newMenu)
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['menus'] })
      }
    }
  );
};
