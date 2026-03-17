function celciusToFarnheit() {
const  inputsuhu = document.getElementById("suhu").value
const suhu = inputsuhu;
const  hasilF = (suhu * 9/5) + 32;
// const  hasilF = (suhu * 9/5) + 32;
const output = document.getElementById('hasil')
output.textContent = "Farenheit  " + hasilF;
}

function farnheitToCelcius() {
const  inputsuhu = document.getElementById("suhu").value
const suhu = inputsuhu;
const  hasilF = (suhu - 32) * (5/9);
// const  hasilF = (suhu * 9/5) + 32;
const output = document.getElementById('hasil')
output.textContent = "Celcius " + hasilF;
}
