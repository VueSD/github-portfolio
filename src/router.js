import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ProjectDetails from "./views/ProjectDetails.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/:project",
      name: "project",
      component: ProjectDetails,
      props: true
    }
  ]
});
