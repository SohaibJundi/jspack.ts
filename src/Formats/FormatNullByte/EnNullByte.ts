import EncodeInterface from '../EncodeInterface';

export default class EnNullByte implements EncodeInterface<null> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  encode(data: null, offset = 0): Uint8Array {
    return new Uint8Array([0]);
  }
}
