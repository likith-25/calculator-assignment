let currentInput = "";


function appendToScreen(value) {
  currentInput += value;
  document.getElementById("screen").textContent = currentInput;
}


function clearScreen() {
  currentInput = "";
  document.getElementById("screen").textContent = "";
}


function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById("screen").textContent = currentInput;
  } catch (e) {
    document.getElementById("screen").textContent = "";
    currentInput = "";
  }
}
