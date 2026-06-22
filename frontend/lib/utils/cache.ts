export function getCachedItem<T>(key: string): T | null {
  try {
    if (typeof window === "undefined") return null;
    const val = sessionStorage.getItem(key) || localStorage.getItem(key);
    if (!val) return null;
    const item = JSON.parse(val);
    if (item.expiry && Date.now() > item.expiry) {
      sessionStorage.removeItem(key);
      localStorage.removeItem(key);
      return null;
    }
    return item.data;
  } catch (e) {
    return null;
  }
}

export function setCachedItem<T>(key: string, data: T, ttlMs = 24 * 60 * 60 * 1000): void {
  try {
    if (typeof window === "undefined") return;
    const item = {
      data,
      expiry: Date.now() + ttlMs
    };
    const str = JSON.stringify(item);
    sessionStorage.setItem(key, str);
    localStorage.setItem(key, str);
  } catch (e) {
    console.warn("Cache write failed:", e);
  }
}
