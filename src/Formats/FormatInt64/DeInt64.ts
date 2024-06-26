import DecodeInterface from '../DecodeInterface';
import JSPackFormatLength from '../../JSPackFormatLength';
import FormatInt64Data from './FormatInt64Data';
import JSPackLong from '../../JSPackLong';

export default class DeInt64 implements DecodeInterface<JSPackLong> {
  private readonly formatLength;

  private readonly formatIsSigned;

  private readonly endianness;

  constructor(format: keyof typeof FormatInt64Data, endianness: boolean) {
    this.formatLength = JSPackFormatLength[format];
    this.formatIsSigned = FormatInt64Data[format].isSigned;
    this.endianness = endianness;
  }

  decode(data: Uint8Array, offset = 0): JSPackLong {
    let start = this.endianness ? 0 : 7;
    start += offset;
    const nsb = this.endianness ? 1 : -1;
    const stop = start + nsb * 8;
    const result = [0, 0];

    let i = start;
    let f = 0;
    let rvi = 1;

    while (i !== stop) {
      // eslint-disable-next-line no-bitwise
      result[rvi] = (((result[rvi] << 8) >>> 0) + data[i]);
      i += nsb;
      f += 1;
      rvi = (f < 4 ? 1 : 0);
    }

    return {
      low: result[0],
      high: result[1],
      unsigned: this.formatIsSigned,
    };
  }
}
