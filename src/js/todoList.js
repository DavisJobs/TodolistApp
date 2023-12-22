import { types } from "./types";
import { variables, utilMethods, date } from "../helpers";
import { uiTaskItem } from "../UI";
import { v4 as uuidv4 } from "uuid";

export const todoList = () => {
  let { listTasks, objTask, editing } = types();

  const {
    form,
    modalForm,
    modalConfirm,
    inputDescription,
    inputTitle,
    spanAllLeng,
    btnAddTask,
    modalConfirmTitle,
  } = variables();

  const { cleanDuplicate, cleanObjects } = utilMethods();
  let {
    dayDate,
    dayWeekDate,
    monthDate,
    arrayMonths,
    arrayWeek,
    yearDate,
    hourDate,
    minutes,
    ampm,
  } = date();

  const storageLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(listTasks));
  };

  document.addEventListener("DOMContentLoaded", () => {
    listTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    itemTask(listTasks);
  });
  form.addEventListener("submit", validateForm);

  function validateForm(e) {
    e.preventDefault();

    if (
      inputTitle.value.trim() === "" ||
      inputDescription.value.trim() === ""
    ) {
      return;
    }

    if (editing) {
      editTaskForm();
      editing = false;
    } else {
      objTask.id = uuidv4();
      objTask.title = inputTitle.value;
      objTask.description = inputDescription.value;
      objTask.date.dateDay = arrayWeek[dayWeekDate];
      objTask.date.dateDayNumber = dayDate;
      objTask.date.dateMonth = arrayMonths[monthDate];
      objTask.date.dateYear = yearDate;
      objTask.date.dateHours = hourDate;
      objTask.date.dateMinutes = minutes;
      objTask.date.ampm = ampm;
      addRenderTask();
    }
    modalForm.classList.remove("showForm");
  }

  const addRenderTask = () => {
    listTasks.unshift({ ...objTask });

    cleanObjects();
    itemTask(listTasks);
    form.reset();
  };

  const itemTask = (listTasks) => {
    cleanDuplicate();

    uiTaskItem(listTasks, updateTaskForm, removeItemTask, completeTask);
    storageLocal();
    lengthElemets();
  };

  const updateTaskForm = (task) => {
    const { id, title, description } = task;

    inputTitle.value = title;
    inputDescription.value = description;
    objTask.id = id;

    modalForm.classList.add("showForm");
    btnAddTask.textContent = "Update Task";
    editing = true;
  };

  const editTaskForm = () => {
    objTask.title = inputTitle.value;
    objTask.description = inputDescription.value;

    listTasks.map((task) => {
      if (task.id === objTask.id) {
        task.id = objTask.id;
        task.title = objTask.title;
        task.description = objTask.description;
      }
    });
    cleanDuplicate();
    itemTask(listTasks);
    form.reset();
    btnAddTask.textContent = "Add Tasks";
    editing = false;
  };

  const removeItemTask = (id, title) => {
    modalConfirm.classList.add("showConfirm");
    modalConfirmTitle.textContent = title;
    modalConfirm.addEventListener("click", (e) => {
      if (e.target.name === "confirm") {
        listTasks = listTasks.filter((task) => task.id !== id);
        itemTask(listTasks);
        modalConfirm.classList.remove("showConfirm");
      } else if (e.target.name === "cancel") {
        modalConfirm.classList.remove("showConfirm");
        id = "";
      }
    });
  };

  const completeTask = (taskContentCheck, id) => {
    taskContentCheck.classList.toggle("activeCheck");

    listTasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
    });

    itemTask(listTasks);
  };

  const lengthElemets = () => {
    let allTasks = listTasks.filter((task) => task);
    let completedTasks = listTasks.filter((task) => task.completed);

    spanAllLeng.children[0].textContent = `(${completedTasks.length}/${allTasks.length})`;
  };
};
