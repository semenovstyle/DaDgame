// --- ФАЙЛ: src/components/Preloader.jsx (Исправленная версия) ---

import { useEffect } from 'react';

// Компонент принимает массив путей к изображениям и callback-функцию onImageLoaded
const Preloader = ({ images, onImageLoaded }) => {
  useEffect(() => {
    // Проходим по каждому URL изображения
    images.forEach(src => {
      // Создаем новый объект Image в памяти
      const img = new Image();
      
      // Когда изображение успешно загружено, вызываем callback
      img.onload = onImageLoaded;
      
      // Если произошла ошибка, тоже вызываем callback, чтобы загрузка не зависла
      img.onerror = onImageLoaded;
      
      // Устанавливаем src, что инициирует загрузку изображения браузером
      img.src = src;
    });
  }, [images, onImageLoaded]); // Запускаем эффект, если изменятся пропсы

  // Этот компонент ничего не рендерит, его работа происходит "за кулисами"
  return null;
};

export default Preloader;