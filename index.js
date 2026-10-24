
const getDiscount = require('./getDiscount');

const harga = 100000;
const diskon = 10;

const potongan = getDiscount(harga, diskon);
const totalBayar = harga - potongan;

console.log("Harga barang: Rp" + harga);
console.log("Diskon: " + diskon + "%");
console.log("Potongan harga: Rp" + potongan);
console.log("Total bayar: Rp" + totalBayar);
