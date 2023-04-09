export const setLocalStorage = (key: string, items: any) =>
  localStorage.setItem(key, JSON.stringify(items));

export const getLocalStorage = (key: string) => {
  const storageItems = localStorage.getItem(key);

  if (storageItems) return JSON.parse(storageItems);

  return null;
};

export const clearLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
