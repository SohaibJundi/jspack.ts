import JSPackFormat from './JSPackFormat';
import DeArray from './Formats/FormatArray/DeArray';
import DeString from './Formats/FormatString/DeString';
import DeChar from './Formats/FormatChar/DeChar';
import DeInt from './Formats/FormatInt/DeInt';
import De754 from './Formats/Format754/De754';
import DeInt64 from './Formats/FormatInt64/DeInt64';
import DeNullByte from './Formats/FormatNullByte/DeNullByte';

const JSPackFormatDecodersBE = {
  [JSPackFormat.A]: new DeArray(),
  [JSPackFormat.x]: new DeNullByte(),
  [JSPackFormat.c]: new DeChar(),
  [JSPackFormat.b]: new DeInt(JSPackFormat.b, true),
  [JSPackFormat.B]: new DeInt(JSPackFormat.B, true),
  [JSPackFormat.h]: new DeInt(JSPackFormat.h, true),
  [JSPackFormat.H]: new DeInt(JSPackFormat.H, true),
  [JSPackFormat.s]: new DeString(),
  [JSPackFormat.f]: new De754(JSPackFormat.f, true),
  [JSPackFormat.d]: new De754(JSPackFormat.d, true),
  [JSPackFormat.i]: new DeInt(JSPackFormat.i, true),
  [JSPackFormat.I]: new DeInt(JSPackFormat.I, true),
  [JSPackFormat.l]: new DeInt(JSPackFormat.l, true),
  [JSPackFormat.L]: new DeInt(JSPackFormat.L, true),
  [JSPackFormat.q]: new DeInt64(JSPackFormat.q, true),
  [JSPackFormat.Q]: new DeInt64(JSPackFormat.Q, true),
};

const JSPackFormatDecodersLE = {
  [JSPackFormat.A]: new DeArray(),
  [JSPackFormat.x]: new DeNullByte(),
  [JSPackFormat.c]: new DeChar(),
  [JSPackFormat.b]: new DeInt(JSPackFormat.b, false),
  [JSPackFormat.B]: new DeInt(JSPackFormat.B, false),
  [JSPackFormat.h]: new DeInt(JSPackFormat.h, false),
  [JSPackFormat.H]: new DeInt(JSPackFormat.H, false),
  [JSPackFormat.s]: new DeString(),
  [JSPackFormat.f]: new De754(JSPackFormat.f, false),
  [JSPackFormat.d]: new De754(JSPackFormat.d, false),
  [JSPackFormat.i]: new DeInt(JSPackFormat.i, false),
  [JSPackFormat.I]: new DeInt(JSPackFormat.I, false),
  [JSPackFormat.l]: new DeInt(JSPackFormat.l, false),
  [JSPackFormat.L]: new DeInt(JSPackFormat.L, false),
  [JSPackFormat.q]: new DeInt64(JSPackFormat.q, false),
  [JSPackFormat.Q]: new DeInt64(JSPackFormat.Q, false),
};

export
{
  JSPackFormatDecodersBE,
  JSPackFormatDecodersLE,
};
