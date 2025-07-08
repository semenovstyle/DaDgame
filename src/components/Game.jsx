import React, { useState } from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragOverlay } from '@dnd-kit/core';
import { useGameStore } from '../store/gameStore.js';
import Scene from './Scene/Scene.jsx';
import Warehouse from './Warehouse/Warehouse.jsx';

export default function Game() {
  const handleDrop = useGameStore(state => state.handleDrop);
  const [activeItem, setActiveItem] = useState(null);
  const inventory = useGameStore(state => state.inventory);

  // Настройка сенсоров (важно для мобильных устройств)
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Начать перетаскивание после смещения на 8px
      },
    })
  );

  function handleDragStart(event) {
    const item = inventory.find(i => i.id === event.active.id);
    setActiveItem(item);
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    setActiveItem(null);

    if (over) {
      // active.data.current.type содержит тип предмета (например, 'lestnica')
      // over.id содержит ID зоны сброса (например, 'zone-tools')
      const itemType = active.data.current.type;
      const zoneId = over.id;
      handleDrop(itemType, zoneId);
    }
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="w-full h-full relative">
        <Scene />
        <Warehouse />

        {/* DragOverlay показывает элемент во время перетаскивания */}
        <DragOverlay>
          {activeItem ? (
            <div className="p-2 bg-white rounded-lg shadow-xl opacity-80">
              <img src={activeItem.img} alt={activeItem.name} className="w-16 h-16 object-contain" />
            </div>
          ) : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
}