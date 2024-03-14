import { jsx as r } from "react/jsx-runtime";
import { ChakraBaseProvider as n, theme as l, Button as s } from "@chakra-ui/react";
const i = ({ children: o }) => /* @__PURE__ */ r(n, { theme: l, children: o }), m = "_btn_color_1ggbr_1", a = {
  btn_color: m
}, _ = ({
  onClick: o,
  text: t,
  variant: e = "outlined",
  color: c = "primary"
}) => /* @__PURE__ */ r(i, { children: /* @__PURE__ */ r(
  s,
  {
    onClick: () => {
      console.log("Hizo click", t, e, c), o == null || o();
    },
    className: a.btn_color,
    colorScheme: "blue",
    children: "FITO"
  }
) });
export {
  _ as PrimaryButton
};
//# sourceMappingURL=component-library.js.map
