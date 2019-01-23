const translations = [
  { decimal: 1000, roman: 'M' },
  { decimal: 900, roman: 'CM' },
  { decimal: 500, roman: 'D' },
  { decimal: 400, roman: 'CD' },
  { decimal: 100, roman: 'C' },
  { decimal: 90, roman: 'XC' },
  { decimal: 50, roman: 'L' },
  { decimal: 40, roman: 'XL' },
  { decimal: 10, roman: 'X' },
  { decimal: 9, roman: 'IX' },
  { decimal: 5, roman: 'V' },
  { decimal: 4, roman: 'IV' },
  { decimal: 1, roman: 'I' },
];

module.exports = (roman) => {
  if (!checkIfValidRoman(roman)) {
    throw new Error();
  }
  let decimal = 0;
  for (let i = 0; i < translations.length; i++) {
    while (roman.indexOf(translations[i].roman) === 0) {
      decimal += translations[i].decimal;
      roman = roman.replace(translations[i].roman, '');
    }
  }
  return decimal;
}

function checkIfValidRoman(roman) {
  let lastIndex = 0;
  while (roman.length > 0) {
    for (let i = 0; i < translations.length; i++) {
      if (roman.indexOf(translations[i].roman) === 0) {
        if (lastIndex > i) {
          return false;
        }
        lastIndex = i;
        roman = roman.replace(translations[i].roman, '');
        break;
      }
    }
  }
  return true;
}

