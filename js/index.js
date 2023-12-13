console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  
  console.log("funktioniert");
  event.preventDefault();
  const newToastMessage = document.createElement("li");
  newToastMessage.classList.add("toast-container__message");
  toastContainer.append(newToastMessage);
  newToastMessage.textContent = ("mhh toast");
  console.log(newToastMessage);
});


clearButton.addEventListener("click", () => {
  toast-container__message.innerHTML = "";
  // Exercise: Clear the stack of toast messages
});
