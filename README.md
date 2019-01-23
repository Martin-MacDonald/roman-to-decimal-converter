# Roman To Decimal Converter
  > Convert a valid romna numeral to its deciaml equivalent (1 - 3999) 

## Usage
```sh
$ npm install --save roman-to-decimal-converter
```
To use:
```js
const generator = require('roman-to-decimal-converter');
generator(3999);
``` 

### Errors
- If the roman numeral is not valid accoring to the regex - ^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$ - it will throw:
```js
new TypeError('not a valid numeral');
```

## Author
Martin Bolton MacDonald
- [github/martin-macdonald](https://github.com/Martin-MacDonald)

## Licence
Copyright © 2019, Martin Bolton MacDonald. Released under the MIT [License](LICENSE).