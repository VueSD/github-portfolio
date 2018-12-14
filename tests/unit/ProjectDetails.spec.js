import { shallowMount } from "@vue/test-utils";
import ProjectDetails from "@/views/ProjectDetails.vue";
import API from "@/api";

API.getProjectDetails = jest.fn(({ username, project }) => {
  return Promise.resolve({
    name: `Project: ${project}`,
    description: `A fancy project by ${username}.`,
    html_url: `https://github.com/${username}/${project}`
  });
});

describe("ProjectDetails.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ProjectDetails, {
      stubs: ["router-link"],
      propsData: {
        username: "VueSD",
        project: "github-portfolio"
      }
    });
  });

  describe("vm.created()", () => {
    // Tests
  });

  describe("html", () => {
    // Tests
  });
});
