export {};

declare global {
  type uuid = string;

  type orPromise<T> = Promise<T> | T;
}
