import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import VButton from "./VButton.vue";

describe("VButton", () => {
  it("renders with btn and btn-primary by default", () => {
    const wrapper = mount(VButton);
    expect(wrapper.classes()).toContain("btn");
    expect(wrapper.classes()).toContain("btn-primary");
  });

  it("renders the variant class for variant prop", () => {
    const wrapper = mount(VButton, { props: { variant: "danger" } });
    expect(wrapper.classes()).toContain("btn-danger");
    expect(wrapper.classes()).not.toContain("btn-primary");
  });

  it("renders btn-lg for size='lg'", () => {
    const wrapper = mount(VButton, { props: { size: "lg" } });
    expect(wrapper.classes()).toContain("btn-lg");
  });

  it("adds w-100 when block is true", () => {
    const wrapper = mount(VButton, { props: { block: true } });
    expect(wrapper.classes()).toContain("w-100");
  });

  it("emits click when clicked", async () => {
    const wrapper = mount(VButton);
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("respects the disabled prop", () => {
    const wrapper = mount(VButton, { props: { disabled: true } });
    expect(wrapper.attributes("disabled")).toBeDefined();
  });

  it("uses type='button' by default", () => {
    const wrapper = mount(VButton);
    expect(wrapper.attributes("type")).toBe("button");
  });

  it("respects the type prop", () => {
    const wrapper = mount(VButton, { props: { type: "submit" } });
    expect(wrapper.attributes("type")).toBe("submit");
  });

  it("renders slot content", () => {
    const wrapper = mount(VButton, { slots: { default: "Click me" } });
    expect(wrapper.text()).toBe("Click me");
  });
});
