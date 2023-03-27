const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

function onInputChange(event) {
  const inputValue = event.currentTarget.value;
  if (inputValue === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = inputValue;
  }
  console.log('Input changed!');
}

input.addEventListener('input', onInputChange);
