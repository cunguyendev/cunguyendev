window.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('.main-footer__copyright').innerHTML.replace('$year', `${new Date().getFullYear()}`);

  document.querySelector('.main-footer__copyright').innerHTML = year;
});
