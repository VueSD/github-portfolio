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
  it("does the tests!!!", () => {
    const wrapper = shallowMount(ProjectDetails, {
      stubs: ["router-link"],
      propsData: {
        username: "VueSD",
        project: "github-portfolio"
      }
    });
    expect(wrapper.html()).toBeUndefined();
    expect(wrapper.vm.details).toBeNull();
  });
});
