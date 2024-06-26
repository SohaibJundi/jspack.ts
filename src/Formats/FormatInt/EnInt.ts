import EncodeInterface from '../EncodeInterface';
import FormatIntData from './FormatIntData';
import JSPackFormatLength from '../../JSPackFormatLength';
import ValidatorInterface from '../ValidatorInterface';

export default class EnInt implements EncodeInterface<number> {
  private readonly formatLength;

  private readonly formatMin;

  private readonly formatMax;

  private readonly validator;

  private readonly endianness;

  constructor(format: keyof typeof FormatIntData, validator: ValidatorInterface<number>, endianness: boolean) {
    this.formatLength = JSPackFormatLength[format];
    this.formatMin = FormatIntData[format].min;
    this.formatMax = FormatIntData[format].max;
    this.validator = validator;
    this.endianness = endianness;
  }

  encode(data: number, offset = 0): Uint8Array {
    this.validator.validate(data);

    const arrData: number[] = [];
    let lsb = this.endianness ? (this.formatLength - 1) : 0;
    lsb += offset;
    const nsb = this.endianness ? -1 : 1;
    const stop = lsb + nsb * this.formatLength;

    let i = lsb;
    let v = data;

    while (i !== stop) {
      // eslint-disable-next-line no-bitwise
      arrData[i] = v & 0xff;
      i += nsb;
      // eslint-disable-next-line no-bitwise
      v >>= 8;
    }

    return new Uint8Array(arrData);
  }
}
