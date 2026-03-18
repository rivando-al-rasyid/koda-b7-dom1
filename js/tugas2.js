
function maximumDistanceTostation(jumlahkota,titikstasiun) {

// mengubah jumlah kota menjadi nilai index
const indexkota = jumlahkota - 1
// jarak kota terakhir dengan stasiun terakhir
const max = Math.max(...titikstasiun);
const kotaakhir = indexkota - max
// jarak kota terdekat dengan stasiun terdekat
const min = Math.min(...titikstasiun);
const kotaawal = min - 0

// menampung nilai tengah dalam array
let jarak = [];

for (let i = 0; i < titikstasiun.length - 1; i++) {
    // menghitung jarak antar stasiun
    nilai = Math.abs(titikstasiun[i] - titikstasiun[i+1])
    // menghitung nilai tengah antar stasiun karena itu titik terjauh antar stasiun
    tengah = Math.floor(nilai/2)
    // menympan nilai tengah
    jarak.push(tengah)
}
// mencari nilai tertinggi dalam array jarak
maxjarak = Math.max(...jarak)
// mencari nilai tertinggi dari semua perhitungan
jarakMaximumStasiun = Math.max(kotaakhir , kotaawal, maxjarak)

// mengeluarkan output
return jarakMaximumStasiun;

}


// testing
console.log( maximumDistanceTostation(5,[0,4]))
console.log(maximumDistanceTostation(6,[0,1,2,3,4,5]))
console.log(maximumDistanceTostation(10,[3,7,9]))
