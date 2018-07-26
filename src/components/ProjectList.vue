<template>
  <div class="project-list">
    <ul>
      <li v-for="project in projects" :key="project">
        {{ project }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    projects: ["Project 1", "Project 2", "Project 3", "Project 4"]
  })
};
</script>

<style lang="scss">
</style>
