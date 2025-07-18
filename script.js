let isOpened = false;

function openBox() {
  if (isOpened) return;

  document.querySelector('.box').classList.add('open');
  isOpened = true;
}
