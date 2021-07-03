const KEY = 'token';

export function getSession() {
  return localStorage.getItem(KEY);
}

export function setSession({ data }) {
  localStorage.setItem(KEY, data);
}

export function clearSession() {
  localStorage.removeItem(KEY);
}

export function isAuthenticated() {
  const data = localStorage.getItem(KEY);
  return Boolean(data);
}
