import EncodeInterface from '../EncodeInterface';

export default class EnChar implements EncodeInterface<string> {
  encode(data: string, offset = 0): Uint8Array {
    return new Uint8Array([data[offset].charCodeAt(0)]);
  }
}
