import refs from "./js/refs";
import { deleteHandler, submitHandler } from "./js/handlers";
import { getTodos } from "./api/todoApi";

import "./styles/main.scss";

refs.form.addEventListener("submit", submitHandler);
window.addEventListener("DOMContentLoaded", getTodos);
refs.ul.addEventListener("click", deleteHandler);
