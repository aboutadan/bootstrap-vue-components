export type BootstrapVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

export type BootstrapButtonVariant =
  | BootstrapVariant
  | "link"
  | `outline-${BootstrapVariant}`;
