
const themeSelector = document.querySelector('select');

function changeTheme() {
    // check to see what the current value of our select is.
    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('Logo').src = 'byui-logo_white.png'; // correct path for white logo
    } else {
        document.body.classList.remove('dark');
        document.getElementById('Logo').src = 'byui-logo_blue.webp'; // correct path for blue logo
    }
}
