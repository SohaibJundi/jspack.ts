import EncodeInterface from '../EncodeInterface';

export default class EnArray implements EncodeInterface<number[]> {
  encode(data: number[], offset = 0): Uint8Array {
    const arr = new Uint8Array(data.length - offset);

    for (let i = 0; i < data.length - offset; i += 1) {
      arr[i] = data[offset + i];
    }

    return arr;
  }
}
