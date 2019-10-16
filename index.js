const input = process.stdin;

input.setEncoding('utf-8');

console.log("Please input a number");


const dotDashes = [
  ['._.', '|.|', '|_|'],
  ['...', '..|', '..|'],
  ['._.', '._|', '|_.'],
  ['._.', '._|', '._|'],
  ['...', '|_|', '..|'],
  ['._.', '|_.', '._|'],
  ['._.', '|_.', '|_|'],
  ['._.', '..|', '..|'],
  ['._.', '|_|', '|_|'],
  ['._.', '|_|', '..|'],  
];

const getDotDash = (digit, row) => dotDashes[digit][row];

const printConvertedNumber = inputNumber => {
  const digits = [...inputNumber];
  digits.pop();
  [0,1,2].forEach((row) => {
    const convertedRow = digits.map(digit => getDotDash(digit, row));
    console.log(convertedRow.join(' '));
  });
}

input.on('data', function (data) {
  console.log('You chose : ' + data);
  printConvertedNumber(data);
});
