//async await 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = {
  cheeseburger: 10000,
  chickenburger: 8000,
  veggieburger: 7000
};

function showMenu() {
  console.log('Menu Burger:');
  Object.keys(menu).forEach((item, index) => {
    console.log(`${index + 1}. ${item} - Rp ${menu[item].toLocaleString('id-ID')}`);
  });
  console.log('0. Selesai dan bayar');
}

async function takeOrder() {
  let total = 0;
  while (true) {
    showMenu();
    const choice = await askQuestion('Pilih burger yang ingin Anda pesan (0 untuk selesai): ');
    if (choice === '0') {
      return total.toLocaleString('id-ID'); 
    }
    const burger = Object.keys(menu)[parseInt(choice) - 1];
    if (!burger) {
      console.log('Pilihan tidak valid.');
      continue;
    }
    const quantity = parseInt(await askQuestion(`Berapa banyak ${burger} yang ingin Anda pesan? `));
    if (isNaN(quantity) || quantity < 0) {
      console.log('Jumlah tidak valid.');
      continue;
    }
    total += menu[burger] * quantity;
    console.log(`${quantity} ${burger}(s) telah ditambahkan ke pesanan.`);
  }
}

function askQuestion(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  console.log('Selamat datang di Burger Palace!');
  const totalAmount = await takeOrder();
  console.log(`Pesanan Anda telah selesai. Total pembayaran: Rp ${totalAmount}`);
  rl.close();
}

main();
