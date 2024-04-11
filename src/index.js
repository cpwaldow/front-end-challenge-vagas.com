const counterInput = document.querySelector('#counter');
const stickersInput = document.querySelectorAll('.checkbox');
const textArea = document.querySelector('textarea');
const successMsg = document.querySelector('.success-submit');

const handleInputChange = () => {
  counterInput.addEventListener('input', () => {
    const counterInputValue = Number(counterInput.value);
    if (counterInputValue < 0 || !counterInputValue) {
      counterInput.classList.add('input-error');
      return;
    }
    counterInput.classList.remove('input-error');
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
  const validateStickers = Array.from(stickersInput).some(
    (sticker) => sticker.checked,
  );

  if (!validateStickers) {
    throw new Error('Selecione pelo menos uma opção de adesivo');
  }

  if (Number(counterInput.value) === 0 || isNaN(Number(counterInput.value))) {
    counterInput.classList.add('input-error');
    throw new Error('Valor incorreto, insira um número válido maior que 0');
  }
};

const createStorage = () => {
  if (!localStorage.getItem('info')) {
    localStorage.setItem('info', JSON.stringify([]));
  }
};

const addStorageInfo = (getAllInfo) => {
  const storageInfo = JSON.parse(localStorage.getItem('info'));
  localStorage.setItem('info', JSON.stringify([...storageInfo, getAllInfo]));
  setTimeout(() => {
    window.location.reload();
  }, 4000);
};

const handleSubmitForm = () => {
  const btnSubmit = document.querySelector('#btn-submit');
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    try {
      handleErrors();
      const inputsChecked = Array.from(
        document.querySelectorAll('.checkbox:checked'),
      ).map((item) => item.value);
      addStorageInfo({
        stickers: inputsChecked,
        counter: counterInput.value,
        obs: textArea.value,
      });
      successMsg.classList.remove('invisible');
    } catch (error) {
      alert(error.message);
    }
  });
};

window.onload = () => {
  createStorage();
  handleInputChange();
  handleBtnLess();
  handleBtnMore();
  handleSubmitForm();
};
