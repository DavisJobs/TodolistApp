import { uiConfirm } from "./src/UI/uiConfirm";
import { uiContentTodo } from "./src/UI/uiContentTodo";
import { uiForm } from "./src/UI/uiForm";
import { initStorage } from "./src/UI/uiWelcome";
import { theme } from "./src/js/theme";
import { todoList } from "./src/js/todoList";
import "./src/scss/main.scss";

initStorage();
uiForm();
uiConfirm();
uiContentTodo();
todoList();
theme();
