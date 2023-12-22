import { variables } from "../helpers/variables";

export const uiConfirm = () => {
  const { app } = variables();

  const divModal = document.createElement("div");

  divModal.classList.add("modal-confirm");

  divModal.innerHTML = `
    <div class="modal-confirm__content">
      <h4 class="modal-confirm__title">You want to delete:</h4>
      <h2 class="modal-confirm__title-task"></h2>
      <div class="modal-confirm__group-btn">
        <button class="modal-confirm__cancel" name="cancel">
          Cancel
        </button>
        <button class="modal-confirm__confirm" name="confirm">
        Confirm
      </button>
      </div>
    </div>
  `;

  app.appendChild(divModal);
};
