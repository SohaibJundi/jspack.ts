export default interface DecodeInterface<T> {
  decode(data: Uint8Array, offset = 0): T;
}
