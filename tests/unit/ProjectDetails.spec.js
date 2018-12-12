import { shallowMount } from "@vue/test-utils";
import ProjectDetails from "@/views/ProjectDetails.vue";

describe("ProjectDetails.vue", () => {
  it("does the tests!!!", () => {
    const wrapper = shallowMount(ProjectDetails);
    console.log(wrapper);
    expect(1 + 1).toEqual(2);
  });
});
