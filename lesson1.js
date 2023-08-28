const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please type first number: ", number1 => {
    console.log(`First number ${number1}!`)
  rl.question("Please type operator (+, -, *, /): ", operator => {
    console.log(`Operator ${operator}!`)
    rl.question("Please type first number: ", number2 => {
        console.log(`Second number ${number2}!`)
        number1 = parseFloat(number1);
        number2 = parseFloat(number2);

        let result 
        switch(operator) {
          case '+':
               result = number1 + number2;
              break;
      
          case '-':
               result = number1 - number2;
              break;
      
          case '*':
               result = number1 * number2;
              break;
      
          case '/':
               result = number1 / number2;
              break;
      }

      console.log("Result is:", result);
      rl.close();
    });
  });
});
