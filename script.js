let isOpened = false;

function openBox() {
  if (isOpened) return;

  document.getElementById('lid').style.transform = 'rotateX(-120deg)';
  document.getElementById('light').style.opacity = '1';
  document.getElementById('message').style.opacity = '1';

  isOpened = true;
}
