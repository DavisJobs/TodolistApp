export const uiWelcome = () => {
  const app = document.querySelector("#app");

  const welcomeTodo = document.createElement("div");

  welcomeTodo.className = `welcome-todo`;
  welcomeTodo.innerHTML = `
  
  <div class="welcome-todo__container container">
    <i class="welcome-todo__icon bx bx-list-check"></i>

    <h1 class="welcome-todo__title">
      <p>Welcome to</p>
      <span>My Todo</span>
    </h1>

    <p class="welcome-todo__subtitle">
      My todo helps you stay organized and perfom your taks much faster.
    </p>

    <button class="welcome-todo__btn">
    start todo
    </button>
  </div>
 
  `;

  app.appendChild(welcomeTodo);
  addStorageWelcome(app, welcomeTodo);
};

const addStorageWelcome = (app, welcomeTodo) => {
  const btnWelcome = welcomeTodo.querySelector(".welcome-todo__btn");

  btnWelcome.addEventListener("click", () => {
    localStorage.setItem("storage-welcome", "true");
    welcomeTodo.classList.add("hidden");

    setTimeout(() => {
      app.removeChild(welcomeTodo);
    }, 1000);
  });
};

const removeStorageWelcome = () => {
  if (localStorage.getItem("storage-welcome") === "true") {
  } else {
    localStorage.setItem("storage-welcome", "false");
    uiWelcome();
  }
};

export const initStorage = () => {
  removeStorageWelcome();
};
