export default interface EncodeInterface<T> {
  encode(data: T, offset: number): Uint8Array;
}
