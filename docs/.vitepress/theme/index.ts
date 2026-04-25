import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import BootstrapVueUi from "../../../src/index";
import "../../../src/assets/scss/style.scss";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(BootstrapVueUi);
  },
} satisfies Theme;
