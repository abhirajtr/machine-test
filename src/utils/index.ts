/**
 * Creates and return the base path of API endpoints
 */
export const getAPIBasePath = (): string => {
  //   const applicationVersion = version || "v1";
  return `/api/`;
};

/**
 * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
 */
export const setToSession = (key: string, value: string) => {
  sessionStorage.setItem(key, value);
};
/**
 * Returns the current value associated with the given key, or null if the given key does not exist.
 */
export const getFromSession = (key: string) => {
  return sessionStorage.getItem(key);
};
/**
 * Removes the key/value pair with the given key, if a key/value pair with the given key exists.
 */
export const removeKeyFromSession = (key: string) => {
  sessionStorage.removeItem(key);
};
/**
 * Removes all key/value pairs, if there are any.
 */
export const clearSession = () => {
  sessionStorage.clear();
};

/**
 * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously in localStorage.
 */
export const setToLocal = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

/**
 * Returns the current value associated with the given key in localStorage, or null if the given key does not exist.
 */
export const getFromLocal = (key: string) => {
  return localStorage.getItem(key);
};

/**
 * Removes the key/value pair with the given key from localStorage, if a key/value pair with the given key exists.
 */
export const removeKeyFromLocal = (key: string) => {
  localStorage.removeItem(key);
};

/**
 * Removes all key/value pairs from localStorage, if there are any.
 */
export const clearLocal = () => {
  localStorage.clear();
};
