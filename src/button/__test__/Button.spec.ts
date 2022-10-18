import Button from "../button";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
// 测试分组
describe("Button", () => {
  // mount
  describe("plain", () => {
    test("default", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
      });
      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("bg-blue-500"),
      ).toBe(true);
    });
  });
});
