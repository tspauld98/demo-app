import { useState } from 'react';

export const useList = (initialList) => {
  const [ list, setList ] = useState([ ...initialList ]);

  const addItem = (item) => {
    setList([
      ...list,
      {
        id: Math.max(...list.map((c) => c.id), 0) + 1,
        ...item,
      },
    ]);
  }

  const updateItem = (item) => {
    const updatedList = [...list];
    const updatedListIndex = list.findIndex((c) => c.id === item.id);
    updatedList[updatedListIndex] = {
      ...item,
    };
    setList(updatedList);
  };

  const deleteItem = (itemId) => {
    setList([
      ...list
    ].filter(item => item.id !== itemId));
  };

  const resetList = () => setList([ ...initialList ]);

  return [ list, addItem, updateItem, deleteItem, resetList ];
};