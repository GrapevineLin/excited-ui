import ExButton from "../Button";

import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
// 测试分组
describe("ExButton", () => {
  // mount
  test("mount  @vue/test-utils", () => {
    // @vue/test-utils
    const wrapper = shallowMount(ExButton, {
      slots: {
        default: "ExButton",
      },
    });

    // 断言
    expect(wrapper.text()).toBe("ExButton");
  });
});

describe("color", () => {
  test("default", () => {
    const wrapper = shallowMount(ExButton, {
      slots: {
        default: "ExButton",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-blue-500")
    ).toBe(true);
  });

  test("red", () => {
    const wrapper = mount(ExButton, {
      slots: {
        default: "ExButton",
      },
      props: {
        color: "red",
      },
    });
    expect(wrapper.classes().includes("bg-red-500")).toBe(true);
  });
});
