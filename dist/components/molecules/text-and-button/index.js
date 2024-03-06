import "../../../assets/index.css";
import { jsx as e, jsxs as c } from "react/jsx-runtime";
import { t as l, P as m } from "../../../index-BiaOO6BU.mjs";
import { ThemeProvider as h, Typography as d } from "@mui/material";
const p = "_container_tcs44_1", _ = "_title_tcs44_7", r = {
  container: p,
  title: _
}, v = ({
  label: o,
  onClick: t,
  text: n,
  variant: i = "outlined",
  color: s = "primary"
}) => {
  const a = () => {
    console.log("Se hizo click en la molecula"), t == null || t();
  };
  return /* @__PURE__ */ e(h, { theme: l, children: /* @__PURE__ */ c("div", { className: r.container, children: [
    /* @__PURE__ */ e(d, { className: r.title, variant: "h5", children: o }),
    /* @__PURE__ */ e(
      m,
      {
        onClick: a,
        text: n,
        variant: i,
        color: s
      }
    )
  ] }) });
};
export {
  v as TextAndButton
};
