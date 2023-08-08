export class Github {
  //data for request
  constructor() {
    this.client_id = "15a66aff19cdf040bb07";
    this.client_secret = "8fdc00c6f420dea5da411d3952913d808c88bf1c";
    this.per_page = 10;
    this.sort = "asc";
  }
  // get user data from API
  async fetchUserData(username) {
    //request for username
    const profileRes = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    // user repos
    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&sort=${this.sort}&per_page=${this.per_page}`
    );
    //convert the answer json data
    const data = await profileRes.json();
    const repos = await repoRes.json();

    //Function sends information to where it is called
    return { data, repos };
  }
}
