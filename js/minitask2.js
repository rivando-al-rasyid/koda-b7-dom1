let timer = 0;

const merah = document.getElementById('merah');
console.log(merah)
const kuning = document.getElementById('kuning');
console.log(kuning)
const hijau = document.getElementById('hijau');
console.log(hijau)




function reset() {
  merah.classList.remove('red');
  kuning.classList.remove('yellow');
  hijau.classList.remove('green');
}

function stop() {
  reset();
  merah.classList.add('red');
  timer = setTimeout(wait, 3000);
}

function wait() {
  reset();
  kuning.classList.add('yellow');
  timer = setTimeout(start, 2000);
}

function start() {
  reset();
  hijau.classList.add('green');
  timer = setTimeout(stop, 3000);
}

