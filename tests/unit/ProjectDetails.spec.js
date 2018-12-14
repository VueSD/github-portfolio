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

const username = "VueSD";
const project = "github-portfolio";

describe("ProjectDetails.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ProjectDetails, {
      stubs: ["router-link"],
      propsData: {
        username,
        project
      }
    });
  });

  describe("vm.created()", () => {
    it("should call the API with props data", () => {
      expect(API.getProjectDetails).toHaveBeenCalledWith({
        username,
        project
      });
    });
    it("should update vm.details", () => {
      expect(wrapper.vm.details).toEqual({
        name: `Project: ${project}`,
        description: `A fancy project by ${username}.`,
        html_url: `https://github.com/${username}/${project}`
      });
    });
    it("should show new vm.details with new props", () => {
      const newUsername = "vuejs";
      const newProject = "vue";
      const wrapper = shallowMount(ProjectDetails, {
        stubs: ["router-link"],
        propsData: {
          username: newUsername,
          project: newProject
        }
      });
      wrapper.vm.$nextTick(() => {
        expect(API.getProjectDetails).toHaveBeenCalled();
        expect(wrapper.vm.details).toEqual({
          name: `Project: ${newProject}`,
          description: `A fancy project by ${newUsername}.`,
          html_url: `https://github.com/${newUsername}/${newProject}`
        });
      });
    });
  });

  describe("html", () => {
    // Tests
  });
});
