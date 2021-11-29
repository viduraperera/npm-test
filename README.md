# vup-number-formatter

## install

using npm
` $ npm install vup-number-formatter`


## Examples

### Vup_comma_formatter

separating numbers with commas as thousands separators in JavaScript

```
import {Vup_comma_formatter} from 'vup-number-formatter';

function App(){

    console.log(Vup_comma_formatter(1000000)); // 1,000,000
    console.log(Vup_comma_formatter(239184735.3492)); //239,184,735.3492
    console.log(Vup_comma_formatter(100000.012)); //100,000.012  
}
```

### Vup_k_formatter

replacing numbers to show a currency value in the format of 1k of equal to one thousand, 1.1k etc

```
import {Vup_k_formatter} from 'vup-number-formatter';

function App(){

    console.log(Vup_k_formatter(1000000)); //1000k
    console.log(Vup_k_formatter(100)); //100
    console.log(Vup_k_formatter(33914));  //33.9k
}
```
https://codesandbox.io/embed/winter-grass-wdvwp?fontsize=14&hidenavigation=1&theme=dark
