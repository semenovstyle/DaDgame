import { create } from 'zustand';

// Список доступных предметов на складе для текущего шага
const initialInventory = [
  { id: 'tool-lesa', name: 'Леса', type: 'lesa', img: '/assets/inventory/lesa.png' },
  { id: 'tool-lestnica', name: 'Лестница', type: 'lestnica', img: '/assets/inventory/lestnica.png' },
];

export const useGameStore = create((set, get) => ({
  inventory: initialInventory,
  sceneLayers: [], // Элементы, которые уже на сцене
  
  // Функция обработки успешного сброса
  handleDrop: (itemType, zoneId) => {
    console.log(`Dropped ${itemType} onto ${zoneId}`);
    
    // Простая логика проверки для прототипа
    if (zoneId === 'zone-tools' && itemType === 'lestnica') {
      alert('Успех! Лестница установлена.');
      
      // Добавляем элемент на сцену и убираем из инвентаря
      set(state => ({
        sceneLayers: [...state.sceneLayers, { id: 'layer-lestnica', type: 'lestnica' }],
        inventory: state.inventory.filter(item => item.type !== itemType),
      }));
    } else {
      alert('Ошибка! Это сюда не подходит.');
    }
  },
}));