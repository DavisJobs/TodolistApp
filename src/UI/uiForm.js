import { utilMethods } from "../helpers/utilMethods";

export const uiForm = () => {
  const app = document.querySelector("#app");
  const div = document.createElement("div");

  div.classList.add("modal-form");
  div.innerHTML = `
 
  <form class="form" id="form">
  <div class="form__form-control">
    <label for="" class="form__form-control-label">Title:</label>
    <input
      type="text"
      id="title"
      class="form__form-control-input"
    />
  </div>
  <div class="form__form-control">
    <label for="" class="form__form-control-label"
      >Description:</label
    >
    <textarea
      cols="30"
      rows="10"
      class="form__form-control-area"
      id="description"
    ></textarea>
  </div>
  <div class="form__form-group-btn">
    <button type="submit" class="form__form-add">Add Task</button>
    <button class="form__form-cancel">Cancel</button>
  </div>
</form>
 
  `;

  app.appendChild(div);
  const { closeForm } = utilMethods();
  closeForm();
};
