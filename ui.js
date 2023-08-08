export class UI {
  // call the element for  we will sen html inside
  constructor() {
    this.profile = document.querySelector("#profile");
    this.repoArea = document.querySelector("#repos");
    this.alertArea = document.querySelector("#alert-area");
  }
  // prints profile interface
  renderProfile(data) {
    this.profile.innerHTML = `<div class="row border p-4 my-4">
    <div class="col-md-3">
      <img class="img-fluid rounded shadow" src=${data.avatar_url}/>
      <a target="_blank" class="btn btn-primary my-4 w-100" href="${data.html_url}">Show Profile</a>
    </div>
    <div class="col-md-9">
      <span class="badge bg-primary mt-1 fs-6">Public Repos: ${data.public_repos}</span>
      <span class="badge bg-secondary mt-1 fs-6">Public Gists: ${data.public_gists} </span>
      <span class="badge bg-success mt-1 fs-6">Followers: ${data.followers}</span>
      <span class="badge bg-info mt-1 fs-6">Following: ${data.following}</span>

      <ul class="list-group mt-5">
        <li class="list-group-item">About: ${data.bio}</li>
        <li class="list-group-item">Company: ${data.company}</li>
        <li class="list-group-item">Website/Blog: ${data.blog}</li>
        <li class="list-group-item">Location: ${data.location}</li>
        <li class="list-group-item">Member Since: ${data.created_at}</li>
      </ul>
    </div>
  </div>`;
  }

  //prints data on screen
  // create card for every element  from project array
  renderProjects(data) {
    // clean repo area for every request
    this.repoArea.innerHTML = "";

    //create card a nd send
    data.forEach((repo) => {
      console.log(repo);
      this.repoArea.innerHTML += `<div class="border row p-3 mb-4 align-items-center">
        <div class="col-6">
          <a target="_blank" href="${repo.html_url}">${repo.name}</a>
        </div>
        <div class="col-6">
          <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
          <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
          <span class="badge bg-success">Forks: ${repo.forks_count}</span>
        </div>
      </div>
      `;
    });
  }

  // show alert
  showAlert(message, classname) {
    //alert div
    const div = document.createElement("div");

    //alert message
    div.innerText = message;

    // add constant class to div
    div.classList.add("alert");

    //add dynamic class to div
    div.classList.add(classname);

    //clean last alert
    this.alertArea.innerHTML = " ";

    //send alert to html
    this.alertArea.appendChild(div);

    //set time out
    setTimeout(() => {
      div.remove();
    }, 3000);
  }
}
