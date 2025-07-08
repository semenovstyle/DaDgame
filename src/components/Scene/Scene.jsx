import React from 'react';
import { DropZone } from './DropZone';
import { useGameStore } from '../../store/gameStore';

export default function Scene() {
  const sceneLayers = useGameStore(state => state.sceneLayers);

  // Стили для тестовой зоны сброса
  const toolZoneStyle = {
    left: '10%',
    bottom: '10%',
    width: '150px',
    height: '200px',
    border: '2px dashed gray',
  };

  return (
    <div className="w-full h-full relative">
      {/* Фон (можно использовать старый ассет) */}
      <img src="/assets/overlays/building3.png" alt="Background" className="absolute w-full h-full object-cover z-0" />

      {/* Зона сброса инструментов */}
      <DropZone id="zone-tools" style={toolZoneStyle}>
        <p className="text-center text-gray-500 p-2">Перетащите инструмент сюда</p>
      </DropZone>
      
      {/* Отрисовка уже размещенных элементов (пока упрощенно) */}
      {sceneLayers.map(layer => (
        <div key={layer.id} className="absolute" style={{ bottom: '10%', left: '10%' }}>
            {/* Здесь будет реальное изображение инструмента */}
            <img src={`/assets/overlays/${layer.type}_large.png`} alt={layer.type} className="w-32"/>
        </div>
      ))}
    </div>
  );
}