<template>
  <div class="home">
    <ProjectList :username="username" />
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectList from "@/components/ProjectList.vue";

export default {
  props: ["username"],

  components: {
    ProjectList
  }
};
</script>
