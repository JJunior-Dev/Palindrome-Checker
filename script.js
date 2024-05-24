const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

function validateInput() {
  const value = textInput.value;
  
  if (value === '') {
    alert('Please input a value');
  } else if (value.length === 1) {
    result.innerHTML = `<p class="valid"><b>${value}</b> is a palindrome.</p>`;
    textInput.value = '';
  } else {
    const reversedValue = value.split('').reverse().join('');
    console.log(reversedValue);
    if (value === reversedValue) {
      result.innerHTML = `<p class="valid"><b>${value}</b> is a palindrome.</p>`;
      textInput.value = '';
    } else {
      result.innerHTML = `<p class="invalid"><b>${value}</b> is not a palindrome.</p>`;
      textInput.value = '';
    }
  }
};

checkButton.addEventListener('click', validateInput)
textInput.addEventListener('keyup', (e) => {
  const word = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;
  if (isEnterKeyPressed) {
      validateInput(word)
      e.target.value = '';
  };
});