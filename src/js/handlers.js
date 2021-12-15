import refs from "./refs.js";
import { deleteTodo, todoApi } from "../api/todoApi.js";
import { createLi } from "./templateStringHandler.js";

export function submitHandler(e) {
  e.preventDefault();
  const value = refs.input.value;
  todoApi(value);

  refs.input.value = "";
}

export function createTodosList(array) {
  const list = array.map((todo) => createLi(todo)).join("");
  refs.ul.insertAdjacentHTML("beforeend", list);
}

export function deleteHandler(e) {
  if (e.target.dataset.id) {
    const id = e.target.dataset.id;
    deleteTodo(id);
  }
}

export function deleteUi(id) {
  const button = document.querySelector(`[data-id='${id}']`);
  const li = button.parentElement;
  li.remove();
}
