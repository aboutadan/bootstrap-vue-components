import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import VDropdown from "./VDropdown.vue";

describe("VDropdown", () => {
  it("is closed by default (menu has no 'show' class)", () => {
    const wrapper = mount(VDropdown, {
      props: { text: "More" },
      attachTo: document.body,
    });
    expect(wrapper.find(".dropdown-menu").classes()).not.toContain("show");
    wrapper.unmount();
  });

  it("opens on toggle click and emits 'show'", async () => {
    const wrapper = mount(VDropdown, {
      props: { text: "More" },
      attachTo: document.body,
    });
    await wrapper.find(".dropdown-toggle").trigger("click");
    expect(wrapper.find(".dropdown-menu").classes()).toContain("show");
    expect(wrapper.emitted("show")).toBeTruthy();
    wrapper.unmount();
  });

  it("closes on second toggle click and emits 'hide'", async () => {
    const wrapper = mount(VDropdown, {
      props: { text: "More" },
      attachTo: document.body,
    });
    const toggle = wrapper.find(".dropdown-toggle");
    await toggle.trigger("click");
    await toggle.trigger("click");
    expect(wrapper.find(".dropdown-menu").classes()).not.toContain("show");
    expect(wrapper.emitted("hide")).toBeTruthy();
    wrapper.unmount();
  });

  it("closes when clicking outside", async () => {
    const wrapper = mount(VDropdown, {
      props: { text: "More" },
      attachTo: document.body,
    });
    await wrapper.find(".dropdown-toggle").trigger("click");
    expect(wrapper.find(".dropdown-menu").classes()).toContain("show");

    const outside = document.createElement("button");
    document.body.appendChild(outside);
    outside.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".dropdown-menu").classes()).not.toContain("show");
    outside.remove();
    wrapper.unmount();
  });

  it("renders btn-{variant} on the toggle", () => {
    const wrapper = mount(VDropdown, {
      props: { text: "More", variant: "danger" },
      attachTo: document.body,
    });
    expect(wrapper.find(".dropdown-toggle").classes()).toContain("btn-danger");
    wrapper.unmount();
  });

  it("adds dropup class for direction='up'", () => {
    const wrapper = mount(VDropdown, {
      props: { text: "More", direction: "up" },
      attachTo: document.body,
    });
    expect(wrapper.classes()).toContain("dropup");
    wrapper.unmount();
  });

  it("adds dropdown-menu-end when menuAlign='end'", () => {
    const wrapper = mount(VDropdown, {
      props: { text: "More", menuAlign: "end" },
      attachTo: document.body,
    });
    expect(wrapper.find(".dropdown-menu").classes()).toContain(
      "dropdown-menu-end"
    );
    wrapper.unmount();
  });
});
