import JSPackFormat from './JSPackFormat';
import JSPackEndianness from './JSPackEndianness';
import JSPackFormatLength from './JSPackFormatLength';
import JSPackFormatTypes from './JSPackFormatTypes';
import EncodeInterface from './Formats/EncodeInterface';
import { JSPackFormatDecodersBE, JSPackFormatDecodersLE } from './JSPackFormatDecoders';
import { JSPackFormatEncodersBE, JSPackFormatEncodersLE } from './JSPackFormatEncoders';

export default class JSPack {
  public static Unpack<T extends keyof JSPackFormatTypes>(
    format: T,
    data: Uint8Array,
    endianness: JSPackEndianness,
  ): JSPackFormatTypes[T] {
    if (!(format in JSPackFormatLength)) {
      throw new Error(`Decode format '${format}' not found.`);
    }

    if (JSPackFormatLength[format] > data.length) {
      throw new Error('Data is too short.');
    }

    const unpack = endianness === JSPackEndianness.littleEndian
      ? JSPackFormatDecodersLE[format] : JSPackFormatDecodersBE[format];

    return unpack.decode(data) as JSPackFormatTypes[T];
  }

  public static Pack<T extends keyof JSPackFormatTypes>(
    format: T,
    data: JSPackFormatTypes[T],
    endianness: JSPackEndianness,
  ): Uint8Array {
    if (!(format in JSPackFormatLength)) {
      throw new Error(`Encode format '${format}' not found.`);
    }

    const encode = (endianness === JSPackEndianness.littleEndian
      ? JSPackFormatEncodersLE[format] : JSPackFormatEncodersBE[format]) as EncodeInterface<JSPackFormatTypes[T]>;

    return encode.encode(data);
  }

  public static CalcLength(format: JSPackFormat): number {
    return JSPackFormatLength[format];
  }
}
