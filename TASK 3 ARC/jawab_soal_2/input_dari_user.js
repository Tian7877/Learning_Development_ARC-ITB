const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Halo! Siapa nich? ', (nama) => {
  console.log(`Halo, ${nama}! Selamat datang di Indomaret`);
  rl.close();
});
