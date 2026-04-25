import type { App } from "vue";

// Cards
import VCard from "./components/cards/VCard.vue";
import VCardHeader from "./components/cards/VCardHeader.vue";
import VCardBody from "./components/cards/VCardBody.vue";
import VCardFooter from "./components/cards/VCardFooter.vue";

// Data
import VListGroup from "./components/data/VListGroup.vue";
import VListGroupItem from "./components/data/VListGroupItem.vue";
import VTable from "./components/data/VTable.vue";

// Feedback
import VAlert from "./components/feedback/VAlert.vue";
import VBadge from "./components/feedback/VBadge.vue";
import VPlaceholder from "./components/feedback/VPlaceholder.vue";
import VProgress from "./components/feedback/VProgress.vue";
import VProgressBar from "./components/feedback/VProgressBar.vue";
import VSpinner from "./components/feedback/VSpinner.vue";

// Forms
import VLabel from "./components/forms/VLabel.vue";
import VCheckbox from "./components/forms/VCheckbox.vue";
import VInput from "./components/forms/VInput.vue";
import VInputGroup from "./components/forms/VInputGroup.vue";
import VRadio from "./components/forms/VRadio.vue";
import VSelect from "./components/forms/VSelect.vue";
import VSwitch from "./components/forms/VSwitch.vue";
import VTextarea from "./components/forms/VTextarea.vue";

// Interactive
import VAccordion from "./components/interactive/VAccordion.vue";
import VAccordionItem from "./components/interactive/VAccordionItem.vue";
import VButton from "./components/interactive/VButton.vue";
import VButtonGroup from "./components/interactive/VButtonGroup.vue";
import VCarousel from "./components/interactive/VCarousel.vue";
import VCarouselItem from "./components/interactive/VCarouselItem.vue";
import VCollapse from "./components/interactive/VCollapse.vue";

// Modals
import VModal from "./components/modals/VModal.vue";
import VModalFooter from "./components/modals/VModalFooter.vue";
import VModalHeader from "./components/modals/VModalHeader.vue";
import VOffcanvas from "./components/modals/VOffcanvas.vue";
import VToast from "./components/modals/VToast.vue";
import VToastContainer from "./components/modals/VToastContainer.vue";

// Navigation
import VBreadcrumb from "./components/navigation/VBreadcrumb.vue";
import VBreadcrumbItem from "./components/navigation/VBreadcrumbItem.vue";
import VDropdown from "./components/navigation/VDropdown.vue";
import VDropdownDivider from "./components/navigation/VDropdownDivider.vue";
import VDropdownItem from "./components/navigation/VDropdownItem.vue";
import VNav from "./components/navigation/VNav.vue";
import VNavItem from "./components/navigation/VNavItem.vue";
import VNavbar from "./components/navigation/VNavbar.vue";
import VPagination from "./components/navigation/VPagination.vue";
import VTab from "./components/navigation/VTab.vue";
import VTabs from "./components/navigation/VTabs.vue";

// Composables
export { useClickOutside } from "./composables/useClickOutside";
export { useId } from "./composables/useId";
export { useValidation } from "./composables/useValidation";

// Types
export type { BootstrapVariant, BootstrapButtonVariant } from "./types";

// Plugin
export default {
  install(app: App) {
    // Cards
    app.component("VCard", VCard);
    app.component("VCardHeader", VCardHeader);
    app.component("VCardBody", VCardBody);
    app.component("VCardFooter", VCardFooter);

    // Data
    app.component("VListGroup", VListGroup);
    app.component("VListGroupItem", VListGroupItem);
    app.component("VTable", VTable);

    // Feedback
    app.component("VAlert", VAlert);
    app.component("VBadge", VBadge);
    app.component("VPlaceholder", VPlaceholder);
    app.component("VProgress", VProgress);
    app.component("VProgressBar", VProgressBar);
    app.component("VSpinner", VSpinner);

    // Forms
    app.component("VLabel", VLabel);
    app.component("VCheckbox", VCheckbox);
    app.component("VInput", VInput);
    app.component("VInputGroup", VInputGroup);
    app.component("VRadio", VRadio);
    app.component("VSelect", VSelect);
    app.component("VSwitch", VSwitch);
    app.component("VTextarea", VTextarea);

    // Interactive
    app.component("VAccordion", VAccordion);
    app.component("VAccordionItem", VAccordionItem);
    app.component("VButton", VButton);
    app.component("VButtonGroup", VButtonGroup);
    app.component("VCarousel", VCarousel);
    app.component("VCarouselItem", VCarouselItem);
    app.component("VCollapse", VCollapse);

    // Modals
    app.component("VModal", VModal);
    app.component("VModalFooter", VModalFooter);
    app.component("VModalHeader", VModalHeader);
    app.component("VOffcanvas", VOffcanvas);
    app.component("VToast", VToast);
    app.component("VToastContainer", VToastContainer);

    // Navigation
    app.component("VBreadcrumb", VBreadcrumb);
    app.component("VBreadcrumbItem", VBreadcrumbItem);
    app.component("VDropdown", VDropdown);
    app.component("VDropdownDivider", VDropdownDivider);
    app.component("VDropdownItem", VDropdownItem);
    app.component("VNav", VNav);
    app.component("VNavItem", VNavItem);
    app.component("VNavbar", VNavbar);
    app.component("VPagination", VPagination);
    app.component("VTab", VTab);
    app.component("VTabs", VTabs);
  },
};

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
  VLabel,
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
};
