import refs from "./refs.js";
import { todoApi } from "../api/todoApi.js";

export function submitHandler(e) {
  e.preventDefault();
  const value = refs.input.value;
  // todoApi(value);
  fetch("http://localhost:7777/items", {
    method: "POST",
    body: JSON.stringify({ text: value }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  refs.input.value = "";
}
