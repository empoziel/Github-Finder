import { Github } from "./github.js";
import { UI } from "./ui.js";
//create example of class
const github = new Github();
const ui = new UI();

//! From HTML
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");
const themeBtn = document.querySelector("#theme-btn");
const body = document.querySelector("body");
//! Event Listeners
searchButton.addEventListener("click", getInput);
themeBtn.addEventListener("click", changeTheme);

//! Methods
function getInput() {
  //it work search bar filled
  if (searchInput.value) {
    // api request call
    github
      .fetchUserData(searchInput.value)
      .then((res) => {
        //if the user is not found
        if (res.data.message === "Not Found") {
          ui.showAlert("User not found", "alert-info");
        } else {
          ui.showAlert("User successfully found", "alert-success");
          ui.renderProfile(res.data);
          ui.renderProjects(res.repos);
        }
      })
      .catch((err) => console.log(err));
    return;
  }
  //it work search bar empty
  ui.showAlert("Please enter username...", "alert-warning");
}

//change theme

function changeTheme() {
  //change bg
  body.classList.toggle("bg-dark");
  body.classList.toggle("text-bg-dark");

  if (body.classList.contains("bg-dark")) {
    themeBtn.innerText = "Light Mode";
  } else {
    themeBtn.innerText = "Dark Mode";
  }
}
