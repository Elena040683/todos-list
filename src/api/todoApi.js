import axios from "axios";
import refs from "../js/refs";
import { createLi } from "../js/templateStringHandler";
import { createTodosList, deleteUi } from "../js/handlers";

export function todoApi(value) {
  axios
    .post("http://localhost:7777/items", { text: value })
    .then((result) =>
      refs.ul.insertAdjacentHTML("beforeend", createLi(result.data))
    )
    .catch((err) => console.log(err));

  // fetch("http://localhost:7777/items", {
  //   method: "POST",
  //   body: JSON.stringify({ text: value }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((data) => refs.ul.insertAdjacentHTML("beforeend", createLi(data)))
  //   .catch((err) => console.log(err));
}

export function getTodos() {
  axios
    .get("http://localhost:7777/items")
    .then((result) => createTodosList(result.data))
    .catch((err) => console.log(err));
}

export function deleteTodo(id) {
  axios
    .delete(`http://localhost:7777/items/${id}`)
    .then((result) => deleteUi(id))
    .catch((err) => console.log(err));

  // fetch(`http://localhost:7777/items/${id}`, {
  //   method: "DELETE",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err));
}
