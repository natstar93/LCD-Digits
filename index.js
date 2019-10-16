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

const printConvertedNumber = inputNumber => {
  const digits = [...inputNumber].slice(0, -1);
  [0,1,2].forEach((row) => {
    const convertedRow = digits.map(digit => dotDashes[digit][row]);
    console.log(convertedRow.join(' '));
  });
}

input.on('data', function (data) {
  console.log('You chose : ' + data);
  printConvertedNumber(data);
});
