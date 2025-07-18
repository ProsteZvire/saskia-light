function openBox() {
  const box = document.querySelector('.box');
  const textBlock = document.getElementById('text-block');

  if (!box.classList.contains('open')) {
    box.classList.add('open');
    setTimeout(() => {
      textBlock.classList.add('visible');
    }, 1000); // Počkej, než se otevře víko
  }
}
