const body = document.body;
const newForm = document.createElement("form");
newForm.setAttribute("method", "post");

// --- Input Nama ---
const labelNama = document.createElement("label");
labelNama.textContent = "Nama: ";
labelNama.setAttribute("for", "inputNama");

const inputNama = document.createElement("input");
inputNama.setAttribute("type", "text");
inputNama.setAttribute("name", "nama");
inputNama.id = "inputNama";

const br1 = document.createElement("br");

const labelUmur = document.createElement("label");
labelUmur.textContent = "Umur: ";
labelUmur.setAttribute("for", "inputUmur");

const inputUmur = document.createElement("input");
inputUmur.setAttribute("type", "number");
inputUmur.setAttribute("name", "umur");
inputUmur.id = "inputUmur";

const br2 = document.createElement("br");

const jkLabel = document.createElement("p");
jkLabel.textContent = "Jenis Kelamin: ";

const rdLaki = document.createElement("input");
rdLaki.setAttribute("type", "radio");
rdLaki.setAttribute("name", "JenisKelamin");
rdLaki.setAttribute("value", "Laki-laki");
rdLaki.id = "L";

const labelL = document.createElement("label");
labelL.setAttribute("for", "L");
labelL.textContent = " Laki-laki ";

const rdPerempuan = document.createElement("input");
rdPerempuan.setAttribute("type", "radio");
rdPerempuan.setAttribute("name", "JenisKelamin");
rdPerempuan.setAttribute("value", "Perempuan");
rdPerempuan.id = "P";

const labelP = document.createElement("label");
labelP.setAttribute("for", "P");
labelP.textContent = " Perempuan";

const br3 = document.createElement("br");

const labelPerokok = document.createElement("p");
labelPerokok.textContent = "Apakah Anda Seorang Perokok?";

const selectPerokok = document.createElement("select");
selectPerokok.setAttribute("name", "apakah_perokok");

const optDefault = document.createElement("option");
optDefault.textContent = "Pilih Salah Satu";
optDefault.disabled = true;
optDefault.selected = true;
optDefault.hidden = true;

const optIya = document.createElement("option");
optIya.value = "Iya";
optIya.textContent = "Iya";

const optTidak = document.createElement("option");
optTidak.value = "Tidak";
optTidak.textContent = "Tidak";

selectPerokok.append(optDefault, optIya, optTidak);

const br4 = document.createElement("br");

const brandLabel = document.createElement("p");
brandLabel.textContent = "Brand Rokok yang digunakan:";

const brands = ["Djarum", "Gudang Garam", "Sampoerna", "LA Lights"];
const brandContainer = document.createDocumentFragment();

brands.forEach(brand => {
    const cb = document.createElement("input");
    cb.setAttribute("type", "checkbox");
    cb.setAttribute("name", "merek_rokok[]");
    cb.setAttribute("value", brand);

    const lbl = document.createElement("label");
    lbl.textContent = ` ${brand}`;

    brandContainer.append(cb, lbl, document.createElement("br"));
});

const resetButton = document.createElement("button");
resetButton.setAttribute("type", "reset");
resetButton.textContent = "Reset";

const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Kirim Data";

newForm.append(
    labelNama, inputNama, br1,
    labelUmur, inputUmur, br2,
    jkLabel, rdLaki, labelL, rdPerempuan, labelP, br3,
    labelPerokok, selectPerokok, br4,
    brandLabel, brandContainer,
    resetButton, submitButton
);

// Memasukkan Form ke Body
body.append(newForm);