// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const groceryInput = document.querySelector("#grocery");
const groceryForm = document.querySelector(".grocery-form");
const groceryList = document.querySelector(".grocery-list");
const groceryContainer = document.querySelector(".grocery-container");

const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
// submit form
groceryForm.addEventListener("submit", controlItem);
// clear list
clearBtn.addEventListener("click", clearItem);
// load and get local storage
window.addEventListener("DOMContentLoaded", setUpItem);

// ****** FUNCTIONS **********

function controlItem(e) {
  e.preventDefault();
  const value = groceryInput.value;
  console.log(value);
  const id = new Date().getTime() + "";

  // value && !edit => add item
  if (value && !editFlag) {
    renderItem(id, value);
    //   render alert
    renderAlert("success add item", "success");
    //   store to local storage
    setLocalStorage(id, value);
    //   clear input
    setToDefault();
  }
  // value && edit => edit item
  else if (value && editFlag) {
    renderEdit(value);
    console.log("edit item");
  } // !value => show alert
  else {
    renderAlert("please enter value!", "danger");
  }
}
// render item
function renderItem(id, value) {
  const itemElement = document.createElement("article");
  itemElement.classList.add("grocery-item");
  const attribute = document.createAttribute("data-id");
  attribute.value = id;
  //   加入 attribute
  itemElement.setAttributeNode(attribute);
  const html = getMarkup(value);
  itemElement.innerHTML = html;
  const deleteBtn = itemElement.querySelector(".delete-btn");
  const editBtn = itemElement.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);
  groceryList.appendChild(itemElement);
  groceryContainer.classList.add("show-container");
}

function getMarkup(value) {
  return `<p class="title">${value}</p>
    <div class="btn-container">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
    </div>`;
}

function renderAlert(text, active) {
  alert.classList.add(`alert-${active}`);
  alert.textContent = text;
  //   alert disappear
  setTimeout(() => {
    alert.classList.remove(`alert-${active}`);
    alert.textContent = "";
  }, 1500);
}
function renderEdit(value) {
  editFlag = false;
  editElement.textContent = value;
  console.log(editElement);
  renderAlert("success to edit", "success");
  editLocalStorage(editID, value);
  setToDefault();
}
// edit item
function editItem(e) {
  editFlag = true;
  const element = e.target.closest(".grocery-item");
  editElement = element.querySelector(".title");
  editID = element.dataset.id;
  groceryInput.value = editElement.textContent;
  submitBtn.textContent = "edit";
}

// delete item
function deleteItem(e) {
  const element = e.target.closest(".grocery-item");
  const id = element.dataset.id;
  groceryList.removeChild(element);
  if (groceryList.children.length <= 0) {
    groceryContainer.classList.remove("show-container");
  }
  renderAlert("item has been deleted", "danger");
  setToDefault();
  //   clear local storage data
  deleteFromLocalStorage(id);
}

// clear item
function clearItem() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach((item) => {
      groceryList.removeChild(item);
    });
  }
  renderAlert("item has removed", "danger");
  groceryContainer.classList.remove("show-container");
  setToDefault();
  localStorage.clear();
}

//set back to default
function setToDefault() {
  groceryInput.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}
// ****** LOCAL STORAGE **********
function setLocalStorage(id, value) {
  const item = { id, value };
  console.log(item);
  let items = getLocalStorage();
  console.log(items);
  items.push(item);
  localStorage.setItem("list", JSON.stringify(items));
}
function deleteFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter((item) => {
    return item.id !== id;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

// localStorage.setItem(key,JSON.stringify(value))
// JSON.parse(localStorage.getItem(key))

// ****** SETUP ITEMS **********
function setUpItem() {
  const items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      renderItem(item.id, item.value);
    });
  }
}
