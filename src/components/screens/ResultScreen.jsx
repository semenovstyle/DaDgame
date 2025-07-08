// --- ФАЙЛ: src/components/ResultScreen.jsx (Финальная версия с центрированным оффером) ---

import React from "react";

// Вспомогательная функция, которая выбирает правильный оффер
const getOfferByScore = (score) => {
  if (score === 60) {
    return {
      title: "🥇 Монтаж — твоё второе имя!",
      subtitle: "🏷 Ты молодец! А теперь — держи бонус:🎁 -10% на монтаж по промокоду MONTAGE10."
    };
  }
  if (score >= 40) {
    return {
      title: "🥈 Ты уже близко!",
      subtitle: "Ты уже многое знаешь, а за старание — бонус:🎁 -5% на монтаж. 📌Промокод: MONTAGE5"
    };
  }
  if (score >= 20) {
    return {
      title: "🥉 Ну, почти...",
      subtitle: "Зато теперь знаешь, как важно выбрать надёжную бригаду 😉 📞 Мы — те, кто не промахнётся."
    };
  }
  return {
    title: "В этот раз не получилось, но опыт — лучший учитель!",
    subtitle: "Попробуй ещё раз, чтобы стать настоящим профи!"
  };
};

export default function ResultScreen({ score, maxScore, onRestart }) {
  const offer = getOfferByScore(score);

  return (
    // Главный контейнер. Теперь это flex-колонка.
    <div
      className="w-full h-full flex flex-col items-center p-4"
      style={{
        position: 'relative',
        backgroundImage: 'url(/assets/overlays/end.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Накладка с GIF-анимацией. Позиционируем ее независимо. */}
      <img
        src="/assets/overlays/mont_end.gif"
        alt="Result character"
        style={{
          position: 'absolute',
          width: '68%',
          // --- ИЗМЕНЕНИЕ: Смещаем GIF вниз, чтобы не мешал тексту ---
          bottom: '4%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
        }}
      />
      
      {/* Верхний блок с заголовком и счетом */}
      <div className="text-center mt-14">
        <h2 className="text-3xl font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          Игра завершена!
        </h2>
        <p className="text-lg text-white" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
          Твой счёт: {score} из {maxScore}
        </p>
      </div>

      {/* --- ГЛАВНОЕ ИЗМЕНЕНИЕ: Центральный блок с оффером --- */}
      {/* Используем flex-grow, чтобы он занял все доступное пространство и отцентрировал содержимое */}
      <div className="flex-grow flex items-center justify-center w-full">
        <div 
          className="text-center p-6 rounded-2xl shadow-xl w-full max-w-sm"
          style={{ 
            marginTop: '-80%',
            backgroundColor: 'rgba(6, 47, 89, 0.5)',
            backdropFilter: 'blur(5px)', // Эффект "матового стекла" для лучшей читаемости
            zIndex: 10,
          }}
        >
          {/* Увеличиваем размер текста внутри оффера */}
          <p className="font-bold text-2xl text-white mb-2">{offer.title}</p>
          {offer.subtitle && <p className="text-lg text-gray-200">{offer.subtitle}</p>}
        </div>
      </div>
      
      {/* Кнопка, прижатая к низу */}
      <button
        onClick={onRestart}
        className="px-8 py-3 mb-6 bg-yellow-400 text-black rounded-lg hover:bg-yellow-700 font-bold text-lg"
        style={{ zIndex: 10 }} // Убедимся, что кнопка выше GIF
      >
        Сыграть ещё раз
      </button>
    </div>
  );
}