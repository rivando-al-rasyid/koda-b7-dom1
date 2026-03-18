
function checkWeightedString(word,numberarray) {

  // array pembanding dengan memasukan seluruh alfabet dari a sampai z
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  // conversi huruf menjadi array
  let textarray = word.split("")

  // membuat array kosong untuk menampung nilai array baru
const converted = []
const hasil = []

  // menjalan conversi word menjadi array angka
  textarray.forEach(word => {
    // indexOf berfungsi melithat/mencari nomor nilai index dari huruf yang ada dalam array alphabet
    // indexOf mencari nilai index dari alfabet berdasarkan input yang di masukan yang seperti di bawah yaitu huruf
    // dan di tambah 1 supaya menjadi natural number/bilangan asli karena index di mulai dari 0
    converter = (check = alphabet.indexOf(word)) + 1;
    // memasukan nilai converter dalam array converted
    converted.push(converter)
  });
  // melakukan perbandingan dengan numberarray
    for (let i = 0; i < numberarray.length; i++) {
    if (converted[i] == numberarray[i] ){
    // jika kondisi if benar maka nulai di simpan ke hasil adalah  yes
    hasil.push("Yes")
  }
  else {
        // jika kondisi if benar maka nulai di simpan ke hasil adalah  no
    hasil.push("No")
  }
}

// mengeluarkan hasil output
console.log(hasil)

}

// Test 1: Semua huruf cocok dengan angka
console.log("=== Test 1: Semua cocok ===");
checkWeightedString("abc", [1, 2, 3]);
// Expected: ["Yes", "Yes", "Yes"]

// Test 2: Sebagian cocok, sebagian tidak
console.log("=== Test 2: Sebagian cocok ===");
checkWeightedString("abc", [1, 99, 3]);
// Expected: ["Yes", "No", "Yes"]

// Test 3: Semua tidak cocok
console.log("=== Test 3: Semua tidak cocok ===");
checkWeightedString("abc", [99, 99, 99]);
// Expected: ["No", "No", "No"]

// Test 4: Panjang tidak sama
console.log("=== Test 4: Panjang tidak sama ===");
checkWeightedString("abc", [1, 2]);
// Expected: ["Panjang huruf dan angka tidak setara"]

// Test 5: Huruf di akhir alfabet
console.log("=== Test 5: Huruf z ===");
checkWeightedString("z", [26]);
// Expected: ["Yes"]

// Test 6: Kata lebih panjang
console.log("=== Test 6: Kata panjang ===");
checkWeightedString("hello", [8, 5, 12, 12, 15]);
// Expected: ["Yes", "Yes", "Yes", "Yes", "Yes"]