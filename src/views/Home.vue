<template>
  <div class="home">
    <ProjectList :username="username" />
  </div>
</template>

<script>
import ProjectList from "@/components/ProjectList.vue";

export default {
  props: ["username"],

  components: {
    ProjectList
  }
};
</script>
