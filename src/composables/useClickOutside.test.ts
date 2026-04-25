import { describe, it, expect, vi } from "vitest";
import { defineComponent, h, ref } from "vue";
import { mount } from "@vue/test-utils";
import { useClickOutside } from "./useClickOutside";

function makeHost(handler: (e: MouseEvent) => void) {
  return defineComponent({
    setup() {
      const elRef = ref<HTMLElement | null>(null);
      useClickOutside(elRef, handler);
      return () => h("div", { ref: elRef, "data-testid": "host" }, "inside");
    },
  });
}

describe("useClickOutside", () => {
  it("fires the handler when click target is outside the ref", () => {
    const handler = vi.fn();
    const wrapper = mount(makeHost(handler), { attachTo: document.body });

    const outside = document.createElement("button");
    document.body.appendChild(outside);
    outside.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    expect(handler).toHaveBeenCalledTimes(1);
    outside.remove();
    wrapper.unmount();
  });

  it("does not fire when click target is inside the ref", () => {
    const handler = vi.fn();
    const wrapper = mount(makeHost(handler), { attachTo: document.body });

    const inside = wrapper.find('[data-testid="host"]').element;
    inside.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    expect(handler).not.toHaveBeenCalled();
    wrapper.unmount();
  });

  it("removes its listener on unmount", () => {
    const handler = vi.fn();
    const wrapper = mount(makeHost(handler), { attachTo: document.body });
    wrapper.unmount();

    const outside = document.createElement("button");
    document.body.appendChild(outside);
    outside.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    expect(handler).not.toHaveBeenCalled();
    outside.remove();
  });
});
