const readline = require('readline');

class Parkiran {
    constructor() {
        this.spaces = [];// Menggunakan list untuk masukkan plat mobil 
    }

    tambahMobil(platNomor) {
        this.spaces.push(platNomor);
        console.log(`Mobil dengan plat nomor ${platNomor} telah ditambahkan ke dalam parkiran.`);
    }

    hapusMobil(platNomor) {
        const index = this.spaces.indexOf(platNomor);
        if (index !== -1) {
            this.spaces.splice(index, 1);
            console.log(`Mobil dengan plat nomor ${platNomor} telah dihapus dari parkiran.`);
        } else {
            console.log(`Mobil dengan plat nomor ${platNomor} tidak ditemukan di parkiran.`);
        }
    }

    lihatParkiran() {
        if (this.spaces.length > 0) {
            console.log("Daftar mobil di parkiran:");
            this.spaces.forEach((platNomor, index) => {
                console.log(`${index + 1}. ${platNomor}`);
            });
        } else {
            console.log("Parkiran kosong.");
        }
    }
}

function main() {
    const parkiran = new Parkiran();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log('1. Plat Mobil Masuk ');
    console.log('2. Plat Mobil Keluar');
    console.log('3. Lihat Mobil Parkir');
    rl.setPrompt('Pilih menu: ');
    rl.prompt();

    rl.on('line', (input) => {
        switch (input.trim()) {
            case "1":
                rl.question("Masukkan plat nomor mobil: ", (platNomor) => {
                    parkiran.tambahMobil(platNomor);
                    rl.prompt();
                });
                break;
            case "2":
                rl.question("Masukkan plat nomor mobil yang akan dihapus: ", (platNomor) => {
                    parkiran.hapusMobil(platNomor);
                    rl.prompt();
                });
                break;
            case "3":
                parkiran.lihatParkiran();
                rl.prompt();
                break;
            case "4":
                console.log("Terima kasih!");
                rl.close();
                break;
            default:
                console.log("Menu tidak valid. Silakan pilih menu yang benar.");
                rl.prompt();
        }
    }).on('close', () => {
        process.exit(0);
    });
}

main();
