import { describe, it, expect, afterEach } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import VModal from "./VModal.vue";

afterEach(() => {
  // Defensive cleanup so a leaked test doesn't pollute the next.
  document.body.classList.remove("modal-open");
});

describe("VModal", () => {
  it("does not render when modelValue is false", () => {
    const wrapper = mount(VModal, { props: { modelValue: false } });
    expect(wrapper.find(".modal").exists()).toBe(false);
    wrapper.unmount();
  });

  it("renders the dialog when modelValue is true", () => {
    const wrapper = mount(VModal, {
      props: { modelValue: true },
      attachTo: document.body,
    });
    expect(wrapper.find(".modal").exists()).toBe(true);
    expect(wrapper.find(".modal-backdrop").exists()).toBe(true);
    wrapper.unmount();
  });

  it("exposes role='dialog' and aria-modal='true'", () => {
    const wrapper = mount(VModal, {
      props: { modelValue: true },
      attachTo: document.body,
    });
    const dialog = wrapper.find(".modal");
    expect(dialog.attributes("role")).toBe("dialog");
    expect(dialog.attributes("aria-modal")).toBe("true");
    wrapper.unmount();
  });

  it("adds modal-open to body when opened", async () => {
    expect(document.body.classList.contains("modal-open")).toBe(false);
    const wrapper = mount(VModal, {
      props: { modelValue: true },
      attachTo: document.body,
    });
    await flushPromises();
    expect(document.body.classList.contains("modal-open")).toBe(true);
    await wrapper.setProps({ modelValue: false });
    expect(document.body.classList.contains("modal-open")).toBe(false);
    wrapper.unmount();
  });

  it("emits update:modelValue=false when ESC is pressed", async () => {
    const wrapper = mount(VModal, {
      props: { modelValue: true },
      attachTo: document.body,
    });
    await flushPromises();
    await wrapper.find(".modal").trigger("keydown", { key: "Escape" });
    const events = wrapper.emitted("update:modelValue");
    expect(events).toBeTruthy();
    expect(events![0]).toEqual([false]);
    wrapper.unmount();
  });

  it("does not close on ESC when staticBackdrop is true", async () => {
    const wrapper = mount(VModal, {
      props: { modelValue: true, staticBackdrop: true },
      attachTo: document.body,
    });
    await flushPromises();
    await wrapper.find(".modal").trigger("keydown", { key: "Escape" });
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    wrapper.unmount();
  });

  it("ref-counts the modal-open body class across multiple modals", async () => {
    const a = mount(VModal, {
      props: { modelValue: true },
      attachTo: document.body,
    });
    const b = mount(VModal, {
      props: { modelValue: true },
      attachTo: document.body,
    });
    await flushPromises();
    expect(document.body.classList.contains("modal-open")).toBe(true);

    await a.setProps({ modelValue: false });
    // 'b' is still open — the body class must persist.
    expect(document.body.classList.contains("modal-open")).toBe(true);

    await b.setProps({ modelValue: false });
    expect(document.body.classList.contains("modal-open")).toBe(false);

    a.unmount();
    b.unmount();
  });
});
