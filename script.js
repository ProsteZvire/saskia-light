function openBox() {
  const box = document.getElementById('box');
  const textBlock = document.getElementById('text-block');

  if (!box.classList.contains('opened')) {
    box.classList.add('opened');

    // Po 1 sekundě (až se otevře víko), zobraz text
    setTimeout(() => {
      textBlock.classList.add('visible');
    }, 1000);
  }
}
