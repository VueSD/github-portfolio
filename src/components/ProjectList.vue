<template>
  <div class="project-list">
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    projects: []
  }),

  async created() {
    const username = "SDVue";
    // Fetch Docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    // Github API Docs: https://developer.github.com/v3/repos/#list-user-repositories

    // Fetch the API response
    this.projects = await fetch(
      `https://api.github.com/users/${username}/repos`
    ).then(
      // Transform the response object into the response json (what we really want)
      res => res.json()
    );
  }
  // Example without async/await
  // created() {
  //   fetch(`https://api.github.com/users/${username}/repos`)
  //     .then(res => res.json())
  //     .then(res => {
  //       this.items = res;
  //     });
  // }
};
</script>

<style lang="scss">
</style>
