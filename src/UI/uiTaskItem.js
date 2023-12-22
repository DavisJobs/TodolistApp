import { variables } from "../helpers/variables";

export const uiTaskItem = (
  listTasks,
  updateTaskForm,
  removeItemTask,
  completeTask
) => {
  const { tasksContainer } = variables();

  listTasks.length === 0
    ? (tasksContainer.innerHTML = `<h1>Empty Tasks</h1>`)
    : listTasks.forEach((task) => {
        const {
          id,
          title,
          description,
          completed,
          date: {
            dateDay,
            dateDayNumber,
            dateMonth,
            dateYear,
            dateHours,
            dateMinutes,
            ampm,
          },
        } = task;

        const taskDiv = document.createElement("div");
        const divHeading = document.createElement("div");
        const divGroup = document.createElement("div");
        const taskContent = document.createElement("div");
        const taskTitle = document.createElement("p");
        const taskDescription = document.createElement("span");
        const taskContentCheck = document.createElement("div");
        const taskCheck = document.createElement("div");
        const taskContentDate = document.createElement("div");
        const taskContentDateInfo = document.createElement("div");
        const taskContentDateTextDate = document.createElement("div");
        const divContentDateGroup = document.createElement("div");
        const taskIconEdit = document.createElement("button");
        const taskIconDelete = document.createElement("button");

        taskDiv.classList.add(
          "todo-list__element-task",
          `${completed ? "activeCheck" : "empty"}`
        );

        taskDiv.setAttribute("id", id);

        divHeading.classList.add("todo-list__element-task-heading");

        divGroup.classList.add("todo-list__element-task-group");

        taskContent.classList.add("todo-list__element-task-content");

        taskTitle.classList.add("todo-list__element-task-heading-title");
        taskTitle.textContent = title;

        taskDescription.classList.add(
          "todo-list__element-task-heading-subtitle"
        );
        taskDescription.textContent = description;

        taskContentCheck.classList.add(
          "todo-list__element-task-check",
          "bx",
          "bx-check",
          `${completed ? "activeCheck" : "empty"}`
        );
        taskContentCheck.onclick = () => completeTask(taskContentCheck, id);

        taskContentDate.classList.add("todo-list__element-task-date");

        taskContentDateInfo.classList.add("todo-list__element-task-info-date");

        divContentDateGroup.classList.add(
          "todo-list__element-task-group-icons"
        );

        taskContentDateTextDate.classList.add(
          "bx",
          "d-flex-gap-ai-center",
          "bx-calendar"
        );
        taskContentDateTextDate.textContent = `${dateDay} ${dateDayNumber} ${dateMonth} ${dateYear} | ${dateHours}:${dateMinutes} ${ampm}`;

        taskIconEdit.classList.add(
          "bx",
          "bx-edit",
          "todo-list__element-task-edit"
        );
        taskIconEdit.onclick = () => updateTaskForm(task);

        taskIconDelete.classList.add(
          "bx",
          "bx-trash-alt",
          "todo-list__element-task-remove"
        );
        taskIconDelete.onclick = () => removeItemTask(id, title);

        taskDiv.appendChild(divHeading);

        divHeading.appendChild(divGroup);
        divHeading.appendChild(taskContentDate);

        divGroup.appendChild(taskContent);
        divGroup.appendChild(taskContentCheck);

        taskContentCheck.append(taskCheck);

        taskContent.append(taskTitle);
        taskContent.append(taskDescription);

        taskContentDate.append(taskContentDateInfo);

        taskContentDateInfo.appendChild(divContentDateGroup);

        taskContentDateInfo.append(taskContentDateTextDate);

        divContentDateGroup.append(taskIconEdit);
        divContentDateGroup.append(taskIconDelete);

        tasksContainer.appendChild(taskDiv);
      });
};
