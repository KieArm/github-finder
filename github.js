class Github {
  constructor() {
    this.client_id = "05e64b37e89b068b43c0";
    this.client_secret = "c3ba372e7992a2f60086b20294f5d49deaef6bc9";
    // Testing purposes only, key is invalid.
    this.repos_count = 10;
    this.repos_sort = "created:asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
