const body = document.body;

const main = document.createElement("main");

const section = document.createElement("section");
section.className = "calbody";

// --- Layar Kalkulator ---
const calScreen = document.createElement("div");
calScreen.className = "cal-screen";

const screenHistory = document.createElement("div");
screenHistory.className = "screen-history";
screenHistory.textContent = "125 × 2";

const screenCurrent = document.createElement("div");
screenCurrent.textContent = "250";

calScreen.append(screenHistory, screenCurrent);

const createBtn = (text, className, style = {}) => {
    const btn = document.createElement("div");
    btn.className = className;
    btn.textContent = text;
    return btn;
};

// --- Baris 1 ---
const btnDegRad = createBtn("Deg | Rad", "btn-sci btn-double");
const btnFact = createBtn("x!", "btn-sci");
const btnOpen = createBtn("(", "btn-sci");
const btnClose = createBtn(")", "btn-sci");
const btnMod = createBtn("%", "btn-sci");
const btnAC = createBtn("AC", "btn-op");

// --- Baris 2 ---
const btnInv = createBtn("Inv", "btn-sci");
const btnSin = createBtn("sin", "btn-sci");
const btnLn = createBtn("ln", "btn-sci");
const btn7 = createBtn("7", "btn-number");
const btn8 = createBtn("8", "btn-number");
const btn9 = createBtn("9", "btn-number");
const btnDiv = createBtn("÷", "btn-op");

// --- Baris 3 ---
const btnPi = createBtn("π", "btn-sci");
const btnCos = createBtn("cos", "btn-sci");
const btnLog = createBtn("log", "btn-sci");
const btn4 = createBtn("4", "btn-number");
const btn5 = createBtn("5", "btn-number");
const btn6 = createBtn("6", "btn-number");
const btnMult = createBtn("×", "btn-op");

// --- Baris 4 ---
const btnE = createBtn("e", "btn-sci");
const btnTan = createBtn("tan", "btn-sci");
const btnSqrt = createBtn("√", "btn-sci");
const btn1 = createBtn("1", "btn-number");
const btn2 = createBtn("2", "btn-number");
const btn3 = createBtn("3", "btn-number");
const btnSub = createBtn("-", "btn-op");

// --- Baris 5 ---
const btnAns = createBtn("Ans", "btn-sci");
const btnExp = createBtn("EXP", "btn-sci");
const btnPow = createBtn("xʸ", "btn-sci");
const btn0 = createBtn("0", "btn-number");
const btnDot = createBtn(".", "btn-number");
const btnEqual = createBtn("=", "btn-equal");
const btnAdd = createBtn("+", "btn-op");

// --- Menyusun Elemen ---
section.append(
    calScreen,
    btnDegRad, btnFact, btnOpen, btnClose, btnMod, btnAC,
    btnInv, btnSin, btnLn, btn7, btn8, btn9, btnDiv,
    btnPi, btnCos, btnLog, btn4, btn5, btn6, btnMult,
    btnE, btnTan, btnSqrt, btn1, btn2, btn3, btnSub,
    btnAns, btnExp, btnPow, btn0, btnDot, btnEqual, btnAdd
);

main.append(section);
body.append(main);