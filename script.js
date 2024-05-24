const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
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
});