import { types } from "../js/types";
import { variables } from "./variables";

export const utilMethods = () => {
  let { objTask } = types();
  const { tasksContainer, form, modalForm, open, cancelForm } = variables();

  const openForm = () => {
    open.addEventListener("click", () => {
      modalForm.classList.add("showForm");
    });
  };

  const closeForm = () => {
    cancelForm.addEventListener("click", () => {
      modalForm.classList.remove("showForm");
      cleanObjects();
      form.reset();
    });
  };

  const cleanObjects = () => {
    objTask.id = "";
    objTask.title = "";
    objTask.description = "";
  };

  const cleanDuplicate = () => {
    while (tasksContainer.firstChild) {
      tasksContainer.removeChild(tasksContainer.firstChild);
    }
  };

  return {
    openForm,
    closeForm,
    cleanObjects,
    cleanDuplicate,
  };
};
