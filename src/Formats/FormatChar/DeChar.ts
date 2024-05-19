import DecodeInterface from '../DecodeInterface';

export default class DeChar implements DecodeInterface<string> {
  decode(data: Uint8Array, offset = 0): string {
    return String.fromCharCode(data[offset]);
  }
}
