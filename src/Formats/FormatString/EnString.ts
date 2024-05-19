import EncodeInterface from '../EncodeInterface';

export default class EnString implements EncodeInterface<string> {
  encode(data: string, offset = 0): Uint8Array {
    const arr = new Uint8Array(data.length - offset);

    for (let i = 0; i < data.length - offset; i += 1) {
      arr[i] = data.charCodeAt(offset + i);
    }

    return arr;
  }
}
