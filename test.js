const generator = require('.');

const testCases = [
  { output: 1, input: 'I' },
  { output: 5, input: 'V' },
  { output: 10, input: 'X' },
  { output: 20, input: 'XX' },
  { output: 3999, input: 'MMMCMXCIX' },
  { output: 944, input: 'CMXLIV' },
  { output: 3833, input: 'MMMDCCCXXXIII' },
  { output: 1.0, input: 'I' },
];

for (let i = 0; i < testCases.length; i++) {
  test(`Expect input of ${testCases[i].input} to be equal to: ${testCases[i].output}`, () => {
    try {
      expect(generator(testCases[i].input)).toBe(testCases[i].output);
    } catch (ex) {
      throw ex;
    }
  });
}