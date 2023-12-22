export const variables = () => {
  const app = document.getElementById("app");
  const tasksContainer = document.querySelector(".todo-list__elements-tasks");
  const modalForm = document.querySelector(".modal-form");
  const modalConfirm = document.querySelector(".modal-confirm");
  const form = document.querySelector("#form");
  const inputTitle = document.querySelector("#title");
  const inputDescription = document.querySelector("#description");
  const createTodo = document.querySelector(".todo-list__create");
  const cancelForm = document.querySelector(".form__form-cancel");
  const btnAddTask = document.querySelector(".form__form-add");
  const allTasks = document.querySelector(".allTasks");
  const open = document.querySelector(".todo-list__create");
  const spanAllLeng = document.querySelector(".todo-list__tabs-len-all");

  const modalConfirmTitle = document.querySelector(
    ".modal-confirm__title-task"
  );

  const themeToggle = document.querySelector(".todo-list__theme-toggle");

  return {
    app,
    tasksContainer,
    modalForm,
    modalConfirm,
    form,
    inputTitle,
    inputDescription,
    createTodo,
    cancelForm,
    btnAddTask,
    allTasks,
    open,
    spanAllLeng,
    modalConfirmTitle,
    themeToggle,
  };
};
