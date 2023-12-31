(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerpolicy && (i.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Ns(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var D = {},
  Zc = {
    get exports() {
      return D;
    },
    set exports(e) {
      D = e;
    },
  },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cr = Symbol.for("react.element"),
  Jc = Symbol.for("react.portal"),
  qc = Symbol.for("react.fragment"),
  bc = Symbol.for("react.strict_mode"),
  ef = Symbol.for("react.profiler"),
  tf = Symbol.for("react.provider"),
  nf = Symbol.for("react.context"),
  rf = Symbol.for("react.forward_ref"),
  lf = Symbol.for("react.suspense"),
  of = Symbol.for("react.memo"),
  uf = Symbol.for("react.lazy"),
  cu = Symbol.iterator;
function sf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (cu && e[cu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ls = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ms = Object.assign,
  zs = {};
function wn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zs),
    (this.updater = n || Ls);
}
wn.prototype.isReactComponent = {};
wn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
wn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Rs() {}
Rs.prototype = wn.prototype;
function po(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zs),
    (this.updater = n || Ls);
}
var ho = (po.prototype = new Rs());
ho.constructor = po;
Ms(ho, wn.prototype);
ho.isPureReactComponent = !0;
var fu = Array.isArray,
  Ts = Object.prototype.hasOwnProperty,
  mo = { current: null },
  Os = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ds(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ts.call(t, r) && !Os.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: cr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: mo.current,
  };
}
function af(e, t) {
  return {
    $$typeof: cr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function vo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cr;
}
function cf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var du = /\/+/g;
function Ul(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? cf("" + e.key)
    : t.toString(36);
}
function Ir(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case cr:
          case Jc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Ul(o, 0) : r),
      fu(l)
        ? ((n = ""),
          e != null && (n = e.replace(du, "$&/") + "/"),
          Ir(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (vo(l) &&
            (l = af(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(du, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), fu(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Ul(i, u);
      o += Ir(i, t, n, s, l);
    }
  else if (((s = sf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Ul(i, u++)), (o += Ir(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function gr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Ir(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function ff(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null },
  jr = { transition: null },
  df = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: jr,
    ReactCurrentOwner: mo,
  };
T.Children = {
  map: gr,
  forEach: function (e, t, n) {
    gr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      gr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!vo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = wn;
T.Fragment = qc;
T.Profiler = ef;
T.PureComponent = po;
T.StrictMode = bc;
T.Suspense = lf;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = df;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ms({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = mo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ts.call(t, s) &&
        !Os.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: cr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: nf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: tf, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = Ds;
T.createFactory = function (e) {
  var t = Ds.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: rf, render: e };
};
T.isValidElement = vo;
T.lazy = function (e) {
  return { $$typeof: uf, _payload: { _status: -1, _result: e }, _init: ff };
};
T.memo = function (e, t) {
  return { $$typeof: of, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = jr.transition;
  jr.transition = {};
  try {
    e();
  } finally {
    jr.transition = t;
  }
};
T.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
T.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
T.useContext = function (e) {
  return ce.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
T.useId = function () {
  return ce.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return ce.current.useRef(e);
};
T.useState = function (e) {
  return ce.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return ce.current.useTransition();
};
T.version = "18.2.0";
(function (e) {
  e.exports = T;
})(Zc);
const pf = Ns(D);
var di = {},
  hf = {
    get exports() {
      return di;
    },
    set exports(e) {
      di = e;
    },
  },
  Ee = {},
  pi = {},
  mf = {
    get exports() {
      return pi;
    },
    set exports(e) {
      pi = e;
    },
  },
  Is = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, L) {
    var z = C.length;
    C.push(L);
    e: for (; 0 < z; ) {
      var B = (z - 1) >>> 1,
        G = C[B];
      if (0 < l(G, L)) (C[B] = L), (C[z] = G), (z = B);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var L = C[0],
      z = C.pop();
    if (z !== L) {
      C[0] = z;
      e: for (var B = 0, G = C.length, Bt = G >>> 1; B < Bt; ) {
        var Ke = 2 * (B + 1) - 1,
          Ht = C[Ke],
          Ye = Ke + 1,
          Vt = C[Ye];
        if (0 > l(Ht, z))
          Ye < G && 0 > l(Vt, Ht)
            ? ((C[B] = Vt), (C[Ye] = z), (B = Ye))
            : ((C[B] = Ht), (C[Ke] = z), (B = Ke));
        else if (Ye < G && 0 > l(Vt, z)) (C[B] = Vt), (C[Ye] = z), (B = Ye);
        else break e;
      }
    }
    return L;
  }
  function l(C, L) {
    var z = C.sortIndex - L.sortIndex;
    return z !== 0 ? z : C.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    a = [],
    h = 1,
    p = null,
    m = 3,
    v = !1,
    y = !1,
    k = !1,
    M = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(C) {
    for (var L = n(a); L !== null; ) {
      if (L.callback === null) r(a);
      else if (L.startTime <= C)
        r(a), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(a);
    }
  }
  function g(C) {
    if (((k = !1), f(C), !y))
      if (n(s) !== null) (y = !0), xn(E);
      else {
        var L = n(a);
        L !== null && _n(g, L.startTime - C);
      }
  }
  function E(C, L) {
    (y = !1), k && ((k = !1), d(x), (x = -1)), (v = !0);
    var z = m;
    try {
      for (
        f(L), p = n(s);
        p !== null && (!(p.expirationTime > L) || (C && !$()));

      ) {
        var B = p.callback;
        if (typeof B == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var G = B(p.expirationTime <= L);
          (L = e.unstable_now()),
            typeof G == "function" ? (p.callback = G) : p === n(s) && r(s),
            f(L);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var Bt = !0;
      else {
        var Ke = n(a);
        Ke !== null && _n(g, Ke.startTime - L), (Bt = !1);
      }
      return Bt;
    } finally {
      (p = null), (m = z), (v = !1);
    }
  }
  var _ = !1,
    w = null,
    x = -1,
    R = 5,
    N = -1;
  function $() {
    return !(e.unstable_now() - N < R);
  }
  function de() {
    if (w !== null) {
      var C = e.unstable_now();
      N = C;
      var L = !0;
      try {
        L = w(!0, C);
      } finally {
        L ? Re() : ((_ = !1), (w = null));
      }
    } else _ = !1;
  }
  var Re;
  if (typeof c == "function")
    Re = function () {
      c(de);
    };
  else if (typeof MessageChannel < "u") {
    var Qe = new MessageChannel(),
      $l = Qe.port2;
    (Qe.port1.onmessage = de),
      (Re = function () {
        $l.postMessage(null);
      });
  } else
    Re = function () {
      M(de, 0);
    };
  function xn(C) {
    (w = C), _ || ((_ = !0), Re());
  }
  function _n(C, L) {
    x = M(function () {
      C(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), xn(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (C) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = m;
      }
      var z = m;
      m = L;
      try {
        return C();
      } finally {
        m = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, L) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var z = m;
      m = C;
      try {
        return L();
      } finally {
        m = z;
      }
    }),
    (e.unstable_scheduleCallback = function (C, L, z) {
      var B = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? B + z : B))
          : (z = B),
        C)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = z + G),
        (C = {
          id: h++,
          callback: L,
          priorityLevel: C,
          startTime: z,
          expirationTime: G,
          sortIndex: -1,
        }),
        z > B
          ? ((C.sortIndex = z),
            t(a, C),
            n(s) === null &&
              C === n(a) &&
              (k ? (d(x), (x = -1)) : (k = !0), _n(g, z - B)))
          : ((C.sortIndex = G), t(s, C), y || v || ((y = !0), xn(E))),
        C
      );
    }),
    (e.unstable_shouldYield = $),
    (e.unstable_wrapCallback = function (C) {
      var L = m;
      return function () {
        var z = m;
        m = L;
        try {
          return C.apply(this, arguments);
        } finally {
          m = z;
        }
      };
    });
})(Is);
(function (e) {
  e.exports = Is;
})(mf);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var js = D,
  ke = pi;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Fs = new Set(),
  Kn = {};
function Ut(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) Fs.add(t[e]);
}
var be = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  hi = Object.prototype.hasOwnProperty,
  vf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  pu = {},
  hu = {};
function yf(e) {
  return hi.call(hu, e)
    ? !0
    : hi.call(pu, e)
    ? !1
    : vf.test(e)
    ? (hu[e] = !0)
    : ((pu[e] = !0), !1);
}
function gf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function wf(e, t, n, r) {
  if (t === null || typeof t > "u" || gf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function fe(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var yo = /[\-:]([a-z])/g;
function go(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yo, go);
    ne[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yo, go);
    ne[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(yo, go);
  ne[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function wo(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (wf(t, n, l, r) && (n = null),
    r || l === null
      ? yf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rt = js.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wr = Symbol.for("react.element"),
  Qt = Symbol.for("react.portal"),
  Kt = Symbol.for("react.fragment"),
  So = Symbol.for("react.strict_mode"),
  mi = Symbol.for("react.profiler"),
  $s = Symbol.for("react.provider"),
  Us = Symbol.for("react.context"),
  ko = Symbol.for("react.forward_ref"),
  vi = Symbol.for("react.suspense"),
  yi = Symbol.for("react.suspense_list"),
  Eo = Symbol.for("react.memo"),
  it = Symbol.for("react.lazy"),
  As = Symbol.for("react.offscreen"),
  mu = Symbol.iterator;
function Cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (mu && e[mu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  Al;
function On(e) {
  if (Al === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Al = (t && t[1]) || "";
    }
  return (
    `
` +
    Al +
    e
  );
}
var Bl = !1;
function Hl(e, t) {
  if (!e || Bl) return "";
  Bl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Bl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? On(e) : "";
}
function Sf(e) {
  switch (e.tag) {
    case 5:
      return On(e.type);
    case 16:
      return On("Lazy");
    case 13:
      return On("Suspense");
    case 19:
      return On("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Hl(e.type, !1)), e;
    case 11:
      return (e = Hl(e.type.render, !1)), e;
    case 1:
      return (e = Hl(e.type, !0)), e;
    default:
      return "";
  }
}
function gi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kt:
      return "Fragment";
    case Qt:
      return "Portal";
    case mi:
      return "Profiler";
    case So:
      return "StrictMode";
    case vi:
      return "Suspense";
    case yi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Us:
        return (e.displayName || "Context") + ".Consumer";
      case $s:
        return (e._context.displayName || "Context") + ".Provider";
      case ko:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Eo:
        return (
          (t = e.displayName || null), t !== null ? t : gi(e.type) || "Memo"
        );
      case it:
        (t = e._payload), (e = e._init);
        try {
          return gi(e(t));
        } catch {}
    }
  return null;
}
function kf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return gi(t);
    case 8:
      return t === So ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function wt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Bs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ef(e) {
  var t = Bs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Sr(e) {
  e._valueTracker || (e._valueTracker = Ef(e));
}
function Hs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Bs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Yr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function wi(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function vu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = wt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Vs(e, t) {
  (t = t.checked), t != null && wo(e, "checked", t, !1);
}
function Si(e, t) {
  Vs(e, t);
  var n = wt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ki(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ki(e, t.type, wt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function yu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ki(e, t, n) {
  (t !== "number" || Yr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Dn = Array.isArray;
function rn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + wt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ei(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function gu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (Dn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: wt(n) };
}
function Ws(e, t) {
  var n = wt(t.value),
    r = wt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function wu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Qs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function xi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Qs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var kr,
  Ks = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        kr = kr || document.createElement("div"),
          kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = kr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  xf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fn).forEach(function (e) {
  xf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]);
  });
});
function Ys(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Fn.hasOwnProperty(e) && Fn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Gs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ys(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var _f = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function _i(e, t) {
  if (t) {
    if (_f[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Ci(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Pi = null;
function xo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ni = null,
  ln = null,
  on = null;
function Su(e) {
  if ((e = pr(e))) {
    if (typeof Ni != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = _l(t)), Ni(e.stateNode, e.type, t));
  }
}
function Xs(e) {
  ln ? (on ? on.push(e) : (on = [e])) : (ln = e);
}
function Zs() {
  if (ln) {
    var e = ln,
      t = on;
    if (((on = ln = null), Su(e), t)) for (e = 0; e < t.length; e++) Su(t[e]);
  }
}
function Js(e, t) {
  return e(t);
}
function qs() {}
var Vl = !1;
function bs(e, t, n) {
  if (Vl) return e(t, n);
  Vl = !0;
  try {
    return Js(e, t, n);
  } finally {
    (Vl = !1), (ln !== null || on !== null) && (qs(), Zs());
  }
}
function Gn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _l(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Li = !1;
if (be)
  try {
    var Pn = {};
    Object.defineProperty(Pn, "passive", {
      get: function () {
        Li = !0;
      },
    }),
      window.addEventListener("test", Pn, Pn),
      window.removeEventListener("test", Pn, Pn);
  } catch {
    Li = !1;
  }
function Cf(e, t, n, r, l, i, o, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var $n = !1,
  Gr = null,
  Xr = !1,
  Mi = null,
  Pf = {
    onError: function (e) {
      ($n = !0), (Gr = e);
    },
  };
function Nf(e, t, n, r, l, i, o, u, s) {
  ($n = !1), (Gr = null), Cf.apply(Pf, arguments);
}
function Lf(e, t, n, r, l, i, o, u, s) {
  if ((Nf.apply(this, arguments), $n)) {
    if ($n) {
      var a = Gr;
      ($n = !1), (Gr = null);
    } else throw Error(S(198));
    Xr || ((Xr = !0), (Mi = a));
  }
}
function At(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ea(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ku(e) {
  if (At(e) !== e) throw Error(S(188));
}
function Mf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = At(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return ku(l), e;
        if (i === r) return ku(l), t;
        i = i.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function ta(e) {
  return (e = Mf(e)), e !== null ? na(e) : null;
}
function na(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = na(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ra = ke.unstable_scheduleCallback,
  Eu = ke.unstable_cancelCallback,
  zf = ke.unstable_shouldYield,
  Rf = ke.unstable_requestPaint,
  Y = ke.unstable_now,
  Tf = ke.unstable_getCurrentPriorityLevel,
  _o = ke.unstable_ImmediatePriority,
  la = ke.unstable_UserBlockingPriority,
  Zr = ke.unstable_NormalPriority,
  Of = ke.unstable_LowPriority,
  ia = ke.unstable_IdlePriority,
  Sl = null,
  Ve = null;
function Df(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function")
    try {
      Ve.onCommitFiberRoot(Sl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var je = Math.clz32 ? Math.clz32 : Ff,
  If = Math.log,
  jf = Math.LN2;
function Ff(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((If(e) / jf) | 0)) | 0;
}
var Er = 64,
  xr = 4194304;
function In(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Jr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = In(u)) : ((i &= o), i !== 0 && (r = In(i)));
  } else (o = n & ~l), o !== 0 ? (r = In(o)) : i !== 0 && (r = In(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - je(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function $f(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Uf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - je(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = $f(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function zi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function oa() {
  var e = Er;
  return (Er <<= 1), !(Er & 4194240) && (Er = 64), e;
}
function Wl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function fr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - je(t)),
    (e[t] = n);
}
function Af(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - je(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Co(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - je(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var I = 0;
function ua(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var sa,
  Po,
  aa,
  ca,
  fa,
  Ri = !1,
  _r = [],
  ft = null,
  dt = null,
  pt = null,
  Xn = new Map(),
  Zn = new Map(),
  ut = [],
  Bf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function xu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ft = null;
      break;
    case "dragenter":
    case "dragleave":
      dt = null;
      break;
    case "mouseover":
    case "mouseout":
      pt = null;
      break;
    case "pointerover":
    case "pointerout":
      Xn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zn.delete(t.pointerId);
  }
}
function Nn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = pr(t)), t !== null && Po(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Hf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ft = Nn(ft, e, t, n, r, l)), !0;
    case "dragenter":
      return (dt = Nn(dt, e, t, n, r, l)), !0;
    case "mouseover":
      return (pt = Nn(pt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Xn.set(i, Nn(Xn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Zn.set(i, Nn(Zn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function da(e) {
  var t = Pt(e.target);
  if (t !== null) {
    var n = At(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ea(n)), t !== null)) {
          (e.blockedOn = t),
            fa(e.priority, function () {
              aa(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Fr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ti(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Pi = r), n.target.dispatchEvent(r), (Pi = null);
    } else return (t = pr(n)), t !== null && Po(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function _u(e, t, n) {
  Fr(e) && n.delete(t);
}
function Vf() {
  (Ri = !1),
    ft !== null && Fr(ft) && (ft = null),
    dt !== null && Fr(dt) && (dt = null),
    pt !== null && Fr(pt) && (pt = null),
    Xn.forEach(_u),
    Zn.forEach(_u);
}
function Ln(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ri ||
      ((Ri = !0),
      ke.unstable_scheduleCallback(ke.unstable_NormalPriority, Vf)));
}
function Jn(e) {
  function t(l) {
    return Ln(l, e);
  }
  if (0 < _r.length) {
    Ln(_r[0], e);
    for (var n = 1; n < _r.length; n++) {
      var r = _r[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ft !== null && Ln(ft, e),
      dt !== null && Ln(dt, e),
      pt !== null && Ln(pt, e),
      Xn.forEach(t),
      Zn.forEach(t),
      n = 0;
    n < ut.length;
    n++
  )
    (r = ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && ((n = ut[0]), n.blockedOn === null); )
    da(n), n.blockedOn === null && ut.shift();
}
var un = rt.ReactCurrentBatchConfig,
  qr = !0;
function Wf(e, t, n, r) {
  var l = I,
    i = un.transition;
  un.transition = null;
  try {
    (I = 1), No(e, t, n, r);
  } finally {
    (I = l), (un.transition = i);
  }
}
function Qf(e, t, n, r) {
  var l = I,
    i = un.transition;
  un.transition = null;
  try {
    (I = 4), No(e, t, n, r);
  } finally {
    (I = l), (un.transition = i);
  }
}
function No(e, t, n, r) {
  if (qr) {
    var l = Ti(e, t, n, r);
    if (l === null) ei(e, t, r, br, n), xu(e, r);
    else if (Hf(l, e, t, n, r)) r.stopPropagation();
    else if ((xu(e, r), t & 4 && -1 < Bf.indexOf(e))) {
      for (; l !== null; ) {
        var i = pr(l);
        if (
          (i !== null && sa(i),
          (i = Ti(e, t, n, r)),
          i === null && ei(e, t, r, br, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ei(e, t, r, null, n);
  }
}
var br = null;
function Ti(e, t, n, r) {
  if (((br = null), (e = xo(r)), (e = Pt(e)), e !== null))
    if (((t = At(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ea(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (br = e), null;
}
function pa(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Tf()) {
        case _o:
          return 1;
        case la:
          return 4;
        case Zr:
        case Of:
          return 16;
        case ia:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var at = null,
  Lo = null,
  $r = null;
function ha() {
  if ($r) return $r;
  var e,
    t = Lo,
    n = t.length,
    r,
    l = "value" in at ? at.value : at.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return ($r = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ur(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Cr() {
  return !0;
}
function Cu() {
  return !1;
}
function xe(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Cr
        : Cu),
      (this.isPropagationStopped = Cu),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Cr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Cr));
      },
      persist: function () {},
      isPersistent: Cr,
    }),
    t
  );
}
var Sn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Mo = xe(Sn),
  dr = Q({}, Sn, { view: 0, detail: 0 }),
  Kf = xe(dr),
  Ql,
  Kl,
  Mn,
  kl = Q({}, dr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Mn &&
            (Mn && e.type === "mousemove"
              ? ((Ql = e.screenX - Mn.screenX), (Kl = e.screenY - Mn.screenY))
              : (Kl = Ql = 0),
            (Mn = e)),
          Ql);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Kl;
    },
  }),
  Pu = xe(kl),
  Yf = Q({}, kl, { dataTransfer: 0 }),
  Gf = xe(Yf),
  Xf = Q({}, dr, { relatedTarget: 0 }),
  Yl = xe(Xf),
  Zf = Q({}, Sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Jf = xe(Zf),
  qf = Q({}, Sn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  bf = xe(qf),
  ed = Q({}, Sn, { data: 0 }),
  Nu = xe(ed),
  td = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  rd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ld(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = rd[e]) ? !!t[e] : !1;
}
function zo() {
  return ld;
}
var id = Q({}, dr, {
    key: function (e) {
      if (e.key) {
        var t = td[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ur(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? nd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zo,
    charCode: function (e) {
      return e.type === "keypress" ? Ur(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ur(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  od = xe(id),
  ud = Q({}, kl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Lu = xe(ud),
  sd = Q({}, dr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zo,
  }),
  ad = xe(sd),
  cd = Q({}, Sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fd = xe(cd),
  dd = Q({}, kl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  pd = xe(dd),
  hd = [9, 13, 27, 32],
  Ro = be && "CompositionEvent" in window,
  Un = null;
be && "documentMode" in document && (Un = document.documentMode);
var md = be && "TextEvent" in window && !Un,
  ma = be && (!Ro || (Un && 8 < Un && 11 >= Un)),
  Mu = String.fromCharCode(32),
  zu = !1;
function va(e, t) {
  switch (e) {
    case "keyup":
      return hd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ya(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Yt = !1;
function vd(e, t) {
  switch (e) {
    case "compositionend":
      return ya(t);
    case "keypress":
      return t.which !== 32 ? null : ((zu = !0), Mu);
    case "textInput":
      return (e = t.data), e === Mu && zu ? null : e;
    default:
      return null;
  }
}
function yd(e, t) {
  if (Yt)
    return e === "compositionend" || (!Ro && va(e, t))
      ? ((e = ha()), ($r = Lo = at = null), (Yt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ma && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var gd = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!gd[e.type] : t === "textarea";
}
function ga(e, t, n, r) {
  Xs(r),
    (t = el(t, "onChange")),
    0 < t.length &&
      ((n = new Mo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var An = null,
  qn = null;
function wd(e) {
  Ma(e, 0);
}
function El(e) {
  var t = Zt(e);
  if (Hs(t)) return e;
}
function Sd(e, t) {
  if (e === "change") return t;
}
var wa = !1;
if (be) {
  var Gl;
  if (be) {
    var Xl = "oninput" in document;
    if (!Xl) {
      var Tu = document.createElement("div");
      Tu.setAttribute("oninput", "return;"),
        (Xl = typeof Tu.oninput == "function");
    }
    Gl = Xl;
  } else Gl = !1;
  wa = Gl && (!document.documentMode || 9 < document.documentMode);
}
function Ou() {
  An && (An.detachEvent("onpropertychange", Sa), (qn = An = null));
}
function Sa(e) {
  if (e.propertyName === "value" && El(qn)) {
    var t = [];
    ga(t, qn, e, xo(e)), bs(wd, t);
  }
}
function kd(e, t, n) {
  e === "focusin"
    ? (Ou(), (An = t), (qn = n), An.attachEvent("onpropertychange", Sa))
    : e === "focusout" && Ou();
}
function Ed(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return El(qn);
}
function xd(e, t) {
  if (e === "click") return El(t);
}
function _d(e, t) {
  if (e === "input" || e === "change") return El(t);
}
function Cd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var $e = typeof Object.is == "function" ? Object.is : Cd;
function bn(e, t) {
  if ($e(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!hi.call(t, l) || !$e(e[l], t[l])) return !1;
  }
  return !0;
}
function Du(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Iu(e, t) {
  var n = Du(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Du(n);
  }
}
function ka(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ka(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ea() {
  for (var e = window, t = Yr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yr(e.document);
  }
  return t;
}
function To(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Pd(e) {
  var t = Ea(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ka(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && To(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Iu(n, i));
        var o = Iu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Nd = be && "documentMode" in document && 11 >= document.documentMode,
  Gt = null,
  Oi = null,
  Bn = null,
  Di = !1;
function ju(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Di ||
    Gt == null ||
    Gt !== Yr(r) ||
    ((r = Gt),
    "selectionStart" in r && To(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Bn && bn(Bn, r)) ||
      ((Bn = r),
      (r = el(Oi, "onSelect")),
      0 < r.length &&
        ((t = new Mo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Gt))));
}
function Pr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Xt = {
    animationend: Pr("Animation", "AnimationEnd"),
    animationiteration: Pr("Animation", "AnimationIteration"),
    animationstart: Pr("Animation", "AnimationStart"),
    transitionend: Pr("Transition", "TransitionEnd"),
  },
  Zl = {},
  xa = {};
be &&
  ((xa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Xt.animationend.animation,
    delete Xt.animationiteration.animation,
    delete Xt.animationstart.animation),
  "TransitionEvent" in window || delete Xt.transitionend.transition);
function xl(e) {
  if (Zl[e]) return Zl[e];
  if (!Xt[e]) return e;
  var t = Xt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in xa) return (Zl[e] = t[n]);
  return e;
}
var _a = xl("animationend"),
  Ca = xl("animationiteration"),
  Pa = xl("animationstart"),
  Na = xl("transitionend"),
  La = new Map(),
  Fu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function kt(e, t) {
  La.set(e, t), Ut(t, [e]);
}
for (var Jl = 0; Jl < Fu.length; Jl++) {
  var ql = Fu[Jl],
    Ld = ql.toLowerCase(),
    Md = ql[0].toUpperCase() + ql.slice(1);
  kt(Ld, "on" + Md);
}
kt(_a, "onAnimationEnd");
kt(Ca, "onAnimationIteration");
kt(Pa, "onAnimationStart");
kt("dblclick", "onDoubleClick");
kt("focusin", "onFocus");
kt("focusout", "onBlur");
kt(Na, "onTransitionEnd");
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
Ut(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ut(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ut(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ut(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ut(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var jn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  zd = new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));
function $u(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Lf(r, t, void 0, e), (e.currentTarget = null);
}
function Ma(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          $u(l, u, a), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          $u(l, u, a), (i = s);
        }
    }
  }
  if (Xr) throw ((e = Mi), (Xr = !1), (Mi = null), e);
}
function U(e, t) {
  var n = t[Ui];
  n === void 0 && (n = t[Ui] = new Set());
  var r = e + "__bubble";
  n.has(r) || (za(t, e, 2, !1), n.add(r));
}
function bl(e, t, n) {
  var r = 0;
  t && (r |= 4), za(n, e, r, t);
}
var Nr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Nr]) {
    (e[Nr] = !0),
      Fs.forEach(function (n) {
        n !== "selectionchange" && (zd.has(n) || bl(n, !1, e), bl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Nr] || ((t[Nr] = !0), bl("selectionchange", !1, t));
  }
}
function za(e, t, n, r) {
  switch (pa(t)) {
    case 1:
      var l = Wf;
      break;
    case 4:
      l = Qf;
      break;
    default:
      l = No;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Li ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ei(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Pt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  bs(function () {
    var a = i,
      h = xo(n),
      p = [];
    e: {
      var m = La.get(e);
      if (m !== void 0) {
        var v = Mo,
          y = e;
        switch (e) {
          case "keypress":
            if (Ur(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = od;
            break;
          case "focusin":
            (y = "focus"), (v = Yl);
            break;
          case "focusout":
            (y = "blur"), (v = Yl);
            break;
          case "beforeblur":
          case "afterblur":
            v = Yl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Pu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Gf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ad;
            break;
          case _a:
          case Ca:
          case Pa:
            v = Jf;
            break;
          case Na:
            v = fd;
            break;
          case "scroll":
            v = Kf;
            break;
          case "wheel":
            v = pd;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = bf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Lu;
        }
        var k = (t & 4) !== 0,
          M = !k && e === "scroll",
          d = k ? (m !== null ? m + "Capture" : null) : m;
        k = [];
        for (var c = a, f; c !== null; ) {
          f = c;
          var g = f.stateNode;
          if (
            (f.tag === 5 &&
              g !== null &&
              ((f = g),
              d !== null && ((g = Gn(c, d)), g != null && k.push(tr(c, g, f)))),
            M)
          )
            break;
          c = c.return;
        }
        0 < k.length &&
          ((m = new v(m, y, null, n, h)), p.push({ event: m, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Pi &&
            (y = n.relatedTarget || n.fromElement) &&
            (Pt(y) || y[et]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = a),
              (y = y ? Pt(y) : null),
              y !== null &&
                ((M = At(y)), y !== M || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = a)),
          v !== y)
        ) {
          if (
            ((k = Pu),
            (g = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = Lu),
              (g = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (M = v == null ? m : Zt(v)),
            (f = y == null ? m : Zt(y)),
            (m = new k(g, c + "leave", v, n, h)),
            (m.target = M),
            (m.relatedTarget = f),
            (g = null),
            Pt(h) === a &&
              ((k = new k(d, c + "enter", y, n, h)),
              (k.target = f),
              (k.relatedTarget = M),
              (g = k)),
            (M = g),
            v && y)
          )
            t: {
              for (k = v, d = y, c = 0, f = k; f; f = Wt(f)) c++;
              for (f = 0, g = d; g; g = Wt(g)) f++;
              for (; 0 < c - f; ) (k = Wt(k)), c--;
              for (; 0 < f - c; ) (d = Wt(d)), f--;
              for (; c--; ) {
                if (k === d || (d !== null && k === d.alternate)) break t;
                (k = Wt(k)), (d = Wt(d));
              }
              k = null;
            }
          else k = null;
          v !== null && Uu(p, m, v, k, !1),
            y !== null && M !== null && Uu(p, M, y, k, !0);
        }
      }
      e: {
        if (
          ((m = a ? Zt(a) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var E = Sd;
        else if (Ru(m))
          if (wa) E = _d;
          else {
            E = Ed;
            var _ = kd;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = xd);
        if (E && (E = E(e, a))) {
          ga(p, E, n, h);
          break e;
        }
        _ && _(e, m, a),
          e === "focusout" &&
            (_ = m._wrapperState) &&
            _.controlled &&
            m.type === "number" &&
            ki(m, "number", m.value);
      }
      switch (((_ = a ? Zt(a) : window), e)) {
        case "focusin":
          (Ru(_) || _.contentEditable === "true") &&
            ((Gt = _), (Oi = a), (Bn = null));
          break;
        case "focusout":
          Bn = Oi = Gt = null;
          break;
        case "mousedown":
          Di = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Di = !1), ju(p, n, h);
          break;
        case "selectionchange":
          if (Nd) break;
        case "keydown":
        case "keyup":
          ju(p, n, h);
      }
      var w;
      if (Ro)
        e: {
          switch (e) {
            case "compositionstart":
              var x = "onCompositionStart";
              break e;
            case "compositionend":
              x = "onCompositionEnd";
              break e;
            case "compositionupdate":
              x = "onCompositionUpdate";
              break e;
          }
          x = void 0;
        }
      else
        Yt
          ? va(e, n) && (x = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      x &&
        (ma &&
          n.locale !== "ko" &&
          (Yt || x !== "onCompositionStart"
            ? x === "onCompositionEnd" && Yt && (w = ha())
            : ((at = h),
              (Lo = "value" in at ? at.value : at.textContent),
              (Yt = !0))),
        (_ = el(a, x)),
        0 < _.length &&
          ((x = new Nu(x, e, null, n, h)),
          p.push({ event: x, listeners: _ }),
          w ? (x.data = w) : ((w = ya(n)), w !== null && (x.data = w)))),
        (w = md ? vd(e, n) : yd(e, n)) &&
          ((a = el(a, "onBeforeInput")),
          0 < a.length &&
            ((h = new Nu("onBeforeInput", "beforeinput", null, n, h)),
            p.push({ event: h, listeners: a }),
            (h.data = w)));
    }
    Ma(p, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function el(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Gn(e, n)),
      i != null && r.unshift(tr(e, i, l)),
      (i = Gn(e, t)),
      i != null && r.push(tr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Wt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Uu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Gn(n, i)), s != null && o.unshift(tr(n, s, u)))
        : l || ((s = Gn(n, i)), s != null && o.push(tr(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Rd = /\r\n?/g,
  Td = /\u0000|\uFFFD/g;
function Au(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Rd,
      `
`
    )
    .replace(Td, "");
}
function Lr(e, t, n) {
  if (((t = Au(t)), Au(e) !== t && n)) throw Error(S(425));
}
function tl() {}
var Ii = null,
  ji = null;
function Fi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var $i = typeof setTimeout == "function" ? setTimeout : void 0,
  Od = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Bu = typeof Promise == "function" ? Promise : void 0,
  Dd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Bu < "u"
      ? function (e) {
          return Bu.resolve(null).then(e).catch(Id);
        }
      : $i;
function Id(e) {
  setTimeout(function () {
    throw e;
  });
}
function ti(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Jn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Jn(t);
}
function ht(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Hu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var kn = Math.random().toString(36).slice(2),
  Be = "__reactFiber$" + kn,
  nr = "__reactProps$" + kn,
  et = "__reactContainer$" + kn,
  Ui = "__reactEvents$" + kn,
  jd = "__reactListeners$" + kn,
  Fd = "__reactHandles$" + kn;
function Pt(e) {
  var t = e[Be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[et] || n[Be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Hu(e); e !== null; ) {
          if ((n = e[Be])) return n;
          e = Hu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function pr(e) {
  return (
    (e = e[Be] || e[et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function _l(e) {
  return e[nr] || null;
}
var Ai = [],
  Jt = -1;
function Et(e) {
  return { current: e };
}
function A(e) {
  0 > Jt || ((e.current = Ai[Jt]), (Ai[Jt] = null), Jt--);
}
function F(e, t) {
  Jt++, (Ai[Jt] = e.current), (e.current = t);
}
var St = {},
  oe = Et(St),
  me = Et(!1),
  Dt = St;
function fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return St;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ve(e) {
  return (e = e.childContextTypes), e != null;
}
function nl() {
  A(me), A(oe);
}
function Vu(e, t, n) {
  if (oe.current !== St) throw Error(S(168));
  F(oe, t), F(me, n);
}
function Ra(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, kf(e) || "Unknown", l));
  return Q({}, n, r);
}
function rl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || St),
    (Dt = oe.current),
    F(oe, e),
    F(me, me.current),
    !0
  );
}
function Wu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = Ra(e, t, Dt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      A(me),
      A(oe),
      F(oe, e))
    : A(me),
    F(me, n);
}
var Xe = null,
  Cl = !1,
  ni = !1;
function Ta(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
function $d(e) {
  (Cl = !0), Ta(e);
}
function xt() {
  if (!ni && Xe !== null) {
    ni = !0;
    var e = 0,
      t = I;
    try {
      var n = Xe;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Xe = null), (Cl = !1);
    } catch (l) {
      throw (Xe !== null && (Xe = Xe.slice(e + 1)), ra(_o, xt), l);
    } finally {
      (I = t), (ni = !1);
    }
  }
  return null;
}
var qt = [],
  bt = 0,
  ll = null,
  il = 0,
  Ce = [],
  Pe = 0,
  It = null,
  Ze = 1,
  Je = "";
function _t(e, t) {
  (qt[bt++] = il), (qt[bt++] = ll), (ll = e), (il = t);
}
function Oa(e, t, n) {
  (Ce[Pe++] = Ze), (Ce[Pe++] = Je), (Ce[Pe++] = It), (It = e);
  var r = Ze;
  e = Je;
  var l = 32 - je(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - je(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ze = (1 << (32 - je(t) + l)) | (n << l) | r),
      (Je = i + e);
  } else (Ze = (1 << i) | (n << l) | r), (Je = e);
}
function Oo(e) {
  e.return !== null && (_t(e, 1), Oa(e, 1, 0));
}
function Do(e) {
  for (; e === ll; )
    (ll = qt[--bt]), (qt[bt] = null), (il = qt[--bt]), (qt[bt] = null);
  for (; e === It; )
    (It = Ce[--Pe]),
      (Ce[Pe] = null),
      (Je = Ce[--Pe]),
      (Ce[Pe] = null),
      (Ze = Ce[--Pe]),
      (Ce[Pe] = null);
}
var Se = null,
  we = null,
  H = !1,
  Ie = null;
function Da(e, t) {
  var n = Ne(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Se = e), (we = ht(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (we = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = It !== null ? { id: Ze, overflow: Je } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ne(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Se = e),
            (we = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Bi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Hi(e) {
  if (H) {
    var t = we;
    if (t) {
      var n = t;
      if (!Qu(e, t)) {
        if (Bi(e)) throw Error(S(418));
        t = ht(n.nextSibling);
        var r = Se;
        t && Qu(e, t)
          ? Da(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Se = e));
      }
    } else {
      if (Bi(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (Se = e);
    }
  }
}
function Ku(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function Mr(e) {
  if (e !== Se) return !1;
  if (!H) return Ku(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Fi(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (Bi(e)) throw (Ia(), Error(S(418)));
    for (; t; ) Da(e, t), (t = ht(t.nextSibling));
  }
  if ((Ku(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = ht(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = Se ? ht(e.stateNode.nextSibling) : null;
  return !0;
}
function Ia() {
  for (var e = we; e; ) e = ht(e.nextSibling);
}
function dn() {
  (we = Se = null), (H = !1);
}
function Io(e) {
  Ie === null ? (Ie = [e]) : Ie.push(e);
}
var Ud = rt.ReactCurrentBatchConfig;
function Oe(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ol = Et(null),
  ul = null,
  en = null,
  jo = null;
function Fo() {
  jo = en = ul = null;
}
function $o(e) {
  var t = ol.current;
  A(ol), (e._currentValue = t);
}
function Vi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function sn(e, t) {
  (ul = e),
    (jo = en = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null));
}
function Me(e) {
  var t = e._currentValue;
  if (jo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), en === null)) {
      if (ul === null) throw Error(S(308));
      (en = e), (ul.dependencies = { lanes: 0, firstContext: e });
    } else en = en.next = e;
  return t;
}
var Nt = null;
function Uo(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function ja(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Uo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    tt(e, r)
  );
}
function tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ot = !1;
function Ao(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Fa(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function mt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      tt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Uo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    tt(e, n)
  );
}
function Ar(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Co(e, n);
  }
}
function Yu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function sl(e, t, n, r) {
  var l = e.updateQueue;
  ot = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), o === null ? (i = a) : (o.next = a), (o = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
        (h.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var p = l.baseState;
    (o = 0), (h = a = s = null), (u = i);
    do {
      var m = u.lane,
        v = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            k = u;
          switch (((m = t), (v = n), k.tag)) {
            case 1:
              if (((y = k.payload), typeof y == "function")) {
                p = y.call(v, p, m);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = k.payload),
                (m = typeof y == "function" ? y.call(v, p, m) : y),
                m == null)
              )
                break e;
              p = Q({}, p, m);
              break e;
            case 2:
              ot = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((a = h = v), (s = p)) : (h = h.next = v),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (s = p),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Ft |= o), (e.lanes = o), (e.memoizedState = p);
  }
}
function Gu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var $a = new js.Component().refs;
function Wi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Pl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? At(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = yt(e),
      i = qe(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = mt(e, i, l)),
      t !== null && (Fe(t, e, l, r), Ar(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = yt(e),
      i = qe(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = mt(e, i, l)),
      t !== null && (Fe(t, e, l, r), Ar(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = yt(e),
      l = qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = mt(e, l, r)),
      t !== null && (Fe(t, e, r, n), Ar(t, e, r));
  },
};
function Xu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bn(n, r) || !bn(l, i)
      : !0
  );
}
function Ua(e, t, n) {
  var r = !1,
    l = St,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Me(i))
      : ((l = ve(t) ? Dt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? fn(e, l) : St)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Pl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Zu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Pl.enqueueReplaceState(t, t.state, null);
}
function Qi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = $a), Ao(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Me(i))
    : ((i = ve(t) ? Dt : oe.current), (l.context = fn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Wi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Pl.enqueueReplaceState(l, l.state, null),
      sl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function zn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === $a && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function zr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ju(e) {
  var t = e._init;
  return t(e._payload);
}
function Aa(e) {
  function t(d, c) {
    if (e) {
      var f = d.deletions;
      f === null ? ((d.deletions = [c]), (d.flags |= 16)) : f.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function l(d, c) {
    return (d = gt(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, c, f) {
    return (
      (d.index = f),
      e
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < c ? ((d.flags |= 2), c) : f)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, f, g) {
    return c === null || c.tag !== 6
      ? ((c = ai(f, d.mode, g)), (c.return = d), c)
      : ((c = l(c, f)), (c.return = d), c);
  }
  function s(d, c, f, g) {
    var E = f.type;
    return E === Kt
      ? h(d, c, f.props.children, g, f.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === it &&
            Ju(E) === c.type))
      ? ((g = l(c, f.props)), (g.ref = zn(d, c, f)), (g.return = d), g)
      : ((g = Kr(f.type, f.key, f.props, null, d.mode, g)),
        (g.ref = zn(d, c, f)),
        (g.return = d),
        g);
  }
  function a(d, c, f, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = ci(f, d.mode, g)), (c.return = d), c)
      : ((c = l(c, f.children || [])), (c.return = d), c);
  }
  function h(d, c, f, g, E) {
    return c === null || c.tag !== 7
      ? ((c = Rt(f, d.mode, g, E)), (c.return = d), c)
      : ((c = l(c, f)), (c.return = d), c);
  }
  function p(d, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ai("" + c, d.mode, f)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case wr:
          return (
            (f = Kr(c.type, c.key, c.props, null, d.mode, f)),
            (f.ref = zn(d, null, c)),
            (f.return = d),
            f
          );
        case Qt:
          return (c = ci(c, d.mode, f)), (c.return = d), c;
        case it:
          var g = c._init;
          return p(d, g(c._payload), f);
      }
      if (Dn(c) || Cn(c))
        return (c = Rt(c, d.mode, f, null)), (c.return = d), c;
      zr(d, c);
    }
    return null;
  }
  function m(d, c, f, g) {
    var E = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return E !== null ? null : u(d, c, "" + f, g);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case wr:
          return f.key === E ? s(d, c, f, g) : null;
        case Qt:
          return f.key === E ? a(d, c, f, g) : null;
        case it:
          return (E = f._init), m(d, c, E(f._payload), g);
      }
      if (Dn(f) || Cn(f)) return E !== null ? null : h(d, c, f, g, null);
      zr(d, f);
    }
    return null;
  }
  function v(d, c, f, g, E) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (d = d.get(f) || null), u(c, d, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case wr:
          return (d = d.get(g.key === null ? f : g.key) || null), s(c, d, g, E);
        case Qt:
          return (d = d.get(g.key === null ? f : g.key) || null), a(c, d, g, E);
        case it:
          var _ = g._init;
          return v(d, c, f, _(g._payload), E);
      }
      if (Dn(g) || Cn(g)) return (d = d.get(f) || null), h(c, d, g, E, null);
      zr(c, g);
    }
    return null;
  }
  function y(d, c, f, g) {
    for (
      var E = null, _ = null, w = c, x = (c = 0), R = null;
      w !== null && x < f.length;
      x++
    ) {
      w.index > x ? ((R = w), (w = null)) : (R = w.sibling);
      var N = m(d, w, f[x], g);
      if (N === null) {
        w === null && (w = R);
        break;
      }
      e && w && N.alternate === null && t(d, w),
        (c = i(N, c, x)),
        _ === null ? (E = N) : (_.sibling = N),
        (_ = N),
        (w = R);
    }
    if (x === f.length) return n(d, w), H && _t(d, x), E;
    if (w === null) {
      for (; x < f.length; x++)
        (w = p(d, f[x], g)),
          w !== null &&
            ((c = i(w, c, x)), _ === null ? (E = w) : (_.sibling = w), (_ = w));
      return H && _t(d, x), E;
    }
    for (w = r(d, w); x < f.length; x++)
      (R = v(w, d, x, f[x], g)),
        R !== null &&
          (e && R.alternate !== null && w.delete(R.key === null ? x : R.key),
          (c = i(R, c, x)),
          _ === null ? (E = R) : (_.sibling = R),
          (_ = R));
    return (
      e &&
        w.forEach(function ($) {
          return t(d, $);
        }),
      H && _t(d, x),
      E
    );
  }
  function k(d, c, f, g) {
    var E = Cn(f);
    if (typeof E != "function") throw Error(S(150));
    if (((f = E.call(f)), f == null)) throw Error(S(151));
    for (
      var _ = (E = null), w = c, x = (c = 0), R = null, N = f.next();
      w !== null && !N.done;
      x++, N = f.next()
    ) {
      w.index > x ? ((R = w), (w = null)) : (R = w.sibling);
      var $ = m(d, w, N.value, g);
      if ($ === null) {
        w === null && (w = R);
        break;
      }
      e && w && $.alternate === null && t(d, w),
        (c = i($, c, x)),
        _ === null ? (E = $) : (_.sibling = $),
        (_ = $),
        (w = R);
    }
    if (N.done) return n(d, w), H && _t(d, x), E;
    if (w === null) {
      for (; !N.done; x++, N = f.next())
        (N = p(d, N.value, g)),
          N !== null &&
            ((c = i(N, c, x)), _ === null ? (E = N) : (_.sibling = N), (_ = N));
      return H && _t(d, x), E;
    }
    for (w = r(d, w); !N.done; x++, N = f.next())
      (N = v(w, d, x, N.value, g)),
        N !== null &&
          (e && N.alternate !== null && w.delete(N.key === null ? x : N.key),
          (c = i(N, c, x)),
          _ === null ? (E = N) : (_.sibling = N),
          (_ = N));
    return (
      e &&
        w.forEach(function (de) {
          return t(d, de);
        }),
      H && _t(d, x),
      E
    );
  }
  function M(d, c, f, g) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Kt &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case wr:
          e: {
            for (var E = f.key, _ = c; _ !== null; ) {
              if (_.key === E) {
                if (((E = f.type), E === Kt)) {
                  if (_.tag === 7) {
                    n(d, _.sibling),
                      (c = l(_, f.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  _.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === it &&
                    Ju(E) === _.type)
                ) {
                  n(d, _.sibling),
                    (c = l(_, f.props)),
                    (c.ref = zn(d, _, f)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, _);
                break;
              } else t(d, _);
              _ = _.sibling;
            }
            f.type === Kt
              ? ((c = Rt(f.props.children, d.mode, g, f.key)),
                (c.return = d),
                (d = c))
              : ((g = Kr(f.type, f.key, f.props, null, d.mode, g)),
                (g.ref = zn(d, c, f)),
                (g.return = d),
                (d = g));
          }
          return o(d);
        case Qt:
          e: {
            for (_ = f.key; c !== null; ) {
              if (c.key === _)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(d, c.sibling),
                    (c = l(c, f.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = ci(f, d.mode, g)), (c.return = d), (d = c);
          }
          return o(d);
        case it:
          return (_ = f._init), M(d, c, _(f._payload), g);
      }
      if (Dn(f)) return y(d, c, f, g);
      if (Cn(f)) return k(d, c, f, g);
      zr(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, f)), (c.return = d), (d = c))
          : (n(d, c), (c = ai(f, d.mode, g)), (c.return = d), (d = c)),
        o(d))
      : n(d, c);
  }
  return M;
}
var pn = Aa(!0),
  Ba = Aa(!1),
  hr = {},
  We = Et(hr),
  rr = Et(hr),
  lr = Et(hr);
function Lt(e) {
  if (e === hr) throw Error(S(174));
  return e;
}
function Bo(e, t) {
  switch ((F(lr, t), F(rr, e), F(We, hr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = xi(t, e));
  }
  A(We), F(We, t);
}
function hn() {
  A(We), A(rr), A(lr);
}
function Ha(e) {
  Lt(lr.current);
  var t = Lt(We.current),
    n = xi(t, e.type);
  t !== n && (F(rr, e), F(We, n));
}
function Ho(e) {
  rr.current === e && (A(We), A(rr));
}
var V = Et(0);
function al(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ri = [];
function Vo() {
  for (var e = 0; e < ri.length; e++)
    ri[e]._workInProgressVersionPrimary = null;
  ri.length = 0;
}
var Br = rt.ReactCurrentDispatcher,
  li = rt.ReactCurrentBatchConfig,
  jt = 0,
  W = null,
  Z = null,
  q = null,
  cl = !1,
  Hn = !1,
  ir = 0,
  Ad = 0;
function re() {
  throw Error(S(321));
}
function Wo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!$e(e[n], t[n])) return !1;
  return !0;
}
function Qo(e, t, n, r, l, i) {
  if (
    ((jt = i),
    (W = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Br.current = e === null || e.memoizedState === null ? Wd : Qd),
    (e = n(r, l)),
    Hn)
  ) {
    i = 0;
    do {
      if (((Hn = !1), (ir = 0), 25 <= i)) throw Error(S(301));
      (i += 1),
        (q = Z = null),
        (t.updateQueue = null),
        (Br.current = Kd),
        (e = n(r, l));
    } while (Hn);
  }
  if (
    ((Br.current = fl),
    (t = Z !== null && Z.next !== null),
    (jt = 0),
    (q = Z = W = null),
    (cl = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function Ko() {
  var e = ir !== 0;
  return (ir = 0), e;
}
function Ae() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (W.memoizedState = q = e) : (q = q.next = e), q;
}
function ze() {
  if (Z === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = q === null ? W.memoizedState : q.next;
  if (t !== null) (q = t), (Z = e);
  else {
    if (e === null) throw Error(S(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      q === null ? (W.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function or(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ii(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = Z,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      a = i;
    do {
      var h = a.lane;
      if ((jt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = p), (o = r)) : (s = s.next = p),
          (W.lanes |= h),
          (Ft |= h);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (o = r) : (s.next = u),
      $e(r, t.memoizedState) || (he = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (W.lanes |= i), (Ft |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function oi(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    $e(i, t.memoizedState) || (he = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Va() {}
function Wa(e, t) {
  var n = W,
    r = ze(),
    l = t(),
    i = !$e(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (he = !0)),
    (r = r.queue),
    Yo(Ya.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ur(9, Ka.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(S(349));
    jt & 30 || Qa(n, t, l);
  }
  return l;
}
function Qa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ka(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ga(t) && Xa(e);
}
function Ya(e, t, n) {
  return n(function () {
    Ga(t) && Xa(e);
  });
}
function Ga(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$e(e, n);
  } catch {
    return !0;
  }
}
function Xa(e) {
  var t = tt(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function qu(e) {
  var t = Ae();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: or,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Vd.bind(null, W, e)),
    [t.memoizedState, e]
  );
}
function ur(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Za() {
  return ze().memoizedState;
}
function Hr(e, t, n, r) {
  var l = Ae();
  (W.flags |= e),
    (l.memoizedState = ur(1 | t, n, void 0, r === void 0 ? null : r));
}
function Nl(e, t, n, r) {
  var l = ze();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Z !== null) {
    var o = Z.memoizedState;
    if (((i = o.destroy), r !== null && Wo(r, o.deps))) {
      l.memoizedState = ur(t, n, i, r);
      return;
    }
  }
  (W.flags |= e), (l.memoizedState = ur(1 | t, n, i, r));
}
function bu(e, t) {
  return Hr(8390656, 8, e, t);
}
function Yo(e, t) {
  return Nl(2048, 8, e, t);
}
function Ja(e, t) {
  return Nl(4, 2, e, t);
}
function qa(e, t) {
  return Nl(4, 4, e, t);
}
function ba(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ec(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Nl(4, 4, ba.bind(null, t, e), n)
  );
}
function Go() {}
function tc(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function nc(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function rc(e, t, n) {
  return jt & 21
    ? ($e(n, t) || ((n = oa()), (W.lanes |= n), (Ft |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n));
}
function Bd(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = li.transition;
  li.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (li.transition = r);
  }
}
function lc() {
  return ze().memoizedState;
}
function Hd(e, t, n) {
  var r = yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ic(e))
  )
    oc(t, n);
  else if (((n = ja(e, t, n, r)), n !== null)) {
    var l = se();
    Fe(n, e, r, l), uc(n, t, r);
  }
}
function Vd(e, t, n) {
  var r = yt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ic(e)) oc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), $e(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Uo(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ja(e, t, l, r)),
      n !== null && ((l = se()), Fe(n, e, r, l), uc(n, t, r));
  }
}
function ic(e) {
  var t = e.alternate;
  return e === W || (t !== null && t === W);
}
function oc(e, t) {
  Hn = cl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function uc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Co(e, n);
  }
}
var fl = {
    readContext: Me,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Wd = {
    readContext: Me,
    useCallback: function (e, t) {
      return (Ae().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Me,
    useEffect: bu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hr(4194308, 4, ba.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ae();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ae();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Hd.bind(null, W, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ae();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: qu,
    useDebugValue: Go,
    useDeferredValue: function (e) {
      return (Ae().memoizedState = e);
    },
    useTransition: function () {
      var e = qu(!1),
        t = e[0];
      return (e = Bd.bind(null, e[1])), (Ae().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = W,
        l = Ae();
      if (H) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(S(349));
        jt & 30 || Qa(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        bu(Ya.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ur(9, Ka.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ae(),
        t = b.identifierPrefix;
      if (H) {
        var n = Je,
          r = Ze;
        (n = (r & ~(1 << (32 - je(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ir++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ad++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Qd = {
    readContext: Me,
    useCallback: tc,
    useContext: Me,
    useEffect: Yo,
    useImperativeHandle: ec,
    useInsertionEffect: Ja,
    useLayoutEffect: qa,
    useMemo: nc,
    useReducer: ii,
    useRef: Za,
    useState: function () {
      return ii(or);
    },
    useDebugValue: Go,
    useDeferredValue: function (e) {
      var t = ze();
      return rc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = ii(or)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: Va,
    useSyncExternalStore: Wa,
    useId: lc,
    unstable_isNewReconciler: !1,
  },
  Kd = {
    readContext: Me,
    useCallback: tc,
    useContext: Me,
    useEffect: Yo,
    useImperativeHandle: ec,
    useInsertionEffect: Ja,
    useLayoutEffect: qa,
    useMemo: nc,
    useReducer: oi,
    useRef: Za,
    useState: function () {
      return oi(or);
    },
    useDebugValue: Go,
    useDeferredValue: function (e) {
      var t = ze();
      return Z === null ? (t.memoizedState = e) : rc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = oi(or)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: Va,
    useSyncExternalStore: Wa,
    useId: lc,
    unstable_isNewReconciler: !1,
  };
function mn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Sf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ui(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ki(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Yd = typeof WeakMap == "function" ? WeakMap : Map;
function sc(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      pl || ((pl = !0), (no = r)), Ki(e, t);
    }),
    n
  );
}
function ac(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ki(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ki(e, t),
          typeof r != "function" &&
            (vt === null ? (vt = new Set([this])) : vt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function es(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Yd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = up.bind(null, e, t, n)), t.then(e, e));
}
function ts(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ns(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = qe(-1, 1)), (t.tag = 2), mt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Gd = rt.ReactCurrentOwner,
  he = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Ba(t, null, n, r) : pn(t, e.child, n, r);
}
function rs(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    sn(t, l),
    (r = Qo(e, t, n, r, i, l)),
    (n = Ko()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        nt(e, t, l))
      : (H && n && Oo(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function ls(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !nu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), cc(e, t, i, r, l))
      : ((e = Kr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bn), n(o, r) && e.ref === t.ref)
    )
      return nt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = gt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function cc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (bn(i, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (he = !0);
      else return (t.lanes = e.lanes), nt(e, t, l);
  }
  return Yi(e, t, n, r, l);
}
function fc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(nn, ge),
        (ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          F(nn, ge),
          (ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        F(nn, ge),
        (ge |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(nn, ge),
      (ge |= r);
  return ue(e, t, l, n), t.child;
}
function dc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Yi(e, t, n, r, l) {
  var i = ve(n) ? Dt : oe.current;
  return (
    (i = fn(t, i)),
    sn(t, l),
    (n = Qo(e, t, n, r, i, l)),
    (r = Ko()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        nt(e, t, l))
      : (H && r && Oo(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function is(e, t, n, r, l) {
  if (ve(n)) {
    var i = !0;
    rl(t);
  } else i = !1;
  if ((sn(t, l), t.stateNode === null))
    Vr(e, t), Ua(t, n, r), Qi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Me(a))
      : ((a = ve(n) ? Dt : oe.current), (a = fn(t, a)));
    var h = n.getDerivedStateFromProps,
      p =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && Zu(t, o, r, a)),
      (ot = !1);
    var m = t.memoizedState;
    (o.state = m),
      sl(t, r, o, l),
      (s = t.memoizedState),
      u !== r || m !== s || me.current || ot
        ? (typeof h == "function" && (Wi(t, n, h, r), (s = t.memoizedState)),
          (u = ot || Xu(t, n, u, r, m, s, a))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = a),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Fa(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Oe(t.type, u)),
      (o.props = a),
      (p = t.pendingProps),
      (m = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Me(s))
        : ((s = ve(n) ? Dt : oe.current), (s = fn(t, s)));
    var v = n.getDerivedStateFromProps;
    (h =
      typeof v == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== p || m !== s) && Zu(t, o, r, s)),
      (ot = !1),
      (m = t.memoizedState),
      (o.state = m),
      sl(t, r, o, l);
    var y = t.memoizedState;
    u !== p || m !== y || me.current || ot
      ? (typeof v == "function" && (Wi(t, n, v, r), (y = t.memoizedState)),
        (a = ot || Xu(t, n, a, r, m, y, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = s),
        (r = a))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Gi(e, t, n, r, i, l);
}
function Gi(e, t, n, r, l, i) {
  dc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Wu(t, n, !1), nt(e, t, i);
  (r = t.stateNode), (Gd.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = pn(t, e.child, null, i)), (t.child = pn(t, null, u, i)))
      : ue(e, t, u, i),
    (t.memoizedState = r.state),
    l && Wu(t, n, !0),
    t.child
  );
}
function pc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Vu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Vu(e, t.context, !1),
    Bo(e, t.containerInfo);
}
function os(e, t, n, r, l) {
  return dn(), Io(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Xi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function hc(e, t, n) {
  var r = t.pendingProps,
    l = V.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    F(V, l & 1),
    e === null)
  )
    return (
      Hi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = zl(o, r, 0, null)),
              (e = Rt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Zi(n)),
              (t.memoizedState = Xi),
              e)
            : Xo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Xd(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = gt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = gt(u, i)) : ((i = Rt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Zi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = gt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Xo(e, t) {
  return (
    (t = zl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Rr(e, t, n, r) {
  return (
    r !== null && Io(r),
    pn(t, e.child, null, n),
    (e = Xo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Xd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ui(Error(S(422)))), Rr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = zl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Rt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && pn(t, e.child, null, o),
        (t.child.memoizedState = Zi(o)),
        (t.memoizedState = Xi),
        i);
  if (!(t.mode & 1)) return Rr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(S(419))), (r = ui(i, r, void 0)), Rr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), he || u)) {
    if (((r = b), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), tt(e, l), Fe(r, e, l, -1));
    }
    return tu(), (r = ui(Error(S(421)))), Rr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = sp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (we = ht(l.nextSibling)),
      (Se = t),
      (H = !0),
      (Ie = null),
      e !== null &&
        ((Ce[Pe++] = Ze),
        (Ce[Pe++] = Je),
        (Ce[Pe++] = It),
        (Ze = e.id),
        (Je = e.overflow),
        (It = t)),
      (t = Xo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function us(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Vi(e.return, t, n);
}
function si(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function mc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ue(e, t, r.children, n), (r = V.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && us(e, n, t);
        else if (e.tag === 19) us(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F(V, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && al(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          si(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && al(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        si(t, !0, n, null, i);
        break;
      case "together":
        si(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ft |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = gt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = gt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Zd(e, t, n) {
  switch (t.tag) {
    case 3:
      pc(t), dn();
      break;
    case 5:
      Ha(t);
      break;
    case 1:
      ve(t.type) && rl(t);
      break;
    case 4:
      Bo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      F(ol, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(V, V.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? hc(e, t, n)
          : (F(V, V.current & 1),
            (e = nt(e, t, n)),
            e !== null ? e.sibling : null);
      F(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return mc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        F(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), fc(e, t, n);
  }
  return nt(e, t, n);
}
var vc, Ji, yc, gc;
vc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ji = function () {};
yc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Lt(We.current);
    var i = null;
    switch (n) {
      case "input":
        (l = wi(e, l)), (r = wi(e, r)), (i = []);
        break;
      case "select":
        (l = Q({}, l, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Ei(e, l)), (r = Ei(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = tl);
    }
    _i(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Kn.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Kn.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && U("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
gc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rn(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Jd(e, t, n) {
  var r = t.pendingProps;
  switch ((Do(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return ve(t.type) && nl(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        hn(),
        A(me),
        A(oe),
        Vo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Mr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ie !== null && (io(Ie), (Ie = null)))),
        Ji(e, t),
        le(t),
        null
      );
    case 5:
      Ho(t);
      var l = Lt(lr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        yc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return le(t), null;
        }
        if (((e = Lt(We.current)), Mr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Be] = t), (r[nr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < jn.length; l++) U(jn[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              vu(r, i), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              gu(r, i), U("invalid", r);
          }
          _i(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Lr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Lr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Kn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              Sr(r), yu(r, i, !0);
              break;
            case "textarea":
              Sr(r), wu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = tl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Qs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Be] = t),
            (e[nr] = r),
            vc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Ci(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < jn.length; l++) U(jn[l], e);
                l = r;
                break;
              case "source":
                U("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (l = r);
                break;
              case "details":
                U("toggle", e), (l = r);
                break;
              case "input":
                vu(e, r), (l = wi(e, r)), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Q({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                gu(e, r), (l = Ei(e, r)), U("invalid", e);
                break;
              default:
                l = r;
            }
            _i(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Gs(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Ks(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Yn(e, s)
                    : typeof s == "number" && Yn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Kn.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && U("scroll", e)
                      : s != null && wo(e, i, s, o));
              }
            switch (n) {
              case "input":
                Sr(e), yu(e, r, !1);
                break;
              case "textarea":
                Sr(e), wu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? rn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      rn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = tl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) gc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = Lt(lr.current)), Lt(We.current), Mr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Be] = t),
            (i = r.nodeValue !== n) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                Lr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Lr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Be] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (A(V),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && we !== null && t.mode & 1 && !(t.flags & 128))
          Ia(), dn(), (t.flags |= 98560), (i = !1);
        else if (((i = Mr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(S(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(S(317));
            i[Be] = t;
          } else
            dn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (i = !1);
        } else Ie !== null && (io(Ie), (Ie = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || V.current & 1 ? J === 0 && (J = 3) : tu())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        hn(), Ji(e, t), e === null && er(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return $o(t.type._context), le(t), null;
    case 17:
      return ve(t.type) && nl(), le(t), null;
    case 19:
      if ((A(V), (i = t.memoizedState), i === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Rn(i, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = al(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Rn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Y() > vn &&
            ((t.flags |= 128), (r = !0), Rn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = al(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Rn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !H)
            )
              return le(t), null;
          } else
            2 * Y() - i.renderingStartTime > vn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Rn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Y()),
          (t.sibling = null),
          (n = V.current),
          F(V, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        eu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ge & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function qd(e, t) {
  switch ((Do(t), t.tag)) {
    case 1:
      return (
        ve(t.type) && nl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        hn(),
        A(me),
        A(oe),
        Vo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ho(t), null;
    case 13:
      if ((A(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        dn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return A(V), null;
    case 4:
      return hn(), null;
    case 10:
      return $o(t.type._context), null;
    case 22:
    case 23:
      return eu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Tr = !1,
  ie = !1,
  bd = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function qi(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var ss = !1;
function ep(e, t) {
  if (((Ii = qr), (e = Ea()), To(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            a = 0,
            h = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var v;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = o + l),
                p !== i || (r !== 0 && p.nodeType !== 3) || (s = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (v = p.firstChild) !== null;

            )
              (m = p), (p = v);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++a === l && (u = o),
                m === i && ++h === r && (s = o),
                (v = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = v;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ji = { focusedElem: e, selectionRange: n }, qr = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var k = y.memoizedProps,
                    M = y.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Oe(t.type, k),
                      M
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (g) {
          K(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (y = ss), (ss = !1), y;
}
function Vn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && qi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ll(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function wc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), wc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Be], delete t[nr], delete t[Ui], delete t[jd], delete t[Fd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Sc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function as(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Sc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function eo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = tl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (eo(e, t, n), e = e.sibling; e !== null; ) eo(e, t, n), (e = e.sibling);
}
function to(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (to(e, t, n), e = e.sibling; e !== null; ) to(e, t, n), (e = e.sibling);
}
var ee = null,
  De = !1;
function lt(e, t, n) {
  for (n = n.child; n !== null; ) kc(e, t, n), (n = n.sibling);
}
function kc(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function")
    try {
      Ve.onCommitFiberUnmount(Sl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || tn(n, t);
    case 6:
      var r = ee,
        l = De;
      (ee = null),
        lt(e, t, n),
        (ee = r),
        (De = l),
        ee !== null &&
          (De
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (De
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? ti(e.parentNode, n)
              : e.nodeType === 1 && ti(e, n),
            Jn(e))
          : ti(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = De),
        (ee = n.stateNode.containerInfo),
        (De = !0),
        lt(e, t, n),
        (ee = r),
        (De = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && qi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      lt(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (tn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          K(n, t, u);
        }
      lt(e, t, n);
      break;
    case 21:
      lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), lt(e, t, n), (ie = r))
        : lt(e, t, n);
      break;
    default:
      lt(e, t, n);
  }
}
function cs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new bd()),
      t.forEach(function (r) {
        var l = ap.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Te(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (De = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (De = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (De = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(S(160));
        kc(i, o, l), (ee = null), (De = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        K(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ec(t, e), (t = t.sibling);
}
function Ec(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Te(t, e), Ue(e), r & 4)) {
        try {
          Vn(3, e, e.return), Ll(3, e);
        } catch (k) {
          K(e, e.return, k);
        }
        try {
          Vn(5, e, e.return);
        } catch (k) {
          K(e, e.return, k);
        }
      }
      break;
    case 1:
      Te(t, e), Ue(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (
        (Te(t, e),
        Ue(e),
        r & 512 && n !== null && tn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Yn(l, "");
        } catch (k) {
          K(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && Vs(l, i),
              Ci(u, o);
            var a = Ci(u, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                p = s[o + 1];
              h === "style"
                ? Gs(l, p)
                : h === "dangerouslySetInnerHTML"
                ? Ks(l, p)
                : h === "children"
                ? Yn(l, p)
                : wo(l, h, p, a);
            }
            switch (u) {
              case "input":
                Si(l, i);
                break;
              case "textarea":
                Ws(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? rn(l, !!i.multiple, v, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? rn(l, !!i.multiple, i.defaultValue, !0)
                      : rn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[nr] = i;
          } catch (k) {
            K(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Te(t, e), Ue(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          K(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Te(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jn(t.containerInfo);
        } catch (k) {
          K(e, e.return, k);
        }
      break;
    case 4:
      Te(t, e), Ue(e);
      break;
    case 13:
      Te(t, e),
        Ue(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (qo = Y())),
        r & 4 && cs(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || h), Te(t, e), (ie = a)) : Te(t, e),
        Ue(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (P = e, h = e.child; h !== null; ) {
            for (p = P = h; P !== null; ) {
              switch (((m = P), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vn(4, m, m.return);
                  break;
                case 1:
                  tn(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (k) {
                      K(r, n, k);
                    }
                  }
                  break;
                case 5:
                  tn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    ds(p);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (P = v)) : ds(p);
            }
            h = h.sibling;
          }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                (l = p.stateNode),
                  a
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Ys("display", o)));
              } catch (k) {
                K(e, e.return, k);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = a ? "" : p.memoizedProps;
              } catch (k) {
                K(e, e.return, k);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), (p = p.return);
          }
          h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Te(t, e), Ue(e), r & 4 && cs(e);
      break;
    case 21:
      break;
    default:
      Te(t, e), Ue(e);
  }
}
function Ue(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Sc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Yn(l, ""), (r.flags &= -33));
          var i = as(e);
          to(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = as(e);
          eo(e, u, o);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      K(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function tp(e, t, n) {
  (P = e), xc(e);
}
function xc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Tr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = Tr;
        var a = ie;
        if (((Tr = o), (ie = s) && !a))
          for (P = l; P !== null; )
            (o = P),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ps(l)
                : s !== null
                ? ((s.return = o), (P = s))
                : ps(l);
        for (; i !== null; ) (P = i), xc(i), (i = i.sibling);
        (P = l), (Tr = u), (ie = a);
      }
      fs(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (P = i)) : fs(e);
  }
}
function fs(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Ll(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Oe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Gu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Gu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && Jn(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        ie || (t.flags & 512 && bi(t));
      } catch (m) {
        K(t, t.return, m);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function ds(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function ps(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ll(4, t);
          } catch (s) {
            K(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              K(t, l, s);
            }
          }
          var i = t.return;
          try {
            bi(t);
          } catch (s) {
            K(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            bi(t);
          } catch (s) {
            K(t, o, s);
          }
      }
    } catch (s) {
      K(t, t.return, s);
    }
    if (t === e) {
      P = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (P = u);
      break;
    }
    P = t.return;
  }
}
var np = Math.ceil,
  dl = rt.ReactCurrentDispatcher,
  Zo = rt.ReactCurrentOwner,
  Le = rt.ReactCurrentBatchConfig,
  O = 0,
  b = null,
  X = null,
  te = 0,
  ge = 0,
  nn = Et(0),
  J = 0,
  sr = null,
  Ft = 0,
  Ml = 0,
  Jo = 0,
  Wn = null,
  pe = null,
  qo = 0,
  vn = 1 / 0,
  Ge = null,
  pl = !1,
  no = null,
  vt = null,
  Or = !1,
  ct = null,
  hl = 0,
  Qn = 0,
  ro = null,
  Wr = -1,
  Qr = 0;
function se() {
  return O & 6 ? Y() : Wr !== -1 ? Wr : (Wr = Y());
}
function yt(e) {
  return e.mode & 1
    ? O & 2 && te !== 0
      ? te & -te
      : Ud.transition !== null
      ? (Qr === 0 && (Qr = oa()), Qr)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : pa(e.type))),
        e)
    : 1;
}
function Fe(e, t, n, r) {
  if (50 < Qn) throw ((Qn = 0), (ro = null), Error(S(185)));
  fr(e, n, r),
    (!(O & 2) || e !== b) &&
      (e === b && (!(O & 2) && (Ml |= n), J === 4 && st(e, te)),
      ye(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((vn = Y() + 500), Cl && xt()));
}
function ye(e, t) {
  var n = e.callbackNode;
  Uf(e, t);
  var r = Jr(e, e === b ? te : 0);
  if (r === 0)
    n !== null && Eu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Eu(n), t === 1))
      e.tag === 0 ? $d(hs.bind(null, e)) : Ta(hs.bind(null, e)),
        Dd(function () {
          !(O & 6) && xt();
        }),
        (n = null);
    else {
      switch (ua(r)) {
        case 1:
          n = _o;
          break;
        case 4:
          n = la;
          break;
        case 16:
          n = Zr;
          break;
        case 536870912:
          n = ia;
          break;
        default:
          n = Zr;
      }
      n = Rc(n, _c.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function _c(e, t) {
  if (((Wr = -1), (Qr = 0), O & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (an() && e.callbackNode !== n) return null;
  var r = Jr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ml(e, r);
  else {
    t = r;
    var l = O;
    O |= 2;
    var i = Pc();
    (b !== e || te !== t) && ((Ge = null), (vn = Y() + 500), zt(e, t));
    do
      try {
        ip();
        break;
      } catch (u) {
        Cc(e, u);
      }
    while (1);
    Fo(),
      (dl.current = i),
      (O = l),
      X !== null ? (t = 0) : ((b = null), (te = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = zi(e)), l !== 0 && ((r = l), (t = lo(e, l)))), t === 1)
    )
      throw ((n = sr), zt(e, 0), st(e, r), ye(e, Y()), n);
    if (t === 6) st(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !rp(l) &&
          ((t = ml(e, r)),
          t === 2 && ((i = zi(e)), i !== 0 && ((r = i), (t = lo(e, i)))),
          t === 1))
      )
        throw ((n = sr), zt(e, 0), st(e, r), ye(e, Y()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Ct(e, pe, Ge);
          break;
        case 3:
          if (
            (st(e, r), (r & 130023424) === r && ((t = qo + 500 - Y()), 10 < t))
          ) {
            if (Jr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = $i(Ct.bind(null, e, pe, Ge), t);
            break;
          }
          Ct(e, pe, Ge);
          break;
        case 4:
          if ((st(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - je(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * np(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $i(Ct.bind(null, e, pe, Ge), r);
            break;
          }
          Ct(e, pe, Ge);
          break;
        case 5:
          Ct(e, pe, Ge);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return ye(e, Y()), e.callbackNode === n ? _c.bind(null, e) : null;
}
function lo(e, t) {
  var n = Wn;
  return (
    e.current.memoizedState.isDehydrated && (zt(e, t).flags |= 256),
    (e = ml(e, t)),
    e !== 2 && ((t = pe), (pe = n), t !== null && io(t)),
    e
  );
}
function io(e) {
  pe === null ? (pe = e) : pe.push.apply(pe, e);
}
function rp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!$e(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function st(e, t) {
  for (
    t &= ~Jo,
      t &= ~Ml,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - je(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function hs(e) {
  if (O & 6) throw Error(S(327));
  an();
  var t = Jr(e, 0);
  if (!(t & 1)) return ye(e, Y()), null;
  var n = ml(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zi(e);
    r !== 0 && ((t = r), (n = lo(e, r)));
  }
  if (n === 1) throw ((n = sr), zt(e, 0), st(e, t), ye(e, Y()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ct(e, pe, Ge),
    ye(e, Y()),
    null
  );
}
function bo(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === 0 && ((vn = Y() + 500), Cl && xt());
  }
}
function $t(e) {
  ct !== null && ct.tag === 0 && !(O & 6) && an();
  var t = O;
  O |= 1;
  var n = Le.transition,
    r = I;
  try {
    if (((Le.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (Le.transition = n), (O = t), !(O & 6) && xt();
  }
}
function eu() {
  (ge = nn.current), A(nn);
}
function zt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Od(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((Do(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && nl();
          break;
        case 3:
          hn(), A(me), A(oe), Vo();
          break;
        case 5:
          Ho(r);
          break;
        case 4:
          hn();
          break;
        case 13:
          A(V);
          break;
        case 19:
          A(V);
          break;
        case 10:
          $o(r.type._context);
          break;
        case 22:
        case 23:
          eu();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (X = e = gt(e.current, null)),
    (te = ge = t),
    (J = 0),
    (sr = null),
    (Jo = Ml = Ft = 0),
    (pe = Wn = null),
    Nt !== null)
  ) {
    for (t = 0; t < Nt.length; t++)
      if (((n = Nt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Nt = null;
  }
  return e;
}
function Cc(e, t) {
  do {
    var n = X;
    try {
      if ((Fo(), (Br.current = fl), cl)) {
        for (var r = W.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        cl = !1;
      }
      if (
        ((jt = 0),
        (q = Z = W = null),
        (Hn = !1),
        (ir = 0),
        (Zo.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (sr = t), (X = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            h = u,
            p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var v = ts(o);
          if (v !== null) {
            (v.flags &= -257),
              ns(v, o, u, i, t),
              v.mode & 1 && es(i, a, t),
              (t = v),
              (s = a);
            var y = t.updateQueue;
            if (y === null) {
              var k = new Set();
              k.add(s), (t.updateQueue = k);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              es(i, a, t), tu();
              break e;
            }
            s = Error(S(426));
          }
        } else if (H && u.mode & 1) {
          var M = ts(o);
          if (M !== null) {
            !(M.flags & 65536) && (M.flags |= 256),
              ns(M, o, u, i, t),
              Io(mn(s, u));
            break e;
          }
        }
        (i = s = mn(s, u)),
          J !== 4 && (J = 2),
          Wn === null ? (Wn = [i]) : Wn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = sc(i, s, t);
              Yu(i, d);
              break e;
            case 1:
              u = s;
              var c = i.type,
                f = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (vt === null || !vt.has(f))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = ac(i, u, t);
                Yu(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Lc(n);
    } catch (E) {
      (t = E), X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Pc() {
  var e = dl.current;
  return (dl.current = fl), e === null ? fl : e;
}
function tu() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    b === null || (!(Ft & 268435455) && !(Ml & 268435455)) || st(b, te);
}
function ml(e, t) {
  var n = O;
  O |= 2;
  var r = Pc();
  (b !== e || te !== t) && ((Ge = null), zt(e, t));
  do
    try {
      lp();
      break;
    } catch (l) {
      Cc(e, l);
    }
  while (1);
  if ((Fo(), (O = n), (dl.current = r), X !== null)) throw Error(S(261));
  return (b = null), (te = 0), J;
}
function lp() {
  for (; X !== null; ) Nc(X);
}
function ip() {
  for (; X !== null && !zf(); ) Nc(X);
}
function Nc(e) {
  var t = zc(e.alternate, e, ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? Lc(e) : (X = t),
    (Zo.current = null);
}
function Lc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = qd(n, t)), n !== null)) {
        (n.flags &= 32767), (X = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (X = null);
        return;
      }
    } else if (((n = Jd(n, t, ge)), n !== null)) {
      X = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function Ct(e, t, n) {
  var r = I,
    l = Le.transition;
  try {
    (Le.transition = null), (I = 1), op(e, t, n, r);
  } finally {
    (Le.transition = l), (I = r);
  }
  return null;
}
function op(e, t, n, r) {
  do an();
  while (ct !== null);
  if (O & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Af(e, i),
    e === b && ((X = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Or ||
      ((Or = !0),
      Rc(Zr, function () {
        return an(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Le.transition), (Le.transition = null);
    var o = I;
    I = 1;
    var u = O;
    (O |= 4),
      (Zo.current = null),
      ep(e, n),
      Ec(n, e),
      Pd(ji),
      (qr = !!Ii),
      (ji = Ii = null),
      (e.current = n),
      tp(n),
      Rf(),
      (O = u),
      (I = o),
      (Le.transition = i);
  } else e.current = n;
  if (
    (Or && ((Or = !1), (ct = e), (hl = l)),
    (i = e.pendingLanes),
    i === 0 && (vt = null),
    Df(n.stateNode),
    ye(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (pl) throw ((pl = !1), (e = no), (no = null), e);
  return (
    hl & 1 && e.tag !== 0 && an(),
    (i = e.pendingLanes),
    i & 1 ? (e === ro ? Qn++ : ((Qn = 0), (ro = e))) : (Qn = 0),
    xt(),
    null
  );
}
function an() {
  if (ct !== null) {
    var e = ua(hl),
      t = Le.transition,
      n = I;
    try {
      if (((Le.transition = null), (I = 16 > e ? 16 : e), ct === null))
        var r = !1;
      else {
        if (((e = ct), (ct = null), (hl = 0), O & 6)) throw Error(S(331));
        var l = O;
        for (O |= 4, P = e.current; P !== null; ) {
          var i = P,
            o = i.child;
          if (P.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (P = a; P !== null; ) {
                  var h = P;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, h, i);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (P = p);
                  else
                    for (; P !== null; ) {
                      h = P;
                      var m = h.sibling,
                        v = h.return;
                      if ((wc(h), h === a)) {
                        P = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (P = m);
                        break;
                      }
                      P = v;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var k = y.child;
                if (k !== null) {
                  y.child = null;
                  do {
                    var M = k.sibling;
                    (k.sibling = null), (k = M);
                  } while (k !== null);
                }
              }
              P = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (P = o);
          else
            e: for (; P !== null; ) {
              if (((i = P), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vn(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (P = d);
                break e;
              }
              P = i.return;
            }
        }
        var c = e.current;
        for (P = c; P !== null; ) {
          o = P;
          var f = o.child;
          if (o.subtreeFlags & 2064 && f !== null) (f.return = o), (P = f);
          else
            e: for (o = c; P !== null; ) {
              if (((u = P), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ll(9, u);
                  }
                } catch (E) {
                  K(u, u.return, E);
                }
              if (u === o) {
                P = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (P = g);
                break e;
              }
              P = u.return;
            }
        }
        if (
          ((O = l), xt(), Ve && typeof Ve.onPostCommitFiberRoot == "function")
        )
          try {
            Ve.onPostCommitFiberRoot(Sl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (Le.transition = t);
    }
  }
  return !1;
}
function ms(e, t, n) {
  (t = mn(n, t)),
    (t = sc(e, t, 1)),
    (e = mt(e, t, 1)),
    (t = se()),
    e !== null && (fr(e, 1, t), ye(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) ms(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ms(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (vt === null || !vt.has(r)))
        ) {
          (e = mn(n, e)),
            (e = ac(t, e, 1)),
            (t = mt(t, e, 1)),
            (e = se()),
            t !== null && (fr(t, 1, e), ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function up(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (J === 4 || (J === 3 && (te & 130023424) === te && 500 > Y() - qo)
        ? zt(e, 0)
        : (Jo |= n)),
    ye(e, t);
}
function Mc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = xr), (xr <<= 1), !(xr & 130023424) && (xr = 4194304))
      : (t = 1));
  var n = se();
  (e = tt(e, t)), e !== null && (fr(e, t, n), ye(e, n));
}
function sp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Mc(e, n);
}
function ap(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), Mc(e, n);
}
var zc;
zc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || me.current) he = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (he = !1), Zd(e, t, n);
      he = !!(e.flags & 131072);
    }
  else (he = !1), H && t.flags & 1048576 && Oa(t, il, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Vr(e, t), (e = t.pendingProps);
      var l = fn(t, oe.current);
      sn(t, n), (l = Qo(null, t, r, e, l, n));
      var i = Ko();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ve(r) ? ((i = !0), rl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ao(t),
            (l.updater = Pl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Qi(t, r, e, n),
            (t = Gi(null, t, r, !0, i, n)))
          : ((t.tag = 0), H && i && Oo(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Vr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = fp(r)),
          (e = Oe(r, e)),
          l)
        ) {
          case 0:
            t = Yi(null, t, r, e, n);
            break e;
          case 1:
            t = is(null, t, r, e, n);
            break e;
          case 11:
            t = rs(null, t, r, e, n);
            break e;
          case 14:
            t = ls(null, t, r, Oe(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Oe(r, l)),
        Yi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Oe(r, l)),
        is(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((pc(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Fa(e, t),
          sl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = mn(Error(S(423)), t)), (t = os(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = mn(Error(S(424)), t)), (t = os(e, t, r, n, l));
            break e;
          } else
            for (
              we = ht(t.stateNode.containerInfo.firstChild),
                Se = t,
                H = !0,
                Ie = null,
                n = Ba(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((dn(), r === l)) {
            t = nt(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ha(t),
        e === null && Hi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Fi(r, l) ? (o = null) : i !== null && Fi(r, i) && (t.flags |= 32),
        dc(e, t),
        ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Hi(t), null;
    case 13:
      return hc(e, t, n);
    case 4:
      return (
        Bo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = pn(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Oe(r, l)),
        rs(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          F(ol, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if ($e(i.value, o)) {
            if (i.children === l.children && !me.current) {
              t = nt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = qe(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Vi(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(S(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Vi(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        sn(t, n),
        (l = Me(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Oe(r, t.pendingProps)),
        (l = Oe(r.type, l)),
        ls(e, t, r, l, n)
      );
    case 15:
      return cc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Oe(r, l)),
        Vr(e, t),
        (t.tag = 1),
        ve(r) ? ((e = !0), rl(t)) : (e = !1),
        sn(t, n),
        Ua(t, r, l),
        Qi(t, r, l, n),
        Gi(null, t, r, !0, e, n)
      );
    case 19:
      return mc(e, t, n);
    case 22:
      return fc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Rc(e, t) {
  return ra(e, t);
}
function cp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ne(e, t, n, r) {
  return new cp(e, t, n, r);
}
function nu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function fp(e) {
  if (typeof e == "function") return nu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ko)) return 11;
    if (e === Eo) return 14;
  }
  return 2;
}
function gt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ne(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Kr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) nu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Kt:
        return Rt(n.children, l, i, t);
      case So:
        (o = 8), (l |= 8);
        break;
      case mi:
        return (
          (e = Ne(12, n, t, l | 2)), (e.elementType = mi), (e.lanes = i), e
        );
      case vi:
        return (e = Ne(13, n, t, l)), (e.elementType = vi), (e.lanes = i), e;
      case yi:
        return (e = Ne(19, n, t, l)), (e.elementType = yi), (e.lanes = i), e;
      case As:
        return zl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case $s:
              o = 10;
              break e;
            case Us:
              o = 9;
              break e;
            case ko:
              o = 11;
              break e;
            case Eo:
              o = 14;
              break e;
            case it:
              (o = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ne(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Rt(e, t, n, r) {
  return (e = Ne(7, e, r, t)), (e.lanes = n), e;
}
function zl(e, t, n, r) {
  return (
    (e = Ne(22, e, r, t)),
    (e.elementType = As),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ai(e, t, n) {
  return (e = Ne(6, e, null, t)), (e.lanes = n), e;
}
function ci(e, t, n) {
  return (
    (t = Ne(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function dp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Wl(0)),
    (this.expirationTimes = Wl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Wl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ru(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new dp(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ne(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ao(i),
    e
  );
}
function pp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Tc(e) {
  if (!e) return St;
  e = e._reactInternals;
  e: {
    if (At(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return Ra(e, n, t);
  }
  return t;
}
function Oc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = ru(n, r, !0, e, l, i, o, u, s)),
    (e.context = Tc(null)),
    (n = e.current),
    (r = se()),
    (l = yt(n)),
    (i = qe(r, l)),
    (i.callback = t ?? null),
    mt(n, i, l),
    (e.current.lanes = l),
    fr(e, l, r),
    ye(e, r),
    e
  );
}
function Rl(e, t, n, r) {
  var l = t.current,
    i = se(),
    o = yt(l);
  return (
    (n = Tc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qe(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = mt(l, t, o)),
    e !== null && (Fe(e, l, o, i), Ar(e, l, o)),
    o
  );
}
function vl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function vs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function lu(e, t) {
  vs(e, t), (e = e.alternate) && vs(e, t);
}
function hp() {
  return null;
}
var Dc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function iu(e) {
  this._internalRoot = e;
}
Tl.prototype.render = iu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Rl(e, t, null, null);
};
Tl.prototype.unmount = iu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $t(function () {
      Rl(null, e, null, null);
    }),
      (t[et] = null);
  }
};
function Tl(e) {
  this._internalRoot = e;
}
Tl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ca();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
    ut.splice(n, 0, e), n === 0 && da(e);
  }
};
function ou(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ol(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ys() {}
function mp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = vl(o);
        i.call(a);
      };
    }
    var o = Oc(t, r, e, 0, null, !1, !1, "", ys);
    return (
      (e._reactRootContainer = o),
      (e[et] = o.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      $t(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = vl(s);
      u.call(a);
    };
  }
  var s = ru(e, 0, !1, null, null, !1, !1, "", ys);
  return (
    (e._reactRootContainer = s),
    (e[et] = s.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    $t(function () {
      Rl(t, s, n, r);
    }),
    s
  );
}
function Dl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = vl(o);
        u.call(s);
      };
    }
    Rl(t, o, e, l);
  } else o = mp(n, t, e, l, r);
  return vl(o);
}
sa = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = In(t.pendingLanes);
        n !== 0 &&
          (Co(t, n | 1), ye(t, Y()), !(O & 6) && ((vn = Y() + 500), xt()));
      }
      break;
    case 13:
      $t(function () {
        var r = tt(e, 1);
        if (r !== null) {
          var l = se();
          Fe(r, e, 1, l);
        }
      }),
        lu(e, 1);
  }
};
Po = function (e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = se();
      Fe(t, e, 134217728, n);
    }
    lu(e, 134217728);
  }
};
aa = function (e) {
  if (e.tag === 13) {
    var t = yt(e),
      n = tt(e, t);
    if (n !== null) {
      var r = se();
      Fe(n, e, t, r);
    }
    lu(e, t);
  }
};
ca = function () {
  return I;
};
fa = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
Ni = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Si(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = _l(r);
            if (!l) throw Error(S(90));
            Hs(r), Si(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ws(e, n);
      break;
    case "select":
      (t = n.value), t != null && rn(e, !!n.multiple, t, !1);
  }
};
Js = bo;
qs = $t;
var vp = { usingClientEntryPoint: !1, Events: [pr, Zt, _l, Xs, Zs, bo] },
  Tn = {
    findFiberByHostInstance: Pt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  yp = {
    bundleType: Tn.bundleType,
    version: Tn.version,
    rendererPackageName: Tn.rendererPackageName,
    rendererConfig: Tn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ta(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tn.findFiberByHostInstance || hp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Dr.isDisabled && Dr.supportsFiber)
    try {
      (Sl = Dr.inject(yp)), (Ve = Dr);
    } catch {}
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vp;
Ee.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ou(t)) throw Error(S(200));
  return pp(e, t, null, n);
};
Ee.createRoot = function (e, t) {
  if (!ou(e)) throw Error(S(299));
  var n = !1,
    r = "",
    l = Dc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ru(e, 1, !1, null, null, n, !1, r, l)),
    (e[et] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    new iu(t)
  );
};
Ee.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = ta(t)), (e = e === null ? null : e.stateNode), e;
};
Ee.flushSync = function (e) {
  return $t(e);
};
Ee.hydrate = function (e, t, n) {
  if (!Ol(t)) throw Error(S(200));
  return Dl(null, e, t, !0, n);
};
Ee.hydrateRoot = function (e, t, n) {
  if (!ou(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Dc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Oc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[et] = t.current),
    er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Tl(t);
};
Ee.render = function (e, t, n) {
  if (!Ol(t)) throw Error(S(200));
  return Dl(null, e, t, !1, n);
};
Ee.unmountComponentAtNode = function (e) {
  if (!Ol(e)) throw Error(S(40));
  return e._reactRootContainer
    ? ($t(function () {
        Dl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[et] = null);
        });
      }),
      !0)
    : !1;
};
Ee.unstable_batchedUpdates = bo;
Ee.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ol(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Dl(e, t, n, !1, r);
};
Ee.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Ee);
})(hf);
const gp = Ns(di);
function yn() {
  return (
    (yn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yn.apply(this, arguments)
  );
}
var He;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(He || (He = {}));
var yl = function (e) {
    return e;
  },
  gs = "beforeunload",
  wp = "popstate";
function Sp(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.window,
    r = n === void 0 ? document.defaultView : n,
    l = r.history;
  function i() {
    var w = r.location,
      x = w.pathname,
      R = w.search,
      N = w.hash,
      $ = l.state || {};
    return [
      $.idx,
      yl({
        pathname: x,
        search: R,
        hash: N,
        state: $.usr || null,
        key: $.key || "default",
      }),
    ];
  }
  var o = null;
  function u() {
    if (o) v.call(o), (o = null);
    else {
      var w = He.Pop,
        x = i(),
        R = x[0],
        N = x[1];
      if (v.length) {
        if (R != null) {
          var $ = h - R;
          $ &&
            ((o = {
              action: w,
              location: N,
              retry: function () {
                E($ * -1);
              },
            }),
            E($));
        }
      } else c(w);
    }
  }
  r.addEventListener(wp, u);
  var s = He.Pop,
    a = i(),
    h = a[0],
    p = a[1],
    m = gl(),
    v = gl();
  h == null && ((h = 0), l.replaceState(yn({}, l.state, { idx: h }), ""));
  function y(w) {
    return typeof w == "string" ? w : Ic(w);
  }
  function k(w, x) {
    return (
      x === void 0 && (x = null),
      yl(
        yn(
          { pathname: p.pathname, hash: "", search: "" },
          typeof w == "string" ? uo(w) : w,
          { state: x, key: oo() }
        )
      )
    );
  }
  function M(w, x) {
    return [{ usr: w.state, key: w.key, idx: x }, y(w)];
  }
  function d(w, x, R) {
    return !v.length || (v.call({ action: w, location: x, retry: R }), !1);
  }
  function c(w) {
    s = w;
    var x = i();
    (h = x[0]), (p = x[1]), m.call({ action: s, location: p });
  }
  function f(w, x) {
    var R = He.Push,
      N = k(w, x);
    function $() {
      f(w, x);
    }
    if (d(R, N, $)) {
      var de = M(N, h + 1),
        Re = de[0],
        Qe = de[1];
      try {
        l.pushState(Re, "", Qe);
      } catch {
        r.location.assign(Qe);
      }
      c(R);
    }
  }
  function g(w, x) {
    var R = He.Replace,
      N = k(w, x);
    function $() {
      g(w, x);
    }
    if (d(R, N, $)) {
      var de = M(N, h),
        Re = de[0],
        Qe = de[1];
      l.replaceState(Re, "", Qe), c(R);
    }
  }
  function E(w) {
    l.go(w);
  }
  var _ = {
    get action() {
      return s;
    },
    get location() {
      return p;
    },
    createHref: y,
    push: f,
    replace: g,
    go: E,
    back: function () {
      E(-1);
    },
    forward: function () {
      E(1);
    },
    listen: function (x) {
      return m.push(x);
    },
    block: function (x) {
      var R = v.push(x);
      return (
        v.length === 1 && r.addEventListener(gs, Ss),
        function () {
          R(), v.length || r.removeEventListener(gs, Ss);
        }
      );
    },
  };
  return _;
}
function kp(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.initialEntries,
    r = n === void 0 ? ["/"] : n,
    l = t.initialIndex,
    i = r.map(function (f) {
      var g = yl(
        yn(
          { pathname: "/", search: "", hash: "", state: null, key: oo() },
          typeof f == "string" ? uo(f) : f
        )
      );
      return g;
    }),
    o = ws(l ?? i.length - 1, 0, i.length - 1),
    u = He.Pop,
    s = i[o],
    a = gl(),
    h = gl();
  function p(f) {
    return typeof f == "string" ? f : Ic(f);
  }
  function m(f, g) {
    return (
      g === void 0 && (g = null),
      yl(
        yn(
          { pathname: s.pathname, search: "", hash: "" },
          typeof f == "string" ? uo(f) : f,
          { state: g, key: oo() }
        )
      )
    );
  }
  function v(f, g, E) {
    return !h.length || (h.call({ action: f, location: g, retry: E }), !1);
  }
  function y(f, g) {
    (u = f), (s = g), a.call({ action: u, location: s });
  }
  function k(f, g) {
    var E = He.Push,
      _ = m(f, g);
    function w() {
      k(f, g);
    }
    v(E, _, w) && ((o += 1), i.splice(o, i.length, _), y(E, _));
  }
  function M(f, g) {
    var E = He.Replace,
      _ = m(f, g);
    function w() {
      M(f, g);
    }
    v(E, _, w) && ((i[o] = _), y(E, _));
  }
  function d(f) {
    var g = ws(o + f, 0, i.length - 1),
      E = He.Pop,
      _ = i[g];
    function w() {
      d(f);
    }
    v(E, _, w) && ((o = g), y(E, _));
  }
  var c = {
    get index() {
      return o;
    },
    get action() {
      return u;
    },
    get location() {
      return s;
    },
    createHref: p,
    push: k,
    replace: M,
    go: d,
    back: function () {
      d(-1);
    },
    forward: function () {
      d(1);
    },
    listen: function (g) {
      return a.push(g);
    },
    block: function (g) {
      return h.push(g);
    },
  };
  return c;
}
function ws(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function Ss(e) {
  e.preventDefault(), (e.returnValue = "");
}
function gl() {
  var e = [];
  return {
    get length() {
      return e.length;
    },
    push: function (n) {
      return (
        e.push(n),
        function () {
          e = e.filter(function (r) {
            return r !== n;
          });
        }
      );
    },
    call: function (n) {
      e.forEach(function (r) {
        return r && r(n);
      });
    },
  };
}
function oo() {
  return Math.random().toString(36).substr(2, 8);
}
function Ic(e) {
  var t = e.pathname,
    n = t === void 0 ? "/" : t,
    r = e.search,
    l = r === void 0 ? "" : r,
    i = e.hash,
    o = i === void 0 ? "" : i;
  return (
    l && l !== "?" && (n += l.charAt(0) === "?" ? l : "?" + l),
    o && o !== "#" && (n += o.charAt(0) === "#" ? o : "#" + o),
    n
  );
}
function uo(e) {
  var t = {};
  if (e) {
    var n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    var r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
/**
 * react-location
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ae() {
  return (
    (ae =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    ae.apply(this, arguments)
  );
}
function Tt(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Ep(e, t) {
  var n,
    r,
    l,
    i = "";
  for (n in e)
    if ((l = e[n]) !== void 0)
      if (Array.isArray(l))
        for (r = 0; r < l.length; r++)
          i && (i += "&"),
            (i += encodeURIComponent(n) + "=" + encodeURIComponent(l[r]));
      else
        i && (i += "&"),
          (i += encodeURIComponent(n) + "=" + encodeURIComponent(l));
  return (t || "") + i;
}
function ks(e) {
  if (!e) return "";
  var t = decodeURIComponent(e);
  return t === "false" ? !1 : t === "true" ? !0 : +t * 0 === 0 ? +t : t;
}
function xp(e) {
  for (var t, n, r = {}, l = e.split("&"); (t = l.shift()); )
    (t = t.split("=")),
      (n = t.shift()),
      r[n] !== void 0
        ? (r[n] = [].concat(r[n], ks(t.shift())))
        : (r[n] = ks(t.shift()));
  return r;
}
const _p = ["children", "location", "__experimental__snapshot"],
  Cp = ["location", "__experimental__snapshot"],
  Pp = ["basepath", "routes"],
  Np = [
    "to",
    "search",
    "hash",
    "children",
    "target",
    "style",
    "replace",
    "onClick",
    "onMouseEnter",
    "className",
    "getActiveProps",
    "getInactiveProps",
    "activeOptions",
    "preload",
    "disabled",
    "_ref",
  ],
  Lp = ["style", "className"],
  Mp = ["style", "className"],
  zp = ["pending"],
  jc = D.createContext(null),
  Fc = D.createContext(null),
  $c = D.createContext(null),
  Uc = Boolean(
    typeof window < "u" && window.document && window.document.createElement
  ),
  so = Uc ? D.useLayoutEffect : D.useEffect,
  Rp = () => (Uc ? Sp() : kp());
class uu {
  constructor() {
    this.listeners = [];
  }
  subscribe(t) {
    return (
      this.listeners.push(t),
      () => {
        this.listeners = this.listeners.filter((n) => n !== t);
      }
    );
  }
  notify() {
    this.listeners.forEach((t) => t());
  }
}
class Tp extends uu {
  constructor(t) {
    var n, r;
    super(),
      (this.isTransitioning = !1),
      (this.history = (t == null ? void 0 : t.history) || Rp()),
      (this.stringifySearch =
        (n = t == null ? void 0 : t.stringifySearch) != null ? n : Kp),
      (this.parseSearch =
        (r = t == null ? void 0 : t.parseSearch) != null ? r : Qp),
      (this.current = this.parseLocation(this.history.location)),
      (this.destroy = this.history.listen((l) => {
        (this.current = this.parseLocation(l.location, this.current)),
          this.notify();
      }));
  }
  buildNext(t, n) {
    var r, l, i, o;
    t === void 0 && (t = "/"), n === void 0 && (n = {});
    const u = ae({}, this.current, n.from),
      s = Qc(t, u.pathname, "" + ((r = n.to) != null ? r : ".")),
      a =
        (l = n.__searchFilters) != null && l.length
          ? n.__searchFilters.reduce((y, k) => k(y), u.search)
          : u.search,
      h =
        n.search === !0
          ? a
          : n.search
          ? (i = xs(n.search, a)) != null
            ? i
            : {}
          : (o = n.__searchFilters) != null && o.length
          ? a
          : {},
      p = fo(u.search, h),
      m = this.stringifySearch(p);
    let v = n.hash === !0 ? u.hash : xs(n.hash, u.hash);
    return (
      (v = v ? "#" + v : ""),
      {
        pathname: s,
        search: p,
        searchStr: m,
        hash: v,
        href: "" + s + m + v,
        key: n.key,
      }
    );
  }
  navigate(t, n) {
    (this.current = t),
      this.navigateTimeout && clearTimeout(this.navigateTimeout);
    let r = "replace";
    return (
      n || (r = "push"),
      this.parseLocation(this.history.location).href === this.current.href &&
        !this.current.key &&
        (r = "replace"),
      r === "replace"
        ? this.history.replace({
            pathname: this.current.pathname,
            hash: this.current.hash,
            search: this.current.searchStr,
          })
        : this.history.push({
            pathname: this.current.pathname,
            hash: this.current.hash,
            search: this.current.searchStr,
          })
    );
  }
  parseLocation(t, n) {
    var r;
    const l = this.parseSearch(t.search);
    return {
      pathname: t.pathname,
      searchStr: t.search,
      search: fo(n == null ? void 0 : n.search, l),
      hash: (r = t.hash.split("#").reverse()[0]) != null ? r : "",
      href: "" + t.pathname + t.search + t.hash,
      key: t.key,
    };
  }
}
function Ac(e) {
  return D.createElement(Fc.Provider, e);
}
function Op(e) {
  let { children: t, location: n, __experimental__snapshot: r } = e,
    l = Tt(e, _p);
  const i = D.useRef(null);
  i.current ||
    (i.current = new Ip({
      location: n,
      __experimental__snapshot: r,
      routes: l.routes,
    }));
  const o = i.current,
    [u, s] = D.useReducer(() => ({}), {});
  return (
    o.update(l),
    so(
      () =>
        o.subscribe(() => {
          s();
        }),
      []
    ),
    so(() => o.updateLocation(n.current).unsubscribe, [n.current.key]),
    D.createElement(
      jc.Provider,
      { value: { location: n } },
      D.createElement(
        $c.Provider,
        { value: { router: o } },
        D.createElement(Dp, null),
        D.createElement(
          Ac,
          { value: [o.rootMatch, ...o.state.matches] },
          t ?? D.createElement(su, null)
        )
      )
    )
  );
}
function Dp() {
  const e = mr(),
    t = jl(),
    n = Wc();
  return (
    so(() => {
      t({ to: ".", search: !0, hash: !0 }).href !== e.current.href &&
        n({ to: ".", search: !0, hash: !0, fromCurrent: !0, replace: !0 });
    }, []),
    null
  );
}
class Ip extends uu {
  constructor(t) {
    var n;
    let { location: r, __experimental__snapshot: l } = t,
      i = Tt(t, Cp);
    super(),
      (this.routesById = {}),
      (this.update = (u) => {
        let { basepath: s, routes: a } = u,
          h = Tt(u, Pp);
        Object.assign(this, h),
          (this.basepath = vr("/" + (s ?? ""))),
          (this.routesById = {});
        const p = (m, v) =>
          m.map((y) => {
            var k, M, d, c;
            const f = (k = y.path) != null ? k : "*",
              g = gn([
                (v == null ? void 0 : v.id) === "root"
                  ? ""
                  : v == null
                  ? void 0
                  : v.id,
                "" +
                  (f == null ? void 0 : f.replace(/(.)\/$/, "$1")) +
                  (y.id ? "-" + y.id : ""),
              ]);
            if (
              ((y = ae({}, y, {
                pendingMs:
                  (M = y.pendingMs) != null
                    ? M
                    : h == null
                    ? void 0
                    : h.defaultPendingMs,
                pendingMinMs:
                  (d = y.pendingMinMs) != null
                    ? d
                    : h == null
                    ? void 0
                    : h.defaultPendingMinMs,
                id: g,
              })),
              this.routesById[g])
            )
              throw new Error();
            return (
              (this.routesById[g] = y),
              (y.children =
                (c = y.children) != null && c.length
                  ? p(y.children, y)
                  : void 0),
              y
            );
          });
        (this.routes = p(a)),
          (this.rootMatch = {
            id: "root",
            params: {},
            search: {},
            pathname: this.basepath,
            route: null,
            ownData: {},
            data: {},
            isLoading: !1,
            status: "resolved",
          });
      }),
      (this.setState = (u) => {
        const s = u({ state: this.state, pending: this.pending });
        (this.state = s.state),
          (this.pending = s.pending),
          this.cleanMatchCache(),
          this.notify();
      }),
      (this.matchCache = {}),
      (this.cleanMatchCache = () => {
        var u, s, a;
        const h = [
          ...((u = this == null ? void 0 : this.state.matches) != null
            ? u
            : []),
          ...((s =
            this == null || (a = this.pending) == null ? void 0 : a.matches) !=
          null
            ? s
            : []),
        ].map((p) => p.id);
        Object.values(this.matchCache).forEach((p) => {
          var m;
          if (!p.updatedAt || h.includes(p.id)) return;
          const v = Date.now() - ((m = p.updatedAt) != null ? m : 0);
          (!p.maxAge || v > p.maxAge) &&
            (p.route.unloader && p.route.unloader(p),
            delete this.matchCache[p.id]);
        });
      }),
      (this.updateLocation = (u) => {
        let s;
        return {
          promise: new Promise((h) => {
            const p = new ao(this, u);
            this.setState((m) =>
              ae({}, m, {
                pending: { location: p.location, matches: p.matches },
              })
            ),
              (s = p.subscribe(() => {
                const m = this.state.matches;
                m
                  .filter((v) => !p.matches.find((y) => y.id === v.id))
                  .forEach((v) => {
                    v.onExit == null || v.onExit(v);
                  }),
                  m
                    .filter((v) => p.matches.find((y) => y.id === v.id))
                    .forEach((v) => {
                      v.route.onTransition == null || v.route.onTransition(v);
                    }),
                  p.matches
                    .filter((v) => !m.find((y) => y.id === v.id))
                    .forEach((v) => {
                      v.onExit =
                        v.route.onMatch == null ? void 0 : v.route.onMatch(v);
                    }),
                  this.setState((v) =>
                    ae({}, v, {
                      state: { location: p.location, matches: p.matches },
                      pending: void 0,
                    })
                  ),
                  h();
              })),
              p.loadData(),
              p.startPending();
          }),
          unsubscribe: s,
        };
      }),
      (this.__experimental__createSnapshot = () => ({
        location: this.state.location,
        matches: this.state.matches.map((u) => {
          let { ownData: s, id: a } = u;
          return { id: a, ownData: s };
        }),
      })),
      this.update(i);
    let o = [];
    if (l) {
      const u = new ao(this, r.current);
      u.matches.forEach((s, a) => {
        var h, p, m;
        if (s.id !== ((h = l.matches[a]) == null ? void 0 : h.id)) {
          var v;
          throw new Error(
            "Router hydration mismatch: " +
              s.id +
              " !== " +
              ((v = l.matches[a]) == null ? void 0 : v.id)
          );
        }
        s.ownData =
          (p = (m = l.matches[a]) == null ? void 0 : m.ownData) != null
            ? p
            : {};
      }),
        Bc(u.matches),
        (o = u.matches);
    }
    (this.state = {
      location: (n = l == null ? void 0 : l.location) != null ? n : r.current,
      matches: o,
    }),
      r.subscribe(() => this.notify());
  }
}
function mr() {
  const e = D.useContext(jc);
  return (
    au(!!e, "useLocation must be used within a <ReactLocation />"), e.location
  );
}
class jp {
  constructor(t) {
    (this.status = "loading"),
      (this.ownData = {}),
      (this.data = {}),
      (this.isLoading = !1),
      (this.notify = (n) => {
        var r;
        (r = this.matchLoader) == null || r.preNotify(n ? this : void 0);
      }),
      (this.assignMatchLoader = (n) => {
        this.matchLoader = n;
      }),
      (this.startPending = () => {
        this.pendingTimeout && clearTimeout(this.pendingTimeout),
          this.route.pendingMs !== void 0 &&
            (this.pendingTimeout = setTimeout(() => {
              var n;
              this.status === "loading" && (this.status = "pending"),
                (n = this.notify) == null || n.call(this),
                typeof this.route.pendingMinMs < "u" &&
                  (this.pendingMinPromise = new Promise((r) =>
                    setTimeout(r, this.route.pendingMinMs)
                  ));
            }, this.route.pendingMs));
      }),
      (this.load = (n) => {
        var r, l;
        if (
          ((this.maxAge =
            (r = (l = n.maxAge) != null ? l : this.route.loaderMaxAge) != null
              ? r
              : n.router.defaultLoaderMaxAge),
          this.loaderPromise)
        )
          return;
        const i = this.route.import;
        this.loaderPromise = (
          i
            ? (() => (
                (this.isLoading = !0),
                i({ params: this.params, search: this.search }).then((o) => {
                  this.route = ae({}, this.route, o);
                })
              ))()
            : Promise.resolve()
        )
          .then(() => {
            const o = [];
            ["element", "errorElement", "pendingElement"].forEach((h) => {
              const p = this.route[h];
              this[h] ||
                (typeof p == "function"
                  ? ((this.isLoading = !0),
                    o.push(
                      p(this).then((m) => {
                        this[h] = m;
                      })
                    ))
                  : (this[h] = this.route[h]));
            });
            const s = this.route.loader,
              a = s
                ? new Promise(async (h) => {
                    this.isLoading = !0;
                    const p = (y) => {
                        (this.updatedAt = Date.now()),
                          h(this.ownData),
                          (this.status = y);
                      },
                      m = (y) => {
                        (this.ownData = y),
                          (this.error = void 0),
                          p("resolved");
                      },
                      v = (y) => {
                        console.error(y), (this.error = y), p("rejected");
                      };
                    try {
                      m(
                        await s(this, {
                          parentMatch: n.parentMatch,
                          dispatch: async (y) => {
                            var k;
                            y.type === "resolve"
                              ? m(y.data)
                              : y.type === "reject"
                              ? v(y.error)
                              : y.type === "loading"
                              ? (this.isLoading = !0)
                              : y.type === "maxAge" && (this.maxAge = y.maxAge),
                              (this.updatedAt = Date.now()),
                              (k = this.notify) == null || k.call(this, !0);
                          },
                        })
                      );
                    } catch (y) {
                      v(y);
                    }
                  })
                : Promise.resolve();
            return Promise.all([...o, a])
              .then(() => {
                (this.status = "resolved"),
                  (this.isLoading = !1),
                  (this.startPending = void 0);
              })
              .then(() => this.pendingMinPromise)
              .then(() => {
                var h;
                this.pendingTimeout && clearTimeout(this.pendingTimeout),
                  (h = this.notify) == null || h.call(this, !0);
              });
          })
          .then(() => this.ownData);
      }),
      Object.assign(this, t);
  }
}
class ao extends uu {
  constructor(t, n) {
    var r;
    super(),
      (r = this),
      (this.preNotifiedMatches = []),
      (this.status = "pending"),
      (this.preNotify = (i) => {
        i &&
          (this.preNotifiedMatches.includes(i) ||
            this.preNotifiedMatches.push(i)),
          (!i || this.preNotifiedMatches.length === this.matches.length) &&
            ((this.status = "resolved"), Bc(this.matches), this.notify());
      }),
      (this.loadData = async function (i) {
        var o;
        let { maxAge: u } = i === void 0 ? {} : i;
        if (
          (r.router.cleanMatchCache(), !((o = r.matches) != null && o.length))
        ) {
          r.preNotify();
          return;
        }
        return (
          (r.firstRenderPromises = []),
          r.matches.forEach((s, a) => {
            var h, p;
            const m = (h = r.matches) == null ? void 0 : h[a - 1];
            s.assignMatchLoader == null || s.assignMatchLoader(r),
              s.load == null ||
                s.load({ maxAge: u, parentMatch: m, router: r.router }),
              (p = r.firstRenderPromises) == null || p.push(s.loaderPromise);
          }),
          await Promise.all(r.firstRenderPromises).then(
            () => (r.preNotify(), r.matches)
          )
        );
      }),
      (this.load = async function (i) {
        let { maxAge: o } = i === void 0 ? {} : i;
        return await r.loadData({ maxAge: o });
      }),
      (this.startPending = async () => {
        this.matches.forEach((i) =>
          i.startPending == null ? void 0 : i.startPending()
        );
      }),
      (this.router = t),
      (this.location = n),
      (this.matches = []);
    const l = Hc(this.router, this.location);
    this.matches =
      l == null
        ? void 0
        : l.map(
            (i) => (
              this.router.matchCache[i.id] ||
                (this.router.matchCache[i.id] = new jp(i)),
              this.router.matchCache[i.id]
            )
          );
  }
}
function Bc(e) {
  e == null ||
    e.forEach((t, n) => {
      var r;
      const l = e == null ? void 0 : e[n - 1];
      t.data = ae(
        {},
        (r = l == null ? void 0 : l.data) != null ? r : {},
        t.ownData
      );
    });
}
function En() {
  const e = D.useContext($c);
  if (!e)
    throw (
      (au(!0, "You are trying to use useRouter() outside of ReactLocation!"),
      new Error())
    );
  return e.router;
}
function Hc(e, t) {
  if (!e.routes.length) return [];
  const n = [],
    r = async (l, i) => {
      var o;
      let { pathname: u, params: s } = i;
      const h = (
        e != null && e.filterRoutes
          ? e == null
            ? void 0
            : e.filterRoutes(l)
          : l
      ).find((y) => {
        var k, M;
        const d = gn([u, y.path]),
          c = !!(y.path !== "/" || ((k = y.children) != null && k.length)),
          f = co(t, {
            to: d,
            search: y.search,
            fuzzy: c,
            caseSensitive: (M = y.caseSensitive) != null ? M : e.caseSensitive,
          });
        return f && (s = ae({}, s, f)), !!f;
      });
      if (!h) return;
      const p = Es(h.path, s);
      u = gn([u, p]);
      const v = {
        id: Es(h.id, s, !0),
        route: h,
        params: s,
        pathname: u,
        search: t.search,
      };
      n.push(v), (o = h.children) != null && o.length && r(h.children, v);
    };
  return r(e.routes, e.rootMatch), n;
}
function Es(e, t, n) {
  const r = ar(e);
  return gn(
    r.map((l) => {
      if (l.value === "*" && !n) return "";
      if (l.type === "param") {
        var i;
        return (i = t[l.value.substring(1)]) != null ? i : "";
      }
      return l.value;
    })
  );
}
function Fp() {
  const e = mr(),
    t = Il(),
    n = En(),
    r = jl();
  return yr(async function (l, i) {
    var o;
    l === void 0 && (l = e.current);
    const u = r(
      ae({}, l, { from: (o = l.from) != null ? o : { pathname: t.pathname } })
    );
    return await new ao(n, u).load(i);
  });
}
function Vc() {
  return D.useContext(Fc);
}
function Il() {
  var e;
  return (e = Vc()) == null ? void 0 : e[0];
}
function Wc() {
  const e = mr(),
    t = Il(),
    n = jl();
  function r(l) {
    var i;
    let { search: o, hash: u, replace: s, from: a, to: h, fromCurrent: p } = l;
    p = (i = p) != null ? i : typeof h > "u";
    const m = n({
      to: h,
      search: o,
      hash: u,
      from: p ? e.current : a ?? { pathname: t.pathname },
    });
    e.navigate(m, s);
  }
  return yr(r);
}
function jl() {
  const e = mr(),
    t = En();
  return yr((r) => {
    const l = e.buildNext(t.basepath, r),
      o = Hc(t, l)
        .map((u) => {
          var s;
          return (s = u.route.searchFilters) != null ? s : [];
        })
        .flat()
        .filter(Boolean);
    return e.buildNext(t.basepath, ae({}, r, { __searchFilters: o }));
  });
}
const $p = function (t) {
  var n;
  let {
      to: r = ".",
      search: l,
      hash: i,
      children: o,
      target: u,
      style: s = {},
      replace: a,
      onClick: h,
      onMouseEnter: p,
      className: m = "",
      getActiveProps: v = () => ({ className: "active" }),
      getInactiveProps: y = () => ({}),
      activeOptions: k,
      preload: M,
      disabled: d,
      _ref: c,
    } = t,
    f = Tt(t, Np);
  const g = Fp(),
    E = Il(),
    _ = mr(),
    w = En(),
    x = Wc(),
    R = jl();
  M = (n = M) != null ? n : w.defaultLinkPreloadMaxAge;
  try {
    const _e = new URL("" + r);
    au(!1, "<Link /> should not be used for external URLs like: " + _e.href);
  } catch {}
  const N = R({ to: r, search: l, hash: i, from: { pathname: E.pathname } }),
    $ = (_e) => {
      d ||
        (h && h(_e),
        !Wp(_e) &&
          !_e.defaultPrevented &&
          (!u || u === "_self") &&
          _e.button === 0 &&
          (_e.preventDefault(),
          x({
            to: r,
            search: l,
            hash: i,
            replace: a,
            from: { pathname: E.pathname },
          })));
    },
    de = (_e) => {
      p && p(_e), M && M > 0 && g({ to: r, search: l, hash: i }, { maxAge: M });
    },
    Re = _.current.pathname === N.pathname,
    Qe = _.current.pathname.split("/"),
    xn = N.pathname.split("/").every((_e, Xc) => _e === Qe[Xc]),
    _n = _.current.hash === N.hash,
    C = k != null && k.exact ? Re : xn,
    L = k != null && k.includeHash ? _n : !0,
    z = C && L,
    B = z ? v() : {},
    { style: G = {}, className: Bt = "" } = B,
    Ke = Tt(B, Lp),
    Ht = z ? {} : y(),
    { style: Ye = {}, className: Vt = "" } = Ht,
    Gc = Tt(Ht, Mp);
  return D.createElement(
    "a",
    ae(
      {
        ref: c,
        href: d ? void 0 : N.href,
        onClick: $,
        onMouseEnter: de,
        target: u,
        style: ae({}, s, G, Ye),
        className: [m, Bt, Vt].filter(Boolean).join(" ") || void 0,
      },
      d ? { role: "link", "aria-disabled": !0 } : void 0,
      f,
      Ke,
      Gc,
      { children: typeof o == "function" ? o({ isActive: z }) : o }
    )
  );
};
function su() {
  var e;
  const t = En(),
    [n, ...r] = Vc(),
    l = r[0];
  if (!l) return null;
  const i = (e = l.errorElement) != null ? e : t.defaultErrorElement,
    o = (() => {
      var u, s;
      if (l.status === "rejected") {
        if (i) return i;
        if (!t.useErrorBoundary) return "An unknown error occured!";
        throw l.error;
      }
      const a = (u = l.pendingElement) != null ? u : t.defaultPendingElement;
      if (l.status === "loading") return null;
      if (l.status === "pending" && (l.route.pendingMs || a)) return a ?? null;
      const h = (s = l.element) != null ? s : t.defaultElement;
      return h ?? D.createElement(su, null);
    })();
  return D.createElement(Ac, { value: r }, o);
}
function Up() {
  const e = En(),
    t = Il();
  return yr((n) => Qc(e.basepath, t.pathname, vr(n)));
}
function co(e, t) {
  const n = Hp(e, t),
    r = Vp(e, t);
  if (!(t.to && !n) && !(t.search && !r)) return n ?? {};
}
function Ap() {
  const e = En(),
    t = Up();
  return yr((n) => {
    let { pending: r } = n,
      l = Tt(n, zp);
    if (((l = ae({}, l, { to: l.to ? t("" + l.to) : void 0 })), r)) {
      var i;
      return (i = e.pending) != null && i.location
        ? co(e.pending.location, l)
        : void 0;
    }
    return co(e.state.location, l);
  });
}
function au(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Bp(e) {
  return typeof e == "function";
}
function xs(e, t) {
  return Bp(e) ? e(t) : e;
}
function gn(e) {
  return vr(e.filter(Boolean).join("/"));
}
function vr(e) {
  return ("" + e).replace(/\/{2,}/g, "/");
}
function Hp(e, t) {
  var n;
  const r = ar(e.pathname),
    l = ar("" + ((n = t.to) != null ? n : "*")),
    i = {};
  return (() => {
    for (let u = 0; u < Math.max(r.length, l.length); u++) {
      const s = r[u],
        a = l[u],
        h = u === l.length - 1,
        p = u === r.length - 1;
      if (a) {
        if (a.type === "wildcard")
          return s != null && s.value
            ? ((i["*"] = gn(r.slice(u).map((m) => m.value))), !0)
            : !1;
        if (a.type === "pathname") {
          if (a.value === "/" && !(s != null && s.value)) return !0;
          if (s) {
            if (t.caseSensitive) {
              if (a.value !== s.value) return !1;
            } else if (a.value.toLowerCase() !== s.value.toLowerCase())
              return !1;
          }
        }
        if (!s) return !1;
        a.type === "param" && (i[a.value.substring(1)] = s.value);
      }
      if (h && !p) return !!t.fuzzy;
    }
    return !0;
  })()
    ? i
    : void 0;
}
function Vp(e, t) {
  return !!(t.search && t.search(e.search));
}
function ar(e) {
  if (!e) return [];
  e = vr(e);
  const t = [];
  if (
    (e.slice(0, 1) === "/" &&
      ((e = e.substring(1)), t.push({ type: "pathname", value: "/" })),
    !e)
  )
    return t;
  const n = e.split("/").filter(Boolean);
  return (
    t.push(
      ...n.map((r) =>
        r.startsWith("*")
          ? { type: "wildcard", value: r }
          : r.charAt(0) === ":"
          ? { type: "param", value: r }
          : { type: "pathname", value: r }
      )
    ),
    e.slice(-1) === "/" &&
      ((e = e.substring(1)), t.push({ type: "pathname", value: "/" })),
    t
  );
}
function Qc(e, t, n) {
  (t = t.replace(new RegExp("^" + e), "/")),
    (n = n.replace(new RegExp("^" + e), "/"));
  let r = ar(t);
  const l = ar(n);
  l.forEach((o, u) => {
    if (o.value === "/") u ? u === l.length - 1 && r.push(o) : (r = [o]);
    else if (o.value === "..") r.pop();
    else {
      if (o.value === ".") return;
      r.push(o);
    }
  });
  const i = gn([e, ...r.map((o) => o.value)]);
  return vr(i);
}
function Wp(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function yr(e) {
  const t = D.useRef(),
    n = D.useRef(e);
  return (
    (n.current = e),
    t.current ||
      (t.current = function () {
        return n.current(...arguments);
      }),
    t.current
  );
}
function fo(e, t) {
  if (e === t) return e;
  const n = Array.isArray(e) && Array.isArray(t);
  if (n || (_s(e) && _s(t))) {
    const r = n ? e.length : Object.keys(e).length,
      l = n ? t : Object.keys(t),
      i = l.length,
      o = n ? [] : {};
    let u = 0;
    for (let s = 0; s < i; s++) {
      const a = n ? s : l[s];
      (o[a] = fo(e[a], t[a])), o[a] === e[a] && u++;
    }
    return r === i && u === r ? e : o;
  }
  return t;
}
function _s(e) {
  if (!Cs(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const n = t.prototype;
  return !(!Cs(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Cs(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
const Qp = Yp(JSON.parse),
  Kp = Gp(JSON.stringify);
function Yp(e) {
  return (t) => {
    t.substring(0, 1) === "?" && (t = t.substring(1));
    let n = xp(t);
    for (let r in n) {
      const l = n[r];
      if (typeof l == "string")
        try {
          n[r] = e(l);
        } catch {}
    }
    return n;
  };
}
function Gp(e) {
  return (t) => {
    (t = ae({}, t)),
      t &&
        Object.keys(t).forEach((r) => {
          const l = t[r];
          if (typeof l > "u" || l === void 0) delete t[r];
          else if (l && typeof l == "object" && l !== null)
            try {
              t[r] = e(l);
            } catch {}
        });
    const n = Ep(t).toString();
    return n ? "?" + n : "";
  };
}
function Kc(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Kc(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Xp() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Kc(e)) && (r && (r += " "), (r += t));
  return r;
}
var wl = {},
  Zp = {
    get exports() {
      return wl;
    },
    set exports(e) {
      wl = e;
    },
  },
  Fl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jp = D,
  qp = Symbol.for("react.element"),
  bp = Symbol.for("react.fragment"),
  eh = Object.prototype.hasOwnProperty,
  th = Jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  nh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) eh.call(t, r) && !nh.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: qp,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: th.current,
  };
}
Fl.Fragment = bp;
Fl.jsx = Yc;
Fl.jsxs = Yc;
(function (e) {
  e.exports = Fl;
})(Zp);
const j = wl.jsx,
  Mt = wl.jsxs,
  rh = (e) => {
    const t = Ap(),
      n = Boolean(t({ to: e.to }));
    return j("li", {
      className: "px-4",
      children: j($p, {
        ...e,
        className: Xp(
          "relative flex items-center h-12 px-1",
          "text-slate-200 hover:text-white hover:drop-shadow shadow-white transition-all",
          "after:h-0.5 after:w-full after:bg-white after:absolute after:bottom-px after:left-0",
          "after:shadow after:shadow-white after:transition-all after:origin-center",
          n ? "after:scale-100" : "after:scale-0"
        ),
      }),
    });
  },
  lh = () =>
    j("header", {
      className: "sticky top-0 w-full",
      children: j("nav", {
        className: "bg-gray-600 shadow-lg",
        children: j("ul", {
          className: "flex items-center",
          children: j(rh, { to: "/", children: "Scoreboard" }),
        }),
      }),
    }),
  ih = (e) => {
    const t = Math.floor(e / 36e5),
      n = Math.floor((e % (1e3 * 60 * 60)) / (1e3 * 60)),
      r = Math.floor((e % (1e3 * 60)) / 1e3),
      l = t.toString().padStart(2, "0"),
      i = n.toString().padStart(2, "0"),
      o = r.toString().padStart(2, "0");
    return `${l}:${i}:${o}`;
  };
var Ot = ((e) => (
  (e[(e.RED = 0)] = "RED"),
  (e[(e.GREEN = 1)] = "GREEN"),
  (e[(e.BLUE = 2)] = "BLUE"),
  e
))(Ot || {});
const fi = { [Ot.RED]: "#FF0000", [Ot.BLUE]: "#0000FF", [Ot.GREEN]: "#008000" },
  oh = ({ color: e }) =>
    Mt("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: 66,
      height: 74,
      fill: "none",
      children: [
        j("path", {
          fill: "#fff",
          d: "M22.087 73.755a12.311 12.311 0 0 1-4.8-1.487 11.911 11.911 0 0 1-2.62-1.956 11.067 11.067 0 0 1-1.094-1.224c-2.679-3.452-6.368-10.223-8.932-15.26-.732-1.439-1.356-3.115-1.89-4.94C1.64 45.108.95 40.728.68 36.76c-.09-1.307-.14-2.58-.14-3.764 0-3.681.608-7.215 1.742-10.51C5.783 12.254 14.231 4.34 24.774 1.587a29.954 29.954 0 0 1 2.737-.592 29.526 29.526 0 0 1 3.747-.41 23.8 23.8 0 0 1 1.537-.05c.057-.008.115-.008.172-.008h.09c.058 0 .116 0 .173.008a23.8 23.8 0 0 1 1.537.05c1.274.057 2.523.197 3.747.41.929.156 1.841.354 2.737.592C51.803 4.34 60.242 12.262 63.743 22.485a32.228 32.228 0 0 1 1.742 10.51c0 1.184-.05 2.457-.14 3.764-.27 3.977-.961 8.358-2.07 12.13-.535 1.824-1.16 3.5-1.89 4.938-2.564 5.046-6.254 11.81-8.933 15.26-.337.436-.699.847-1.093 1.225-.78.773-1.668 1.43-2.622 1.956a12.311 12.311 0 0 1-4.799 1.487H22.087Z",
        }),
        j("path", {
          fill: "#275183",
          d: "M33.016 54.748a5.71 5.71 0 0 0-2.498.575l-.32.156a16.889 16.889 0 0 1-11.653 1.167l-1.447-.378c-6.796-1.775-12.014-7.108-13.6-13.92-.855-3.658-1.102-7.249-.732-10.684.263-2.432 2.285-4.265 4.7-4.265.297 0 .592.025.888.082 8.966 1.718 16.346 2.45 24.662 2.45 8.316 0 15.696-.74 24.661-2.45.296-.057.592-.082.888-.082 2.416 0 4.438 1.833 4.7 4.265.37 3.427.124 7.026-.73 10.683-1.595 6.813-6.805 12.146-13.601 13.921l-1.447.378a16.889 16.889 0 0 1-11.652-1.167l-.32-.156a5.826 5.826 0 0 0-2.5-.575Z",
          className: "mask",
        }),
        j("path", {
          fill: "#A5CDFF",
          d: "M33.016 52.282a8.14 8.14 0 0 0-3.575.83l-.32.157a14.37 14.37 0 0 1-9.952.994l-1.447-.378c-5.875-1.537-10.444-6.188-11.825-12.097-.756-3.221-1.035-6.59-.682-9.853.14-1.331 1.364-2.276 2.68-2.021 8.858 1.692 16.509 2.49 25.12 2.498 8.613 0 16.264-.797 25.123-2.498 1.314-.255 2.53.698 2.679 2.021.353 3.263.065 6.64-.682 9.853-1.381 5.917-5.95 10.56-11.826 12.097l-1.446.378a14.37 14.37 0 0 1-9.952-.994l-.32-.157a8.14 8.14 0 0 0-3.575-.83Z",
        }),
        j("path", {
          fill: "#fff",
          d: "m10.5 32.05.961 16.436a14.58 14.58 0 0 0 3.09 2.342l-1.1-18.301c-.97-.14-1.957-.304-2.951-.477ZM14.896 32.74l1.184 18.844c.666.28 1.348.526 2.063.707l1.446.378a12.92 12.92 0 0 0 3.221.41c.428 0 .847-.032 1.274-.073l-.74-19.345c-2.786-.206-5.571-.51-8.448-.92ZM59.181 32.108c-.033-.337-.304-.592-.616-.592-.041 0-.074 0-.115.008-.608.115-1.2.222-1.8.33l-.526 14.832a14.664 14.664 0 0 0 2.408-5.267c.74-3.164.961-6.386.649-9.311Z",
        }),
        j("path", {
          fill: fi[e],
          d: "M24.782 1.587v20.766a3.473 3.473 0 0 1-3.813 3.452c-7.092-.707-12.236-1.75-18.679-3.32C5.783 12.262 14.23 4.34 24.782 1.587ZM41.251 1.587v20.766a3.473 3.473 0 0 0 3.813 3.452c7.092-.707 12.236-1.75 18.679-3.32C60.251 12.262 51.803 4.34 41.251 1.587Z",
          className: "helmet",
        }),
        j("path", {
          fill: fi[e],
          d: "M33 26.133c-.962 0-1.734-.78-1.734-1.733V2.268a1.736 1.736 0 0 1 1.75-1.742h.041c.953 0 1.71.789 1.71 1.742v22.13c0 .962-.781 1.734-1.735 1.734H33Z",
          className: "mask",
        }),
        j("path", {
          fill: fi[e],
          d: "M22.087 73.755a12.311 12.311 0 0 1-4.799-1.487c3.55-7.503 9.261-13.92 15.729-13.987 6.467.066 12.179 6.492 15.729 13.987a12.311 12.311 0 0 1-4.8 1.487H22.087ZM19.892 62.177c-2.046 2.366-3.796 5.16-5.226 8.143a11.065 11.065 0 0 1-1.093-1.224c-2.68-3.452-6.369-10.223-8.933-15.26-.731-1.439-1.356-3.115-1.89-4.94 3.55 6.756 10.165 10.199 16.148 10.799a1.492 1.492 0 0 1 .994 2.482ZM46.14 62.177c2.046 2.366 3.796 5.16 5.226 8.143.395-.378.756-.788 1.093-1.224 2.68-3.452 6.37-10.223 8.933-15.26.731-1.439 1.356-3.115 1.89-4.94-3.55 6.756-10.165 10.199-16.148 10.799a1.492 1.492 0 0 0-.994 2.482Z",
          className: "helmet",
        }),
      ],
    }),
  Ps = ({ position: e, name: t, color: n, speed: r, time: l }) =>
    Mt("div", {
      className:
        "w-full h-full flex flex-row justify-between items-center border-2 rounded border-black my-4 px-4",
      children: [
        j("p", { className: " w-2 text-xs mid:text-base", children: e }),
        j("div", {
          className: "h-full scale-[65%] flex items-center",
          children: j(oh, { color: n }),
        }),
        Mt("div", {
          className: " flex flex-col items-center w-1/2",
          id: "info",
          children: [
            j("p", { className: "", children: t }),
            Mt("p", {
              className: " text-purple-600 text-xs mid:text-base",
              children: [
                ih(l),
                " ",
                Mt("span", {
                  className: " text-sky-600",
                  children: ["| ", r, " км/ч"],
                }),
              ],
            }),
          ],
        }),
      ],
    });
function uh() {
  const e = [Ot.RED, Ot.GREEN, Ot.BLUE],
    t = Math.floor(Math.random() * e.length);
  return e[t];
}
function sh() {
  const e = [
      "Alice",
      "Bob",
      "Charlie",
      "David",
      "Eve",
      "Frank",
      "Grace",
      "Hannah",
      "Isaac",
      "Jane",
    ],
    t = [
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Garcia",
      "Miller",
      "Davis",
      "Rodriguez",
      "Addeman",
    ],
    n = Math.floor(Math.random() * e.length);
  return `${e[n]} ${t[n]}`;
}
function ah() {
  return Math.floor(Math.random() * 301 + 50);
}
function ch() {
  return Math.random() * (6e5 - 6e4 + 1) + 6e4;
}
function fh(e) {
  const t = [];
  for (let n = 0; n < e; n++) {
    const r = { color: uh(), name: sh(), speed: ah(), time: ch() };
    t.push(r);
  }
  return t;
}
const dh = (e) => {
    const [t, n] = D.useState(!1),
      [r, l] = D.useState([]);
    return (
      D.useEffect(() => {
        n(!0),
          setTimeout(() => {
            const i = fh(50);
            l((o) => [...o, ...i]), n(!1);
          }, 1e3);
      }, [e]),
      { isLoading: t, players: r }
    );
  },
  ph = () => {
    const [e, t] = D.useState(1),
      { isLoading: n, players: r } = dh(e),
      l = D.useRef(null),
      i = D.useCallback(
        (o) => {
          n ||
            (l.current && l.current.disconnect(),
            (l.current = new IntersectionObserver((u) => {
              u[0].isIntersecting && t((s) => s + 1);
            })),
            o && l.current.observe(o));
        },
        [n]
      );
    return Mt("div", {
      className: "bg-slate-500 w-full h-full p-4",
      children: [
        n && j("div", { className: "w-[100vw] h-[100vh] bg-slate-500" }),
        r.map((o, u) =>
          r.length === u + 1
            ? j(
                "div",
                {
                  ref: i,
                  className: "min:w-full mid:w-1/2 max:w-1/3 mx-auto h-16",
                  children: j(Ps, {
                    position: u + 1,
                    name: o.name,
                    color: o.color,
                    speed: o.speed,
                    time: o.time,
                  }),
                },
                `${o.name}+${o.time}`
              )
            : j(
                "div",
                {
                  className: "min:w-full mid:w-1/2 max:w-1/3 mx-auto h-16",
                  children: j(Ps, {
                    position: u + 1,
                    name: o.name,
                    color: o.color,
                    speed: o.speed,
                    time: o.time,
                  }),
                },
                `${o.name}+${o.time}`
              )
        ),
        n &&
          r.length > 0 &&
          j("div", {
            className: "mx-auto h-60 flex justify-center items-center",
            children: "Loading...",
          }),
      ],
    });
  },
  hh = new Tp(),
  mh = [{ path: "/elementals_studio_test/", element: j(ph, {}) }],
  vh = () =>
    Mt(Op, { location: hh, routes: mh, children: [j(lh, {}), j(su, {})] });
gp.render(
  j(pf.StrictMode, { children: j(vh, {}) }),
  document.getElementById("root")
);
