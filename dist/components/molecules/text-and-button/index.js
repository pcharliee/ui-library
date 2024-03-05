import "../../../assets/index.css";
import { jsx as h, jsxs as j } from "react/jsx-runtime";
import { g as M, a as N, s as O, c as b, _ as p, u as P, e as C, b as R, d as U, f as o, h as $, P as z } from "../../../index-C3vU3yA9.mjs";
import * as A from "react";
function D(a) {
  return M("MuiTypography", a);
}
N("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const E = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], L = (a) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: e,
    paragraph: i,
    variant: n,
    classes: l
  } = a, s = {
    root: ["root", n, a.align !== "inherit" && `align${b(t)}`, r && "gutterBottom", e && "noWrap", i && "paragraph"]
  };
  return $(s, D, l);
}, V = O("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (a, t) => {
    const {
      ownerState: r
    } = a;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${b(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(({
  theme: a,
  ownerState: t
}) => p({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && a.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), d = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, J = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, q = (a) => J[a] || a, v = /* @__PURE__ */ A.forwardRef(function(t, r) {
  const e = P({
    props: t,
    name: "MuiTypography"
  }), i = q(e.color), n = C(p({}, e, {
    color: i
  })), {
    align: l = "inherit",
    className: s,
    component: g,
    gutterBottom: T = !1,
    noWrap: x = !1,
    paragraph: m = !1,
    variant: c = "body1",
    variantMapping: y = d
  } = n, B = R(n, E), u = p({}, n, {
    align: l,
    color: i,
    className: s,
    component: g,
    gutterBottom: T,
    noWrap: x,
    paragraph: m,
    variant: c,
    variantMapping: y
  }), _ = g || (m ? "p" : y[c] || d[c]) || "span", W = L(u);
  return /* @__PURE__ */ h(V, p({
    as: _,
    ref: r,
    ownerState: u,
    className: U(W.root, s)
  }, B));
});
process.env.NODE_ENV !== "production" && (v.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: o.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: o.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: o.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: o.oneOfType([o.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), o.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: o.object
});
const w = v, F = "_container_tcs44_1", G = "_title_tcs44_7", f = {
  container: F,
  title: G
}, Q = ({
  label: a,
  onClick: t,
  text: r,
  variant: e = "outlined",
  color: i = "primary"
}) => {
  const n = () => {
    console.log("Se hizo click en la molecula"), t == null || t();
  };
  return (
    // <ThemeProvider heme={theme}>
    /* @__PURE__ */ j("div", { className: f.container, children: [
      /* @__PURE__ */ h(w, { className: f.title, variant: "h5", children: a }),
      /* @__PURE__ */ h(
        z,
        {
          onClick: n,
          text: r,
          variant: e,
          color: i
        }
      )
    ] })
  );
};
export {
  Q as TextAndButton
};
