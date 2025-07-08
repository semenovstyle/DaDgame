
import React from 'react';
import Game from './src/components/Game';
import { useAspectScaling } from '../useAspectScaling';

const GameContainer = () => {
  const { scale, transformOrigin } = useAspectScaling();

  return (
    // Внешний контейнер
    <div style={{
      width: '100vw',
      height: '100dvh',
      backgroundColor: '#1a1a1a',
      display: 'flex',
      justifyContent: 'center', // Оставляем центрирование по горизонтали
      overflow: 'hidden',
      
      // --- ГЛАВНОЕ ИЗМЕНЕНИЕ №1: Убираем align-items и добавляем paddingTop ---
      alignItems: 'flex-start', // Прижимаем игровой блок к ВЕРХУ flex-контейнера
      paddingTop: '5vh',       // Добавляем отступ сверху в 5% от высоты экрана
    }}>
      {/* 
        Внутренний контейнер - "экран телефона".
        Теперь он не центрируется по вертикали, а отступает сверху.
      */}
      <div style={{
        width: '428px',
        height: '768px',
        backgroundColor: 'white',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        
        transform: `scale(${scale})`,
        
        // --- ГЛАВНОЕ ИЗМЕНЕНИЕ №2: Упрощаем transformOrigin ---
        // Теперь нам нужно выравнивание только по верхнему краю
        transformOrigin: 'center top',
      }}>
        <Game />
      </div>
    </div>
  );
};

export default GameContainer;