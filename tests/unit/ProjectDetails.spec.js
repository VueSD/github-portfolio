import { shallowMount } from "@vue/test-utils";
import ProjectDetails from "@/views/ProjectDetails.vue";

describe("ProjectDetails.vue", () => {
  it("does the tests!!!", () => {
    const wrapper = shallowMount(ProjectDetails);
    expect(wrapper.html()).toBeUndefined();
  });
});
