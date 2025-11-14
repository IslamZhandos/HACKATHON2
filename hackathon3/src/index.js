// Минимальная точка входа — экспортируем полезные функции
export function greet(name) {
  return `Hello, ${name}`;
}

export function registerUser(user) {
  // Заглушка: здесь можно вызывать API или сохранять в БД
  return {
    status: 'ok',
    user,
  };
}

// Совместимость: экспорт по умолчанию
export default {
  greet,
  registerUser,
};
