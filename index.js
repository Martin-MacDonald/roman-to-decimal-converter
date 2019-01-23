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
  const regex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  if (!regex.test(roman)) {
    throw new TypeError('not valid numeral');
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

