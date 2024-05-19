import DecodeInterface from '../DecodeInterface';

export default class DeString implements DecodeInterface<string> {
  decode(data: Uint8Array, offset = 0): string {
    return []
      .slice
      .call(data, offset)
      .reduce(
        (accumulator: string, currentValue: number): string => accumulator + String.fromCharCode(currentValue),
        '',
      );
  }
}
