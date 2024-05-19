import DecodeInterface from '../DecodeInterface';

export default class DeArray implements DecodeInterface<number[]> {
  decode(data: Uint8Array, offset = 0): number[] {
    const arr = new Array<number>(data.length - offset);

    for (let i = 0; i < data.length - offset; i += 1) {
      arr[i] = data[offset + i];
    }

    return arr;
  }
}
