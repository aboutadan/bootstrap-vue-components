import type { App } from 'vue'

// Cards
import VCard from './components/cards/VCard.vue'
import VCardHeader from './components/cards/VCardHeader.vue'
import VCardBody from './components/cards/VCardBody.vue'
import VCardFooter from './components/cards/VCardFooter.vue'

// Data
import VListGroup from './components/data/VListGroup.vue'
import VListGroupItem from './components/data/VListGroupItem.vue'
import VTable from './components/data/VTable.vue'

// Feedback
import VAlert from './components/feedback/VAlert.vue'
import VBadge from './components/feedback/VBadge.vue'
import VPlaceholder from './components/feedback/VPlaceholder.vue'
import VProgress from './components/feedback/VProgress.vue'
import VProgressBar from './components/feedback/VProgressBar.vue'
import VSpinner from './components/feedback/VSpinner.vue'

// Forms
import VCheckbox from './components/forms/VCheckbox.vue'
import VInput from './components/forms/VInput.vue'
import VInputGroup from './components/forms/VInputGroup.vue'
import VRadio from './components/forms/VRadio.vue'
import VSelect from './components/forms/VSelect.vue'
import VSwitch from './components/forms/VSwitch.vue'
import VTextarea from './components/forms/VTextarea.vue'

// Interactive
import VAccordion from './components/interactive/VAccordion.vue'
import VAccordionItem from './components/interactive/VAccordionItem.vue'
import VButton from './components/interactive/VButton.vue'
import VButtonGroup from './components/interactive/VButtonGroup.vue'
import VCarousel from './components/interactive/VCarousel.vue'
import VCarouselItem from './components/interactive/VCarouselItem.vue'
import VCollapse from './components/interactive/VCollapse.vue'

// Modals
import VModal from './components/modals/VModal.vue'
import VModalFooter from './components/modals/VModalFooter.vue'
import VModalHeader from './components/modals/VModalHeader.vue'
import VOffcanvas from './components/modals/VOffcanvas.vue'
import VToast from './components/modals/VToast.vue'
import VToastContainer from './components/modals/VToastContainer.vue'

// Navigation
import VBreadcrumb from './components/navigation/VBreadcrumb.vue'
import VBreadcrumbItem from './components/navigation/VBreadcrumbItem.vue'
import VDropdown from './components/navigation/VDropdown.vue'
import VDropdownDivider from './components/navigation/VDropdownDivider.vue'
import VDropdownItem from './components/navigation/VDropdownItem.vue'
import VNav from './components/navigation/VNav.vue'
import VNavItem from './components/navigation/VNavItem.vue'
import VNavbar from './components/navigation/VNavbar.vue'
import VPagination from './components/navigation/VPagination.vue'
import VTab from './components/navigation/VTab.vue'
import VTabs from './components/navigation/VTabs.vue'

// Directives
import vTooltip from './directives/vTooltip'
import vPopover from './directives/vPopover'

// Composables
export { useId } from './composables/useId'
export { useValidation } from './composables/useValidation'

// Plugin
export default {
  install(app: App) {
    // Cards
    app.component('v-card', VCard)
    app.component('v-card-header', VCardHeader)
    app.component('v-card-body', VCardBody)
    app.component('v-card-footer', VCardFooter)

    // Data
    app.component('v-list-group', VListGroup)
    app.component('v-list-group-item', VListGroupItem)
    app.component('v-table', VTable)

    // Feedback
    app.component('v-alert', VAlert)
    app.component('v-badge', VBadge)
    app.component('v-placeholder', VPlaceholder)
    app.component('v-progress', VProgress)
    app.component('v-progress-bar', VProgressBar)
    app.component('v-spinner', VSpinner)

    // Forms
    app.component('v-checkbox', VCheckbox)
    app.component('v-input', VInput)
    app.component('v-input-group', VInputGroup)
    app.component('v-radio', VRadio)
    app.component('v-select', VSelect)
    app.component('v-switch', VSwitch)
    app.component('v-textarea', VTextarea)

    // Interactive
    app.component('v-accordion', VAccordion)
    app.component('v-accordion-item', VAccordionItem)
    app.component('v-button', VButton)
    app.component('v-button-group', VButtonGroup)
    app.component('v-carousel', VCarousel)
    app.component('v-carousel-item', VCarouselItem)
    app.component('v-collapse', VCollapse)

    // Modals
    app.component('v-modal', VModal)
    app.component('v-modal-footer', VModalFooter)
    app.component('v-modal-header', VModalHeader)
    app.component('v-offcanvas', VOffcanvas)
    app.component('v-toast', VToast)
    app.component('v-toast-container', VToastContainer)

    // Navigation
    app.component('v-breadcrumb', VBreadcrumb)
    app.component('v-breadcrumb-item', VBreadcrumbItem)
    app.component('v-dropdown', VDropdown)
    app.component('v-dropdown-divider', VDropdownDivider)
    app.component('v-dropdown-item', VDropdownItem)
    app.component('v-nav', VNav)
    app.component('v-nav-item', VNavItem)
    app.component('v-navbar', VNavbar)
    app.component('v-pagination', VPagination)
    app.component('v-tab', VTab)
    app.component('v-tabs', VTabs)

    // Directives
    app.directive('tooltip', vTooltip)
    app.directive('popover', vPopover)
  },
}

// Named component exports (tree-shakeable)
export {
  // Cards
  VCard,
  VCardHeader,
  VCardBody,
  VCardFooter,
  // Data
  VListGroup,
  VListGroupItem,
  VTable,
  // Feedback
  VAlert,
  VBadge,
  VPlaceholder,
  VProgress,
  VProgressBar,
  VSpinner,
  // Forms
  VCheckbox,
  VInput,
  VInputGroup,
  VRadio,
  VSelect,
  VSwitch,
  VTextarea,
  // Interactive
  VAccordion,
  VAccordionItem,
  VButton,
  VButtonGroup,
  VCarousel,
  VCarouselItem,
  VCollapse,
  // Modals
  VModal,
  VModalFooter,
  VModalHeader,
  VOffcanvas,
  VToast,
  VToastContainer,
  // Navigation
  VBreadcrumb,
  VBreadcrumbItem,
  VDropdown,
  VDropdownDivider,
  VDropdownItem,
  VNav,
  VNavItem,
  VNavbar,
  VPagination,
  VTab,
  VTabs,
  // Directives
  vTooltip,
  vPopover,
}
