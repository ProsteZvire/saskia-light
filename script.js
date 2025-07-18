let isOpened = false;
function openBox() {
  if (isOpened) return;
  document.getElementById('box').classList.add('open');
  isOpened = true;
}
