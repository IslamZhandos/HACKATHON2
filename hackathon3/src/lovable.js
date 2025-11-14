// Дополнительный модуль с несколькими полезными экспортами
export function formatUser(user) {
  return {
    displayName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
    email: user.email || null,
  };
}

export function validateEmail(email) {
  return typeof email === 'string' && /@/.test(email);
}

export default {
  formatUser,
  validateEmail,
};
