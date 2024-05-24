const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
  value = textInput.value;

  if (value === '') {
    alert('Please input a value');
  } else if (textInput.value.length === 1) {
    result.innerHTML = `<b>${value}</b> is a palindrome.`;
  } else {
    const reversedValue = value.split('').reverse().join('');
    console.log(reversedValue);
    if (value === reversedValue) {
      result.innerHTML = `<b>${value}</b> is a palindrome.`;
    } else {
      result.innerHTML = `<b>${value}</b> is not a palindrome.`;
    }
  }
});