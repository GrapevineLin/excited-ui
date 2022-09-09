import { ExButton } from "../Button";
// import ExButton from "@excited-ui/core/src/button/Button";

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

describe("className", () => {
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
        .includes("ex-button")
    ).toBe(true);
  });

  test("colored", () => {
    const wrapper = mount(ExButton, {
      slots: {
        default: "ExButton",
      },
      props: {
        color: "red",
      },
    });
    expect(wrapper.classes().includes("ex-button--colored")).toBe(true);
  });
});
