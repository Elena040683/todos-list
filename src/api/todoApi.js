import refs from '../js/refs';
import { createLi } from '../js/templateStringHandler';

export function todoApi(value) {
  fetch("https://localhost:7777/items", {
    method: "POST",
    body: JSON.stringify({ text: value }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => response.json())
    .then((data) => refs.ul.insertAdjacentHTML("beforeend", createLi(data)))
    .catch((err) => console.log(err));
}