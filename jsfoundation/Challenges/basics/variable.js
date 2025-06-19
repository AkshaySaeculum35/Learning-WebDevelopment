const a = 18;
const b = 24;

function add() {
  return a + b;
}

function sub() {
  if (b > a) return b - a;
  return a - b;
}

function mul() {
  return a * b;
}

function div() {
  if (b > a) return b / a;
  return a / b;
}

function incre() {
  return a++;
}

function decre() {
  return b--;
}
function reminder() {
  if (a < b) return b % a;
  return a % b;
}
