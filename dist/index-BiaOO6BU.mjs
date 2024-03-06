import { jsx as tr } from "react/jsx-runtime";
import { ThemeProvider as Nr, Button as Dr } from "@mui/material";
function pe(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
const Br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pe
}, Symbol.toStringTag, { value: "Module" }));
function z() {
  return z = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, z.apply(this, arguments);
}
function ue(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function Ur(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function xr(e) {
  if (e.__esModule)
    return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var Ve = { exports: {} }, Ee = { exports: {} }, P = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr;
function zr() {
  if (nr)
    return P;
  nr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, y = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, V = e ? Symbol.for("react.scope") : 60119;
  function N(p) {
    if (typeof p == "object" && p !== null) {
      var Z = p.$$typeof;
      switch (Z) {
        case r:
          switch (p = p.type, p) {
            case y:
            case f:
            case n:
            case i:
            case o:
            case h:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case c:
                case g:
                case v:
                case b:
                case a:
                  return p;
                default:
                  return Z;
              }
          }
        case t:
          return Z;
      }
    }
  }
  function U(p) {
    return N(p) === f;
  }
  return P.AsyncMode = y, P.ConcurrentMode = f, P.ContextConsumer = c, P.ContextProvider = a, P.Element = r, P.ForwardRef = g, P.Fragment = n, P.Lazy = v, P.Memo = b, P.Portal = t, P.Profiler = i, P.StrictMode = o, P.Suspense = h, P.isAsyncMode = function(p) {
    return U(p) || N(p) === y;
  }, P.isConcurrentMode = U, P.isContextConsumer = function(p) {
    return N(p) === c;
  }, P.isContextProvider = function(p) {
    return N(p) === a;
  }, P.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === r;
  }, P.isForwardRef = function(p) {
    return N(p) === g;
  }, P.isFragment = function(p) {
    return N(p) === n;
  }, P.isLazy = function(p) {
    return N(p) === v;
  }, P.isMemo = function(p) {
    return N(p) === b;
  }, P.isPortal = function(p) {
    return N(p) === t;
  }, P.isProfiler = function(p) {
    return N(p) === i;
  }, P.isStrictMode = function(p) {
    return N(p) === o;
  }, P.isSuspense = function(p) {
    return N(p) === h;
  }, P.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === f || p === i || p === o || p === h || p === u || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === b || p.$$typeof === a || p.$$typeof === c || p.$$typeof === g || p.$$typeof === x || p.$$typeof === I || p.$$typeof === V || p.$$typeof === l);
  }, P.typeOf = N, P;
}
var A = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function Wr() {
  return or || (or = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, y = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, V = e ? Symbol.for("react.scope") : 60119;
    function N(d) {
      return typeof d == "string" || typeof d == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      d === n || d === f || d === i || d === o || d === h || d === u || typeof d == "object" && d !== null && (d.$$typeof === v || d.$$typeof === b || d.$$typeof === a || d.$$typeof === c || d.$$typeof === g || d.$$typeof === x || d.$$typeof === I || d.$$typeof === V || d.$$typeof === l);
    }
    function U(d) {
      if (typeof d == "object" && d !== null) {
        var G = d.$$typeof;
        switch (G) {
          case r:
            var ve = d.type;
            switch (ve) {
              case y:
              case f:
              case n:
              case i:
              case o:
              case h:
                return ve;
              default:
                var rr = ve && ve.$$typeof;
                switch (rr) {
                  case c:
                  case g:
                  case v:
                  case b:
                  case a:
                    return rr;
                  default:
                    return G;
                }
            }
          case t:
            return G;
        }
      }
    }
    var p = y, Z = f, Re = c, Ie = a, ke = r, Me = g, he = n, je = v, Ne = b, ee = t, De = i, F = o, Q = h, be = !1;
    function Be(d) {
      return be || (be = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), s(d) || U(d) === y;
    }
    function s(d) {
      return U(d) === f;
    }
    function m(d) {
      return U(d) === c;
    }
    function S(d) {
      return U(d) === a;
    }
    function T(d) {
      return typeof d == "object" && d !== null && d.$$typeof === r;
    }
    function E(d) {
      return U(d) === g;
    }
    function $(d) {
      return U(d) === n;
    }
    function O(d) {
      return U(d) === v;
    }
    function _(d) {
      return U(d) === b;
    }
    function C(d) {
      return U(d) === t;
    }
    function R(d) {
      return U(d) === i;
    }
    function w(d) {
      return U(d) === o;
    }
    function W(d) {
      return U(d) === h;
    }
    A.AsyncMode = p, A.ConcurrentMode = Z, A.ContextConsumer = Re, A.ContextProvider = Ie, A.Element = ke, A.ForwardRef = Me, A.Fragment = he, A.Lazy = je, A.Memo = Ne, A.Portal = ee, A.Profiler = De, A.StrictMode = F, A.Suspense = Q, A.isAsyncMode = Be, A.isConcurrentMode = s, A.isContextConsumer = m, A.isContextProvider = S, A.isElement = T, A.isForwardRef = E, A.isFragment = $, A.isLazy = O, A.isMemo = _, A.isPortal = C, A.isProfiler = R, A.isStrictMode = w, A.isSuspense = W, A.isValidElementType = N, A.typeOf = U;
  }()), A;
}
var ir;
function Tr() {
  return ir || (ir = 1, process.env.NODE_ENV === "production" ? Ee.exports = zr() : Ee.exports = Wr()), Ee.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ue, ar;
function Lr() {
  if (ar)
    return Ue;
  ar = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var y = Object.getOwnPropertyNames(a).map(function(g) {
        return a[g];
      });
      if (y.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(g) {
        f[g] = g;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ue = o() ? Object.assign : function(i, a) {
    for (var c, y = n(i), f, g = 1; g < arguments.length; g++) {
      c = Object(arguments[g]);
      for (var h in c)
        r.call(c, h) && (y[h] = c[h]);
      if (e) {
        f = e(c);
        for (var u = 0; u < f.length; u++)
          t.call(c, f[u]) && (y[f[u]] = c[f[u]]);
      }
    }
    return y;
  }, Ue;
}
var ze, sr;
function Fe() {
  if (sr)
    return ze;
  sr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ze = e, ze;
}
var We, ur;
function _r() {
  return ur || (ur = 1, We = Function.call.bind(Object.prototype.hasOwnProperty)), We;
}
var Le, cr;
function qr() {
  if (cr)
    return Le;
  cr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Fe(), t = {}, n = _r();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, y, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var g in i)
        if (n(i, g)) {
          var h;
          try {
            if (typeof i[g] != "function") {
              var u = Error(
                (y || "React class") + ": " + c + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw u.name = "Invariant Violation", u;
            }
            h = i[g](a, g, y, c, null, r);
          } catch (v) {
            h = v;
          }
          if (h && !(h instanceof Error) && e(
            (y || "React class") + ": type specification of " + c + " `" + g + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in t)) {
            t[h.message] = !0;
            var b = f ? f() : "";
            e(
              "Failed " + c + " type: " + h.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Le = o, Le;
}
var qe, fr;
function Yr() {
  if (fr)
    return qe;
  fr = 1;
  var e = Tr(), r = Lr(), t = Fe(), n = _r(), o = qr(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var y = "Warning: " + c;
    typeof console < "u" && console.error(y);
    try {
      throw new Error(y);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return qe = function(c, y) {
    var f = typeof Symbol == "function" && Symbol.iterator, g = "@@iterator";
    function h(s) {
      var m = s && (f && s[f] || s[g]);
      if (typeof m == "function")
        return m;
    }
    var u = "<<anonymous>>", b = {
      array: I("array"),
      bigint: I("bigint"),
      bool: I("boolean"),
      func: I("function"),
      number: I("number"),
      object: I("object"),
      string: I("string"),
      symbol: I("symbol"),
      any: V(),
      arrayOf: N,
      element: U(),
      elementType: p(),
      instanceOf: Z,
      node: Me(),
      objectOf: Ie,
      oneOf: Re,
      oneOfType: ke,
      shape: je,
      exact: Ne
    };
    function v(s, m) {
      return s === m ? s !== 0 || 1 / s === 1 / m : s !== s && m !== m;
    }
    function l(s, m) {
      this.message = s, this.data = m && typeof m == "object" ? m : {}, this.stack = "";
    }
    l.prototype = Error.prototype;
    function x(s) {
      if (process.env.NODE_ENV !== "production")
        var m = {}, S = 0;
      function T($, O, _, C, R, w, W) {
        if (C = C || u, w = w || _, W !== t) {
          if (y) {
            var d = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw d.name = "Invariant Violation", d;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var G = C + ":" + _;
            !m[G] && // Avoid spamming the console because they are often not actionable except for lib authors
            S < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + w + "` prop on `" + C + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), m[G] = !0, S++);
          }
        }
        return O[_] == null ? $ ? O[_] === null ? new l("The " + R + " `" + w + "` is marked as required " + ("in `" + C + "`, but its value is `null`.")) : new l("The " + R + " `" + w + "` is marked as required in " + ("`" + C + "`, but its value is `undefined`.")) : null : s(O, _, C, R, w);
      }
      var E = T.bind(null, !1);
      return E.isRequired = T.bind(null, !0), E;
    }
    function I(s) {
      function m(S, T, E, $, O, _) {
        var C = S[T], R = F(C);
        if (R !== s) {
          var w = Q(C);
          return new l(
            "Invalid " + $ + " `" + O + "` of type " + ("`" + w + "` supplied to `" + E + "`, expected ") + ("`" + s + "`."),
            { expectedType: s }
          );
        }
        return null;
      }
      return x(m);
    }
    function V() {
      return x(a);
    }
    function N(s) {
      function m(S, T, E, $, O) {
        if (typeof s != "function")
          return new l("Property `" + O + "` of component `" + E + "` has invalid PropType notation inside arrayOf.");
        var _ = S[T];
        if (!Array.isArray(_)) {
          var C = F(_);
          return new l("Invalid " + $ + " `" + O + "` of type " + ("`" + C + "` supplied to `" + E + "`, expected an array."));
        }
        for (var R = 0; R < _.length; R++) {
          var w = s(_, R, E, $, O + "[" + R + "]", t);
          if (w instanceof Error)
            return w;
        }
        return null;
      }
      return x(m);
    }
    function U() {
      function s(m, S, T, E, $) {
        var O = m[S];
        if (!c(O)) {
          var _ = F(O);
          return new l("Invalid " + E + " `" + $ + "` of type " + ("`" + _ + "` supplied to `" + T + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(s);
    }
    function p() {
      function s(m, S, T, E, $) {
        var O = m[S];
        if (!e.isValidElementType(O)) {
          var _ = F(O);
          return new l("Invalid " + E + " `" + $ + "` of type " + ("`" + _ + "` supplied to `" + T + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(s);
    }
    function Z(s) {
      function m(S, T, E, $, O) {
        if (!(S[T] instanceof s)) {
          var _ = s.name || u, C = Be(S[T]);
          return new l("Invalid " + $ + " `" + O + "` of type " + ("`" + C + "` supplied to `" + E + "`, expected ") + ("instance of `" + _ + "`."));
        }
        return null;
      }
      return x(m);
    }
    function Re(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function m(S, T, E, $, O) {
        for (var _ = S[T], C = 0; C < s.length; C++)
          if (v(_, s[C]))
            return null;
        var R = JSON.stringify(s, function(W, d) {
          var G = Q(d);
          return G === "symbol" ? String(d) : d;
        });
        return new l("Invalid " + $ + " `" + O + "` of value `" + String(_) + "` " + ("supplied to `" + E + "`, expected one of " + R + "."));
      }
      return x(m);
    }
    function Ie(s) {
      function m(S, T, E, $, O) {
        if (typeof s != "function")
          return new l("Property `" + O + "` of component `" + E + "` has invalid PropType notation inside objectOf.");
        var _ = S[T], C = F(_);
        if (C !== "object")
          return new l("Invalid " + $ + " `" + O + "` of type " + ("`" + C + "` supplied to `" + E + "`, expected an object."));
        for (var R in _)
          if (n(_, R)) {
            var w = s(_, R, E, $, O + "." + R, t);
            if (w instanceof Error)
              return w;
          }
        return null;
      }
      return x(m);
    }
    function ke(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var m = 0; m < s.length; m++) {
        var S = s[m];
        if (typeof S != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + be(S) + " at index " + m + "."
          ), a;
      }
      function T(E, $, O, _, C) {
        for (var R = [], w = 0; w < s.length; w++) {
          var W = s[w], d = W(E, $, O, _, C, t);
          if (d == null)
            return null;
          d.data && n(d.data, "expectedType") && R.push(d.data.expectedType);
        }
        var G = R.length > 0 ? ", expected one of type [" + R.join(", ") + "]" : "";
        return new l("Invalid " + _ + " `" + C + "` supplied to " + ("`" + O + "`" + G + "."));
      }
      return x(T);
    }
    function Me() {
      function s(m, S, T, E, $) {
        return ee(m[S]) ? null : new l("Invalid " + E + " `" + $ + "` supplied to " + ("`" + T + "`, expected a ReactNode."));
      }
      return x(s);
    }
    function he(s, m, S, T, E) {
      return new l(
        (s || "React class") + ": " + m + " type `" + S + "." + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + E + "`."
      );
    }
    function je(s) {
      function m(S, T, E, $, O) {
        var _ = S[T], C = F(_);
        if (C !== "object")
          return new l("Invalid " + $ + " `" + O + "` of type `" + C + "` " + ("supplied to `" + E + "`, expected `object`."));
        for (var R in s) {
          var w = s[R];
          if (typeof w != "function")
            return he(E, $, O, R, Q(w));
          var W = w(_, R, E, $, O + "." + R, t);
          if (W)
            return W;
        }
        return null;
      }
      return x(m);
    }
    function Ne(s) {
      function m(S, T, E, $, O) {
        var _ = S[T], C = F(_);
        if (C !== "object")
          return new l("Invalid " + $ + " `" + O + "` of type `" + C + "` " + ("supplied to `" + E + "`, expected `object`."));
        var R = r({}, S[T], s);
        for (var w in R) {
          var W = s[w];
          if (n(s, w) && typeof W != "function")
            return he(E, $, O, w, Q(W));
          if (!W)
            return new l(
              "Invalid " + $ + " `" + O + "` key `" + w + "` supplied to `" + E + "`.\nBad object: " + JSON.stringify(S[T], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(s), null, "  ")
            );
          var d = W(_, w, E, $, O + "." + w, t);
          if (d)
            return d;
        }
        return null;
      }
      return x(m);
    }
    function ee(s) {
      switch (typeof s) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !s;
        case "object":
          if (Array.isArray(s))
            return s.every(ee);
          if (s === null || c(s))
            return !0;
          var m = h(s);
          if (m) {
            var S = m.call(s), T;
            if (m !== s.entries) {
              for (; !(T = S.next()).done; )
                if (!ee(T.value))
                  return !1;
            } else
              for (; !(T = S.next()).done; ) {
                var E = T.value;
                if (E && !ee(E[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function De(s, m) {
      return s === "symbol" ? !0 : m ? m["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && m instanceof Symbol : !1;
    }
    function F(s) {
      var m = typeof s;
      return Array.isArray(s) ? "array" : s instanceof RegExp ? "object" : De(m, s) ? "symbol" : m;
    }
    function Q(s) {
      if (typeof s > "u" || s === null)
        return "" + s;
      var m = F(s);
      if (m === "object") {
        if (s instanceof Date)
          return "date";
        if (s instanceof RegExp)
          return "regexp";
      }
      return m;
    }
    function be(s) {
      var m = Q(s);
      switch (m) {
        case "array":
        case "object":
          return "an " + m;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + m;
        default:
          return m;
      }
    }
    function Be(s) {
      return !s.constructor || !s.constructor.name ? u : s.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, qe;
}
var Ye, lr;
function Kr() {
  if (lr)
    return Ye;
  lr = 1;
  var e = Fe();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Ye = function() {
    function n(a, c, y, f, g, h) {
      if (h !== e) {
        var u = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw u.name = "Invariant Violation", u;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, Ye;
}
if (process.env.NODE_ENV !== "production") {
  var Vr = Tr(), Fr = !0;
  Ve.exports = Yr()(Vr.isElement, Fr);
} else
  Ve.exports = Kr()();
var Gr = Ve.exports;
const fe = /* @__PURE__ */ Ur(Gr);
function ae(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Sr(e) {
  if (!ae(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = Sr(e[t]);
  }), r;
}
function H(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? z({}, e) : e;
  return ae(e) && ae(r) && Object.keys(r).forEach((o) => {
    o !== "__proto__" && (ae(r[o]) && o in e && ae(e[o]) ? n[o] = H(e[o], r[o], t) : t.clone ? n[o] = ae(r[o]) ? Sr(r[o]) : r[o] : n[o] = r[o]);
  }), n;
}
const Hr = ["values", "unit", "step"], Xr = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => z({}, t, {
    [n.key]: n.val
  }), {});
};
function Jr(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5
  } = e, o = ue(e, Hr), i = Xr(r), a = Object.keys(i);
  function c(u) {
    return `@media (min-width:${typeof r[u] == "number" ? r[u] : u}${t})`;
  }
  function y(u) {
    return `@media (max-width:${(typeof r[u] == "number" ? r[u] : u) - n / 100}${t})`;
  }
  function f(u, b) {
    const v = a.indexOf(b);
    return `@media (min-width:${typeof r[u] == "number" ? r[u] : u}${t}) and (max-width:${(v !== -1 && typeof r[a[v]] == "number" ? r[a[v]] : b) - n / 100}${t})`;
  }
  function g(u) {
    return a.indexOf(u) + 1 < a.length ? f(u, a[a.indexOf(u) + 1]) : c(u);
  }
  function h(u) {
    const b = a.indexOf(u);
    return b === 0 ? c(a[1]) : b === a.length - 1 ? y(a[b]) : f(u, a[a.indexOf(u) + 1]).replace("@media", "@media not all and");
  }
  return z({
    keys: a,
    values: i,
    up: c,
    down: y,
    between: f,
    only: g,
    not: h,
    unit: t
  }, o);
}
const Zr = {
  borderRadius: 4
}, Qr = Zr, et = process.env.NODE_ENV !== "production" ? fe.oneOfType([fe.number, fe.string, fe.object, fe.array]) : {}, J = et;
function de(e, r) {
  return r ? H(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ge = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, dr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ge[e]}px)`
};
function X(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || dr;
    return r.reduce((a, c, y) => (a[i.up(i.keys[y])] = t(r[y]), a), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || dr;
    return Object.keys(r).reduce((a, c) => {
      if (Object.keys(i.values || Ge).indexOf(c) !== -1) {
        const y = i.up(c);
        a[y] = t(r[c], c);
      } else {
        const y = c;
        a[y] = r[y];
      }
      return a;
    }, {});
  }
  return t(r);
}
function rt(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function tt(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function $r(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : pe(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Te(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Oe(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = Te(e, t) || n, r && (o = r(o, n, e)), o;
}
function D(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[r] == null)
      return null;
    const c = a[r], y = a.theme, f = Te(y, n) || {};
    return X(a, c, (h) => {
      let u = Oe(f, o, h);
      return h === u && typeof h == "string" && (u = Oe(f, o, `${r}${h === "default" ? "" : $r(h)}`, h)), t === !1 ? u : {
        [t]: u
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: J
  } : {}, i.filterProps = [r], i;
}
function nt(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const ot = {
  m: "margin",
  p: "padding"
}, it = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, pr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, at = nt((e) => {
  if (e.length > 2)
    if (pr[e])
      e = pr[e];
    else
      return [e];
  const [r, t] = e.split(""), n = ot[r], o = it[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), _e = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Se = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], st = [..._e, ...Se];
function me(e, r, t, n) {
  var o;
  const i = (o = Te(e, r, !1)) != null ? o : t;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Cr(e) {
  return me(e, "spacing", 8, "spacing");
}
function ge(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function ut(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = ge(r, t), n), {});
}
function ct(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const o = at(t), i = ut(o, n), a = e[t];
  return X(e, a, i);
}
function wr(e, r) {
  const t = Cr(e.theme);
  return Object.keys(e).map((n) => ct(e, r, n, t)).reduce(de, {});
}
function M(e) {
  return wr(e, _e);
}
M.propTypes = process.env.NODE_ENV !== "production" ? _e.reduce((e, r) => (e[r] = J, e), {}) : {};
M.filterProps = _e;
function j(e) {
  return wr(e, Se);
}
j.propTypes = process.env.NODE_ENV !== "production" ? Se.reduce((e, r) => (e[r] = J, e), {}) : {};
j.filterProps = Se;
process.env.NODE_ENV !== "production" && st.reduce((e, r) => (e[r] = J, e), {});
function ft(e = 8) {
  if (e.mui)
    return e;
  const r = Cr({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = r(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return t.mui = !0, t;
}
function $e(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? de(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function q(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function K(e, r) {
  return D({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const lt = K("border", q), dt = K("borderTop", q), pt = K("borderRight", q), yt = K("borderBottom", q), mt = K("borderLeft", q), gt = K("borderColor"), ht = K("borderTopColor"), bt = K("borderRightColor"), vt = K("borderBottomColor"), Et = K("borderLeftColor"), Ot = K("outline", q), xt = K("outlineColor"), Ce = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = me(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: ge(r, n)
    });
    return X(e, e.borderRadius, t);
  }
  return null;
};
Ce.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: J
} : {};
Ce.filterProps = ["borderRadius"];
$e(lt, dt, pt, yt, mt, gt, ht, bt, vt, Et, Ce, Ot, xt);
const we = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = me(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: ge(r, n)
    });
    return X(e, e.gap, t);
  }
  return null;
};
we.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: J
} : {};
we.filterProps = ["gap"];
const Pe = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = me(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: ge(r, n)
    });
    return X(e, e.columnGap, t);
  }
  return null;
};
Pe.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: J
} : {};
Pe.filterProps = ["columnGap"];
const Ae = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = me(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: ge(r, n)
    });
    return X(e, e.rowGap, t);
  }
  return null;
};
Ae.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: J
} : {};
Ae.filterProps = ["rowGap"];
const Tt = D({
  prop: "gridColumn"
}), _t = D({
  prop: "gridRow"
}), St = D({
  prop: "gridAutoFlow"
}), $t = D({
  prop: "gridAutoColumns"
}), Ct = D({
  prop: "gridAutoRows"
}), wt = D({
  prop: "gridTemplateColumns"
}), Pt = D({
  prop: "gridTemplateRows"
}), At = D({
  prop: "gridTemplateAreas"
}), Rt = D({
  prop: "gridArea"
});
$e(we, Pe, Ae, Tt, _t, St, $t, Ct, wt, Pt, At, Rt);
function se(e, r) {
  return r === "grey" ? r : e;
}
const It = D({
  prop: "color",
  themeKey: "palette",
  transform: se
}), kt = D({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: se
}), Mt = D({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: se
});
$e(It, kt, Mt);
function L(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const jt = D({
  prop: "width",
  transform: L
}), He = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || Ge[t];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: L(t)
      };
    };
    return X(e, e.maxWidth, r);
  }
  return null;
};
He.filterProps = ["maxWidth"];
const Nt = D({
  prop: "minWidth",
  transform: L
}), Dt = D({
  prop: "height",
  transform: L
}), Bt = D({
  prop: "maxHeight",
  transform: L
}), Ut = D({
  prop: "minHeight",
  transform: L
});
D({
  prop: "size",
  cssProperty: "width",
  transform: L
});
D({
  prop: "size",
  cssProperty: "height",
  transform: L
});
const zt = D({
  prop: "boxSizing"
});
$e(jt, He, Nt, Dt, Bt, Ut, zt);
const Wt = {
  // borders
  border: {
    themeKey: "borders",
    transform: q
  },
  borderTop: {
    themeKey: "borders",
    transform: q
  },
  borderRight: {
    themeKey: "borders",
    transform: q
  },
  borderBottom: {
    themeKey: "borders",
    transform: q
  },
  borderLeft: {
    themeKey: "borders",
    transform: q
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: q
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ce
  },
  // palette
  color: {
    themeKey: "palette",
    transform: se
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: se
  },
  backgroundColor: {
    themeKey: "palette",
    transform: se
  },
  // spacing
  p: {
    style: j
  },
  pt: {
    style: j
  },
  pr: {
    style: j
  },
  pb: {
    style: j
  },
  pl: {
    style: j
  },
  px: {
    style: j
  },
  py: {
    style: j
  },
  padding: {
    style: j
  },
  paddingTop: {
    style: j
  },
  paddingRight: {
    style: j
  },
  paddingBottom: {
    style: j
  },
  paddingLeft: {
    style: j
  },
  paddingX: {
    style: j
  },
  paddingY: {
    style: j
  },
  paddingInline: {
    style: j
  },
  paddingInlineStart: {
    style: j
  },
  paddingInlineEnd: {
    style: j
  },
  paddingBlock: {
    style: j
  },
  paddingBlockStart: {
    style: j
  },
  paddingBlockEnd: {
    style: j
  },
  m: {
    style: M
  },
  mt: {
    style: M
  },
  mr: {
    style: M
  },
  mb: {
    style: M
  },
  ml: {
    style: M
  },
  mx: {
    style: M
  },
  my: {
    style: M
  },
  margin: {
    style: M
  },
  marginTop: {
    style: M
  },
  marginRight: {
    style: M
  },
  marginBottom: {
    style: M
  },
  marginLeft: {
    style: M
  },
  marginX: {
    style: M
  },
  marginY: {
    style: M
  },
  marginInline: {
    style: M
  },
  marginInlineStart: {
    style: M
  },
  marginInlineEnd: {
    style: M
  },
  marginBlock: {
    style: M
  },
  marginBlockStart: {
    style: M
  },
  marginBlockEnd: {
    style: M
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: we
  },
  rowGap: {
    style: Ae
  },
  columnGap: {
    style: Pe
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: L
  },
  maxWidth: {
    style: He
  },
  minWidth: {
    transform: L
  },
  height: {
    transform: L
  },
  maxHeight: {
    transform: L
  },
  minHeight: {
    transform: L
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Xe = Wt;
function Lt(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function qt(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Yt() {
  function e(t, n, o, i) {
    const a = {
      [t]: n,
      theme: o
    }, c = i[t];
    if (!c)
      return {
        [t]: n
      };
    const {
      cssProperty: y = t,
      themeKey: f,
      transform: g,
      style: h
    } = c;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const u = Te(o, f) || {};
    return h ? h(a) : X(a, n, (v) => {
      let l = Oe(u, g, v);
      return v === l && typeof v == "string" && (l = Oe(u, g, `${t}${v === "default" ? "" : $r(v)}`, v)), y === !1 ? l : {
        [y]: l
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = t || {};
    if (!o)
      return null;
    const a = (n = i.unstable_sxConfig) != null ? n : Xe;
    function c(y) {
      let f = y;
      if (typeof y == "function")
        f = y(i);
      else if (typeof y != "object")
        return y;
      if (!f)
        return null;
      const g = rt(i.breakpoints), h = Object.keys(g);
      let u = g;
      return Object.keys(f).forEach((b) => {
        const v = qt(f[b], i);
        if (v != null)
          if (typeof v == "object")
            if (a[b])
              u = de(u, e(b, v, i, a));
            else {
              const l = X({
                theme: i
              }, v, (x) => ({
                [b]: x
              }));
              Lt(l, v) ? u[b] = r({
                sx: v,
                theme: i
              }) : u = de(u, l);
            }
          else
            u = de(u, e(b, v, i, a));
      }), tt(h, u);
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return r;
}
const Je = Yt();
Je.filterProps = ["sx"];
function Kt(e, r) {
  const t = this;
  return t.vars && typeof t.getColorSchemeSelector == "function" ? {
    [t.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: r
  } : t.palette.mode === e ? r : {};
}
const Vt = ["breakpoints", "palette", "spacing", "shape"];
function Ft(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, a = ue(e, Vt), c = Jr(t), y = ft(o);
  let f = H({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: z({
      mode: "light"
    }, n),
    spacing: y,
    shape: z({}, Qr, i)
  }, a);
  return f.applyStyles = Kt, f = r.reduce((g, h) => H(g, h), f), f.unstable_sxConfig = z({}, Xe, a == null ? void 0 : a.unstable_sxConfig), f.unstable_sx = function(h) {
    return Je({
      sx: h,
      theme: this
    });
  }, f;
}
const yr = (e) => e, Gt = () => {
  let e = yr;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = yr;
    }
  };
}, Ht = Gt(), Xt = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Jt(e, r, t = "Mui") {
  const n = Xt[r];
  return n ? `${t}-${n}` : `${Ht.generate(e)}-${r}`;
}
function Zt(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
const Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zt
}, Symbol.toStringTag, { value: "Module" }));
function en(e, r) {
  return z({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
var B = {}, Pr = { exports: {} };
(function(e) {
  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Pr);
var rn = Pr.exports;
const tn = /* @__PURE__ */ xr(Br), nn = /* @__PURE__ */ xr(Qt);
var Ar = rn;
Object.defineProperty(B, "__esModule", {
  value: !0
});
B.alpha = Mr;
B.blend = gn;
B.colorChannel = void 0;
var on = B.darken = Qe;
B.decomposeColor = Y;
B.emphasize = mn;
var mr = B.getContrastRatio = ln;
B.getLuminance = xe;
B.hexToRgb = Rr;
B.hslToRgb = kr;
var an = B.lighten = er;
B.private_safeAlpha = dn;
B.private_safeColorChannel = void 0;
B.private_safeDarken = pn;
B.private_safeEmphasize = jr;
B.private_safeLighten = yn;
B.recomposeColor = ce;
B.rgbToHex = fn;
var gr = Ar(tn), sn = Ar(nn);
function Ze(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), (0, sn.default)(e, r, t);
}
function Rr(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function un(e) {
  const r = e.toString(16);
  return r.length === 1 ? `0${r}` : r;
}
function Y(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Y(Rr(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, gr.default)(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, gr.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const Ir = (e) => {
  const r = Y(e);
  return r.values.slice(0, 3).map((t, n) => r.type.indexOf("hsl") !== -1 && n !== 0 ? `${t}%` : t).join(" ");
};
B.colorChannel = Ir;
const cn = (e, r) => {
  try {
    return Ir(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
B.private_safeColorChannel = cn;
function ce(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function fn(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: r
  } = Y(e);
  return `#${r.map((t, n) => un(n === 3 ? Math.round(255 * t) : t)).join("")}`;
}
function kr(e) {
  e = Y(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), a = (f, g = (f + t / 30) % 12) => o - i * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let c = "rgb";
  const y = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", y.push(r[3])), ce({
    type: c,
    values: y
  });
}
function xe(e) {
  e = Y(e);
  let r = e.type === "hsl" || e.type === "hsla" ? Y(kr(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function ln(e, r) {
  const t = xe(e), n = xe(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function Mr(e, r) {
  return e = Y(e), r = Ze(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, ce(e);
}
function dn(e, r, t) {
  try {
    return Mr(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Qe(e, r) {
  if (e = Y(e), r = Ze(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return ce(e);
}
function pn(e, r, t) {
  try {
    return Qe(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function er(e, r) {
  if (e = Y(e), r = Ze(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return ce(e);
}
function yn(e, r, t) {
  try {
    return er(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function mn(e, r = 0.15) {
  return xe(e) > 0.5 ? Qe(e, r) : er(e, r);
}
function jr(e, r, t) {
  try {
    return jr(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function gn(e, r, t, n = 1) {
  const o = (y, f) => Math.round((y ** (1 / n) * (1 - t) + f ** (1 / n) * t) ** n), i = Y(e), a = Y(r), c = [o(i.values[0], a.values[0]), o(i.values[1], a.values[1]), o(i.values[2], a.values[2])];
  return ce({
    type: "rgb",
    values: c
  });
}
const hn = {
  black: "#000",
  white: "#fff"
}, ye = hn, bn = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, vn = bn, En = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, re = En, On = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, te = On, xn = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, le = xn, Tn = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, ne = Tn, _n = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, oe = _n, Sn = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, ie = Sn, $n = ["mode", "contrastThreshold", "tonalOffset"], hr = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: ye.white,
    default: ye.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Ke = {
  text: {
    primary: ye.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: ye.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function br(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = an(e.main, o) : r === "dark" && (e.dark = on(e.main, i)));
}
function Cn(e = "light") {
  return e === "dark" ? {
    main: ne[200],
    light: ne[50],
    dark: ne[400]
  } : {
    main: ne[700],
    light: ne[400],
    dark: ne[800]
  };
}
function wn(e = "light") {
  return e === "dark" ? {
    main: re[200],
    light: re[50],
    dark: re[400]
  } : {
    main: re[500],
    light: re[300],
    dark: re[700]
  };
}
function Pn(e = "light") {
  return e === "dark" ? {
    main: te[500],
    light: te[300],
    dark: te[700]
  } : {
    main: te[700],
    light: te[400],
    dark: te[800]
  };
}
function An(e = "light") {
  return e === "dark" ? {
    main: oe[400],
    light: oe[300],
    dark: oe[700]
  } : {
    main: oe[700],
    light: oe[500],
    dark: oe[900]
  };
}
function Rn(e = "light") {
  return e === "dark" ? {
    main: ie[400],
    light: ie[300],
    dark: ie[700]
  } : {
    main: ie[800],
    light: ie[500],
    dark: ie[900]
  };
}
function In(e = "light") {
  return e === "dark" ? {
    main: le[400],
    light: le[300],
    dark: le[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: le[500],
    dark: le[900]
  };
}
function kn(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, o = ue(e, $n), i = e.primary || Cn(r), a = e.secondary || wn(r), c = e.error || Pn(r), y = e.info || An(r), f = e.success || Rn(r), g = e.warning || In(r);
  function h(l) {
    const x = mr(l, Ke.text.primary) >= t ? Ke.text.primary : hr.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const I = mr(l, x);
      I < 3 && console.error([`MUI: The contrast ratio of ${I}:1 for ${x} on ${l}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return x;
  }
  const u = ({
    color: l,
    name: x,
    mainShade: I = 500,
    lightShade: V = 300,
    darkShade: N = 700
  }) => {
    if (l = z({}, l), !l.main && l[I] && (l.main = l[I]), !l.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${I}\` property.` : pe(11, x ? ` (${x})` : "", I));
    if (typeof l.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(l.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : pe(12, x ? ` (${x})` : "", JSON.stringify(l.main)));
    return br(l, "light", V, n), br(l, "dark", N, n), l.contrastText || (l.contrastText = h(l.main)), l;
  }, b = {
    dark: Ke,
    light: hr
  };
  return process.env.NODE_ENV !== "production" && (b[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), H(z({
    // A collection of common colors.
    common: z({}, ye),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: u({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: u({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: u({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: u({
      color: g,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: u({
      color: y,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: u({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: vn,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: u,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, b[r]), o);
}
const Mn = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function jn(e) {
  return Math.round(e * 1e5) / 1e5;
}
const vr = {
  textTransform: "uppercase"
}, Er = '"Roboto", "Helvetica", "Arial", sans-serif';
function Nn(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = Er,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: y = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: g,
    pxToRem: h
  } = t, u = ue(t, Mn);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = o / 14, v = h || ((I) => `${I / f * b}rem`), l = (I, V, N, U, p) => z({
    fontFamily: n,
    fontWeight: I,
    fontSize: v(V),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: N
  }, n === Er ? {
    letterSpacing: `${jn(U / V)}em`
  } : {}, p, g), x = {
    h1: l(i, 96, 1.167, -1.5),
    h2: l(i, 60, 1.2, -0.5),
    h3: l(a, 48, 1.167, 0),
    h4: l(a, 34, 1.235, 0.25),
    h5: l(a, 24, 1.334, 0),
    h6: l(c, 20, 1.6, 0.15),
    subtitle1: l(a, 16, 1.75, 0.15),
    subtitle2: l(c, 14, 1.57, 0.1),
    body1: l(a, 16, 1.5, 0.15),
    body2: l(a, 14, 1.43, 0.15),
    button: l(c, 14, 1.75, 0.4, vr),
    caption: l(a, 12, 1.66, 0.4),
    overline: l(a, 12, 2.66, 1, vr),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return H(z({
    htmlFontSize: f,
    pxToRem: v,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: c,
    fontWeightBold: y
  }, x), u, {
    clone: !1
    // No need to clone deep
  });
}
const Dn = 0.2, Bn = 0.14, Un = 0.12;
function k(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Dn})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Bn})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Un})`].join(",");
}
const zn = ["none", k(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), k(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), k(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), k(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), k(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), k(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), k(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), k(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), k(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), k(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), k(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), k(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), k(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), k(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), k(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), k(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), k(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), k(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), k(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), k(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), k(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), k(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), k(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), k(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Wn = ["duration", "easing", "delay"], Ln = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, qn = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Or(e) {
  return `${Math.round(e)}ms`;
}
function Yn(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function Kn(e) {
  const r = z({}, Ln, e.easing), t = z({}, qn, e.duration);
  return z({
    getAutoHeightDuration: Yn,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = t.standard,
        easing: c = r.easeInOut,
        delay: y = 0
      } = i, f = ue(i, Wn);
      if (process.env.NODE_ENV !== "production") {
        const g = (u) => typeof u == "string", h = (u) => !isNaN(parseFloat(u));
        !g(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(a) && !g(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), g(c) || console.error('MUI: Argument "easing" must be a string.'), !h(y) && !g(y) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((g) => `${g} ${typeof a == "string" ? a : Or(a)} ${c} ${typeof y == "string" ? y : Or(y)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const Vn = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Fn = Vn, Gn = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Hn(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = ue(e, Gn);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : pe(18));
  const c = kn(n), y = Ft(e);
  let f = H(y, {
    mixins: en(y.breakpoints, t),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: zn.slice(),
    typography: Nn(c, i),
    transitions: Kn(o),
    zIndex: z({}, Fn)
  });
  if (f = H(f, a), f = r.reduce((g, h) => H(g, h), f), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], h = (u, b) => {
      let v;
      for (v in u) {
        const l = u[v];
        if (g.indexOf(v) !== -1 && Object.keys(l).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const x = Jt("", v);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${v}\` internal state.`, "You can not override it like this: ", JSON.stringify(u, null, 2), "", `Instead, you need to use the '&.${x}' syntax:`, JSON.stringify({
              root: {
                [`&.${x}`]: l
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          u[v] = {};
        }
      }
    };
    Object.keys(f.components).forEach((u) => {
      const b = f.components[u].styleOverrides;
      b && u.indexOf("Mui") === 0 && h(b, u);
    });
  }
  return f.unstable_sxConfig = z({}, Xe, a == null ? void 0 : a.unstable_sxConfig), f.unstable_sx = function(h) {
    return Je({
      sx: h,
      theme: this
    });
  }, f;
}
const Xn = Hn({
  typography: {
    h5: {
      fontSize: 20,
      color: "#163d83"
    }
  },
  palette: {
    type: "light",
    primary: {
      main: "#163d83"
      // Adjust as needed
    },
    secondary: {
      main: "#dc004e"
      // Adjust as needed
    }
  }
}), Jn = {}, eo = ({
  onClick: e,
  text: r,
  variant: t = "outlined",
  color: n = "primary"
}) => {
  const o = () => {
    console.log("Hizo click"), e == null || e();
  };
  return /* @__PURE__ */ tr(Nr, { theme: Xn, children: /* @__PURE__ */ tr(Dr, { className: Jn.btn_color, variant: t, color: n, onClick: o, children: r }) });
};
export {
  eo as P,
  Xn as t
};
