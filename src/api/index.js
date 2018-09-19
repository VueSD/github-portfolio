const token = process.env.VUE_APP_GITHUB;
const host = "https://api.github.com";
const config = {
  headers: new Headers({
    Authorization: `token ${token}`
  })
};

export default {
  getProjects(username) {
    return fetch(`${host}/users/${username}/repos`, config).then(res =>
      res.json()
    );
  },

  getProjectDetails({ username, project }) {
    return fetch(`${host}/repos/${username}/${project}`).then(res =>
      res.json()
    );
  }
};
