const counterInput = document.querySelector('#counter');
const stickersInput = document.querySelectorAll('.checkbox');

const handleInputChange = () => {
  counterInput.addEventListener('input', () => {
    const counterInputValue = Number(counterInput.value);
    if (counterInputValue < 0 || !counterInputValue) {
      counterInput.classList.add('input-error');
      return;
    }
  });
};

const handleBtnLess = () => {
  const btnLess = document.querySelector('.btn-menos');

  btnLess.addEventListener('click', (e) => {
    e.preventDefault();
    const counterInputValue = Number(counterInput.value);
    if (counterInputValue === 0) {
      counterInput.classList.add('input-error');
      return;
    }
    document.querySelector('#counter').value = counterInputValue - 1;
  });
};

const handleBtnMore = () => {
  const btnMore = document.querySelector('.btn-mais');

  btnMore.addEventListener('click', (e) => {
    e.preventDefault();
    const counterInputValue = Number(counterInput.value);
    counterInput.classList.remove('input-error');
    document.querySelector('#counter').value = counterInputValue + 1;
  });
};

const handleErrors = () => {
  if (Number(counterInput.value) === 0) {
    alert('O valor do input não pode ser 0');
    counterInput.classList.add('input-error');
    throw new Error('O valor do input não pode ser 0');
  }

  const validateStickers = Array.from(stickersInput).some(
    (sticker) => sticker.checked,
  );

  if (!validateStickers) {
    alert('Selecione pelo menos uma opção de adesivo');
    throw new Error('Selecione pelo menos uma opção de adesivo');
  }
};

const handleSubmitForm = () => {
  const btnSubmit = document.querySelector('#btn-submit');
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    try {
      handleErrors();
      const inputsChecked = Array.from(
        document.querySelectorAll('.checkbox:checked'),
      );
      console.log(inputsChecked);
    } catch (error) {
      console.error(error.message);
    }
  });
};

window.onload = () => {
  handleInputChange();
  handleBtnLess();
  handleBtnMore();
  handleSubmitForm();
};
