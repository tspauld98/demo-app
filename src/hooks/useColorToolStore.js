import { useList } from './useList';

export const useColorToolStore = (initialColors) => {

  // console.log(initialColors);

  const [ colors, addColor, , deleteColor ] = useList([ ...initialColors ]);

  return {
    colors,
    addColor,
    deleteColor
  };

};
