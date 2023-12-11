export const useLocalStorage = () => {
  function setItemInLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value)
  }

  function getItemInLocalStorage(key: string): string | null {
    const tokenItem = localStorage.getItem(key)
    return tokenItem
  }

  function removeItemInLocalStorage(key: string): void {
    localStorage.removeItem(key)
  }

  function verifyTokenInLocalStorage(key: string): boolean {
    const token = getItemInLocalStorage(key)
    if (token !== null) {
      return true
    } else {
      return false
    }
  }

  return {
    setItemInLocalStorage,
    getItemInLocalStorage,
    removeItemInLocalStorage,
    verifyTokenInLocalStorage,
  }
}
