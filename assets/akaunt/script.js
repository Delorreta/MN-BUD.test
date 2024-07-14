const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const signInWrapper = document.querySelector('.wrapper.sign-in');
const signUpWrapper = document.querySelector('.wrapper.sign-up');
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

signUpBtnLink.addEventListener('click', () => {
    signInWrapper.classList.remove('active');
    signUpWrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    signUpWrapper.classList.remove('active');
    signInWrapper.classList.toggle('active');
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const number = document.getElementById('number').value;
    const password = document.getElementById('password').value;

    if (number === '1234' && password === 'qwerty') {
        alert('Login successful');
        errorMessage.style.display = 'none';
        // Додайте тут код для перенаправлення на особистий кабінет або інші дії після успішного ходу
        window.location.href = 'file:///C:/Users/marki/OneDrive/Pulpit/%D0%9D%D0%BE%D0%B2%D0%B0%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/Program%20kod%20leasson/Free%20kod/Mn-BUD/assets/MN-info/list-1.html#mh-home';
    } else {
        errorMessage.style.display = 'block';
    }
});
