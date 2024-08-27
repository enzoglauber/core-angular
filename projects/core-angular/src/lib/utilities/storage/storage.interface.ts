export interface IStorageService {
  setData(key: string, value: any): void;

  removeData(key: string): void;

  getData<T>(key: string): T;
}
