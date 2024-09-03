import { selector } from 'recoil';
import { menuAtom } from '../atoms/menuAtom';

export const menuSelector = selector({
  key: 'menuSelector',
  get: ({ get }) => {
    const menus = get(menuAtom);
    return menus;
  },
});
