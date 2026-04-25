import type { Directive } from "vue";
import { Tooltip } from "bootstrap";

const vTooltip: Directive<HTMLElement, string> = {
  mounted(el, binding) {
    new Tooltip(el, {
      title: binding.value,
      placement: (binding.arg as Tooltip.Options["placement"]) ?? "top",
      trigger: "hover focus",
    });
  },
  updated(el, binding) {
    const instance = Tooltip.getInstance(el);
    if (instance) {
      instance.setContent({ ".tooltip-inner": binding.value });
    }
  },
  beforeUnmount(el) {
    Tooltip.getInstance(el)?.dispose();
  },
};

export default vTooltip;
