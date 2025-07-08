import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { DraggableItem } from './DraggableItem';

export default function Warehouse() {
  const inventory = useGameStore(state => state.inventory);

  return (
    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gray-700 p-2 overflow-y-auto shadow-lg z-10">
      <h3 className="text-white text-center mb-4">Склад</h3>
      <div className="flex flex-col items-center">
        {inventory.map(item => (
          <DraggableItem key={item.id} id={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}