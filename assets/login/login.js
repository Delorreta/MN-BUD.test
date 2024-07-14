function validateLogin() {
  // Отримуємо значення введеного логіна
  const username = document.getElementById('username').value;
  // Отримуємо значення введеного пароля
  const password = document.getElementById('password').value;

  // Перевірка логіна та пароля для адміністратора
  if (username === 'Гладій Маркіян' && password === '12345') {
    // Перенаправлення на сторінку адміністратора
    window.location.href = 'file:///C:/Users/marki/OneDrive/Pulpit/%D0%9D%D0%BE%D0%B2%D0%B0%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/Program%20kod%20leasson/Free%20kod/Mn-BUD/assets/MN-info/list-1.html';
  } 
  // Перевірка логіна та пароля для користувача
  else if (username === 'Гладій Любомир' && password === '54321') {
    // Перенаправлення на сторінку користувача
    window.location.href = 'file:///C:/Users/marki/OneDrive/Pulpit/%D0%9D%D0%BE%D0%B2%D0%B0%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/Program%20kod%20leasson/Free%20kod/Mn-BUD/assets/MN-info/list-2.html';
  } 
  // Якщо логін або пароль неправильні
  else {
    // Відображення повідомлення про неправильний логін або пароль
    alert('Неправильний логін або пароль');
  }
}
