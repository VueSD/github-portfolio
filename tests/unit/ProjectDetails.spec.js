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
    it("should show project name, description, and url", () => {
      const name = wrapper.find(".project__name");
      const description = wrapper.find(".project__description");
      const url = wrapper.find(".project__url");
      const definitelyNote = wrapper.find(".definitelyNote");
      expect(name.exists()).toBe(true);
      expect(description.exists()).toBe(true);
      expect(url.exists()).toBe(true);
      expect(definitelyNote.exists()).toBe(false);
    });
    it("should include our props in the text", () => {
      let text = wrapper.text();
      expect(text.includes(username)).toBe(true);
      expect(text.includes(project)).toBe(true);
    });
  });
});
