import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import API from "@/api";
import ProjectList from "@/components/ProjectList.vue";

jest.mock("@/api", () => {
  return {
    getProjects: jest.fn(username => {
      const projects = new Array(6).fill(0).map((el, idx) => {
        return {
          id: idx,
          name: `project-${idx}`
        };
      });
      return Promise.resolve(projects);
    })
  };
});

const username = "VueSD";

describe("Home.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Home, {
      stubs: ["router-link"],
      propsData: {
        username
      }
    });
  });
  it("should do contain a <ProjectList /> with 6 items", () => {
    const projectList = wrapper.find(ProjectList);
    const lis = wrapper.findAll("li");
    expect(projectList.is(ProjectList)).toBe(true);
    expect(lis.length).toBe(6);
  });
  it("should call API.getProjects()", () => {
    expect(API.getProjects).toBeCalledWith(username);
  });
});
