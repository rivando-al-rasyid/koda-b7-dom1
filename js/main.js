function celciusToFarnheit() {
const  inputsuhu = document.getElementById("suhu").value
const suhu = inputsuhu;
const  hasilF = (suhu * 9/5) + 32;
// const  hasilF = (suhu * 9/5) + 32;
const output = document.getElementById('hasil')
output.textContent = "suhu " + hasilF;
}
