import { PersistStorage } from "zustand/middleware";
import CryptoJS from "crypto-js";

export const EncryptedStorage = (): PersistStorage<any> => {
  const secret = import.meta.env.VITE_STORAGE_KEY

  const getItem: (key: string) => any | undefined = (key: string): any | undefined => {
    const value = localStorage.getItem(key);

    if (value) {
      const decryptedBytes = CryptoJS.AES.decrypt(value, secret);
      const decryptedValue = decryptedBytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedValue); // Parse JSON
    }

    return value;
  }

  const setItem: (key: string, value: any) => void = (key: string, value: any): void => {
    const stringValue = JSON.stringify(value); // Convert to JSON string
    const encrypted = CryptoJS.AES.encrypt(stringValue, secret).toString();
    localStorage.setItem(key, encrypted);
  }

  const removeItem: (key: string) => void = (key: string): void => {
    localStorage.removeItem(key);
  }

  return { getItem, setItem, removeItem }
}
