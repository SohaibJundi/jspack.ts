import JSPackFormat from './JSPackFormat';
import EnArray from './Formats/FormatArray/EnArray';
import EnString from './Formats/FormatString/EnString';
import EnChar from './Formats/FormatChar/EnChar';
import EnInt from './Formats/FormatInt/EnInt';
import En754 from './Formats/Format754/En754';
import EnInt64 from './Formats/FormatInt64/EnInt64';
import EnNullByte from './Formats/FormatNullByte/EnNullByte';
import EnIntValidator from './Formats/FormatInt/EnIntValidator';
import En754Validator from './Formats/Format754/En754Validator';
import EnInt64Validator from './Formats/FormatInt64/EnInt64Validator';

const en754Validator = new En754Validator();

const JSPackFormatEncodersBE = {
  [JSPackFormat.A]: new EnArray(),
  [JSPackFormat.x]: new EnNullByte(),
  [JSPackFormat.c]: new EnChar(),
  [JSPackFormat.b]: new EnInt(JSPackFormat.b, new EnIntValidator(JSPackFormat.b), true),
  [JSPackFormat.B]: new EnInt(JSPackFormat.B, new EnIntValidator(JSPackFormat.B), true),
  [JSPackFormat.h]: new EnInt(JSPackFormat.h, new EnIntValidator(JSPackFormat.h), true),
  [JSPackFormat.H]: new EnInt(JSPackFormat.H, new EnIntValidator(JSPackFormat.H), true),
  [JSPackFormat.s]: new EnString(),
  [JSPackFormat.f]: new En754(JSPackFormat.f, en754Validator, true),
  [JSPackFormat.d]: new En754(JSPackFormat.d, en754Validator, true),
  [JSPackFormat.i]: new EnInt(JSPackFormat.i, new EnIntValidator(JSPackFormat.i), true),
  [JSPackFormat.I]: new EnInt(JSPackFormat.I, new EnIntValidator(JSPackFormat.I), true),
  [JSPackFormat.l]: new EnInt(JSPackFormat.l, new EnIntValidator(JSPackFormat.l), true),
  [JSPackFormat.L]: new EnInt(JSPackFormat.L, new EnIntValidator(JSPackFormat.L), true),
  [JSPackFormat.q]: new EnInt64(new EnInt64Validator(JSPackFormat.q), true),
  [JSPackFormat.Q]: new EnInt64(new EnInt64Validator(JSPackFormat.Q), true),
};

const JSPackFormatEncodersLE = {
  [JSPackFormat.A]: new EnArray(),
  [JSPackFormat.x]: new EnNullByte(),
  [JSPackFormat.c]: new EnChar(),
  [JSPackFormat.b]: new EnInt(JSPackFormat.b, new EnIntValidator(JSPackFormat.b), false),
  [JSPackFormat.B]: new EnInt(JSPackFormat.B, new EnIntValidator(JSPackFormat.B), false),
  [JSPackFormat.h]: new EnInt(JSPackFormat.h, new EnIntValidator(JSPackFormat.h), false),
  [JSPackFormat.H]: new EnInt(JSPackFormat.H, new EnIntValidator(JSPackFormat.H), false),
  [JSPackFormat.s]: new EnString(),
  [JSPackFormat.f]: new En754(JSPackFormat.f, en754Validator, false),
  [JSPackFormat.d]: new En754(JSPackFormat.d, en754Validator, false),
  [JSPackFormat.i]: new EnInt(JSPackFormat.i, new EnIntValidator(JSPackFormat.i), false),
  [JSPackFormat.I]: new EnInt(JSPackFormat.I, new EnIntValidator(JSPackFormat.I), false),
  [JSPackFormat.l]: new EnInt(JSPackFormat.l, new EnIntValidator(JSPackFormat.l), false),
  [JSPackFormat.L]: new EnInt(JSPackFormat.L, new EnIntValidator(JSPackFormat.L), false),
  [JSPackFormat.q]: new EnInt64(new EnInt64Validator(JSPackFormat.q), false),
  [JSPackFormat.Q]: new EnInt64(new EnInt64Validator(JSPackFormat.Q), false),
};

export
{
  JSPackFormatEncodersBE,
  JSPackFormatEncodersLE,
};
