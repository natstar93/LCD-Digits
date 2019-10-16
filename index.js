const input = process.stdin;

input.setEncoding('utf-8');

console.log("Please input a number");


const dotDashes = [
  ['._.', '|.|', '|_|'],
  ['...', '..|', '..|'],
  ['._.', '._|', '|_.'],
  ['._.', '._|', '._|'], // 3
  ['...', '|_|', '..|'],
  ['._.', '|_.', '._|'],
  ['._.', '|_.', '|_|'],
  ['._.', '..|', '..|'],
  ['._.', '|_|', '|_|'],
  ['._.', '|_|', '..|'],  
];

const getDotDash = (digit, row) => {
  // console.log(dotDashes[digit][row])
  return dotDashes[digit][row];
} 

const convertNumber = inputNumber => {
  const digits = [...inputNumber];
  digits.pop();
  const convertedNumber = [0,1,2].forEach((row) => {
    const convertedRow = digits.map(digit => getDotDash(digit, row));
    console.log(convertedRow.join(' '));
  });
  // return convertNumber;
}

input.on('data', function (data) {
  console.log('User Input Data : ' + data);
  convertNumber(data);
});



// ._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.
// |.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|
// |_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|

// const numbers = {
//   0: ''
// }