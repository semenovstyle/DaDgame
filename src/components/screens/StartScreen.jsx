
import React, { useState, useRef, useEffect } from "react";
import Preloader from "./src/components/Preloader.jsx";
import { imagesToPreload } from './src/preloadAssets.js'; // Укажите правильный путь

export default function StartScreen({ onStart }) {
  // Состояние для отслеживания, завершена ли загрузка
  const [isLoaded, setIsLoaded] = useState(false);
  // Состояние для хранения процента загрузки (0-100)
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Используем ref для подсчета загруженных изображений, чтобы не вызывать лишних рендеров
  const loadedImagesCount = useRef(0);
  const totalImages = imagesToPreload.length;

  // Callback, который будет вызываться после загрузки каждого изображения
  const handleImageLoaded = () => {
    loadedImagesCount.current += 1;
    const progress = Math.round((loadedImagesCount.current / totalImages) * 100);
    setLoadingProgress(progress);
  };
  
  // Когда прогресс достигает 100, мы считаем загрузку завершенной
  useEffect(() => {
    if (loadingProgress >= 100) {
      // Небольшая задержка для плавности, чтобы полоса дошла до 100%
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    }
  }, [loadingProgress]);

  return (
    <div
      className="w-full h-full flex flex-col justify-end items-center"
      style={{
        position: 'relative',
        backgroundImage: 'url(/assets/overlays/start.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Условный рендеринг: показываем либо загрузчик, либо контент экрана */}
      {!isLoaded ? (
        // --- ЭКРАН ЗАГРУЗКИ ---
        <div className="w-full flex flex-col items-center mb-12 px-8">
          <p className="text-white text-lg mb-2">Загрузка игры...</p>
          <div className="w-full bg-gray-600 rounded-full h-4">
            <div
              className="bg-blue-500 h-4 rounded-full transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p className="text-white text-sm mt-1">{loadingProgress}%</p>
          {/* Preloader вызывается здесь, чтобы инициировать загрузку */}
          <Preloader images={imagesToPreload} onImageLoaded={handleImageLoaded} />
        </div>
      ) : (
        // --- ОСНОВНОЙ КОНТЕНТ ЭКРАНА (появляется после загрузки) ---
        <>
          <img
            src="/assets/overlays/start_men.gif"
            alt="Start character"
            style={{
              position: 'absolute',
              width: '72%',
              bottom: '2%',
              left: '56%',
              transform: 'translateX(-50%)',
              zIndex: 5,
            }}
          />

          <button
            className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-bold text-lg animate-pulse-in"
            onClick={onStart}
            style={{
              marginBottom: '40px',
              zIndex: 10,
            }}
          >
            Start
          </button>
        </>
      )}
    </div>
  );
}