# GitHub Portfolio in Vue.js

## Introduction

This project is a [Vue.js](https://vuejs.org) application that communicates with the [GitHub REST API](https://docs.github.com/en/rest) to show a list of projects by username.

## Getting started

**Prerequisites**

To work on it, you will need the following:
- [Git](https://git-scm.com/downloads)
- [A GitHub Account](https://github.com/join)
- [Node.js & NPM](https://nodejs.org/en/)
- Familiarity with a command line
- Some familiarity with HTML, JavaScript, and Vue.js is recommended

**Project structure**
All the source code for the project lives withing the `/src` directory. That' directory structure looks like this:

```bash
├── api         - For the API related functionality
├── assets      - Any assets like CSS or images
├── components  - Shared Vue components
├── views       - Vue components corresponding with routes
├── App.vue     - The main application component
├── main.js     - The entrypoint to the app
├── router.js   - Vue router configuration
└── store.js    - Vuex configuration
```

**Clone the latest release**

You can make a copy of the project locally by cloning it with the following command:

```
git clone  https://github.com/VueSD/github-portfolio.git --branch 1.0.0
```

NOTE: Make sure you update the `--branch` flag with the release you want

Or you can download directly from releases: https://github.com/VueSD/github-portfolio/releases

**Install dependencies**

Once you have a copy of the project, you will need to tell NPM to download all the project dependencies:

```
npm install
```

**Developing locally**

With the dependencies in place, we can fire up a local development server with the following command:

```
npm run serve
```
This development server will watch for changes and enable "[hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/)" which will reload the browser after you make any changes, so you don't have to.

When the development server has finished preparing the project, you should see a URL where you can see the project running. Usually this is https://localhost:8080.

**Setting up your environment variables**

Before we interact with the GitHub API, we will need a [Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). This is a special token that will tell GitHub who we are when we make requests against their API. For security reasons, we don't want anyone else to use our personal access token, so we'll want to keep it out of our [Git history](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History).

This project was created with the [Vue CLI](https://cli.vuejs.org/) which makes it easy to keep secrets out of our Git repo, but make them available to our application by using [environment variables](https://cli.vuejs.org/guide/mode-and-env.html).

For now, make a copy of the `.env.local.sample` and rename it to `.env.local`. Once you've done that, replace the value of `VUE_APP_GITHUB` in that file with your GitHub personal access token.

With that done, you can start (or restart) your project with the `npm run serve` command and your access token will be available within your project through the environment variable at `process.env.VUE_APP_GITHUB`.

If you'd like to try it out, add `console.log(process.env.VUE_APP_GITHUB)` anywhere in your app then check your console to see what it prints.

**Interacting with the GitHub API**

If you've worked with other Vue.js apps, this project may look familiar. The main difference is the `/src/api` folder. This folder is where all our logic for working with the GitHub API will live. As this is a small project, it all fits inside [`/src/api/index.js`](https://github.com/VueSD/github-portfolio/blob/master/src/api/index.js).

This file pulls the access token from the environment variables (as defined above), assings the API root URL to a variable for convenience, sets up a reusable options object, and exports the two main methods we will use to communicate with the API. Note that our token is passed to every API request through the config headers as and [Authorization Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization). Otherwise, GitHub will reject our requests.

The first request uses the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to fetch a list of repos by username. It is utilized inside of the [ProjectList component](https://github.com/VueSD/github-portfolio/blob/master/src/components/ProjectList.vue) on the home page. You can find the documentation for this API route here: https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user.

The second API call fetches the details for a specific project. It is utilized inside the [ProjectDetails component](https://github.com/VueSD/github-portfolio/blob/master/src/views/ProjectDetails.vue) which is used as a "view" component. You can find the documentation for this API route here: https://docs.github.com/en/rest/reference/repos#get-a-repository

Note that the username is hard-coded into the App.vue component for demonstration purposes.

For more information on the GitHub REST API in general, please see [their documentation](https://docs.github.com/en/rest).

### Other Useful Commands

**Compiles and minifies for production**

```
npm run build
```

**Lints and fixes files**

```
npm run lint
```

**Run your unit tests**

```
npm run test:unit
```

**Run your end-to-end tests**

```
npm run test:e2e
```

---

# Releases

### [2.0.0]

- ~~Setup env files~~
- ~~Get GitHub API keys~~
- ~~Abstract API service~~
- ~~Global SCSS config~~

### [1.0.0]

- ~~Clone project & install dependencies~~
- ~~Explore architecture~~
- ~~Replace homepage with prototype content~~
- ~~Incorporate Github API for public repos~~
- ~~Add child route for individual projects~~
- ~~Refactor how we handle props~~

# Backlog

- Add routing between projects
- Add UI to select users
- Publish to Netlify
- Implement best practices
