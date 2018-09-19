<template>
  <div class="project-list">
    <ul>
      <li v-for="project in projects" :key="project.id">
        <router-link :to="`/${project.name}`">{{ project.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import API from "@/api";
export default {
  props: ["username"],

  data: () => ({
    projects: []
  }),

  async created() {
    this.projects = await API.getProjects(this.username);
  }
};
</script>

<style lang="scss">
</style>
