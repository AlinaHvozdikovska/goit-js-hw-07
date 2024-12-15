const form = document.querySelector('.login-form');
form.addEventListener('submit', function (event) {
  /* Остановка перезагрузки страницы */
  event.preventDefault();

  /* Получаем значние с поля email and password */
  const email = form.elements.email.value.trim();

  const password = form.elements.password.value.trim();

  /* проверка заполнения полей и конец если поля пустые */
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }
  /* сборка данных */
  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);

  /*Oчистка полей */
  form.reset();
});
