//Callback Function 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log('Pilih operasi:');
  console.log('1. Penjumlahan');
  console.log('2. Pengurangan');
  console.log('3. Perkalian');
  console.log('4. Pembagian');
  console.log('5. OutProgram ');
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function kali(x , y) {
    return x*y;
}

function bagi(x , y) {
    return x/y;
}

function handleInput(option) {
  switch(option) {
    case '1':
      rl.question('Masukkan angka pertama: ', (num1) => {
        rl.question('Masukkan angka kedua: ', (num2) => {
          console.log('Hasil penjumlahan:', add(parseFloat(num1), parseFloat(num2)));
          showMenu();
          rl.prompt();
        });
      });
      break;
    case '2':
      rl.question('Masukkan angka pertama: ', (num1) => {
        rl.question('Masukkan angka kedua: ', (num2) => {
          console.log('Hasil pengurangan:', subtract(parseFloat(num1), parseFloat(num2)));
          showMenu();
          rl.prompt();
        });
      });
      break;
    case '3':
      rl.question('Masukkan angka pertama: ', (num1) =>{
        r1.question('Masukkan angka kedua: ', (num2)=>{
            console.log('Hasil Perkalian: ', kali(parseFloat(num1), parseFloat(num2)))
            showMenu();
            r1.prompt();
        });
      });
      break;
    
    case '4':
      rl.question('Masukkan angka pertama: ', (num1) =>{
        r1.question('Masukkan angka kedua: ', (num2)=>{
            console.log('Hasil Pembagian: ', bagi(parseFloat(num1), parseFloat(num2)))
            showMenu();
            r1.prompt();
        });
      });
      break;
    case '5':
        rl.close();
        break;
    default:
      console.log('Pilihan tidak valid');
      showMenu();
      rl.prompt();
      break;
  }
}


showMenu();
rl.prompt();

rl.on('line', (input) => {
  handleInput(input.trim());
}).on('close', () => {
  console.log('Terima kasih!');
  process.exit(0);
});
