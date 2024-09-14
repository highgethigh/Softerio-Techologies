// Получаем все кнопки
const buttons = document.querySelectorAll(".btn-app");

// Добавляем обработчик клика на каждую кнопку
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Удаляем класс 'active' у всех кнопок
    buttons.forEach((btn) => btn.classList.remove("active"));
    // Добавляем класс 'active' только к нажатой кнопке
    button.classList.add("active");
  });
});