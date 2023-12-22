import { date } from "../helpers/date";
import { utilMethods } from "../helpers/utilMethods";

export const uiContentTodo = () => {
  const app = document.querySelector("#app");
  const div = document.createElement("div");
  let { dayDate, dayWeekDate, monthDate, arrayMonths, arrayWeek } = date();

  div.classList.add("todo-list");
  div.innerHTML = `

  <div class="todo-list__head">
    <div class="todo-list__heading">
    <div class="todo-list__group-heading">
    <div class="todo-list__date">
    <h3>Today's Tasks</h3>
    <div class="todo-list__date-now">
      <span class="dayNumber">${dayDate}</span>
      <div class="todo-list__date-now-day">
      <p class="day">${arrayWeek[dayWeekDate]}</p>
        <p class="month">${arrayMonths[monthDate]}</p>
      </div>
    </div>
  </div>

      <div class="todo-list__create-todo">
        <div class="todo-list__theme">
          <div class="todo-list__theme-toggle"></div>
        </div>
        <button class="todo-list__create">
          <i class="bx bx-customize"></i>
          <span>Create Task</span>
        </button>
      </div>
    </div_>
  </div>

    <div class="todo-list__tabs">
      <div class="todo-list__tabs-list">
        <div class="todo-list__tabs-item">
          <p class="todo-list__tabs-len-all"> <span>0</span> Completed Tasks </p>
        </div>
      </div>
    </div>

  </div>
  </div>
  <div class="todo-list__content">
    <div class="todo-list__elements-tasks show-task-contennt"></div>
  </div>

  `;
  app.appendChild(div);

  const { openForm } = utilMethods();
  openForm(open);
};
