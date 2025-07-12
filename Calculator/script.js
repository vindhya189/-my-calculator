const display = document.getElementById('display');
const scientificPanel = document.getElementById('scientificPanel');
const historyBox = document.getElementById('history');

function append(value) {
  display.value += value;

  // Remove result color if typing
  display.classList.remove('result-show');

  // Check if value is a number (0–9)
  if (!isNaN(value) && value !== ' ') {
    display.classList.add('number-typing');
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(display.value);
    addToHistory(display.value + ' = ' + result);
    display.value = result;

    // Animate result
    display.classList.remove('number-typing');
    display.classList.add('result-show');
  } catch {
    display.value = 'Error';
  }
}

function addToHistory(entry) {
  const div = document.createElement('div');
  div.textContent = entry;
  div.className = 'history-entry';
  historyBox.prepend(div);
}

function applyFunc(func) {
  display.value += func;
}

function toggleScientific() {
  scientificPanel.classList.toggle('active');
}

function changeTheme() {
  const selected = document.getElementById('themePicker').value;
  document.body.className = selected;
}
