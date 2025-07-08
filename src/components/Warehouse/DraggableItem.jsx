import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export function DraggableItem({ id, item }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: { type: item.type }, // Передаем тип предмета (например, 'lestnica')
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    cursor: 'grabbing',
    zIndex: 100,
  } : {
    cursor: 'grab',
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="p-2 mb-2 bg-white rounded-lg shadow-md">
      <img src={item.img} alt={item.name} className="w-16 h-16 object-contain" />
    </div>
  );
}