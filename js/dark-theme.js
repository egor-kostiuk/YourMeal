const changeThemeButtons = document.querySelectorAll('.dark-theme'); 

changeThemeButtons.forEach((button) => {
  button.addEventListener('click', () => toggleTheme())
}); 

function toggleTheme() {
  const link = document.getElementById('customStylesheet');
  const themeCheckbox = document.querySelector('.dark-theme input');

  if (themeCheckbox.checked) {
    // if theme is dark switch to light
    link.href = 'css/light-theme.css';
  } else {
    // if theme is dark switch to dark
    link.href = 'css/dark-theme.css';
  }
};