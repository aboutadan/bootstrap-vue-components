import type { Directive } from 'vue'
import { Popover } from 'bootstrap'

interface PopoverBinding {
  title?: string
  content?: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
  trigger?: string
}

const vPopover: Directive<HTMLElement, PopoverBinding | string> = {
  mounted(el, binding) {
    const opts = typeof binding.value === 'string'
      ? { content: binding.value }
      : binding.value

    new Popover(el, {
      title: opts.title ?? '',
      content: opts.content ?? '',
      placement: (binding.arg as Popover.Options['placement']) ?? opts.placement ?? 'top',
      trigger: (opts.trigger ?? 'click') as Popover.Options['trigger'],
    })
  },
  beforeUnmount(el) {
    Popover.getInstance(el)?.dispose()
  },
}

export default vPopover
