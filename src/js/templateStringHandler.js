export const createLi = ({ text, id }) =>
  `<li>${text}
  <button data-id='${id}' class="closeBtn">Delete</button>
  </li>`;
