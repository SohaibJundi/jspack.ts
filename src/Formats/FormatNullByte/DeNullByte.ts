import DecodeInterface from '../DecodeInterface';

export default class DeNullByte implements DecodeInterface<number> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  decode(data: Uint8Array, offset = 0): number {
    return 0;
  }
}
