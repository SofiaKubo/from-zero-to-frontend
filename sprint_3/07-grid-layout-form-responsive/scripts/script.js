const createElementPromise = () =>
  new Promise((resolve) => {
    const p = document.createElement("p");
    p.className = "form-message";
    p.textContent = "Не отправляйте сообщения из незнакомых форм";
    document.body.prepend(p);
    resolve();
  });

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

document.querySelector(".form").addEventListener("submit", (evt) => {
  evt.preventDefault();
  createElementPromise()
    .then(() => delay(2000))
    .then(() => {
      document.querySelector(".form-message").remove();
      document.querySelector(".form").reset();
    });
});
