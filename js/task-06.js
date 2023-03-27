const inputEl = document.querySelector('#validation-input');

const onInputBlur = () => {
const inputLength = Number(inputEl.dataset.length);
const inputValue = inputEl.value.length;

if (inputValue === inputLength) {
inputEl.classList.remove('invalid');
inputEl.classList.add('valid');
} else {
inputEl.classList.remove('valid');
inputEl.classList.add('invalid');
}
};

inputEl.addEventListener('blur', onInputBlur);