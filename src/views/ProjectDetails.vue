<template>
  <div
    v-if="details"
    class="project"
  >
    <h3 class="project__name">{{ details.name }}</h3>
    <p class="project__description">{{ details.description }}</p>
    <p class="project__url">
      <a :href="details.html_url">{{ details.html_url }}</a>
    </p>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import API from "@/api";
export default {
  props: {
    username: {
      type: String,
      required: true
    },
    project: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      details: null
    };
  },

  async created() {
    const { username, project } = this;
    this.details = await API.getProjectDetails({ username, project });
  }
};
</script>
