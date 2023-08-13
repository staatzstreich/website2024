// Largely taken from https://github.com/mathiasbynens/rot.
const rot = (charRot: number, numRot: number, str: string): string => {
  const numbers = "0123456789";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const regexNumber = /[0-9]/;
  const regexLowercase = /[a-z]/;
  const regexUppercase = /[A-Z]/;

  str = String(str);

  if (charRot < 0) {
    charRot += 26;
  }
  if (numRot < 0) {
    numRot += 10;
  }
  const length = str.length; // note: no need to account for astral symbols
  let index = -1;
  let result = "";
  let character;
  let currentPosition;
  let shiftedPosition;
  while (++index < length) {
    character = str.charAt(index);
    if (regexNumber.test(character)) {
      currentPosition = numbers.indexOf(character);
      shiftedPosition = (currentPosition + numRot) % 10;
      result += numbers.charAt(shiftedPosition);
    } else if (regexLowercase.test(character)) {
      currentPosition = lowercase.indexOf(character);
      shiftedPosition = (currentPosition + charRot) % 26;
      result += lowercase.charAt(shiftedPosition);
    } else if (regexUppercase.test(character)) {
      currentPosition = uppercase.indexOf(character);
      shiftedPosition = (currentPosition + charRot) % 26;
      result += uppercase.charAt(shiftedPosition);
    } else {
      result += character;
    }
  }
  return result;
};

const rot18 = (str: string): string => {
  return rot(13, 5, str);
};

export default {
  rot: rot,
  encode: rot18,
  decode: rot18,
};
