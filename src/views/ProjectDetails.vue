<template>
  <div v-if="details">
    <h3>{{ details.name }}</h3>
    <p>{{ details.description }}</p>
    <p>
      <a :href="details.html_url">{{ details.html_url }}</a>
    </p>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
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
    // Github API Docs: https://developer.github.com/v3/repos/#get
    this.details = await fetch(
      `https://api.github.com/repos/${this.username}/${this.project}`
    ).then(res => res.json());
  }
};
</script>

<style>
</style>
