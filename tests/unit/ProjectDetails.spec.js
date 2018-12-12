import { shallowMount } from "@vue/test-utils";
import ProjectDetails from "@/views/ProjectDetails.vue";

describe("ProjectDetails.vue", () => {
  it("does the tests!!!", () => {
    const wrapper = shallowMount(ProjectDetails, {
      props: {
        username: "VueSD",
        project: "github-portfolio"
      }
    });
    expect(wrapper.html()).toBeUndefined();
    expect(wrapper.vm.details).toBeNull();
  });
});
