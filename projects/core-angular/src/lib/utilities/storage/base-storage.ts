import { IStorageService } from "./storage.interface";

export class BaseStorage implements IStorageService {
  protected readonly _storage: Storage

  constructor(storage: Storage) {
    this._storage = storage;
  }

  setData(key: string, value: any): void {
    if (!key || value === null || value === undefined) {
      throw new Error('key and value are requireds!');
    }

    this._storage.setItem(key, JSON.stringify(value));
  }

  removeData(key: string): void {
    if (!key) {
      throw new Error('key is required!');
    }

    this._storage.removeItem(key);
  }

  getData<T=object>(key: string): T {
    if (!key) {
      throw new Error('key is required!');
    }

    return <T>JSON.parse(this._storage.getItem(key));
  }
}
