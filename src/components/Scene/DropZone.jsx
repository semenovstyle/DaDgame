import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function DropZone({ id, children, style }) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  
  // Меняем стиль, если над зоной что-то перетаскивают
  const hoverStyle = isOver ? { border: '3px dashed #3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.2)' } : {};

  return (
    <div ref={setNodeRef} style={{ ...style, ...hoverStyle, position: 'absolute' }} className="transition-colors duration-200">
      {children}
    </div>
  );
}