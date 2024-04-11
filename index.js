const counterInput = document.querySelector('#counter');
const btnSubmit = document.querySelector('#btn-submit');

const handleInputChange = () => {
  counterInput.addEventListener('input', () => {
    const counterInputValue = Number(counterInput.value);
    if (counterInputValue < 0 || !counterInputValue) {
      counterInput.classList.add('input-error');
      btnSubmit.disabled = true;
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

    document.querySelector('#counter').value = counterInputValue + 1;
  });
};

handleInputChange();
handleBtnLess();
handleBtnMore();
