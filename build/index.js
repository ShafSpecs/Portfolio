var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// empty-module:../client/dictionary.client
var require_dictionary = __commonJS({
  "empty-module:../client/dictionary.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// app/utils/plugins/markdown-copy.server.js
var require_markdown_copy_server = __commonJS({
  "app/utils/plugins/markdown-copy.server.js"(exports, module2) {
    init_react();
    var _ = require("lodash");
    try {
      exports === window;
      const Clipboard = require("clipboard");
      new Clipboard(".markdown-it-code-copy");
    } catch (_err) {
    }
    if (typeof String.prototype.replaceAll === "undefined") {
      String.prototype.replaceAll = function(match, replace) {
        return this.replace(new RegExp(match, "g"), () => replace);
      };
    }
    var defaultOptions = {
      buttonStyle: "position: absolute; top: 0.625rem; right: 0.625rem; cursor: pointer; outline: none;",
      buttonClass: "copy-btn"
    };
    function renderCode(origRule, options) {
      options = _.merge(defaultOptions, options);
      return (...args) => {
        const [tokens, idx] = args;
        const content = tokens[idx].content.replaceAll('"', "&quot;").replaceAll("'", "&lt;");
        const origRendered = origRule(...args);
        if (content.length === 0)
          return origRendered;
        return `
<div style="position: relative">
	${origRendered}
	<button class="markdown-it-code-copy ${options.buttonClass}" id="copy-btn" data-clipboard-text="${content}" style="${options.buttonStyle}" title="Copy"></button>
</div>
`;
      };
    }
    module2.exports = (md2, options) => {
      md2.renderer.rules.code_block = renderCode(md2.renderer.rules.code_block, options);
      md2.renderer.rules.fence = renderCode(md2.renderer.rules.fence, options);
    };
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\fash\Documents\shafspecs\app\root.tsx
var root_exports = {};
__export(root_exports, {
  Header: () => Header,
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_react = __toESM(require("react"));
var import_remix2 = __toESM(require_remix());

// app/styles/index.css
var styles_default = "/build/_assets/index-NS2NGYDB.css";

// app/projects/sun-svgrepo-com.svg
var sun_svgrepo_com_default = "/build/_assets/sun-svgrepo-com-J5ZMS2VJ.svg";

// app/projects/moon-svgrepo-com.svg
var moon_svgrepo_com_default = "/build/_assets/moon-svgrepo-com-PXHCPOZM.svg";

// route:C:\Users\fash\Documents\shafspecs\app\root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
var meta = () => {
  return {
    title: "ShafSpecs",
    viewport: "width=device-width, initial-scale=1.0",
    keywords: "Remix,ShafSpecs,Shaf,Blog,Portfolio,Fashola,Abdur-Rahman",
    "twitter:image": "https://ucarecdn.com/4293195b-df49-4886-ab16-3b045b3fb185/Freecodecamp.png",
    "og:image": "https://ucarecdn.com/4293195b-df49-4886-ab16-3b045b3fb185/Freecodecamp.png",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@ShafSpecs",
    "twitter:site": "@ShafSpecs",
    "twitter:title": "ShafSpecs",
    "og:title": "ShafSpecs",
    "og:type": "website",
    "og:url": "https://shafspecs.vercel.app",
    "twitter:description": "Hello there friends. My name is Abdur-Rahman, welcome to my site where I showcase my projects, share my thoughts & experiences, and my Digital Garden. I am ShafSpecs and welcome to my Universe.",
    "og:locale": "en_US",
    "og:image:alt": "ShafSpecs",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    "og:image:secure_url": "https://ucarecdn.com/4293195b-df49-4886-ab16-3b045b3fb185/Freecodecamp.png",
    "og:image:url": "https://ucarecdn.com/4293195b-df49-4886-ab16-3b045b3fb185/Freecodecamp.png",
    "og:description": "Hello there friends. My name is Abdur-Rahman and welcome to my site where I showcase my projects, share my thoughts & experiences, and my Digital Garden. I am ShafSpecs and welcome to my Universe."
  };
};
function App() {
  let location = (0, import_remix2.useLocation)();
  let matches = (0, import_remix2.useMatches)();
  let isMount = true;
  import_react.default.useEffect(() => {
    var _a;
    let mounted = isMount;
    isMount = false;
    if ("serviceWorker" in navigator) {
      if (navigator.serviceWorker.controller) {
        (_a = navigator.serviceWorker.controller) == null ? void 0 : _a.postMessage({
          type: "REMIX_NAVIGATION",
          isMount: mounted,
          location,
          matches,
          manifest: window.__remixManifest
        });
      } else {
        let listener = async () => {
          var _a2;
          await navigator.serviceWorker.ready;
          (_a2 = navigator.serviceWorker.controller) == null ? void 0 : _a2.postMessage({
            type: "REMIX_NAVIGATION",
            isMount: mounted,
            location,
            matches,
            manifest: window.__remixManifest
          });
        };
        navigator.serviceWorker.addEventListener("controllerchange", listener);
        return () => {
          navigator.serviceWorker.removeEventListener("controllerchange", listener);
        };
      }
    }
  }, [location]);
  return /* @__PURE__ */ import_react.default.createElement("html", {
    lang: "en",
    style: { height: "100%" },
    "data-theme": "dark"
  }, /* @__PURE__ */ import_react.default.createElement("head", null, /* @__PURE__ */ import_react.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react.default.createElement("meta", {
    name: "viewport",
    content: "wclassNameth=device-wclassNameth,initial-scale=1"
  }), /* @__PURE__ */ import_react.default.createElement(import_remix2.Meta, null), /* @__PURE__ */ import_react.default.createElement("link", {
    rel: "manifest",
    href: "/resources/manifest.json"
  }), /* @__PURE__ */ import_react.default.createElement("link", {
    rel: "shortcut icon",
    href: "/icons/favicon.ico",
    type: "image/x-icon"
  }), /* @__PURE__ */ import_react.default.createElement(import_remix2.Links, null)), /* @__PURE__ */ import_react.default.createElement("body", null, /* @__PURE__ */ import_react.default.createElement(Header, null), /* @__PURE__ */ import_react.default.createElement(import_remix2.Outlet, null), /* @__PURE__ */ import_react.default.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ import_react.default.createElement(import_remix2.Scripts, null), /* @__PURE__ */ import_react.default.createElement(import_remix2.LiveReload, null)));
}
function Header() {
  const [darkMode, setDarkmode] = (0, import_react.useState)(true);
  const activeClassName = "active-nav";
  const activeMobileClassName = "active-nav-mobile";
  const btnRef = (0, import_react.useRef)(null);
  const mobileRef = (0, import_react.useRef)(null);
  const mobileToggleRef = (0, import_react.useRef)(null);
  const toggleMobileNav = () => {
    if (mobileRef.current.style.display == "none") {
      mobileRef.current.style.display = "flex";
      mobileToggleRef.current.innerHTML = "&times;";
    } else {
      mobileRef.current.style.display = "none";
      mobileToggleRef.current.innerHTML = "&#9776;";
    }
  };
  function toggleDarkMode() {
    if (typeof document !== void 0 && !darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else if (typeof document !== void 0 && darkMode) {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }
  return /* @__PURE__ */ import_react.default.createElement("header", {
    className: "header"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.Link, {
    to: "/"
  }, /* @__PURE__ */ import_react.default.createElement("h1", {
    className: "page-title"
  }, "ShafSpecs")), /* @__PURE__ */ import_react.default.createElement("nav", {
    className: "navbar"
  }, /* @__PURE__ */ import_react.default.createElement("ul", {
    className: "nav-wrapper"
  }, /* @__PURE__ */ import_react.default.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    to: "portfolio"
  }, ({ isActive }) => /* @__PURE__ */ import_react.default.createElement("span", {
    className: isActive ? activeClassName : void 0
  }, "Portfolio"))), /* @__PURE__ */ import_react.default.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    to: "blog"
  }, ({ isActive }) => /* @__PURE__ */ import_react.default.createElement("span", {
    className: isActive ? activeClassName : void 0
  }, "Blog"))), /* @__PURE__ */ import_react.default.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    to: "about"
  }, ({ isActive }) => /* @__PURE__ */ import_react.default.createElement("span", {
    className: isActive ? activeClassName : void 0
  }, "About"))))), /* @__PURE__ */ import_react.default.createElement("nav", {
    className: "mobileNav",
    ref: mobileRef,
    style: { display: "none" }
  }, /* @__PURE__ */ import_react.default.createElement("ul", null, /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    to: "portfolio"
  }, ({ isActive }) => /* @__PURE__ */ import_react.default.createElement("span", {
    className: isActive ? activeMobileClassName : void 0
  }, "Portfolio"))), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    to: "blog"
  }, ({ isActive }) => /* @__PURE__ */ import_react.default.createElement("span", {
    className: isActive ? activeMobileClassName : void 0
  }, "Blog"))), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    to: "about"
  }, ({ isActive }) => /* @__PURE__ */ import_react.default.createElement("span", {
    className: isActive ? activeMobileClassName : void 0
  }, "About"))))), /* @__PURE__ */ import_react.default.createElement("section", {
    className: "mobileNav1"
  }, /* @__PURE__ */ import_react.default.createElement("button", {
    ref: mobileToggleRef,
    onClick: toggleMobileNav
  }, "\u2630")), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "theme-toggle"
  }, /* @__PURE__ */ import_react.default.createElement("button", {
    ref: btnRef,
    className: "btn-mode",
    onClick: () => {
      toggleDarkMode();
      setDarkmode((prev) => !prev);
    }
  }, darkMode ? /* @__PURE__ */ import_react.default.createElement("img", {
    src: moon_svgrepo_com_default,
    alt: "moon"
  }) : /* @__PURE__ */ import_react.default.createElement("img", {
    src: sun_svgrepo_com_default,
    alt: "sun"
  }))));
}

// route:C:\Users\fash\Documents\shafspecs\app\routes\resources\manifest[.]json.ts
var manifest_json_exports = {};
__export(manifest_json_exports, {
  loader: () => loader
});
init_react();
var import_remix3 = __toESM(require_remix());
var loader = () => {
  return (0, import_remix3.json)({
    short_name: "PWA",
    name: "Remix PWA",
    start_url: "/",
    display: "standalone",
    background_color: "#d3d7dd",
    theme_color: "#c34138",
    shortcuts: [
      {
        name: "Homepage",
        url: "/",
        icons: [
          {
            src: "/icons/android-icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any monochrome"
          }
        ]
      }
    ],
    icons: [
      {
        src: "/icons/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
        density: "0.75"
      },
      {
        src: "/icons/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
        density: "1.0"
      },
      {
        src: "/icons/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        density: "1.5"
      },
      {
        src: "/icons/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        density: "2.0"
      },
      {
        src: "/icons/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        density: "3.0"
      },
      {
        src: "/icons/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        density: "4.0"
      }
    ]
  }, {
    headers: {
      "Cache-Control": "public, max-age=600"
    }
  });
};

// route:C:\Users\fash\Documents\shafspecs\app\routes\resources\subscribe.ts
var subscribe_exports = {};
__export(subscribe_exports, {
  action: () => action,
  loader: () => loader2
});
init_react();

// app/utils/server/pwa-utils.server.ts
init_react();
var storage = require("node-persist");
var webPush = require("web-push");
async function SaveSubscription(sub) {
  await storage.init();
  await storage.setItem("subscription", sub);
}

// route:C:\Users\fash\Documents\shafspecs\app\routes\resources\subscribe.ts
var webPush2 = require("web-push");
var action = async ({ request }) => {
  const data = await request.json();
  const subscription = data.subscription;
  SaveSubscription(subscription);
  return { message: "Done" };
};
var loader2 = async () => {
  if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
    console.log("You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY environment variables. You can use the following ones:");
    console.log(webPush2.generateVAPIDKeys());
    return;
  }
  const publicKey = process.env.VAPID_PUBLIC_KEY;
  return new Response(publicKey, {
    status: 202,
    statusText: "Successful Operation"
  });
};

// route:C:\Users\fash\Documents\shafspecs\app\routes\portfolio.tsx
var portfolio_exports = {};
__export(portfolio_exports, {
  default: () => Portfolio,
  links: () => links2,
  loader: () => loader3,
  meta: () => meta2
});
init_react();
var import_remix4 = __toESM(require_remix());
var import_fa = require("react-icons/fa");

// app/projects/NightyNight.png
var NightyNight_default = "/build/_assets/NightyNight-3JKSOXGR.png";

// app/projects/tracker.svg
var tracker_default = "/build/_assets/tracker-OUJYR7NL.svg";

// app/styles/portfolio.css
var portfolio_default = "/build/_assets/portfolio-PCUIFDYI.css";

// route:C:\Users\fash\Documents\shafspecs\app\routes\portfolio.tsx
var links2 = () => {
  return [{ rel: "stylesheet", href: portfolio_default }];
};
var meta2 = () => {
  return {
    title: "ShafSpecs - Portfolio",
    description: "View my showcased projects and view their source code, if available :wink:, on my portfolio.",
    keywords: "ShafSpecs, Abdur-Rahman, Fashola, Shaf, Portfolio, Projects"
  };
};
var loader3 = async () => {
  const err = new Error("Not implemented yet!");
  return err;
};
function Card({ image, alt, title, desc, github, preview }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "card"
  }, /* @__PURE__ */ React.createElement("img", {
    src: image,
    alt,
    className: "img"
  }), /* @__PURE__ */ React.createElement("h3", {
    className: "card-title"
  }, title), /* @__PURE__ */ React.createElement("p", {
    className: "card-text"
  }, desc), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: github,
    className: "btn-link"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "card-btn"
  }, "Github")), preview && /* @__PURE__ */ React.createElement("a", {
    href: preview,
    className: "btn-link"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "card-btn"
  }, "Preview"))));
}
function Portfolio() {
  const data = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "portfolio"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "links"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "u-list"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "svg-link feather-github"
  }, /* @__PURE__ */ React.createElement("title", null, "GitHub"), /* @__PURE__ */ React.createElement("path", {
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "svg-link feather-twitter"
  }, /* @__PURE__ */ React.createElement("title", null, "Twitter"), /* @__PURE__ */ React.createElement("path", {
    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://dev.to/shafspecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 32 447.99999999999994 448",
    role: "img",
    width: "2500",
    height: "2321",
    className: "feather-github",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("title", null, "DEV.to"), /* @__PURE__ */ React.createElement("path", {
    d: "M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://codepen.io/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement(import_fa.FaCodepen, {
    className: "feather-github"
  }))))), /* @__PURE__ */ React.createElement("main", {
    className: "fillHeight"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "portfolio-title"
  }, "My Portfolio"), /* @__PURE__ */ React.createElement("section", {
    className: "cards"
  }, /* @__PURE__ */ React.createElement(Card, {
    image: NightyNight_default,
    alt: "Portfolio",
    title: "Nighty Night Theme",
    desc: "A minimal, dark bluish-black theme for VS Code, with calming colors and high contrast, it is a \u{1F44D}. Available on Visual Studio Marketplace."
  }), /* @__PURE__ */ React.createElement(Card, {
    image: tracker_default,
    alt: "Portfolio",
    title: "Get It Done Task Tracker",
    desc: "A simple task tracker for managing your daily tasks. It is a \u{1F44D}."
  })), /* @__PURE__ */ React.createElement("div", {
    className: "spin"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "more"
  }, "ShafSpecs is working to add more cleaned up projects here..."), /* @__PURE__ */ React.createElement("footer", {
    className: "footer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mobile-div"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "mobile-ul"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "svg-link feather-github"
  }, /* @__PURE__ */ React.createElement("title", null, "GitHub"), /* @__PURE__ */ React.createElement("path", {
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "svg-link feather-twitter"
  }, /* @__PURE__ */ React.createElement("title", null, "Twitter"), /* @__PURE__ */ React.createElement("path", {
    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://dev.to/shafspecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 32 447.99999999999994 448",
    role: "img",
    width: "2500",
    height: "2321",
    className: "dev feather-github",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("title", null, "DEV.to"), /* @__PURE__ */ React.createElement("path", {
    d: "M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://codepen.io/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement(import_fa.FaCodepen, {
    className: "feather-github"
  }))))))), /* @__PURE__ */ React.createElement("div", {
    className: "hazard"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wip"
  }, "\u{1F6A7} Page is still being constructed!\u{1F477}\u200D\u2642\uFE0F \u{1F6A7}")));
}

// route:C:\Users\fash\Documents\shafspecs\app\routes\about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  links: () => links3,
  meta: () => meta3
});
init_react();
var import_fa2 = require("react-icons/fa");

// app/projects/face_co.svg
var face_co_default = "/build/_assets/face_co-UVKGNJIW.svg";

// app/styles/about.css
var about_default = "/build/_assets/about-IIL34UFG.css";

// route:C:\Users\fash\Documents\shafspecs\app\routes\about.tsx
var links3 = () => {
  return [{ rel: "stylesheet", href: about_default }];
};
var meta3 = () => {
  return {
    title: "ShafSpecs - About Me",
    description: "Learn more about Abdur-Rahman Fashola aka ShafSpecs, and let's connect!",
    keywords: "ShafSpecs, Abdur-Rahman, Fashola, Shaf, Digital Garden, About Me, About, About Shaf"
  };
};
function About() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "links"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "u-list"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "svg-link feather-github"
  }, /* @__PURE__ */ React.createElement("title", null, "GitHub"), /* @__PURE__ */ React.createElement("path", {
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "svg-link feather-twitter"
  }, /* @__PURE__ */ React.createElement("title", null, "Twitter"), /* @__PURE__ */ React.createElement("path", {
    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://dev.to/shafspecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 32 447.99999999999994 448",
    role: "img",
    width: "2500",
    height: "2321",
    className: "feather-github",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("title", null, "DEV.to"), /* @__PURE__ */ React.createElement("path", {
    d: "M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://codepen.io/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement(import_fa2.FaCodepen, {
    className: "feather-github"
  }))))), /* @__PURE__ */ React.createElement("main", {
    className: "fillHeight"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "about-title"
  }, "About Me"), /* @__PURE__ */ React.createElement("section", {
    className: "hero"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text"
  }, /* @__PURE__ */ React.createElement("p", null, "Hello \u{1F44B}! My name is Abdur-Rahman Fashola, known to many as Shafspecs or simply Shaf. I'm a 16 year old high school graduate and I am passionate about creating things that live on the web. I started my journey as a developer by attending a WordPress camp in the summer of 2019, and in the summer of 2020, I decided to play around with HTML & CSS. Turns out, I had found a life-long passion for web development and I decided to pursue it.", /* @__PURE__ */ React.createElement("p", {
    className: "p-break"
  }, "My main focus this days are trying to improve my skills in Full-Stack Web Development and Unity Game Development and also helping to build a better tomorrow by contributing towards open-sourced development."), /* @__PURE__ */ React.createElement("p", {
    className: "p-break"
  }, "Here are a few technologies I have been working with recently:"), /* @__PURE__ */ React.createElement("ul", {
    className: "skill-list"
  }, /* @__PURE__ */ React.createElement("li", null, "Remix"), /* @__PURE__ */ React.createElement("li", null, "TypeScript"), /* @__PURE__ */ React.createElement("li", null, "JavaScript (ES6+)"), /* @__PURE__ */ React.createElement("li", null, "Next"), /* @__PURE__ */ React.createElement("li", null, "React"), /* @__PURE__ */ React.createElement("li", null, "C#/Unity"), /* @__PURE__ */ React.createElement("li", null, "SQL"), /* @__PURE__ */ React.createElement("li", null, "WordPress"), /* @__PURE__ */ React.createElement("li", null, "Node.js")))), /* @__PURE__ */ React.createElement("div", {
    className: "portrait"
  }, /* @__PURE__ */ React.createElement("img", {
    src: face_co_default,
    className: "img",
    alt: "Portrait"
  }))), /* @__PURE__ */ React.createElement("section", {
    className: "contact"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "contact-title"
  }, /* @__PURE__ */ React.createElement("u", null, "Let's Talk \u{1F399}")), /* @__PURE__ */ React.createElement("p", {
    className: "center"
  }, "Want to reach out? Feel free to contact me via one of my avialable media outlets:"), /* @__PURE__ */ React.createElement("div", {
    className: "contact-btn"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "mailto:abbadshaf05@gmail.com",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement("button", null, /* @__PURE__ */ React.createElement("svg", {
    "shape-rendering": "geometricPrecision",
    "text-rendering": "geometricPrecision",
    "image-rendering": "optimizeQuality",
    xmlns: "http://www.w3.org/2000/svg",
    className: "feather-mail",
    viewBox: "7.086 7.087 1277.149 924.008"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M1138.734 931.095h.283M1139.017 931.095h-.283"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1179.439 7.087c57.543 0 104.627 47.083 104.627 104.626v30.331l-145.36 103.833-494.873 340.894L148.96 242.419v688.676h-37.247c-57.543 0-104.627-47.082-104.627-104.625V111.742C7.086 54.198 54.17 7.115 111.713 7.115l532.12 394.525L1179.41 7.115l.029-.028z",
    fill: "#e75a4d"
  }), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "a",
    gradientUnits: "userSpaceOnUse",
    x1: "1959.712",
    y1: "737.107",
    x2: "26066.213",
    y2: "737.107",
    gradientTransform: "matrix(.0283 0 0 -.0283 248.36 225.244)"
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: "0",
    stopColor: "#f8f6ef"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#e7e4d6"
  })), /* @__PURE__ */ React.createElement("path", {
    fill: "url(#a)",
    d: "M111.713 7.087l532.12 394.525L1179.439 7.087z"
  }), /* @__PURE__ */ React.createElement("path", {
    fill: "#e7e4d7",
    d: "M148.96 242.419v688.676h989.774V245.877L643.833 586.771z"
  }), /* @__PURE__ */ React.createElement("path", {
    fill: "#b8b7ae",
    d: "M148.96 931.095l494.873-344.324-2.24-1.586L148.96 923.527z"
  }), /* @__PURE__ */ React.createElement("path", {
    fill: "#b7b6ad",
    d: "M1138.734 245.877l.283 685.218-495.184-344.324z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1284.066 142.044l.17 684.51c-2.494 76.082-35.461 103.238-145.219 104.514l-.283-685.219 145.36-103.833-.028.028z",
    fill: "#b2392f"
  }), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "b",
    gradientUnits: "userSpaceOnUse",
    x1: "1959.712",
    y1: "737.107",
    x2: "26066.213",
    y2: "737.107",
    gradientTransform: "matrix(.0283 0 0 -.0283 248.36 225.244)"
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: "0",
    stopColor: "#f8f6ef"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#e7e4d6"
  })), /* @__PURE__ */ React.createElement("path", {
    fill: "url(#b)",
    d: "M111.713 7.087l532.12 394.525L1179.439 7.087z"
  }), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "c",
    gradientUnits: "userSpaceOnUse",
    x1: "1959.712",
    y1: "737.107",
    x2: "26066.213",
    y2: "737.107",
    gradientTransform: "matrix(.0283 0 0 -.0283 248.36 225.244)"
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: "0",
    stopColor: "#f8f6ef"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#e7e4d6"
  })), /* @__PURE__ */ React.createElement("path", {
    fill: "url(#c)",
    d: "M111.713 7.087l532.12 394.525L1179.439 7.087z"
  }), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "d",
    gradientUnits: "userSpaceOnUse",
    x1: "1959.712",
    y1: "737.107",
    x2: "26066.213",
    y2: "737.107",
    gradientTransform: "matrix(.0283 0 0 -.0283 248.36 225.244)"
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: "0",
    stopColor: "#f8f6ef"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#e7e4d6"
  })), /* @__PURE__ */ React.createElement("path", {
    fill: "url(#d)",
    d: "M111.713 7.087l532.12 394.525L1179.439 7.087z"
  }), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "e",
    gradientUnits: "userSpaceOnUse",
    x1: "1959.712",
    y1: "737.107",
    x2: "26066.213",
    y2: "737.107",
    gradientTransform: "matrix(.0283 0 0 -.0283 248.36 225.244)"
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: "0",
    stopColor: "#f8f6ef"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#e7e4d6"
  })), /* @__PURE__ */ React.createElement("path", {
    fill: "url(#e)",
    d: "M111.713 7.087l532.12 394.525L1179.439 7.087z"
  }), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "f",
    gradientUnits: "userSpaceOnUse",
    x1: "1959.712",
    y1: "737.107",
    x2: "26066.213",
    y2: "737.107",
    gradientTransform: "matrix(.0283 0 0 -.0283 248.36 225.244)"
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: "0",
    stopColor: "#f8f6ef"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#e7e4d6"
  })), /* @__PURE__ */ React.createElement("path", {
    fill: "url(#f)",
    d: "M111.713 7.087l532.12 394.525L1179.439 7.087z"
  }), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "g",
    gradientUnits: "userSpaceOnUse",
    x1: "1959.712",
    y1: "737.107",
    x2: "26066.213",
    y2: "737.107",
    gradientTransform: "matrix(.0283 0 0 -.0283 248.36 225.244)"
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: "0",
    stopColor: "#f8f6ef"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#e7e4d6"
  })), /* @__PURE__ */ React.createElement("path", {
    fill: "url(#g)",
    d: "M111.713 7.087l532.12 394.525L1179.439 7.087z"
  }), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "h",
    gradientUnits: "userSpaceOnUse",
    x1: "1959.712",
    y1: "737.107",
    x2: "26066.213",
    y2: "737.107",
    gradientTransform: "matrix(.0283 0 0 -.0283 248.36 225.244)"
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: "0",
    stopColor: "#f8f6ef"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#e7e4d6"
  })), /* @__PURE__ */ React.createElement("path", {
    fill: "url(#h)",
    d: "M111.713 7.087l532.12 394.525L1179.439 7.087z"
  }), /* @__PURE__ */ React.createElement("path", {
    fill: "#f7f5ed",
    d: "M111.713 7.087l532.12 394.525L1179.439 7.087z"
  })), "\xA0Connect via Gmail")), /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/shafspecs",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ React.createElement("button", null, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "#008db8",
    className: "feather-mail"
  }, /* @__PURE__ */ React.createElement("title", null, "Twitter"), /* @__PURE__ */ React.createElement("path", {
    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
  })), "\xA0 Connect via Twitter")))), /* @__PURE__ */ React.createElement("footer", {
    className: "footer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mobile-div"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "mobile-ul"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "svg-link feather-github"
  }, /* @__PURE__ */ React.createElement("title", null, "GitHub"), /* @__PURE__ */ React.createElement("path", {
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "svg-link feather-twitter"
  }, /* @__PURE__ */ React.createElement("title", null, "Twitter"), /* @__PURE__ */ React.createElement("path", {
    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://dev.to/shafspecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 32 447.99999999999994 448",
    role: "img",
    width: "2500",
    height: "2321",
    className: "dev feather-github",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("title", null, "DEV.to"), /* @__PURE__ */ React.createElement("path", {
    d: "M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://codepen.io/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement(import_fa2.FaCodepen, {
    className: "feather-github"
  }))))))));
}

// route:C:\Users\fash\Documents\shafspecs\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links4
});
init_react();
var import_remix5 = __toESM(require_remix());
var import_fa3 = require("react-icons/fa");

// app/styles/homepage.css
var homepage_default = "/build/_assets/homepage-I4B7YFR6.css";

// app/projects/CodePlay_Banner_ALPHA.png
var CodePlay_Banner_ALPHA_default = "/build/_assets/CodePlay_Banner_ALPHA-LGV3SXXZ.png";

// route:C:\Users\fash\Documents\shafspecs\app\routes\index.tsx
function links4() {
  return [
    { rel: "stylesheet", href: homepage_default },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    }
  ];
}
function ProjectCard({ title, desc, git, link, pic, svg }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flip-card"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flip-card-inner"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flip-card-front"
  }, /* @__PURE__ */ React.createElement("img", {
    style: svg ? { backgroundColor: "#7e7e7e" } : {},
    src: pic,
    alt: "Project"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flip-card-back"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "title"
  }, title), /* @__PURE__ */ React.createElement("p", null, desc), /* @__PURE__ */ React.createElement("span", {
    className: "links"
  }, /* @__PURE__ */ React.createElement("a", {
    href: link,
    target: "_blank"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "card-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    style: {
      width: "1.5rem",
      height: "1.5rem"
    },
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
  })), "  ", "View Demo")), /* @__PURE__ */ React.createElement("a", {
    href: git,
    target: "_blank"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "card-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "currentColor",
    style: {
      width: "1.325rem",
      height: "1.325rem"
    }
  }, /* @__PURE__ */ React.createElement("title", null, "GitHub"), /* @__PURE__ */ React.createElement("path", {
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  })), "  ", "Github"))))));
}
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "div"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "links"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "u-list"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "svg-link feather-github"
  }, /* @__PURE__ */ React.createElement("title", null, "GitHub"), /* @__PURE__ */ React.createElement("path", {
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "svg-link feather-twitter"
  }, /* @__PURE__ */ React.createElement("title", null, "Twitter"), /* @__PURE__ */ React.createElement("path", {
    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://dev.to/shafspecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 32 447.99999999999994 448",
    role: "img",
    width: "2500",
    height: "2321",
    className: "dev feather-github",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("title", null, "DEV.to"), /* @__PURE__ */ React.createElement("path", {
    d: "M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://codepen.io/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement(import_fa3.FaCodepen, {
    className: "feather-github"
  }))))), /* @__PURE__ */ React.createElement("main", {
    className: "fillHeight"
  }, /* @__PURE__ */ React.createElement("section", {
    style: { height: "max-content", display: "block" }
  }, /* @__PURE__ */ React.createElement("span", {
    className: "greetings"
  }, "Hello there \u{1F44B}, my name is"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", {
    className: "name"
  }, "Abdur-Rahman Fashola."), /* @__PURE__ */ React.createElement("p", {
    className: "spin"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "description"
  }, "I'm a Full-Stack Developer specializing in building and designing quality softwares and exceptional user experiences.")), /* @__PURE__ */ React.createElement("section", {
    className: "project"
  }, /* @__PURE__ */ React.createElement("h3", null, "My Work"), /* @__PURE__ */ React.createElement("div", {
    className: "projects"
  }, /* @__PURE__ */ React.createElement(ProjectCard, {
    pic: NightyNight_default,
    svg: false,
    title: "Nighty Night \u{1F319}",
    desc: "A minimal, dark bluish-black theme for VS Code, with calming colors and high contrast, it is a \u{1F44D}. Available on Visual Studio Marketplace.",
    git: "https://github.com/ShafSpecs/Nighty-Night-Theme",
    link: "https://marketplace.visualstudio.com/items?itemName=ShafSpecs.nighty-night"
  }), /* @__PURE__ */ React.createElement(ProjectCard, {
    pic: CodePlay_Banner_ALPHA_default,
    svg: false,
    title: "\u{1F468}\u200D\u{1F4BB} CodePlay",
    desc: "A simple, yet powerful, code playground for learning and practicing basic Web Development languages.",
    git: "https://github.com/ShafSpecs/CodePlay-Editor",
    link: ""
  }), /* @__PURE__ */ React.createElement(ProjectCard, {
    pic: tracker_default,
    svg: true,
    title: "\u{1F3C3}\u200D\u2642\uFE0F Task Tracker",
    desc: "A simple task tracker for managing your daily tasks. It is a \u{1F44D}.",
    git: "https://github.com/ShafSpecs/Task-Tracker_Remix",
    link: "https://task-tracker-remix.vercel.app/"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "next-work"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/portfolio"
  }, /* @__PURE__ */ React.createElement("p", null, "Check out my portfolio \u2192"))))), /* @__PURE__ */ React.createElement("section", {
    className: "about"
  }, /* @__PURE__ */ React.createElement("h3", null, "About Me"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Hello! My name is Abdur-Rahman and I enjoy creating things that live on the internet. I started my programming journey by attending a WordPress-hosted event and after one thing that led to the other, eventually landed in the world of web development. I love learning new technologies and often amazed by the progress we humans have made so far in this amazing field."), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/about"
  }, /* @__PURE__ */ React.createElement("button", null, "Who is ShafSpecs?")))), /* @__PURE__ */ React.createElement("section", {
    className: "contact"
  }, /* @__PURE__ */ React.createElement("h3", null, "Get in Touch"), /* @__PURE__ */ React.createElement("p", null, "Wanna get in touch? Have a question, or an offer, or you just feel like saying hi, send me an email and let's connect! \u{1F604}"), /* @__PURE__ */ React.createElement("a", {
    href: "mailto:abbadshaf05@gmail.com"
  }, /* @__PURE__ */ React.createElement("button", null, "Get in touch"))), /* @__PURE__ */ React.createElement("footer", {
    className: "footer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mobile-div"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "mobile-ul"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "svg-link feather-github"
  }, /* @__PURE__ */ React.createElement("title", null, "GitHub"), /* @__PURE__ */ React.createElement("path", {
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "svg-link feather-twitter"
  }, /* @__PURE__ */ React.createElement("title", null, "Twitter"), /* @__PURE__ */ React.createElement("path", {
    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://dev.to/shafspecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 32 447.99999999999994 448",
    role: "img",
    width: "2500",
    height: "2321",
    className: "dev feather-github",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("title", null, "DEV.to"), /* @__PURE__ */ React.createElement("path", {
    d: "M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://codepen.io/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement(import_fa3.FaCodepen, {
    className: "feather-github"
  }))))))));
}

// route:C:\Users\fash\Documents\shafspecs\app\routes\blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog
});
init_react();
var import_remix6 = __toESM(require_remix());
function Blog() {
  return /* @__PURE__ */ React.createElement(import_remix6.Outlet, null);
}

// route:C:\Users\fash\Documents\shafspecs\app\routes\blog\$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => Slug,
  links: () => links5,
  loader: () => loader4
});
init_react();
var import_react2 = require("react");
var import_remix7 = __toESM(require_remix());
var import_date_fns = require("date-fns");

// app/styles/blog-slug.css
var blog_slug_default = "/build/_assets/blog-slug-TVG3Y6SB.css";

// app/styles/frame.css
var frame_default = "/build/_assets/frame-A45MPX66.css";

// app/styles/github.css
var github_default = "/build/_assets/github-QPJRIXM5.css";

// app/utils/server/github.server.ts
init_react();
var import_core = require("@octokit/core");

// app/utils/handlers/github-api.ts
init_react();
var Repo = {
  owner: "ShafSpecs",
  repo: "remix-cms"
};

// app/utils/server/markdown.server.ts
init_react();
var import_dictionary = __toESM(require_dictionary());
var mar = require_markdown_copy_server();
var hljs = require("highlight.js");
var md = require("markdown-it")({
  html: true,
  typographer: true
}).use(require("markdown-it-toc-done-right")).use(require("markdown-it-alerts")).use(require("markdown-it-highlightjs"), { hljs }).use(require("markdown-it-multimd-table"), {
  multiline: false,
  rowspan: false,
  headerless: false
}).use(mar).use(require("markdown-it-abbr"), import_dictionary.AbbrDictionary).use(require("markdown-it-container"), "spoiler", {
  validate: function(params) {
    return params.trim().match(/^spoiler\s+(.*)$/);
  },
  render: function(tokens, idx) {
    var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
    if (tokens[idx].nesting === 1) {
      return "<details><summary>" + md.utils.escapeHtml(m[1]) + "</summary>\n";
    } else {
      return "</details>\n";
    }
  }
}).use(require("@gerhobbelt/markdown-it-github-headings")).use(require("markdown-it-container"), "dynamic", {
  validate: function() {
    return true;
  },
  render: function(tokens, idx) {
    var token = tokens[idx];
    if (token.nesting === 1) {
      return '<div class="' + token.info.trim() + '">';
    } else {
      return "</div>";
    }
  }
});

// app/utils/server/github.server.ts
var grayMatter = require("gray-matter");
var octokit = new import_core.Octokit({ auth: process.env.GITHUB_TOKEN });
async function getPosts() {
  const postDir = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", __spreadProps(__spreadValues({}, Repo), {
    path: "posts"
  }));
  return postDir;
}
async function PostsData() {
  const posts = await getPosts();
  const postsInfo = Promise.all(posts.data.map(async (post) => {
    const { name, download_url, sha } = post;
    const content = await fetch(download_url).then((res) => res.text());
    const { data } = grayMatter(content);
    return { name, frontmatter: data };
  }));
  return postsInfo;
}
async function getSinglePost(name) {
  const post = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", __spreadProps(__spreadValues({}, Repo), {
    path: `posts/${name}`
  }));
  const decoded = decodeURIComponent(escape(atob(post.data.content)));
  const parsed = grayMatter(decoded);
  const { data, content } = parsed;
  const html = md.render(content);
  return {
    data: html,
    frontmatter: data
  };
}

// route:C:\Users\fash\Documents\shafspecs\app\routes\blog\$slug.tsx
var links5 = () => {
  return [
    {
      rel: "stylesheet",
      href: blog_slug_default
    },
    {
      rel: "stylesheet",
      href: frame_default
    },
    {
      rel: "stylesheet",
      href: github_default
    }
  ];
};
var loader4 = async ({ params }) => {
  const data = await getSinglePost(`${params.slug}.md`);
  return {
    content: data.data,
    data: data.frontmatter
  };
};
function Slug() {
  const data = (0, import_remix7.useLoaderData)();
  const transition = (0, import_remix7.useTransition)();
  const bodyRef = (0, import_react2.useRef)(null);
  const blogRef = (0, import_react2.useRef)(null);
  const avgRef = (0, import_react2.useRef)(null);
  const dateRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (transition.state == "idle") {
      let setReadingTime = function() {
        let count = getWordCount();
        let time = Math.ceil(count / 240);
        avgRef.current && (avgRef.current.innerText = time + " min read");
      }, getWordCount = function() {
        var _a;
        if (blogRef.current) {
          return (_a = blogRef.current) == null ? void 0 : _a.innerText.match(/\w+/g).length;
        }
      };
      blogRef.current && (blogRef.current.innerHTML = data.content);
      setReadingTime();
      const match = data.data.date.match(/[^-]+/g);
      const formatted = (0, import_date_fns.format)(new Date(match[0], match[1] - 1, match[2].slice(0, 2)), "MMMM dd, yyyy");
      dateRef.current && (dateRef.current.innerText = formatted);
      document.addEventListener("click", function(e) {
        if (e.target && e.target.id == "copy-btn") {
          console.log("Done");
          if (navigator.clipboard) {
            navigator.clipboard.writeText(e.target.getAttribute("data-clipboard-text"));
          } else {
            document.execCommand("copy", false, e.target.getAttribute("data-clipboard-text"));
          }
        }
      });
    }
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "page-div",
    ref: bodyRef
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/blog"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "go-back"
  }, /* @__PURE__ */ React.createElement("span", null, "\u2190"), " Return back to overview")), /* @__PURE__ */ React.createElement("section", {
    className: "head"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "blog-meta"
  }, /* @__PURE__ */ React.createElement("h1", null, data == null ? void 0 : data.data.title), /* @__PURE__ */ React.createElement("div", {
    className: "stat"
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", {
    className: "date",
    ref: dateRef
  }), " -", " ", /* @__PURE__ */ React.createElement("span", {
    className: "avg-time",
    ref: avgRef
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "image",
    style: {
      background: `url(${data == null ? void 0 : data.data.image})`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      objectFit: "cover"
    }
  })), /* @__PURE__ */ React.createElement("section", {
    className: "markdown-body",
    ref: blogRef,
    style: { fontSize: "1.1275rem", pointerEvents: "all" }
  }), /* @__PURE__ */ React.createElement("section", {
    className: "action-call"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bmac"
  }, /* @__PURE__ */ React.createElement("span", null, "You could support me by buying a digital coffee \u{1F601}"), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.buymeacoffee.com/shafspecs",
    rel: "noreferrer",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png",
    alt: "Buy Me A Digital Coffee",
    style: { height: "3rem", width: "100%", marginTop: "0.25rem" }
  })))));
}

// route:C:\Users\fash\Documents\shafspecs\app\routes\blog\index.tsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => Blog2,
  links: () => links6,
  loader: () => loader5
});
init_react();
var import_react3 = require("react");
var import_remix8 = __toESM(require_remix());
var import_date_fns2 = require("date-fns");

// app/styles/blog.css
var blog_default = "/build/_assets/blog-UKBG7B5L.css";

// route:C:\Users\fash\Documents\shafspecs\app\routes\blog\index.tsx
function links6() {
  return [{ rel: "stylesheet", href: blog_default }];
}
var loader5 = async () => {
  const posts = await PostsData();
  const matter = posts.map((post) => {
    const { frontmatter } = post;
    return frontmatter;
  });
  const sortedPosts = matter.sort((a, b) => {
    return b.id - a.id;
  });
  return sortedPosts;
};
function Card2({ title, image, id, date }) {
  const statRef = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    const match = date.match(/[^-]+/g);
    const formatted = (0, import_date_fns2.format)(new Date(match[0], match[1] - 1, match[2].slice(0, 2)), "MMMM dd, yyyy");
    statRef.current.innerText = `Published: ${formatted}`;
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "blog-card-rec",
    style: {
      background: `url(${image})`,
      objectFit: "contain",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%"
    },
    key: id
  }, /* @__PURE__ */ React.createElement("div", {
    className: "blog-card-info"
  }, /* @__PURE__ */ React.createElement("p", null, title), /* @__PURE__ */ React.createElement("span", {
    className: "stats",
    ref: statRef
  })));
}
function Blog2() {
  const data = (0, import_remix8.useLoaderData)();
  const postRef = (0, import_react3.useRef)(null);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", {
    className: "hero"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "hero-body"
  }, "Welcome to my digital notepad. Teaching development skills, sharing my knowledge and experiences out there, and helping with building a brighter future."), /* @__PURE__ */ React.createElement("div", {
    className: "hero-image"
  }, "\u{1F4DA}")), /* @__PURE__ */ React.createElement("section", {
    className: "blog"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "blog-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "blog-content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "blog-header"
  }, /* @__PURE__ */ React.createElement("h2", null, "Recent Articles..")), /* @__PURE__ */ React.createElement("div", {
    className: "posts",
    ref: postRef
  }, data == null ? void 0 : data.map((post) => /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: post.slug,
    key: post.id
  }, /* @__PURE__ */ React.createElement(Card2, {
    title: post.title,
    date: post.date,
    image: post.image,
    id: post.id
  }))))))), /* @__PURE__ */ React.createElement("section", {
    className: "extra"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "newsletter"
  })));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "c9cef4f6", "entry": { "module": "/build/entry.client-PAZFE3RS.js", "imports": ["/build/_shared/chunk-POOVGFBC.js", "/build/_shared/chunk-325D37MS.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-OJFZYP7I.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-ZD462BNQ.js", "imports": ["/build/_shared/chunk-NHFOAZ3T.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog": { "id": "routes/blog", "parentId": "root", "path": "blog", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog-YYU5TNJQ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$slug": { "id": "routes/blog/$slug", "parentId": "routes/blog", "path": ":slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$slug-REETHAP7.js", "imports": ["/build/_shared/chunk-3UXWOKBX.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "routes/blog", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-ACUCIEVL.js", "imports": ["/build/_shared/chunk-3UXWOKBX.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-CCDNMU42.js", "imports": ["/build/_shared/chunk-PUPCXVZG.js", "/build/_shared/chunk-NHFOAZ3T.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/portfolio": { "id": "routes/portfolio", "parentId": "root", "path": "portfolio", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/portfolio-7T54ZHO5.js", "imports": ["/build/_shared/chunk-PUPCXVZG.js", "/build/_shared/chunk-NHFOAZ3T.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/resources/manifest[.]json": { "id": "routes/resources/manifest[.]json", "parentId": "root", "path": "resources/manifest.json", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/resources/manifest[.]json-EH2FWEQP.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/resources/subscribe": { "id": "routes/resources/subscribe", "parentId": "root", "path": "resources/subscribe", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/resources/subscribe-HXWLP4RH.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-C9CEF4F6.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/resources/manifest[.]json": {
    id: "routes/resources/manifest[.]json",
    parentId: "root",
    path: "resources/manifest.json",
    index: void 0,
    caseSensitive: void 0,
    module: manifest_json_exports
  },
  "routes/resources/subscribe": {
    id: "routes/resources/subscribe",
    parentId: "root",
    path: "resources/subscribe",
    index: void 0,
    caseSensitive: void 0,
    module: subscribe_exports
  },
  "routes/portfolio": {
    id: "routes/portfolio",
    parentId: "root",
    path: "portfolio",
    index: void 0,
    caseSensitive: void 0,
    module: portfolio_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/blog/$slug": {
    id: "routes/blog/$slug",
    parentId: "routes/blog",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "routes/blog",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: blog_exports2
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6Li4vY2xpZW50L2RpY3Rpb25hcnkuY2xpZW50IiwgIi4uL2FwcC91dGlscy9wbHVnaW5zL21hcmtkb3duLWNvcHkuc2VydmVyLmpzIiwgIjxzdGRpbj4iLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHNoYWZzcGVjc1xcYXBwXFxyb290LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGZhc2hcXERvY3VtZW50c1xcc2hhZnNwZWNzXFxhcHBcXHJvdXRlc1xccmVzb3VyY2VzXFxtYW5pZmVzdFsuXWpzb24udHMiLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHNoYWZzcGVjc1xcYXBwXFxyb3V0ZXNcXHJlc291cmNlc1xcc3Vic2NyaWJlLnRzIiwgIi4uL2FwcC91dGlscy9zZXJ2ZXIvcHdhLXV0aWxzLnNlcnZlci50cyIsICJyb3V0ZTpDOlxcVXNlcnNcXGZhc2hcXERvY3VtZW50c1xcc2hhZnNwZWNzXFxhcHBcXHJvdXRlc1xccG9ydGZvbGlvLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGZhc2hcXERvY3VtZW50c1xcc2hhZnNwZWNzXFxhcHBcXHJvdXRlc1xcYWJvdXQudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxzaGFmc3BlY3NcXGFwcFxccm91dGVzXFxpbmRleC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHNoYWZzcGVjc1xcYXBwXFxyb3V0ZXNcXGJsb2cudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxzaGFmc3BlY3NcXGFwcFxccm91dGVzXFxibG9nXFwkc2x1Zy50c3giLCAiLi4vYXBwL3V0aWxzL3NlcnZlci9naXRodWIuc2VydmVyLnRzIiwgIi4uL2FwcC91dGlscy9oYW5kbGVycy9naXRodWItYXBpLnRzIiwgIi4uL2FwcC91dGlscy9zZXJ2ZXIvbWFya2Rvd24uc2VydmVyLnRzIiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxzaGFmc3BlY3NcXGFwcFxccm91dGVzXFxibG9nXFxpbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCAiLy9AdHMtbm9jaGVja1xyXG5jb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XHJcblxyXG50cnkge1xyXG5cdC8vIE5vZGUganMgd2lsbCB0aHJvdyBhbiBlcnJvclxyXG5cdHRoaXMgPT09IHdpbmRvdztcclxuXHJcblx0Y29uc3QgQ2xpcGJvYXJkID0gcmVxdWlyZSgnY2xpcGJvYXJkJyk7XHJcblx0bmV3IENsaXBib2FyZCgnLm1hcmtkb3duLWl0LWNvZGUtY29weScpO1xyXG59XHJcbmNhdGNoIChfZXJyKSB7XHJcbn1cclxuXHJcbmlmKHR5cGVvZiBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VBbGwgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZUFsbCA9IGZ1bmN0aW9uKG1hdGNoLCByZXBsYWNlKSB7XHJcbiAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAobWF0Y2gsICdnJyksICgpID0+IHJlcGxhY2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuXHRidXR0b25TdHlsZTogJ3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwLjYyNXJlbTsgcmlnaHQ6IDAuNjI1cmVtOyBjdXJzb3I6IHBvaW50ZXI7IG91dGxpbmU6IG5vbmU7JyxcclxuXHRidXR0b25DbGFzczogJ2NvcHktYnRuJ1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ29kZShvcmlnUnVsZSwgb3B0aW9ucykge1xyXG5cdG9wdGlvbnMgPSBfLm1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcclxuXHRyZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuXHRcdGNvbnN0IFt0b2tlbnMsIGlkeF0gPSBhcmdzO1xyXG5cdFx0Y29uc3QgY29udGVudCA9IHRva2Vuc1tpZHhdLmNvbnRlbnRcclxuXHRcdFx0LnJlcGxhY2VBbGwoJ1wiJywgJyZxdW90OycpXHJcblx0XHRcdC5yZXBsYWNlQWxsKFwiJ1wiLCBcIiZsdDtcIik7XHJcblx0XHRjb25zdCBvcmlnUmVuZGVyZWQgPSBvcmlnUnVsZSguLi5hcmdzKTtcclxuXHJcblx0XHRpZiAoY29udGVudC5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiBvcmlnUmVuZGVyZWQ7XHJcblxyXG5cdFx0cmV0dXJuIGBcclxuPGRpdiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZVwiPlxyXG5cdCR7b3JpZ1JlbmRlcmVkfVxyXG5cdDxidXR0b24gY2xhc3M9XCJtYXJrZG93bi1pdC1jb2RlLWNvcHkgJHtvcHRpb25zLmJ1dHRvbkNsYXNzfVwiIGlkPVwiY29weS1idG5cIiBkYXRhLWNsaXBib2FyZC10ZXh0PVwiJHtjb250ZW50fVwiIHN0eWxlPVwiJHtvcHRpb25zLmJ1dHRvblN0eWxlfVwiIHRpdGxlPVwiQ29weVwiPjwvYnV0dG9uPlxyXG48L2Rpdj5cclxuYDtcclxuXHR9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IChtZCwgb3B0aW9ucykgPT4ge1xyXG5cdG1kLnJlbmRlcmVyLnJ1bGVzLmNvZGVfYmxvY2sgPSByZW5kZXJDb2RlKG1kLnJlbmRlcmVyLnJ1bGVzLmNvZGVfYmxvY2ssIG9wdGlvbnMpO1xyXG5cdG1kLnJlbmRlcmVyLnJ1bGVzLmZlbmNlID0gcmVuZGVyQ29kZShtZC5yZW5kZXJlci5ydWxlcy5mZW5jZSwgb3B0aW9ucyk7XHJcbn07IiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxcc2hhZnNwZWNzXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHNoYWZzcGVjc1xcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxcc2hhZnNwZWNzXFxcXGFwcFxcXFxyb3V0ZXNcXFxccmVzb3VyY2VzXFxcXG1hbmlmZXN0Wy5danNvbi50c1wiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxzaGFmc3BlY3NcXFxcYXBwXFxcXHJvdXRlc1xcXFxyZXNvdXJjZXNcXFxcc3Vic2NyaWJlLnRzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHNoYWZzcGVjc1xcXFxhcHBcXFxccm91dGVzXFxcXHBvcnRmb2xpby50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxcc2hhZnNwZWNzXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWJvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHNoYWZzcGVjc1xcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxzaGFmc3BlY3NcXFxcYXBwXFxcXHJvdXRlc1xcXFxibG9nLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxzaGFmc3BlY3NcXFxcYXBwXFxcXHJvdXRlc1xcXFxibG9nXFxcXCRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxzaGFmc3BlY3NcXFxcYXBwXFxcXHJvdXRlc1xcXFxibG9nXFxcXGluZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvcmVzb3VyY2VzL21hbmlmZXN0Wy5danNvblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcmVzb3VyY2VzL21hbmlmZXN0Wy5danNvblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyZXNvdXJjZXMvbWFuaWZlc3QuanNvblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvcmVzb3VyY2VzL3N1YnNjcmliZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcmVzb3VyY2VzL3N1YnNjcmliZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyZXNvdXJjZXMvc3Vic2NyaWJlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9wb3J0Zm9saW9cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3BvcnRmb2xpb1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwb3J0Zm9saW9cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2Fib3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hYm91dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhYm91dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZ1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nLyRzbHVnXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nLyRzbHVnXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgICAgcGF0aDogXCI6c2x1Z1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Jsb2dcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICBOYXZMaW5rLFxuICBMaW5rLFxuICB1c2VMb2NhdGlvbixcbiAgdXNlTWF0Y2hlc1xufSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24sIExpbmtzRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvaW5kZXguY3NzXCI7XG5pbXBvcnQgc3VuIGZyb20gXCIuL3Byb2plY3RzL3N1bi1zdmdyZXBvLWNvbS5zdmdcIjtcbmltcG9ydCBtb29uIGZyb20gXCIuL3Byb2plY3RzL21vb24tc3ZncmVwby1jb20uc3ZnXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJTaGFmU3BlY3NcIixcbiAgICB2aWV3cG9ydDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIsXG4gICAga2V5d29yZHM6IFwiUmVtaXgsU2hhZlNwZWNzLFNoYWYsQmxvZyxQb3J0Zm9saW8sRmFzaG9sYSxBYmR1ci1SYWhtYW5cIixcbiAgICBcInR3aXR0ZXI6aW1hZ2VcIjogXCJodHRwczovL3VjYXJlY2RuLmNvbS80MjkzMTk1Yi1kZjQ5LTQ4ODYtYWIxNi0zYjA0NWIzZmIxODUvRnJlZWNvZGVjYW1wLnBuZ1wiLFxuICAgIFwib2c6aW1hZ2VcIjogXCJodHRwczovL3VjYXJlY2RuLmNvbS80MjkzMTk1Yi1kZjQ5LTQ4ODYtYWIxNi0zYjA0NWIzZmIxODUvRnJlZWNvZGVjYW1wLnBuZ1wiLFxuICAgIFwidHdpdHRlcjpjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuICAgIFwidHdpdHRlcjpjcmVhdG9yXCI6IFwiQFNoYWZTcGVjc1wiLFxuICAgIFwidHdpdHRlcjpzaXRlXCI6IFwiQFNoYWZTcGVjc1wiLFxuICAgIFwidHdpdHRlcjp0aXRsZVwiOiBcIlNoYWZTcGVjc1wiLFxuICAgIFwib2c6dGl0bGVcIjogXCJTaGFmU3BlY3NcIixcbiAgICBcIm9nOnR5cGVcIjogXCJ3ZWJzaXRlXCIsXG4gICAgXCJvZzp1cmxcIjogXCJodHRwczovL3NoYWZzcGVjcy52ZXJjZWwuYXBwXCIsXG4gICAgXCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCI6IFwiSGVsbG8gdGhlcmUgZnJpZW5kcy4gTXkgbmFtZSBpcyBBYmR1ci1SYWhtYW4sIHdlbGNvbWUgdG8gbXkgc2l0ZSB3aGVyZSBJIHNob3djYXNlIG15IHByb2plY3RzLCBzaGFyZSBteSB0aG91Z2h0cyAmIGV4cGVyaWVuY2VzLCBhbmQgbXkgRGlnaXRhbCBHYXJkZW4uIEkgYW0gU2hhZlNwZWNzIGFuZCB3ZWxjb21lIHRvIG15IFVuaXZlcnNlLlwiLFxuICAgIFwib2c6bG9jYWxlXCI6IFwiZW5fVVNcIixcbiAgICBcIm9nOmltYWdlOmFsdFwiOiBcIlNoYWZTcGVjc1wiLFxuICAgIFwib2c6aW1hZ2U6d2lkdGhcIjogXCIxMjAwXCIsXG4gICAgXCJvZzppbWFnZTpoZWlnaHRcIjogXCI2MzBcIixcbiAgICBcIm9nOmltYWdlOnR5cGVcIjogXCJpbWFnZS9wbmdcIixcbiAgICBcIm9nOmltYWdlOnNlY3VyZV91cmxcIjogXCJodHRwczovL3VjYXJlY2RuLmNvbS80MjkzMTk1Yi1kZjQ5LTQ4ODYtYWIxNi0zYjA0NWIzZmIxODUvRnJlZWNvZGVjYW1wLnBuZ1wiLFxuICAgIFwib2c6aW1hZ2U6dXJsXCI6IFwiaHR0cHM6Ly91Y2FyZWNkbi5jb20vNDI5MzE5NWItZGY0OS00ODg2LWFiMTYtM2IwNDViM2ZiMTg1L0ZyZWVjb2RlY2FtcC5wbmdcIixcbiAgICBcIm9nOmRlc2NyaXB0aW9uXCI6IFwiSGVsbG8gdGhlcmUgZnJpZW5kcy4gTXkgbmFtZSBpcyBBYmR1ci1SYWhtYW4gYW5kIHdlbGNvbWUgdG8gbXkgc2l0ZSB3aGVyZSBJIHNob3djYXNlIG15IHByb2plY3RzLCBzaGFyZSBteSB0aG91Z2h0cyAmIGV4cGVyaWVuY2VzLCBhbmQgbXkgRGlnaXRhbCBHYXJkZW4uIEkgYW0gU2hhZlNwZWNzIGFuZCB3ZWxjb21lIHRvIG15IFVuaXZlcnNlLlwiLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgbWF0Y2hlcyA9IHVzZU1hdGNoZXMoKTtcblxuICBsZXQgaXNNb3VudCA9IHRydWU7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgbW91bnRlZCA9IGlzTW91bnQ7XG4gICAgaXNNb3VudCA9IGZhbHNlO1xuICAgIGlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgIGlmIChuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXI/LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICB0eXBlOiBcIlJFTUlYX05BVklHQVRJT05cIixcbiAgICAgICAgICBpc01vdW50OiBtb3VudGVkLFxuICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgIG1hdGNoZXMsXG4gICAgICAgICAgbWFuaWZlc3Q6IHdpbmRvdy5fX3JlbWl4TWFuaWZlc3QsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5O1xuICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXI/LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IFwiUkVNSVhfTkFWSUdBVElPTlwiLFxuICAgICAgICAgICAgaXNNb3VudDogbW91bnRlZCxcbiAgICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgICAgIG1hbmlmZXN0OiB3aW5kb3cuX19yZW1peE1hbmlmZXN0LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKFwiY29udHJvbGxlcmNoYW5nZVwiLCBsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY29udHJvbGxlcmNoYW5nZVwiLFxuICAgICAgICAgICAgbGlzdGVuZXJcbiAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2xvY2F0aW9uXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19IGRhdGEtdGhlbWU9XCJkYXJrXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz4gXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3Y2xhc3NOYW1ldGg9ZGV2aWNlLXdjbGFzc05hbWV0aCxpbml0aWFsLXNjYWxlPTFcIi8+IFxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvcmVzb3VyY2VzL21hbmlmZXN0Lmpzb25cIiAvPiBcbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvaWNvbnMvZmF2aWNvbi5pY29cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgPExpbmtzIC8+IFxuICAgICAgPC9oZWFkPiBcbiAgICAgIDxib2R5PlxuICAgICAgICAgIDxIZWFkZXIgLz4gXG4gICAgICAgICAgPE91dGxldCAvPiBcbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+IFxuICAgICAgICA8U2NyaXB0cyAvPiBcbiAgICAgICAgPExpdmVSZWxvYWQgLz4gXG4gICAgICA8L2JvZHk+IFxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFtkYXJrTW9kZSwgc2V0RGFya21vZGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgY29uc3QgYWN0aXZlQ2xhc3NOYW1lID0gXCJhY3RpdmUtbmF2XCI7XG4gIGNvbnN0IGFjdGl2ZU1vYmlsZUNsYXNzTmFtZSA9IFwiYWN0aXZlLW5hdi1tb2JpbGVcIjtcblxuICBjb25zdCBidG5SZWYgPSB1c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwhKTtcbiAgY29uc3QgbW9iaWxlUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsISk7XG4gIGNvbnN0IG1vYmlsZVRvZ2dsZVJlZiA9IHVzZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4obnVsbCEpO1xuXG4gIGNvbnN0IHRvZ2dsZU1vYmlsZU5hdiA9ICgpID0+IHtcbiAgICBpZiAobW9iaWxlUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIikge1xuICAgICAgbW9iaWxlUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgbW9iaWxlVG9nZ2xlUmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vYmlsZVJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIG1vYmlsZVRvZ2dsZVJlZi5jdXJyZW50LmlubmVySFRNTCA9IFwiJiM5Nzc2O1wiO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiB0b2dnbGVEYXJrTW9kZSgpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSB1bmRlZmluZWQgJiYgIWRhcmtNb2RlKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLCBcImRhcmtcIik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IHVuZGVmaW5lZCAmJiBkYXJrTW9kZSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIiwgXCJsaWdodFwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+ICBcbiAgICAgIDxMaW5rIHRvPVwiL1wiPiAgIFxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPlNoYWZTcGVjczwvaDE+IFxuICAgICAgPC9MaW5rPiBcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+ICBcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyXCI+IFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPiAgIFxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCJwb3J0Zm9saW9cIj4gICAgXG4gICAgICAgICAgICAgIHsoeyBpc0FjdGl2ZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IGFjdGl2ZUNsYXNzTmFtZSA6IHVuZGVmaW5lZH0+ICAgICBcbiAgICAgICAgICAgICAgICAgIFBvcnRmb2xpbyBcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICl9IFxuICAgICAgICAgICAgPC9OYXZMaW5rPiBcbiAgICAgICAgICA8L2xpPiBcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj4gIFxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCJibG9nXCI+ICAgXG4gICAgICAgICAgICAgIHsoeyBpc0FjdGl2ZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IGFjdGl2ZUNsYXNzTmFtZSA6IHVuZGVmaW5lZH0+ICAgICAgIFxuICAgICAgICAgICAgICAgICAgQmxvZyBcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICl9IFxuICAgICAgICAgICAgPC9OYXZMaW5rPiBcbiAgICAgICAgICA8L2xpPiBcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiYWJvdXRcIj4gICBcbiAgICAgICAgICAgICAgeyh7IGlzQWN0aXZlIH0pID0+IChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2lzQWN0aXZlID8gYWN0aXZlQ2xhc3NOYW1lIDogdW5kZWZpbmVkfT4gICAgICBcbiAgICAgICAgICAgICAgICAgIEFib3V0IFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKX0gXG4gICAgICAgICAgICA8L05hdkxpbms+IFxuICAgICAgICAgIDwvbGk+IFxuICAgICAgICA8L3VsPiBcbiAgICAgIDwvbmF2PiBcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibW9iaWxlTmF2XCIgcmVmPXttb2JpbGVSZWZ9IHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PiAgIFxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPiAgICAgXG4gICAgICAgICAgICA8TmF2TGluayB0bz1cInBvcnRmb2xpb1wiPiAgICAgXG4gICAgICAgICAgICAgIHsoeyBpc0FjdGl2ZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IGFjdGl2ZU1vYmlsZUNsYXNzTmFtZSA6IHVuZGVmaW5lZH0+ICAgICAgXG4gICAgICAgICAgICAgICAgICBQb3J0Zm9saW8gXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApfSBcbiAgICAgICAgICAgIDwvTmF2TGluaz4gXG4gICAgICAgICAgPC9saT4gXG4gICAgICAgICAgPGxpPiAgICAgICBcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiYmxvZ1wiPiAgICAgICAgIFxuICAgICAgICAgICAgICB7KHsgaXNBY3RpdmUgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBhY3RpdmVNb2JpbGVDbGFzc05hbWUgOiB1bmRlZmluZWR9PiAgICAgICAgXG4gICAgICAgICAgICAgICAgICBCbG9nIFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKX0gXG4gICAgICAgICAgICA8L05hdkxpbms+IFxuICAgICAgICAgIDwvbGk+IFxuICAgICAgICAgIDxsaT4gICAgICBcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiYWJvdXRcIj4gICAgICAgIFxuICAgICAgICAgICAgICB7KHsgaXNBY3RpdmUgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBhY3RpdmVNb2JpbGVDbGFzc05hbWUgOiB1bmRlZmluZWR9PiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIEFib3V0IFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKX0gXG4gICAgICAgICAgICA8L05hdkxpbms+IFxuICAgICAgICAgIDwvbGk+IFxuICAgICAgICA8L3VsPiBcbiAgICAgIDwvbmF2PiBcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vYmlsZU5hdjFcIj4gIFxuICAgICAgICA8YnV0dG9uIHJlZj17bW9iaWxlVG9nZ2xlUmVmfSBvbkNsaWNrPXt0b2dnbGVNb2JpbGVOYXZ9PiAgIFxuICAgICAgICAgICYjOTc3NjsgXG4gICAgICAgIDwvYnV0dG9uPiBcbiAgICAgIDwvc2VjdGlvbj4gXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLXRvZ2dsZVwiPiAgICBcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHJlZj17YnRuUmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1tb2RlXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVEYXJrTW9kZSgpO1xuICAgICAgICAgICAgc2V0RGFya21vZGUoKHByZXYpID0+ICFwcmV2KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+ICAgICAgIFxuICAgICAgICAgIHtkYXJrTW9kZSA/IChcbiAgICAgICAgICAgIDxpbWcgc3JjPXttb29ufSBhbHQ9XCJtb29uXCIgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGltZyBzcmM9e3N1bn0gYWx0PVwic3VuXCIgLz5cbiAgICAgICAgICApfSBcbiAgICAgICAgPC9idXR0b24+IFxuICAgICAgPC9kaXY+IFxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuIiwgImltcG9ydCB7IGpzb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ganNvbihcbiAgICB7XG4gICAgICBzaG9ydF9uYW1lOiBcIlBXQVwiLFxuICAgICAgbmFtZTogXCJSZW1peCBQV0FcIixcbiAgICAgIHN0YXJ0X3VybDogXCIvXCIsXG4gICAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcbiAgICAgIGJhY2tncm91bmRfY29sb3I6IFwiI2QzZDdkZFwiLFxuICAgICAgdGhlbWVfY29sb3I6IFwiI2MzNDEzOFwiLFxuICAgICAgc2hvcnRjdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIkhvbWVwYWdlXCIsXG4gICAgICAgICAgdXJsOiBcIi9cIixcbiAgICAgICAgICBpY29uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6IFwiL2ljb25zL2FuZHJvaWQtaWNvbi05Nng5Ni5wbmdcIixcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiOTZ4OTZcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgICAgcHVycG9zZTogXCJhbnkgbW9ub2Nocm9tZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGljb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6IFwiL2ljb25zL2FuZHJvaWQtaWNvbi0zNngzNi5wbmdcIixcbiAgICAgICAgICBzaXplczogXCIzNngzNlwiLFxuICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgZGVuc2l0eTogXCIwLjc1XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6IFwiL2ljb25zL2FuZHJvaWQtaWNvbi00OHg0OC5wbmdcIixcbiAgICAgICAgICBzaXplczogXCI0OHg0OFwiLFxuICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgZGVuc2l0eTogXCIxLjBcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogXCIvaWNvbnMvYW5kcm9pZC1pY29uLTcyeDcyLnBuZ1wiLFxuICAgICAgICAgIHNpemVzOiBcIjcyeDcyXCIsXG4gICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICBkZW5zaXR5OiBcIjEuNVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiBcIi9pY29ucy9hbmRyb2lkLWljb24tOTZ4OTYucG5nXCIsXG4gICAgICAgICAgc2l6ZXM6IFwiOTZ4OTZcIixcbiAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIGRlbnNpdHk6IFwiMi4wXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6IFwiL2ljb25zL2FuZHJvaWQtaWNvbi0xNDR4MTQ0LnBuZ1wiLFxuICAgICAgICAgIHNpemVzOiBcIjE0NHgxNDRcIixcbiAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIGRlbnNpdHk6IFwiMy4wXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6IFwiL2ljb25zL2FuZHJvaWQtaWNvbi0xOTJ4MTkyLnBuZ1wiLFxuICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIGRlbnNpdHk6IFwiNC4wXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNhY2hlLUNvbnRyb2xcIjogXCJwdWJsaWMsIG1heC1hZ2U9NjAwXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICk7XG59O1xuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBQdXNoTm90aWZpY2F0aW9uLCBTYXZlU3Vic2NyaXB0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3NlcnZlci9wd2EtdXRpbHMuc2VydmVyXCI7XHJcblxyXG5jb25zdCB3ZWJQdXNoID0gcmVxdWlyZShcIndlYi1wdXNoXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgY29uc3Qgc3Vic2NyaXB0aW9uID0gZGF0YS5zdWJzY3JpcHRpb247XHJcblxyXG4gIFNhdmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcclxuXHJcbiAgcmV0dXJuIHsgbWVzc2FnZTogXCJEb25lXCIgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgaWYgKCFwcm9jZXNzLmVudi5WQVBJRF9QVUJMSUNfS0VZIHx8ICFwcm9jZXNzLmVudi5WQVBJRF9QUklWQVRFX0tFWSkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIFwiWW91IG11c3Qgc2V0IHRoZSBWQVBJRF9QVUJMSUNfS0VZIGFuZCBWQVBJRF9QUklWQVRFX0tFWSBcIiArXHJcbiAgICAgICAgXCJlbnZpcm9ubWVudCB2YXJpYWJsZXMuIFlvdSBjYW4gdXNlIHRoZSBmb2xsb3dpbmcgb25lczpcIlxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHdlYlB1c2guZ2VuZXJhdGVWQVBJREtleXMoKSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBwdWJsaWNLZXkgPSBwcm9jZXNzLmVudi5WQVBJRF9QVUJMSUNfS0VZO1xyXG5cclxuICByZXR1cm4gbmV3IFJlc3BvbnNlKHB1YmxpY0tleSwge1xyXG4gICAgc3RhdHVzOiAyMDIsXHJcbiAgICBzdGF0dXNUZXh0OiBcIlN1Y2Nlc3NmdWwgT3BlcmF0aW9uXCIsXHJcbiAgfSk7XHJcbn07XHJcbiIsICJjb25zdCBzdG9yYWdlID0gcmVxdWlyZShcIm5vZGUtcGVyc2lzdFwiKTtcclxuY29uc3Qgd2ViUHVzaCA9IHJlcXVpcmUoXCJ3ZWItcHVzaFwiKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBTYXZlU3Vic2NyaXB0aW9uKHN1YjogUHVzaFN1YnNjcmlwdGlvbikge1xyXG4gIGF3YWl0IHN0b3JhZ2UuaW5pdCgpO1xyXG4gIGF3YWl0IHN0b3JhZ2Uuc2V0SXRlbShcInN1YnNjcmlwdGlvblwiLCBzdWIpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUHVzaE5vdGlmaWNhdGlvbihjb250ZW50OiBzdHJpbmcsIGRlbGF5OiBudW1iZXIgPSAwKSB7XHJcbiAgaWYgKCFwcm9jZXNzLmVudi5WQVBJRF9QVUJMSUNfS0VZIHx8ICFwcm9jZXNzLmVudi5WQVBJRF9QUklWQVRFX0tFWSkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIFwiWW91IG11c3Qgc2V0IHRoZSBWQVBJRF9QVUJMSUNfS0VZIGFuZCBWQVBJRF9QUklWQVRFX0tFWSBcIiArXHJcbiAgICAgICAgXCJlbnZpcm9ubWVudCB2YXJpYWJsZXMuIFlvdSBjYW4gdXNlIHRoZSBmb2xsb3dpbmcgb25lczpcIlxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHdlYlB1c2guZ2VuZXJhdGVWQVBJREtleXMoKSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB3ZWJQdXNoLnNldFZhcGlkRGV0YWlscyhcclxuICAgIFwiaHR0cHM6Ly9zZXJ2aWNld29ya2UucnMvXCIsXHJcbiAgICBwcm9jZXNzLmVudi5WQVBJRF9QVUJMSUNfS0VZLFxyXG4gICAgcHJvY2Vzcy5lbnYuVkFQSURfUFJJVkFURV9LRVlcclxuICApO1xyXG5cclxuICBjb25zdCBzdWJzY3JpcHRpb24gPSBhd2FpdCBzdG9yYWdlLmdldEl0ZW0oXCJzdWJzY3JpcHRpb25cIik7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgd2ViUHVzaFxyXG4gICAgICAuc2VuZE5vdGlmaWNhdGlvbihzdWJzY3JpcHRpb24sIGNvbnRlbnQpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwic3VjY2Vzc1wiLCB7XHJcbiAgICAgICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlOiBFcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXCJGYWlsZWQhXCIsIHtcclxuICAgICAgICAgIHN0YXR1czogNTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9LCBkZWxheSAqIDEwMDApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgRmFDb2RlcGVuIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgTmlnaHR5IGZyb20gXCIuLi9wcm9qZWN0cy9OaWdodHlOaWdodC5wbmdcIjtcbmltcG9ydCBDb2RlUGxheSBmcm9tIFwiLi4vcHJvamVjdHMvQ29kZVBsYXlfQmFubmVyX0FMUEhBLnBuZ1wiO1xuaW1wb3J0IFRyYWNrZXIgZnJvbSBcIi4uL3Byb2plY3RzL3RyYWNrZXIuc3ZnXCI7XG5cbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL3BvcnRmb2xpby5jc3NcIjtcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlIH1dO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJTaGFmU3BlY3MgLSBQb3J0Zm9saW9cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVmlldyBteSBzaG93Y2FzZWQgcHJvamVjdHMgYW5kIHZpZXcgdGhlaXIgc291cmNlIGNvZGUsIGlmIGF2YWlsYWJsZSA6d2luazosIG9uIG15IHBvcnRmb2xpby5cIixcbiAgICBrZXl3b3JkczogXCJTaGFmU3BlY3MsIEFiZHVyLVJhaG1hbiwgRmFzaG9sYSwgU2hhZiwgUG9ydGZvbGlvLCBQcm9qZWN0c1wiLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCB5ZXQhXCIpO1xuICByZXR1cm4gZXJyO1xufTtcblxuZnVuY3Rpb24gQ2FyZCh7IGltYWdlLCBhbHQsIHRpdGxlLCBkZXNjLCBnaXRodWIsIHByZXZpZXcgfTogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD17YWx0fSBjbGFzc05hbWU9XCJpbWdcIiAvPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57dGl0bGV9PC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntkZXNjfTwvcD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxhIGhyZWY9e2dpdGh1Yn0gY2xhc3NOYW1lPVwiYnRuLWxpbmtcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNhcmQtYnRuXCI+R2l0aHViPC9idXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgICAge3ByZXZpZXcgJiYgKFxuICAgICAgICAgIDxhIGhyZWY9e3ByZXZpZXd9IGNsYXNzTmFtZT1cImJ0bi1saW5rXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNhcmQtYnRuXCI+UHJldmlldzwvYnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW8oKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpb1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidS1saXN0XCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU2hhZlNwZWNzXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctbGluayBmZWF0aGVyLWdpdGh1YlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGl0bGU+R2l0SHViPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkgMTljLTUgMS41LTUtMi41LTctM20xNCA2di0zLjg3YTMuMzcgMy4zNyAwIDAgMC0uOTQtMi42MWMzLjE0LS4zNSA2LjQ0LTEuNTQgNi40NC03QTUuNDQgNS40NCAwIDAgMCAyMCA0Ljc3IDUuMDcgNS4wNyAwIDAgMCAxOS45MSAxUzE4LjczLjY1IDE2IDIuNDhhMTMuMzggMTMuMzggMCAwIDAtNyAwQzYuMjcuNjUgNS4wOSAxIDUuMDkgMUE1LjA3IDUuMDcgMCAwIDAgNSA0Ljc3YTUuNDQgNS40NCAwIDAgMC0xLjUgMy43OGMwIDUuNDIgMy4zIDYuNjEgNi40NCA3QTMuMzcgMy4zNyAwIDAgMCA5IDE4LjEzVjIyXCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9TaGFmU3BlY3NcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhLWxpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1saW5rIGZlYXRoZXItdHdpdHRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGl0bGU+VHdpdHRlcjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMyAzYTEwLjkgMTAuOSAwIDAgMS0zLjE0IDEuNTMgNC40OCA0LjQ4IDAgMCAwLTcuODYgM3YxQTEwLjY2IDEwLjY2IDAgMCAxIDMgNHMtNCA5IDUgMTNhMTEuNjQgMTEuNjQgMCAwIDEtNyAyYzkgNSAyMCAwIDIwLTExLjVhNC41IDQuNSAwIDAgMC0uMDgtLjgzQTcuNzIgNy43MiAwIDAgMCAyMyAzelwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdGhlclwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZGV2LnRvL3NoYWZzcGVjc1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImEtbGlua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAzMiA0NDcuOTk5OTk5OTk5OTk5OTQgNDQ4XCJcbiAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjI1MDBcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjIzMjFcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXRoZXItZ2l0aHViXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5ERVYudG88L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIwLjEyIDIwOC4yOWMtMy44OC0yLjktNy43Ny00LjM1LTExLjY1LTQuMzVIOTEuMDN2MTA0LjQ3aDE3LjQ1YzMuODggMCA3Ljc3LTEuNDUgMTEuNjUtNC4zNXM1LjgyLTcuMjUgNS44Mi0xMy4wNnYtNjkuNjVjLS4wMS01LjgtMS45Ni0xMC4xNi01LjgzLTEzLjA2ek00MDQuMSAzMkg0My45QzE5LjcgMzIgLjA2IDUxLjU5IDAgNzUuOHYzNjAuNEMuMDYgNDYwLjQxIDE5LjcgNDgwIDQzLjkgNDgwaDM2MC4yYzI0LjIxIDAgNDMuODQtMTkuNTkgNDMuOS00My44Vjc1LjhjLS4wNi0yNC4yMS0xOS43LTQzLjgtNDMuOS00My44ek0xNTQuMiAyOTEuMTljMCAxOC44MS0xMS42MSA0Ny4zMS00OC4zNiA0Ny4yNWgtNDYuNFYxNzIuOThoNDcuMzhjMzUuNDQgMCA0Ny4zNiAyOC40NiA0Ny4zNyA0Ny4yOHptMTAwLjY4LTg4LjY2SDIwMS42djM4LjQyaDMyLjU3djI5LjU3SDIwMS42djM4LjQxaDUzLjI5djI5LjU3aC02Mi4xOGMtMTEuMTYuMjktMjAuNDQtOC41My0yMC43Mi0xOS42OVYxOTMuN2MtLjI3LTExLjE1IDguNTYtMjAuNDEgMTkuNzEtMjAuNjloNjMuMTl6bTEwMy42NCAxMTUuMjljLTEzLjIgMzAuNzUtMzYuODUgMjQuNjMtNDcuNDQgMGwtMzguNTMtMTQ0LjhoMzIuNTdsMjkuNzEgMTEzLjcyIDI5LjU3LTExMy43MmgzMi41OHpcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL1NoYWZTcGVjc1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImEtbGlua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGYUNvZGVwZW4gY2xhc3NOYW1lPVwiZmVhdGhlci1naXRodWJcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZpbGxIZWlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGVcIj5NeSBQb3J0Zm9saW88L2Rpdj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZHNcIj5cbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgaW1hZ2U9e05pZ2h0eX1cbiAgICAgICAgICAgIGFsdD1cIlBvcnRmb2xpb1wiXG4gICAgICAgICAgICB0aXRsZT1cIk5pZ2h0eSBOaWdodCBUaGVtZVwiXG4gICAgICAgICAgICBkZXNjPVwiQSBtaW5pbWFsLCBkYXJrIGJsdWlzaC1ibGFjayB0aGVtZSBmb3IgVlMgQ29kZSwgd2l0aCBjYWxtaW5nIGNvbG9ycyBhbmQgaGlnaCBjb250cmFzdCwgaXQgaXMgYSBcdUQ4M0RcdURDNEQuIEF2YWlsYWJsZSBvbiBWaXN1YWwgU3R1ZGlvIE1hcmtldHBsYWNlLlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgaW1hZ2U9e1RyYWNrZXJ9XG4gICAgICAgICAgICBhbHQ9XCJQb3J0Zm9saW9cIlxuICAgICAgICAgICAgdGl0bGU9XCJHZXQgSXQgRG9uZSBUYXNrIFRyYWNrZXJcIlxuICAgICAgICAgICAgZGVzYz1cIkEgc2ltcGxlIHRhc2sgdHJhY2tlciBmb3IgbWFuYWdpbmcgeW91ciBkYWlseSB0YXNrcy4gSXQgaXMgYSBcdUQ4M0RcdURDNEQuXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BpblwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcmVcIj5cbiAgICAgICAgICBTaGFmU3BlY3MgaXMgd29ya2luZyB0byBhZGQgbW9yZSBjbGVhbmVkIHVwIHByb2plY3RzIGhlcmUuLi5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBGb290ZXIgZm9yIE1vYmlsZSAqL31cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1kaXZcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtb2JpbGUtdWxcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFmU3BlY3NcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImEtbGlua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctbGluayBmZWF0aGVyLWdpdGh1YlwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5HaXRIdWI8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkgMTljLTUgMS41LTUtMi41LTctM20xNCA2di0zLjg3YTMuMzcgMy4zNyAwIDAgMC0uOTQtMi42MWMzLjE0LS4zNSA2LjQ0LTEuNTQgNi40NC03QTUuNDQgNS40NCAwIDAgMCAyMCA0Ljc3IDUuMDcgNS4wNyAwIDAgMCAxOS45MSAxUzE4LjczLjY1IDE2IDIuNDhhMTMuMzggMTMuMzggMCAwIDAtNyAwQzYuMjcuNjUgNS4wOSAxIDUuMDkgMUE1LjA3IDUuMDcgMCAwIDAgNSA0Ljc3YTUuNDQgNS40NCAwIDAgMC0xLjUgMy43OGMwIDUuNDIgMy4zIDYuNjEgNi40NCA3QTMuMzcgMy4zNyAwIDAgMCA5IDE4LjEzVjIyXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdGhlclwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9TaGFmU3BlY3NcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImEtbGlua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctbGluayBmZWF0aGVyLXR3aXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+VHdpdHRlcjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjMgM2ExMC45IDEwLjkgMCAwIDEtMy4xNCAxLjUzIDQuNDggNC40OCAwIDAgMC03Ljg2IDN2MUExMC42NiAxMC42NiAwIDAgMSAzIDRzLTQgOSA1IDEzYTExLjY0IDExLjY0IDAgMCAxLTcgMmM5IDUgMjAgMCAyMC0xMS41YTQuNSA0LjUgMCAwIDAtLjA4LS44M0E3LjcyIDcuNzIgMCAwIDAgMjMgM3pcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Rldi50by9zaGFmc3BlY3NcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImEtbGlua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMzIgNDQ3Ljk5OTk5OTk5OTk5OTk0IDQ0OFwiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1MDBcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMzIxXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV2IGZlYXRoZXItZ2l0aHViXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5ERVYudG88L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyMC4xMiAyMDguMjljLTMuODgtMi45LTcuNzctNC4zNS0xMS42NS00LjM1SDkxLjAzdjEwNC40N2gxNy40NWMzLjg4IDAgNy43Ny0xLjQ1IDExLjY1LTQuMzVzNS44Mi03LjI1IDUuODItMTMuMDZ2LTY5LjY1Yy0uMDEtNS44LTEuOTYtMTAuMTYtNS44My0xMy4wNnpNNDA0LjEgMzJINDMuOUMxOS43IDMyIC4wNiA1MS41OSAwIDc1Ljh2MzYwLjRDLjA2IDQ2MC40MSAxOS43IDQ4MCA0My45IDQ4MGgzNjAuMmMyNC4yMSAwIDQzLjg0LTE5LjU5IDQzLjktNDMuOFY3NS44Yy0uMDYtMjQuMjEtMTkuNy00My44LTQzLjktNDMuOHpNMTU0LjIgMjkxLjE5YzAgMTguODEtMTEuNjEgNDcuMzEtNDguMzYgNDcuMjVoLTQ2LjRWMTcyLjk4aDQ3LjM4YzM1LjQ0IDAgNDcuMzYgMjguNDYgNDcuMzcgNDcuMjh6bTEwMC42OC04OC42NkgyMDEuNnYzOC40MmgzMi41N3YyOS41N0gyMDEuNnYzOC40MWg1My4yOXYyOS41N2gtNjIuMThjLTExLjE2LjI5LTIwLjQ0LTguNTMtMjAuNzItMTkuNjlWMTkzLjdjLS4yNy0xMS4xNSA4LjU2LTIwLjQxIDE5LjcxLTIwLjY5aDYzLjE5em0xMDMuNjQgMTE1LjI5Yy0xMy4yIDMwLjc1LTM2Ljg1IDI0LjYzLTQ3LjQ0IDBsLTM4LjUzLTE0NC44aDMyLjU3bDI5LjcxIDExMy43MiAyOS41Ny0xMTMuNzJoMzIuNTh6XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby9TaGFmU3BlY3NcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImEtbGlua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEZhQ29kZXBlbiBjbGFzc05hbWU9XCJmZWF0aGVyLWdpdGh1YlwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L21haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhemFyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpcFwiPlx1RDgzRFx1REVBNyBQYWdlIGlzIHN0aWxsIGJlaW5nIGNvbnN0cnVjdGVkIVx1RDgzRFx1REM3N1x1MjAwRFx1MjY0Mlx1RkUwRiBcdUQ4M0RcdURFQTc8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IEZhQ29kZXBlbiB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHN2ZyBmcm9tIFwiLi4vcHJvamVjdHMvZmFjZV9jby5zdmdcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL2Fib3V0LmNzc1wiO1xuXG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZSB9XTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiU2hhZlNwZWNzIC0gQWJvdXQgTWVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiTGVhcm4gbW9yZSBhYm91dCBBYmR1ci1SYWhtYW4gRmFzaG9sYSBha2EgU2hhZlNwZWNzLCBhbmQgbGV0J3MgY29ubmVjdCFcIixcbiAgICBrZXl3b3JkczpcbiAgICAgIFwiU2hhZlNwZWNzLCBBYmR1ci1SYWhtYW4sIEZhc2hvbGEsIFNoYWYsIERpZ2l0YWwgR2FyZGVuLCBBYm91dCBNZSwgQWJvdXQsIEFib3V0IFNoYWZcIixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1LWxpc3RcIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdGhlclwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFmU3BlY3NcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhLWxpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1saW5rIGZlYXRoZXItZ2l0aHViXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5HaXRIdWI8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOSAxOWMtNSAxLjUtNS0yLjUtNy0zbTE0IDZ2LTMuODdhMy4zNyAzLjM3IDAgMCAwLS45NC0yLjYxYzMuMTQtLjM1IDYuNDQtMS41NCA2LjQ0LTdBNS40NCA1LjQ0IDAgMCAwIDIwIDQuNzcgNS4wNyA1LjA3IDAgMCAwIDE5LjkxIDFTMTguNzMuNjUgMTYgMi40OGExMy4zOCAxMy4zOCAwIDAgMC03IDBDNi4yNy42NSA1LjA5IDEgNS4wOSAxQTUuMDcgNS4wNyAwIDAgMCA1IDQuNzdhNS40NCA1LjQ0IDAgMCAwLTEuNSAzLjc4YzAgNS40MiAzLjMgNi42MSA2LjQ0IDdBMy4zNyAzLjM3IDAgMCAwIDkgMTguMTNWMjJcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1NoYWZTcGVjc1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImEtbGlua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLWxpbmsgZmVhdGhlci10d2l0dGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5Ud2l0dGVyPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIzIDNhMTAuOSAxMC45IDAgMCAxLTMuMTQgMS41MyA0LjQ4IDQuNDggMCAwIDAtNy44NiAzdjFBMTAuNjYgMTAuNjYgMCAwIDEgMyA0cy00IDkgNSAxM2ExMS42NCAxMS42NCAwIDAgMS03IDJjOSA1IDIwIDAgMjAtMTEuNWE0LjUgNC41IDAgMCAwLS4wOC0uODNBNy43MiA3LjcyIDAgMCAwIDIzIDN6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kZXYudG8vc2hhZnNwZWNzXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDMyIDQ0Ny45OTk5OTk5OTk5OTk5NCA0NDhcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjUwMFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjMyMVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmVhdGhlci1naXRodWJcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkRFVi50bzwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMjAuMTIgMjA4LjI5Yy0zLjg4LTIuOS03Ljc3LTQuMzUtMTEuNjUtNC4zNUg5MS4wM3YxMDQuNDdoMTcuNDVjMy44OCAwIDcuNzctMS40NSAxMS42NS00LjM1czUuODItNy4yNSA1LjgyLTEzLjA2di02OS42NWMtLjAxLTUuOC0xLjk2LTEwLjE2LTUuODMtMTMuMDZ6TTQwNC4xIDMySDQzLjlDMTkuNyAzMiAuMDYgNTEuNTkgMCA3NS44djM2MC40Qy4wNiA0NjAuNDEgMTkuNyA0ODAgNDMuOSA0ODBoMzYwLjJjMjQuMjEgMCA0My44NC0xOS41OSA0My45LTQzLjhWNzUuOGMtLjA2LTI0LjIxLTE5LjctNDMuOC00My45LTQzLjh6TTE1NC4yIDI5MS4xOWMwIDE4LjgxLTExLjYxIDQ3LjMxLTQ4LjM2IDQ3LjI1aC00Ni40VjE3Mi45OGg0Ny4zOGMzNS40NCAwIDQ3LjM2IDI4LjQ2IDQ3LjM3IDQ3LjI4em0xMDAuNjgtODguNjZIMjAxLjZ2MzguNDJoMzIuNTd2MjkuNTdIMjAxLjZ2MzguNDFoNTMuMjl2MjkuNTdoLTYyLjE4Yy0xMS4xNi4yOS0yMC40NC04LjUzLTIwLjcyLTE5LjY5VjE5My43Yy0uMjctMTEuMTUgOC41Ni0yMC40MSAxOS43MS0yMC42OWg2My4xOXptMTAzLjY0IDExNS4yOWMtMTMuMiAzMC43NS0zNi44NSAyNC42My00Ny40NCAwbC0zOC41My0xNDQuOGgzMi41N2wyOS43MSAxMTMuNzIgMjkuNTctMTEzLjcyaDMyLjU4elwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vU2hhZlNwZWNzXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhQ29kZXBlbiBjbGFzc05hbWU9XCJmZWF0aGVyLWdpdGh1YlwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL25nLmxpbmtlZGluLmNvbS9pbi9hYmR1ci1yYWhtYW4tZmFzaG9sYS0xNDYxMmEyMTVcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhLWxpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1saW5rIGZlYXRoZXItbGlua2VkaW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkxpbmtlZEluPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE2IDhhNiA2IDAgMCAxIDYgNnY3aC00di03YTIgMiAwIDAgMC0yLTIgMiAyIDAgMCAwLTIgMnY3aC00di03YTYgNiAwIDAgMSA2LTZ6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIyXCIgeT1cIjlcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCIxMlwiPjwvcmVjdD5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNFwiIGN5PVwiNFwiIHI9XCIyXCI+PC9jaXJjbGU+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmaWxsSGVpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdGl0bGVcIj5BYm91dCBNZTwvZGl2PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSGVsbG8gXHVEODNEXHVEQzRCISBNeSBuYW1lIGlzIEFiZHVyLVJhaG1hbiBGYXNob2xhLCBrbm93biB0byBtYW55IGFzXG4gICAgICAgICAgICAgIFNoYWZzcGVjcyBvciBzaW1wbHkgU2hhZi4gSSdtIGEgMTYgeWVhciBvbGQgaGlnaCBzY2hvb2wgZ3JhZHVhdGVcbiAgICAgICAgICAgICAgYW5kIEkgYW0gcGFzc2lvbmF0ZSBhYm91dCBjcmVhdGluZyB0aGluZ3MgdGhhdCBsaXZlIG9uIHRoZSB3ZWIuIElcbiAgICAgICAgICAgICAgc3RhcnRlZCBteSBqb3VybmV5IGFzIGEgZGV2ZWxvcGVyIGJ5IGF0dGVuZGluZyBhIFdvcmRQcmVzcyBjYW1wIGluXG4gICAgICAgICAgICAgIHRoZSBzdW1tZXIgb2YgMjAxOSwgYW5kIGluIHRoZSBzdW1tZXIgb2YgMjAyMCwgSSBkZWNpZGVkIHRvIHBsYXlcbiAgICAgICAgICAgICAgYXJvdW5kIHdpdGggSFRNTCAmIENTUy4gVHVybnMgb3V0LCBJIGhhZCBmb3VuZCBhIGxpZmUtbG9uZyBwYXNzaW9uXG4gICAgICAgICAgICAgIGZvciB3ZWIgZGV2ZWxvcG1lbnQgYW5kIEkgZGVjaWRlZCB0byBwdXJzdWUgaXQuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtYnJlYWtcIj5cbiAgICAgICAgICAgICAgICBNeSBtYWluIGZvY3VzIHRoaXMgZGF5cyBhcmUgdHJ5aW5nIHRvIGltcHJvdmUgbXkgc2tpbGxzIGluXG4gICAgICAgICAgICAgICAgRnVsbC1TdGFjayBXZWIgRGV2ZWxvcG1lbnQgYW5kIFVuaXR5IEdhbWUgRGV2ZWxvcG1lbnQgYW5kIGFsc29cbiAgICAgICAgICAgICAgICBoZWxwaW5nIHRvIGJ1aWxkIGEgYmV0dGVyIHRvbW9ycm93IGJ5IGNvbnRyaWJ1dGluZyB0b3dhcmRzXG4gICAgICAgICAgICAgICAgb3Blbi1zb3VyY2VkIGRldmVsb3BtZW50LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtYnJlYWtcIj5cbiAgICAgICAgICAgICAgICBIZXJlIGFyZSBhIGZldyB0ZWNobm9sb2dpZXMgSSBoYXZlIGJlZW4gd29ya2luZyB3aXRoIHJlY2VudGx5OlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJza2lsbC1saXN0XCI+XG4gICAgICAgICAgICAgICAgPGxpPlJlbWl4PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+VHlwZVNjcmlwdDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkphdmFTY3JpcHQgKEVTNispPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+TmV4dDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlJlYWN0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+QyMvVW5pdHk8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5TUUw8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5Xb3JkUHJlc3M8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5Ob2RlLmpzPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRyYWl0XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17c3ZnfSBjbGFzc05hbWU9XCJpbWdcIiBhbHQ9XCJQb3J0cmFpdFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC10aXRsZVwiPlxuICAgICAgICAgICAgPHU+TGV0J3MgVGFsayBcdUQ4M0NcdURGOTk8L3U+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgICBXYW50IHRvIHJlYWNoIG91dD8gRmVlbCBmcmVlIHRvIGNvbnRhY3QgbWUgdmlhIG9uZSBvZiBteSBhdmlhbGFibGVcbiAgICAgICAgICAgIG1lZGlhIG91dGxldHM6XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1idG5cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86YWJiYWRzaGFmMDVAZ21haWwuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgc2hhcGUtcmVuZGVyaW5nPVwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICAgICAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nPVwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICAgICAgICAgICAgICAgIGltYWdlLXJlbmRlcmluZz1cIm9wdGltaXplUXVhbGl0eVwiXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXRoZXItbWFpbFwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiNy4wODYgNy4wODcgMTI3Ny4xNDkgOTI0LjAwOFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTExMzguNzM0IDkzMS4wOTVoLjI4M00xMTM5LjAxNyA5MzEuMDk1aC0uMjgzXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTExNzkuNDM5IDcuMDg3YzU3LjU0MyAwIDEwNC42MjcgNDcuMDgzIDEwNC42MjcgMTA0LjYyNnYzMC4zMzFsLTE0NS4zNiAxMDMuODMzLTQ5NC44NzMgMzQwLjg5NEwxNDguOTYgMjQyLjQxOXY2ODguNjc2aC0zNy4yNDdjLTU3LjU0MyAwLTEwNC42MjctNDcuMDgyLTEwNC42MjctMTA0LjYyNVYxMTEuNzQyQzcuMDg2IDU0LjE5OCA1NC4xNyA3LjExNSAxMTEuNzEzIDcuMTE1bDUzMi4xMiAzOTQuNTI1TDExNzkuNDEgNy4xMTVsLjAyOS0uMDI4elwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZTc1YTRkXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9XCIxOTU5LjcxMlwiXG4gICAgICAgICAgICAgICAgICAgIHkxPVwiNzM3LjEwN1wiXG4gICAgICAgICAgICAgICAgICAgIHgyPVwiMjYwNjYuMjEzXCJcbiAgICAgICAgICAgICAgICAgICAgeTI9XCI3MzcuMTA3XCJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoLjAyODMgMCAwIC0uMDI4MyAyNDguMzYgMjI1LjI0NClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2Y4ZjZlZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjZTdlNGQ2XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNhKVwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTExLjcxMyA3LjA4N2w1MzIuMTIgMzk0LjUyNUwxMTc5LjQzOSA3LjA4N3pcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZTdlNGQ3XCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xNDguOTYgMjQyLjQxOXY2ODguNjc2aDk4OS43NzRWMjQ1Ljg3N0w2NDMuODMzIDU4Ni43NzF6XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2I4YjdhZVwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTQ4Ljk2IDkzMS4wOTVsNDk0Ljg3My0zNDQuMzI0LTIuMjQtMS41ODZMMTQ4Ljk2IDkyMy41Mjd6XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2I3YjZhZFwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTEzOC43MzQgMjQ1Ljg3N2wuMjgzIDY4NS4yMTgtNDk1LjE4NC0zNDQuMzI0elwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMjg0LjA2NiAxNDIuMDQ0bC4xNyA2ODQuNTFjLTIuNDk0IDc2LjA4Mi0zNS40NjEgMTAzLjIzOC0xNDUuMjE5IDEwNC41MTRsLS4yODMtNjg1LjIxOSAxNDUuMzYtMTAzLjgzMy0uMDI4LjAyOHpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2IyMzkyZlwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYlwiXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgICAgIHgxPVwiMTk1OS43MTJcIlxuICAgICAgICAgICAgICAgICAgICB5MT1cIjczNy4xMDdcIlxuICAgICAgICAgICAgICAgICAgICB4Mj1cIjI2MDY2LjIxM1wiXG4gICAgICAgICAgICAgICAgICAgIHkyPVwiNzM3LjEwN1wiXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KC4wMjgzIDAgMCAtLjAyODMgMjQ4LjM2IDIyNS4yNDQpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNmOGY2ZWZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI2U3ZTRkNlwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cInVybCgjYilcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTExMS43MTMgNy4wODdsNTMyLjEyIDM5NC41MjVMMTE3OS40MzkgNy4wODd6XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjXCJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9XCIxOTU5LjcxMlwiXG4gICAgICAgICAgICAgICAgICAgIHkxPVwiNzM3LjEwN1wiXG4gICAgICAgICAgICAgICAgICAgIHgyPVwiMjYwNjYuMjEzXCJcbiAgICAgICAgICAgICAgICAgICAgeTI9XCI3MzcuMTA3XCJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoLjAyODMgMCAwIC0uMDI4MyAyNDguMzYgMjI1LjI0NClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2Y4ZjZlZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjZTdlNGQ2XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjKVwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTExLjcxMyA3LjA4N2w1MzIuMTIgMzk0LjUyNUwxMTc5LjQzOSA3LjA4N3pcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImRcIlxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICB4MT1cIjE5NTkuNzEyXCJcbiAgICAgICAgICAgICAgICAgICAgeTE9XCI3MzcuMTA3XCJcbiAgICAgICAgICAgICAgICAgICAgeDI9XCIyNjA2Ni4yMTNcIlxuICAgICAgICAgICAgICAgICAgICB5Mj1cIjczNy4xMDdcIlxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFRyYW5zZm9ybT1cIm1hdHJpeCguMDI4MyAwIDAgLS4wMjgzIDI0OC4zNiAyMjUuMjQ0KVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZjhmNmVmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNlN2U0ZDZcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2QpXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMTEuNzEzIDcuMDg3bDUzMi4xMiAzOTQuNTI1TDExNzkuNDM5IDcuMDg3elwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZVwiXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgICAgIHgxPVwiMTk1OS43MTJcIlxuICAgICAgICAgICAgICAgICAgICB5MT1cIjczNy4xMDdcIlxuICAgICAgICAgICAgICAgICAgICB4Mj1cIjI2MDY2LjIxM1wiXG4gICAgICAgICAgICAgICAgICAgIHkyPVwiNzM3LjEwN1wiXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KC4wMjgzIDAgMCAtLjAyODMgMjQ4LjM2IDIyNS4yNDQpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNmOGY2ZWZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI2U3ZTRkNlwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cInVybCgjZSlcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTExMS43MTMgNy4wODdsNTMyLjEyIDM5NC41MjVMMTE3OS40MzkgNy4wODd6XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmXCJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9XCIxOTU5LjcxMlwiXG4gICAgICAgICAgICAgICAgICAgIHkxPVwiNzM3LjEwN1wiXG4gICAgICAgICAgICAgICAgICAgIHgyPVwiMjYwNjYuMjEzXCJcbiAgICAgICAgICAgICAgICAgICAgeTI9XCI3MzcuMTA3XCJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoLjAyODMgMCAwIC0uMDI4MyAyNDguMzYgMjI1LjI0NClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2Y4ZjZlZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjZTdlNGQ2XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNmKVwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTExLjcxMyA3LjA4N2w1MzIuMTIgMzk0LjUyNUwxMTc5LjQzOSA3LjA4N3pcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImdcIlxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICB4MT1cIjE5NTkuNzEyXCJcbiAgICAgICAgICAgICAgICAgICAgeTE9XCI3MzcuMTA3XCJcbiAgICAgICAgICAgICAgICAgICAgeDI9XCIyNjA2Ni4yMTNcIlxuICAgICAgICAgICAgICAgICAgICB5Mj1cIjczNy4xMDdcIlxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFRyYW5zZm9ybT1cIm1hdHJpeCguMDI4MyAwIDAgLS4wMjgzIDI0OC4zNiAyMjUuMjQ0KVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZjhmNmVmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNlN2U0ZDZcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2cpXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMTEuNzEzIDcuMDg3bDUzMi4xMiAzOTQuNTI1TDExNzkuNDM5IDcuMDg3elwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaFwiXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgICAgIHgxPVwiMTk1OS43MTJcIlxuICAgICAgICAgICAgICAgICAgICB5MT1cIjczNy4xMDdcIlxuICAgICAgICAgICAgICAgICAgICB4Mj1cIjI2MDY2LjIxM1wiXG4gICAgICAgICAgICAgICAgICAgIHkyPVwiNzM3LjEwN1wiXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KC4wMjgzIDAgMCAtLjAyODMgMjQ4LjM2IDIyNS4yNDQpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNmOGY2ZWZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI2U3ZTRkNlwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cInVybCgjaClcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTExMS43MTMgNy4wODdsNTMyLjEyIDM5NC41MjVMMTE3OS40MzkgNy4wODd6XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2Y3ZjVlZFwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTExLjcxMyA3LjA4N2w1MzIuMTIgMzk0LjUyNUwxMTc5LjQzOSA3LjA4N3pcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAmbmJzcDtDb25uZWN0IHZpYSBHbWFpbFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3NoYWZzcGVjc1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMDA4ZGI4XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXRoZXItbWFpbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRpdGxlPlR3aXR0ZXI8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMyAzYTEwLjkgMTAuOSAwIDAgMS0zLjE0IDEuNTMgNC40OCA0LjQ4IDAgMCAwLTcuODYgM3YxQTEwLjY2IDEwLjY2IDAgMCAxIDMgNHMtNCA5IDUgMTNhMTEuNjQgMTEuNjQgMCAwIDEtNyAyYzkgNSAyMCAwIDIwLTExLjVhNC41IDQuNSAwIDAgMC0uMDgtLjgzQTcuNzIgNy43MiAwIDAgMCAyMyAzelwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAmbmJzcDsgQ29ubmVjdCB2aWEgVHdpdHRlclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICB7LyogRm9vdGVyIGZvciBNb2JpbGUgKi99XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtZGl2XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibW9iaWxlLXVsXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU2hhZlNwZWNzXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhLWxpbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLWxpbmsgZmVhdGhlci1naXRodWJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+R2l0SHViPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05IDE5Yy01IDEuNS01LTIuNS03LTNtMTQgNnYtMy44N2EzLjM3IDMuMzcgMCAwIDAtLjk0LTIuNjFjMy4xNC0uMzUgNi40NC0xLjU0IDYuNDQtN0E1LjQ0IDUuNDQgMCAwIDAgMjAgNC43NyA1LjA3IDUuMDcgMCAwIDAgMTkuOTEgMVMxOC43My42NSAxNiAyLjQ4YTEzLjM4IDEzLjM4IDAgMCAwLTcgMEM2LjI3LjY1IDUuMDkgMSA1LjA5IDFBNS4wNyA1LjA3IDAgMCAwIDUgNC43N2E1LjQ0IDUuNDQgMCAwIDAtMS41IDMuNzhjMCA1LjQyIDMuMyA2LjYxIDYuNDQgN0EzLjM3IDMuMzcgMCAwIDAgOSAxOC4xM1YyMlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vU2hhZlNwZWNzXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhLWxpbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLWxpbmsgZmVhdGhlci10d2l0dGVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPlR3aXR0ZXI8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIzIDNhMTAuOSAxMC45IDAgMCAxLTMuMTQgMS41MyA0LjQ4IDQuNDggMCAwIDAtNy44NiAzdjFBMTAuNjYgMTAuNjYgMCAwIDEgMyA0cy00IDkgNSAxM2ExMS42NCAxMS42NCAwIDAgMS03IDJjOSA1IDIwIDAgMjAtMTEuNWE0LjUgNC41IDAgMCAwLS4wOC0uODNBNy43MiA3LjcyIDAgMCAwIDIzIDN6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdGhlclwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kZXYudG8vc2hhZnNwZWNzXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhLWxpbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDMyIDQ0Ny45OTk5OTk5OTk5OTk5NCA0NDhcIlxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjMyMVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRldiBmZWF0aGVyLWdpdGh1YlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+REVWLnRvPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMjAuMTIgMjA4LjI5Yy0zLjg4LTIuOS03Ljc3LTQuMzUtMTEuNjUtNC4zNUg5MS4wM3YxMDQuNDdoMTcuNDVjMy44OCAwIDcuNzctMS40NSAxMS42NS00LjM1czUuODItNy4yNSA1LjgyLTEzLjA2di02OS42NWMtLjAxLTUuOC0xLjk2LTEwLjE2LTUuODMtMTMuMDZ6TTQwNC4xIDMySDQzLjlDMTkuNyAzMiAuMDYgNTEuNTkgMCA3NS44djM2MC40Qy4wNiA0NjAuNDEgMTkuNyA0ODAgNDMuOSA0ODBoMzYwLjJjMjQuMjEgMCA0My44NC0xOS41OSA0My45LTQzLjhWNzUuOGMtLjA2LTI0LjIxLTE5LjctNDMuOC00My45LTQzLjh6TTE1NC4yIDI5MS4xOWMwIDE4LjgxLTExLjYxIDQ3LjMxLTQ4LjM2IDQ3LjI1aC00Ni40VjE3Mi45OGg0Ny4zOGMzNS40NCAwIDQ3LjM2IDI4LjQ2IDQ3LjM3IDQ3LjI4em0xMDAuNjgtODguNjZIMjAxLjZ2MzguNDJoMzIuNTd2MjkuNTdIMjAxLjZ2MzguNDFoNTMuMjl2MjkuNTdoLTYyLjE4Yy0xMS4xNi4yOS0yMC40NC04LjUzLTIwLjcyLTE5LjY5VjE5My43Yy0uMjctMTEuMTUgOC41Ni0yMC40MSAxOS43MS0yMC42OWg2My4xOXptMTAzLjY0IDExNS4yOWMtMTMuMiAzMC43NS0zNi44NSAyNC42My00Ny40NCAwbC0zOC41My0xNDQuOGgzMi41N2wyOS43MSAxMTMuNzIgMjkuNTctMTEzLjcyaDMyLjU4elwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vU2hhZlNwZWNzXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhLWxpbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxGYUNvZGVwZW4gY2xhc3NOYW1lPVwiZmVhdGhlci1naXRodWJcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEZhQ29kZXBlbiB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaG9tZXBhZ2UuY3NzXCI7XG5cbmltcG9ydCBOaWdodHkgZnJvbSBcIi4uL3Byb2plY3RzL05pZ2h0eU5pZ2h0LnBuZ1wiO1xuaW1wb3J0IENvZGVQbGF5IGZyb20gXCIuLi9wcm9qZWN0cy9Db2RlUGxheV9CYW5uZXJfQUxQSEEucG5nXCI7XG5pbXBvcnQgVHJhY2tlciBmcm9tIFwiLi4vcHJvamVjdHMvdHJhY2tlci5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH0sXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiLFxuICAgIH0sXG4gIF07XG59XG5cbmZ1bmN0aW9uIFByb2plY3RDYXJkKHsgdGl0bGUsIGRlc2MsIGdpdCwgbGluaywgcGljLCBzdmcgfTogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwLWNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcC1jYXJkLWlubmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcC1jYXJkLWZyb250XCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3R5bGU9e3N2ZyA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiM3ZTdlN2VcIiB9IDoge319XG4gICAgICAgICAgICBzcmM9e3BpY31cbiAgICAgICAgICAgIGFsdD1cIlByb2plY3RcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXAtY2FyZC1iYWNrXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgPHA+e2Rlc2N9PC9wPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAgICA8YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMS41cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxLjVyZW1cIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEwIDZINmEyIDIgMCAwMC0yIDJ2MTBhMiAyIDAgMDAyIDJoMTBhMiAyIDAgMDAyLTJ2LTRNMTQgNGg2bTAgMHY2bTAtNkwxMCAxNFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIHtcIiAgXCJ9VmlldyBEZW1vXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj17Z2l0fSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxLjMyNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMS4zMjVyZW1cIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRpdGxlPkdpdEh1YjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkgMTljLTUgMS41LTUtMi41LTctM20xNCA2di0zLjg3YTMuMzcgMy4zNyAwIDAgMC0uOTQtMi42MWMzLjE0LS4zNSA2LjQ0LTEuNTQgNi40NC03QTUuNDQgNS40NCAwIDAgMCAyMCA0Ljc3IDUuMDcgNS4wNyAwIDAgMCAxOS45MSAxUzE4LjczLjY1IDE2IDIuNDhhMTMuMzggMTMuMzggMCAwIDAtNyAwQzYuMjcuNjUgNS4wOSAxIDUuMDkgMUE1LjA3IDUuMDcgMCAwIDAgNSA0Ljc3YTUuNDQgNS40NCAwIDAgMC0xLjUgMy43OGMwIDUuNDIgMy4zIDYuNjEgNi40NCA3QTMuMzcgMy4zNyAwIDAgMCA5IDE4LjEzVjIyXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIHtcIiAgXCJ9R2l0aHViXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkaXZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInUtbGlzdFwiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWZTcGVjc1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImEtbGlua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLWxpbmsgZmVhdGhlci1naXRodWJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkdpdEh1YjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk05IDE5Yy01IDEuNS01LTIuNS03LTNtMTQgNnYtMy44N2EzLjM3IDMuMzcgMCAwIDAtLjk0LTIuNjFjMy4xNC0uMzUgNi40NC0xLjU0IDYuNDQtN0E1LjQ0IDUuNDQgMCAwIDAgMjAgNC43NyA1LjA3IDUuMDcgMCAwIDAgMTkuOTEgMVMxOC43My42NSAxNiAyLjQ4YTEzLjM4IDEzLjM4IDAgMCAwLTcgMEM2LjI3LjY1IDUuMDkgMSA1LjA5IDFBNS4wNyA1LjA3IDAgMCAwIDUgNC43N2E1LjQ0IDUuNDQgMCAwIDAtMS41IDMuNzhjMCA1LjQyIDMuMyA2LjYxIDYuNDQgN0EzLjM3IDMuMzcgMCAwIDAgOSAxOC4xM1YyMlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdGhlclwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vU2hhZlNwZWNzXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctbGluayBmZWF0aGVyLXR3aXR0ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlR3aXR0ZXI8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjMgM2ExMC45IDEwLjkgMCAwIDEtMy4xNCAxLjUzIDQuNDggNC40OCAwIDAgMC03Ljg2IDN2MUExMC42NiAxMC42NiAwIDAgMSAzIDRzLTQgOSA1IDEzYTExLjY0IDExLjY0IDAgMCAxLTcgMmM5IDUgMjAgMCAyMC0xMS41YTQuNSA0LjUgMCAwIDAtLjA4LS44M0E3LjcyIDcuNzIgMCAwIDAgMjMgM3pcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Rldi50by9zaGFmc3BlY3NcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhLWxpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMzIgNDQ3Ljk5OTk5OTk5OTk5OTk0IDQ0OFwiXG4gICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyNTAwXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMzIxXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXYgZmVhdGhlci1naXRodWJcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkRFVi50bzwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMjAuMTIgMjA4LjI5Yy0zLjg4LTIuOS03Ljc3LTQuMzUtMTEuNjUtNC4zNUg5MS4wM3YxMDQuNDdoMTcuNDVjMy44OCAwIDcuNzctMS40NSAxMS42NS00LjM1czUuODItNy4yNSA1LjgyLTEzLjA2di02OS42NWMtLjAxLTUuOC0xLjk2LTEwLjE2LTUuODMtMTMuMDZ6TTQwNC4xIDMySDQzLjlDMTkuNyAzMiAuMDYgNTEuNTkgMCA3NS44djM2MC40Qy4wNiA0NjAuNDEgMTkuNyA0ODAgNDMuOSA0ODBoMzYwLjJjMjQuMjEgMCA0My44NC0xOS41OSA0My45LTQzLjhWNzUuOGMtLjA2LTI0LjIxLTE5LjctNDMuOC00My45LTQzLjh6TTE1NC4yIDI5MS4xOWMwIDE4LjgxLTExLjYxIDQ3LjMxLTQ4LjM2IDQ3LjI1aC00Ni40VjE3Mi45OGg0Ny4zOGMzNS40NCAwIDQ3LjM2IDI4LjQ2IDQ3LjM3IDQ3LjI4em0xMDAuNjgtODguNjZIMjAxLjZ2MzguNDJoMzIuNTd2MjkuNTdIMjAxLjZ2MzguNDFoNTMuMjl2MjkuNTdoLTYyLjE4Yy0xMS4xNi4yOS0yMC40NC04LjUzLTIwLjcyLTE5LjY5VjE5My43Yy0uMjctMTEuMTUgOC41Ni0yMC40MSAxOS43MS0yMC42OWg2My4xOXptMTAzLjY0IDExNS4yOWMtMTMuMiAzMC43NS0zNi44NSAyNC42My00Ny40NCAwbC0zOC41My0xNDQuOGgzMi41N2wyOS43MSAxMTMuNzIgMjkuNTctMTEzLjcyaDMyLjU4elwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vU2hhZlNwZWNzXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhQ29kZXBlbiBjbGFzc05hbWU9XCJmZWF0aGVyLWdpdGh1YlwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL25nLmxpbmtlZGluLmNvbS9pbi9hYmR1ci1yYWhtYW4tZmFzaG9sYS0xNDYxMmEyMTVcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhLWxpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1saW5rIGZlYXRoZXItbGlua2VkaW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkxpbmtlZEluPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE2IDhhNiA2IDAgMCAxIDYgNnY3aC00di03YTIgMiAwIDAgMC0yLTIgMiAyIDAgMCAwLTIgMnY3aC00di03YTYgNiAwIDAgMSA2LTZ6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIyXCIgeT1cIjlcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCIxMlwiPjwvcmVjdD5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNFwiIGN5PVwiNFwiIHI9XCIyXCI+PC9jaXJjbGU+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmaWxsSGVpZ2h0XCI+XG4gICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGhlaWdodDogXCJtYXgtY29udGVudFwiLCBkaXNwbGF5OiBcImJsb2NrXCIgfX0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JlZXRpbmdzXCI+SGVsbG8gdGhlcmUgXHVEODNEXHVEQzRCLCBteSBuYW1lIGlzPC9zcGFuPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj5BYmR1ci1SYWhtYW4gRmFzaG9sYS48L3NwYW4+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3BpblwiPjwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgSSdtIGEgRnVsbC1TdGFjayBEZXZlbG9wZXIgc3BlY2lhbGl6aW5nIGluIGJ1aWxkaW5nIGFuZCBkZXNpZ25pbmdcbiAgICAgICAgICAgIHF1YWxpdHkgc29mdHdhcmVzIGFuZCBleGNlcHRpb25hbCB1c2VyIGV4cGVyaWVuY2VzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9qZWN0XCI+XG4gICAgICAgICAgPGgzPk15IFdvcms8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHNcIj5cbiAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgICBwaWM9e05pZ2h0eX1cbiAgICAgICAgICAgICAgc3ZnPXtmYWxzZX1cbiAgICAgICAgICAgICAgdGl0bGU9XCJOaWdodHkgTmlnaHQgXHVEODNDXHVERjE5XCJcbiAgICAgICAgICAgICAgZGVzYz1cIkEgbWluaW1hbCwgZGFyayBibHVpc2gtYmxhY2sgdGhlbWUgZm9yIFZTIENvZGUsIHdpdGggY2FsbWluZyBjb2xvcnMgYW5kIGhpZ2ggY29udHJhc3QsIGl0IGlzIGEgXHVEODNEXHVEQzRELiBBdmFpbGFibGUgb24gVmlzdWFsIFN0dWRpbyBNYXJrZXRwbGFjZS5cIlxuICAgICAgICAgICAgICBnaXQ9XCJodHRwczovL2dpdGh1Yi5jb20vU2hhZlNwZWNzL05pZ2h0eS1OaWdodC1UaGVtZVwiXG4gICAgICAgICAgICAgIGxpbms9XCJodHRwczovL21hcmtldHBsYWNlLnZpc3VhbHN0dWRpby5jb20vaXRlbXM/aXRlbU5hbWU9U2hhZlNwZWNzLm5pZ2h0eS1uaWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICAgIHBpYz17Q29kZVBsYXl9XG4gICAgICAgICAgICAgIHN2Zz17ZmFsc2V9XG4gICAgICAgICAgICAgIHRpdGxlPVwiXHVEODNEXHVEQzY4XHUyMDBEXHVEODNEXHVEQ0JCIENvZGVQbGF5XCJcbiAgICAgICAgICAgICAgZGVzYz1cIkEgc2ltcGxlLCB5ZXQgcG93ZXJmdWwsIGNvZGUgcGxheWdyb3VuZCBmb3IgbGVhcm5pbmcgYW5kIHByYWN0aWNpbmcgYmFzaWMgV2ViIERldmVsb3BtZW50IGxhbmd1YWdlcy5cIlxuICAgICAgICAgICAgICBnaXQ9XCJodHRwczovL2dpdGh1Yi5jb20vU2hhZlNwZWNzL0NvZGVQbGF5LUVkaXRvclwiXG4gICAgICAgICAgICAgIGxpbms9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgICBwaWM9e1RyYWNrZXJ9XG4gICAgICAgICAgICAgIHN2Zz17dHJ1ZX1cbiAgICAgICAgICAgICAgdGl0bGU9XCJcdUQ4M0NcdURGQzNcdTIwMERcdTI2NDJcdUZFMEYgVGFzayBUcmFja2VyXCJcbiAgICAgICAgICAgICAgZGVzYz1cIkEgc2ltcGxlIHRhc2sgdHJhY2tlciBmb3IgbWFuYWdpbmcgeW91ciBkYWlseSB0YXNrcy4gSXQgaXMgYSBcdUQ4M0RcdURDNEQuXCJcbiAgICAgICAgICAgICAgZ2l0PVwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWZTcGVjcy9UYXNrLVRyYWNrZXJfUmVtaXhcIlxuICAgICAgICAgICAgICBsaW5rPVwiaHR0cHM6Ly90YXNrLXRyYWNrZXItcmVtaXgudmVyY2VsLmFwcC9cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV4dC13b3JrXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3BvcnRmb2xpb1wiPlxuICAgICAgICAgICAgICAgIDxwPkNoZWNrIG91dCBteSBwb3J0Zm9saW8gJiM4NTk0OzwvcD5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYWJvdXRcIj5cbiAgICAgICAgICA8aDM+QWJvdXQgTWU8L2gzPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSGVsbG8hIE15IG5hbWUgaXMgQWJkdXItUmFobWFuIGFuZCBJIGVuam95IGNyZWF0aW5nIHRoaW5ncyB0aGF0XG4gICAgICAgICAgICAgIGxpdmUgb24gdGhlIGludGVybmV0LiBJIHN0YXJ0ZWQgbXkgcHJvZ3JhbW1pbmcgam91cm5leSBieVxuICAgICAgICAgICAgICBhdHRlbmRpbmcgYSBXb3JkUHJlc3MtaG9zdGVkIGV2ZW50IGFuZCBhZnRlciBvbmUgdGhpbmcgdGhhdCBsZWQgdG9cbiAgICAgICAgICAgICAgdGhlIG90aGVyLCBldmVudHVhbGx5IGxhbmRlZCBpbiB0aGUgd29ybGQgb2Ygd2ViIGRldmVsb3BtZW50LiBJXG4gICAgICAgICAgICAgIGxvdmUgbGVhcm5pbmcgbmV3IHRlY2hub2xvZ2llcyBhbmQgb2Z0ZW4gYW1hemVkIGJ5IHRoZSBwcm9ncmVzcyB3ZVxuICAgICAgICAgICAgICBodW1hbnMgaGF2ZSBtYWRlIHNvIGZhciBpbiB0aGlzIGFtYXppbmcgZmllbGQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uPldobyBpcyBTaGFmU3BlY3M/PC9idXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICAgICAgIDxoMz5HZXQgaW4gVG91Y2g8L2gzPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgV2FubmEgZ2V0IGluIHRvdWNoPyBIYXZlIGEgcXVlc3Rpb24sIG9yIGFuIG9mZmVyLCBvciB5b3UganVzdCBmZWVsXG4gICAgICAgICAgICBsaWtlIHNheWluZyBoaSwgc2VuZCBtZSBhbiBlbWFpbCBhbmQgbGV0J3MgY29ubmVjdCEgXHVEODNEXHVERTA0XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86YWJiYWRzaGFmMDVAZ21haWwuY29tXCI+XG4gICAgICAgICAgICA8YnV0dG9uPkdldCBpbiB0b3VjaDwvYnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLWRpdlwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1vYmlsZS11bFwiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdGhlclwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWZTcGVjc1wiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1saW5rIGZlYXRoZXItZ2l0aHViXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkdpdEh1YjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOSAxOWMtNSAxLjUtNS0yLjUtNy0zbTE0IDZ2LTMuODdhMy4zNyAzLjM3IDAgMCAwLS45NC0yLjYxYzMuMTQtLjM1IDYuNDQtMS41NCA2LjQ0LTdBNS40NCA1LjQ0IDAgMCAwIDIwIDQuNzcgNS4wNyA1LjA3IDAgMCAwIDE5LjkxIDFTMTguNzMuNjUgMTYgMi40OGExMy4zOCAxMy4zOCAwIDAgMC03IDBDNi4yNy42NSA1LjA5IDEgNS4wOSAxQTUuMDcgNS4wNyAwIDAgMCA1IDQuNzdhNS40NCA1LjQ0IDAgMCAwLTEuNSAzLjc4YzAgNS40MiAzLjMgNi42MSA2LjQ0IDdBMy4zNyAzLjM3IDAgMCAwIDkgMTguMTNWMjJcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1NoYWZTcGVjc1wiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1saW5rIGZlYXRoZXItdHdpdHRlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5Ud2l0dGVyPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMyAzYTEwLjkgMTAuOSAwIDAgMS0zLjE0IDEuNTMgNC40OCA0LjQ4IDAgMCAwLTcuODYgM3YxQTEwLjY2IDEwLjY2IDAgMCAxIDMgNHMtNCA5IDUgMTNhMTEuNjQgMTEuNjQgMCAwIDEtNyAyYzkgNSAyMCAwIDIwLTExLjVhNC41IDQuNSAwIDAgMC0uMDgtLjgzQTcuNzIgNy43MiAwIDAgMCAyMyAzelwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZGV2LnRvL3NoYWZzcGVjc1wiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAzMiA0NDcuOTk5OTk5OTk5OTk5OTQgNDQ4XCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjUwMFwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIzMjFcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXYgZmVhdGhlci1naXRodWJcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRFVi50bzwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIwLjEyIDIwOC4yOWMtMy44OC0yLjktNy43Ny00LjM1LTExLjY1LTQuMzVIOTEuMDN2MTA0LjQ3aDE3LjQ1YzMuODggMCA3Ljc3LTEuNDUgMTEuNjUtNC4zNXM1LjgyLTcuMjUgNS44Mi0xMy4wNnYtNjkuNjVjLS4wMS01LjgtMS45Ni0xMC4xNi01LjgzLTEzLjA2ek00MDQuMSAzMkg0My45QzE5LjcgMzIgLjA2IDUxLjU5IDAgNzUuOHYzNjAuNEMuMDYgNDYwLjQxIDE5LjcgNDgwIDQzLjkgNDgwaDM2MC4yYzI0LjIxIDAgNDMuODQtMTkuNTkgNDMuOS00My44Vjc1LjhjLS4wNi0yNC4yMS0xOS43LTQzLjgtNDMuOS00My44ek0xNTQuMiAyOTEuMTljMCAxOC44MS0xMS42MSA0Ny4zMS00OC4zNiA0Ny4yNWgtNDYuNFYxNzIuOThoNDcuMzhjMzUuNDQgMCA0Ny4zNiAyOC40NiA0Ny4zNyA0Ny4yOHptMTAwLjY4LTg4LjY2SDIwMS42djM4LjQyaDMyLjU3djI5LjU3SDIwMS42djM4LjQxaDUzLjI5djI5LjU3aC02Mi4xOGMtMTEuMTYuMjktMjAuNDQtOC41My0yMC43Mi0xOS42OVYxOTMuN2MtLjI3LTExLjE1IDguNTYtMjAuNDEgMTkuNzEtMjAuNjloNjMuMTl6bTEwMy42NCAxMTUuMjljLTEzLjIgMzAuNzUtMzYuODUgMjQuNjMtNDcuNDQgMGwtMzguNTMtMTQ0LjhoMzIuNTdsMjkuNzEgMTEzLjcyIDI5LjU3LTExMy43MmgzMi41OHpcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdGhlclwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL1NoYWZTcGVjc1wiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RmFDb2RlcGVuIGNsYXNzTmFtZT1cImZlYXRoZXItZ2l0aHViXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgcmV0dXJuIDxPdXRsZXQgLz47XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEsIHVzZVRyYW5zaXRpb24sIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgY29weUxpc3RlbmVyIH0gZnJvbSBcIn4vdXRpbHMvY2xpZW50L2V2ZW50cy5jbGllbnRcIjtcblxuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9ibG9nLXNsdWcuY3NzXCI7XG5pbXBvcnQgZnJhbWUgZnJvbSBcIi4uLy4uL3N0eWxlcy9mcmFtZS5jc3NcIjtcbmltcG9ydCBnaXRodWIgZnJvbSBcIi4uLy4uL3N0eWxlcy9naXRodWIuY3NzXCI7XG5pbXBvcnQgeyBnZXRTaW5nbGVQb3N0IH0gZnJvbSBcIn4vdXRpbHMvc2VydmVyL2dpdGh1Yi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICBocmVmOiBzdHlsZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICBocmVmOiBmcmFtZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICBocmVmOiBnaXRodWIsXG4gICAgfSxcbiAgXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgLy9AdHMtaWdub3JlXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaW5nbGVQb3N0KGAke3BhcmFtcy5zbHVnfS5tZGApO1xuXG4gIHJldHVybiB7XG4gICAgY29udGVudDogZGF0YS5kYXRhLFxuICAgIGRhdGE6IGRhdGEuZnJvbnRtYXR0ZXIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbHVnKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuICBjb25zdCBib2R5UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsISk7XG5cbiAgY29uc3QgYmxvZ1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCEpO1xuICBjb25zdCBhdmdSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwhKTtcbiAgY29uc3QgZGF0ZVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCEpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRyYW5zaXRpb24uc3RhdGUgPT0gXCJpZGxlXCIpIHtcbiAgICAgIGJsb2dSZWYuY3VycmVudCAmJiAoYmxvZ1JlZi5jdXJyZW50LmlubmVySFRNTCA9IGRhdGEuY29udGVudCk7XG5cbiAgICAgIHNldFJlYWRpbmdUaW1lKCk7XG5cbiAgICAgIC8vIEVzdGltYXRlIHRoZSBhdmVyYWdlIHJlYWRpbmcgdGltZSBvZiB0aGUgcG9zdFxuXG4gICAgICBmdW5jdGlvbiBzZXRSZWFkaW5nVGltZSgpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gZ2V0V29yZENvdW50KCk7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBsZXQgdGltZSA9IE1hdGguY2VpbChjb3VudCAvIDI0MCk7XG5cbiAgICAgICAgYXZnUmVmLmN1cnJlbnQgJiYgKGF2Z1JlZi5jdXJyZW50LmlubmVyVGV4dCA9IHRpbWUgKyBcIiBtaW4gcmVhZFwiKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0V29yZENvdW50KCkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgaWYgKGJsb2dSZWYuY3VycmVudCkge1xuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIHJldHVybiBibG9nUmVmLmN1cnJlbnQ/LmlubmVyVGV4dC5tYXRjaCgvXFx3Ky9nKS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgbWF0Y2ggPSBkYXRhLmRhdGEuZGF0ZS5tYXRjaCgvW14tXSsvZyk7XG4gICAgICBjb25zdCBmb3JtYXR0ZWQgPSBmb3JtYXQoXG4gICAgICAgIG5ldyBEYXRlKG1hdGNoWzBdLCBtYXRjaFsxXSAtIDEsIG1hdGNoWzJdLnNsaWNlKDAsIDIpKSxcbiAgICAgICAgXCJNTU1NIGRkLCB5eXl5XCJcbiAgICAgICk7XG5cbiAgICAgIGRhdGVSZWYuY3VycmVudCAmJiAoZGF0ZVJlZi5jdXJyZW50LmlubmVyVGV4dCA9IGZvcm1hdHRlZCk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5pZCA9PSBcImNvcHktYnRuXCIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRvbmVcIilcbiAgICAgICAgICBpZihuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY2xpcGJvYXJkLXRleHRcIikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiLCBmYWxzZSwgZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jbGlwYm9hcmQtdGV4dFwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWRpdlwiIHJlZj17Ym9keVJlZn0+XG4gICAgICA8YSBocmVmPVwiL2Jsb2dcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ28tYmFja1wiPlxuICAgICAgICAgIDxzcGFuPiYjODU5Mjs8L3NwYW4+IFJldHVybiBiYWNrIHRvIG92ZXJ2aWV3XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvYT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlYWRcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvZy1tZXRhXCI+XG4gICAgICAgICAgPGgxPntkYXRhPy5kYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0XCI+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZVwiIHJlZj17ZGF0ZVJlZn0+PC9zcGFuPiAte1wiIFwifVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdmctdGltZVwiIHJlZj17YXZnUmVmfT48L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybCgke2RhdGE/LmRhdGEuaW1hZ2V9KWAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCIxMDAlIDEwMCVcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvblxuICAgICAgICBjbGFzc05hbWU9XCJtYXJrZG93bi1ib2R5XCJcbiAgICAgICAgcmVmPXtibG9nUmVmfVxuICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxLjEyNzVyZW1cIiwgcG9pbnRlckV2ZW50czogXCJhbGxcIiB9fVxuICAgICAgPjwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFjdGlvbi1jYWxsXCI+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NsZXR0ZXJcIj5cbiAgICAgICAgICA8aDM+U2lnbiBVcDwvaDM+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMC44NzVyZW1cIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgU2lnbiB1cCBmb3IgdGhlIG5ld3NsZXR0ZXIgdG8gZ2V0IGFjY2VzcyB0byBleGNsdXNpdmUgcG9zdHMgYW5kXG4gICAgICAgICAgICBlYXJseSBhY2Nlc3MgdG8gYXJ0aWNsZXNcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cIm5ld3NsZXR0ZXJcIlxuICAgICAgICAgICAgaWQ9XCJuZXdzbGV0dGVyXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIFNpZ24gVXB7XCIgXCJ9XG4gICAgICAgICAgICA8RmlTZW5kXG4gICAgICAgICAgICAgIGNvbG9yPVwiI2ZmZlwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPXtcIjFyZW1cIn1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiBcIjAuMTI1cmVtXCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yLXNlcGFyYXRvclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC1saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2Pm9yPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsLWxpbmVcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxociBoaWRkZW4gLz4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm1hY1wiPlxuICAgICAgICAgIDxzcGFuPllvdSBjb3VsZCBzdXBwb3J0IG1lIGJ5IGJ1eWluZyBhIGRpZ2l0YWwgY29mZmVlIFx1RDgzRFx1REUwMTwvc3Bhbj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmJ1eW1lYWNvZmZlZS5jb20vc2hhZnNwZWNzXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmJ1eW1lYWNvZmZlZS5jb20vYnV0dG9ucy92Mi9kZWZhdWx0LXllbGxvdy5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJCdXkgTWUgQSBEaWdpdGFsIENvZmZlZVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIzcmVtXCIsIHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luVG9wOiBcIjAuMjVyZW1cIiB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IE9jdG9raXQgfSBmcm9tIFwiQG9jdG9raXQvY29yZVwiO1xyXG5pbXBvcnQgeyBSZXBvIH0gZnJvbSBcIi4uL2hhbmRsZXJzL2dpdGh1Yi1hcGlcIjtcclxuaW1wb3J0IHsgdG9IVE1MIH0gZnJvbSBcIm1hcmtkb3duLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgbWFya2Rvd25JdEVuZ2luZSwgY29tcG9uZW50cywgbWQgfSBmcm9tICcuL21hcmtkb3duLnNlcnZlcic7XHJcbmNvbnN0IGdyYXlNYXR0ZXIgPSByZXF1aXJlKFwiZ3JheS1tYXR0ZXJcIilcclxuXHJcbmNvbnN0IG9jdG9raXQgPSBuZXcgT2N0b2tpdCh7IGF1dGg6IHByb2Nlc3MuZW52LkdJVEhVQl9UT0tFTiB9KTtcclxuXHJcbmludGVyZmFjZSBQb3N0RGF0YSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHBhdGg6IHN0cmluZztcclxuICBzaGE6IHN0cmluZztcclxuICBzaXplOiBudW1iZXI7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgaHRtbF91cmw6IHN0cmluZztcclxuICBnaXRfdXJsOiBzdHJpbmc7XHJcbiAgZG93bmxvYWRfdXJsOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIF9saW5rczoge1xyXG4gICAgZ2l0OiBzdHJpbmc7XHJcbiAgICBzZWxmOiBzdHJpbmc7XHJcbiAgICBodG1sOiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuLy8gR2V0IGFsbCBwb3N0cyBmcm9tIHRoZSByZXBvc2l0b3J5XHJcbmFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzKCkge1xyXG4gIGNvbnN0IHBvc3REaXIgPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoXHJcbiAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29udGVudHMve3BhdGh9XCIsXHJcbiAgICB7XHJcbiAgICAgIC4uLlJlcG8sXHJcbiAgICAgIHBhdGg6IFwicG9zdHNcIixcclxuICAgIH1cclxuICApO1xyXG5cclxuICByZXR1cm4gcG9zdERpcjtcclxufVxyXG5cclxuLypcclxuKiAgRXh0cmFjdCByZXF1aXJlZCBwb3N0IGRhdGEgZnJvbSB0aGUgR2l0SHViIEFQSSByZXNwb25zZVxyXG4qXHJcbiovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUG9zdHNEYXRhKCkge1xyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0UG9zdHMoKTtcclxuXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgY29uc3QgcG9zdHNJbmZvID0gUHJvbWlzZS5hbGwocG9zdHMuZGF0YS5tYXAoYXN5bmMgKHBvc3Q6IFBvc3REYXRhKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGRvd25sb2FkX3VybCwgc2hhIH0gPSBwb3N0O1xyXG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IGZldGNoKGRvd25sb2FkX3VybCkudGhlbihyZXMgPT4gcmVzLnRleHQoKSlcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gZ3JheU1hdHRlcihjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4geyBuYW1lLCBmcm9udG1hdHRlcjogZGF0YSB9O1xyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHBvc3RzSW5mbztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNpbmdsZVBvc3QobmFtZTogc3RyaW5nKSB7XHJcbiAgY29uc3QgcG9zdCA9IGF3YWl0IG9jdG9raXQucmVxdWVzdChcclxuICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250ZW50cy97cGF0aH1cIixcclxuICAgIHtcclxuICAgICAgLi4uUmVwbyxcclxuICAgICAgcGF0aDogYHBvc3RzLyR7bmFtZX1gLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgXHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGNvbnN0IGRlY29kZWQgPSBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKGF0b2IocG9zdC5kYXRhLmNvbnRlbnQpKSk7XHJcbiAgXHJcbiAgY29uc3QgcGFyc2VkID0gZ3JheU1hdHRlcihkZWNvZGVkKTtcclxuICBjb25zdCB7IGRhdGEsIGNvbnRlbnQgfSA9IHBhcnNlZDtcclxuXHJcbiAgLy8gY29uc3QgaHRtbCA9IHRvSFRNTCh7XHJcbiAgLy8gICBpbnB1dDogY29udGVudCxcclxuICAvLyAgIGNvbXBvbmVudHM6IGNvbXBvbmVudHMsXHJcbiAgLy8gICBjb250ZXh0OiB7IHVzZXI6IHsgZmF2b3JpdGVDb2xvcjogXCJibHVlXCIgfSB9LFxyXG4gIC8vICAgbWFya2Rvd25FbmdpbmU6IG1hcmtkb3duSXRFbmdpbmUoKSxcclxuICAvLyB9KTtcclxuXHJcbiAgY29uc3QgaHRtbCA9IG1kLnJlbmRlcihjb250ZW50KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGh0bWwsXHJcbiAgICBmcm9udG1hdHRlcjogZGF0YSxcclxuICB9O1xyXG59IiwgImV4cG9ydCBjb25zdCBSZXBvID0ge1xyXG4gICAgb3duZXI6IFwiU2hhZlNwZWNzXCIsXHJcbiAgICByZXBvOiBcInJlbWl4LWNtc1wiLFxyXG59IiwgImltcG9ydCB7IEFiYnJEaWN0aW9uYXJ5IH0gZnJvbSBcIi4uL2NsaWVudC9kaWN0aW9uYXJ5LmNsaWVudFwiO1xuXG5jb25zdCBtYXIgPSByZXF1aXJlKFwiLi4vcGx1Z2lucy9tYXJrZG93bi1jb3B5LnNlcnZlci5qc1wiKTtcblxuY29uc3QgaGxqcyA9IHJlcXVpcmUoXCJoaWdobGlnaHQuanNcIik7XG5cbmV4cG9ydCBjb25zdCBtZCA9IHJlcXVpcmUoXCJtYXJrZG93bi1pdFwiKSh7XG4gIGh0bWw6IHRydWUsXG4gIHR5cG9ncmFwaGVyOiB0cnVlLFxufSlcbiAgLnVzZShyZXF1aXJlKFwibWFya2Rvd24taXQtdG9jLWRvbmUtcmlnaHRcIikpXG4gIC51c2UocmVxdWlyZShcIm1hcmtkb3duLWl0LWFsZXJ0c1wiKSlcbiAgLnVzZShyZXF1aXJlKFwibWFya2Rvd24taXQtaGlnaGxpZ2h0anNcIiksIHsgaGxqcyB9KVxuICAudXNlKHJlcXVpcmUoXCJtYXJrZG93bi1pdC1tdWx0aW1kLXRhYmxlXCIpLCB7XG4gICAgbXVsdGlsaW5lOiBmYWxzZSxcbiAgICByb3dzcGFuOiBmYWxzZSxcbiAgICBoZWFkZXJsZXNzOiBmYWxzZSxcbiAgfSlcbiAgLnVzZShtYXIpXG4gIC51c2UocmVxdWlyZShcIm1hcmtkb3duLWl0LWFiYnJcIiksIEFiYnJEaWN0aW9uYXJ5KVxuICAudXNlKHJlcXVpcmUoXCJtYXJrZG93bi1pdC1jb250YWluZXJcIiksIFwic3BvaWxlclwiLCB7XG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uIChwYXJhbXM6IGFueSkge1xuICAgICAgcmV0dXJuIHBhcmFtcy50cmltKCkubWF0Y2goL15zcG9pbGVyXFxzKyguKikkLyk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKHRva2VuczogYW55LCBpZHg6IGFueSkge1xuICAgICAgdmFyIG0gPSB0b2tlbnNbaWR4XS5pbmZvLnRyaW0oKS5tYXRjaCgvXnNwb2lsZXJcXHMrKC4qKSQvKTtcblxuICAgICAgaWYgKHRva2Vuc1tpZHhdLm5lc3RpbmcgPT09IDEpIHtcbiAgICAgICAgLy8gb3BlbmluZyB0YWdcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBcIjxkZXRhaWxzPjxzdW1tYXJ5PlwiICsgbWQudXRpbHMuZXNjYXBlSHRtbChtWzFdKSArIFwiPC9zdW1tYXJ5PlxcblwiXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjbG9zaW5nIHRhZ1xuICAgICAgICByZXR1cm4gXCI8L2RldGFpbHM+XFxuXCI7XG4gICAgICB9XG4gICAgfSxcbiAgfSlcbiAgLnVzZShyZXF1aXJlKFwiQGdlcmhvYmJlbHQvbWFya2Rvd24taXQtZ2l0aHViLWhlYWRpbmdzXCIpKVxuICAudXNlKHJlcXVpcmUoXCJtYXJrZG93bi1pdC1jb250YWluZXJcIiksIFwiZHluYW1pY1wiLCB7XG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAodG9rZW5zOiBhbnksIGlkeDogYW55KSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaWR4XTtcblxuICAgICAgaWYgKHRva2VuLm5lc3RpbmcgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiJyArIHRva2VuLmluZm8udHJpbSgpICsgJ1wiPic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCI8L2Rpdj5cIjtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcblxuLy8gQ3VzdG9tIE1hcmtkb3duIENvbXBvbmVudHNcbmV4cG9ydCBjb25zdCBjb21wb25lbnRzID0ge307XG5cbi8vIE1hcmtkb3duIEVuZ2luZVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtkb3duSXRFbmdpbmUoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBtYXJrZG93blJlbmRlcmVyKG1kVGV4dDogc3RyaW5nLCByZW5kZXI6IGFueSkge1xuICAgIHZhciB0ZXh0ID0gbWQucmVuZGVyKG1kVGV4dCk7XG4gICAgaWYgKHRleHRbdGV4dC5sZW5ndGggLSAxXSA9PT0gXCJcXG5cIikge1xuICAgICAgcmVuZGVyKHRleHQuc2xpY2UoMCwgdGV4dC5sZW5ndGggLSAxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlcih0ZXh0KTtcbiAgICB9XG4gIH07XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IFBvc3RzRGF0YSB9IGZyb20gXCJ+L3V0aWxzL3NlcnZlci9naXRodWIuc2VydmVyXCJcblxuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2Jsb2cuY3NzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBQb3N0c0RhdGEoKTtcbiAgY29uc3QgbWF0dGVyOiBhbnlbXSA9IHBvc3RzLm1hcCgocG9zdDogYW55KSA9PiB7XG4gICAgY29uc3QgeyBmcm9udG1hdHRlciB9ID0gcG9zdDtcbiAgICByZXR1cm4gZnJvbnRtYXR0ZXJcbiAgfSlcblxuICBjb25zdCBzb3J0ZWRQb3N0cyA9IG1hdHRlci5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgIHJldHVybiBiLmlkIC0gYS5pZFxuICB9KTtcbiAgXG4gIHJldHVybiBzb3J0ZWRQb3N0cztcbn07XG5cbmZ1bmN0aW9uIENhcmQoeyB0aXRsZSwgaW1hZ2UsIGlkLCBkYXRlIH06IGFueSkge1xuICBjb25zdCBzdGF0UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsISk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtYXRjaCA9IGRhdGUubWF0Y2goL1teLV0rL2cpO1xuICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdChcbiAgICAgIG5ldyBEYXRlKG1hdGNoWzBdLCBtYXRjaFsxXSAtIDEsIG1hdGNoWzJdLnNsaWNlKDAsIDIpKSxcbiAgICAgIFwiTU1NTSBkZCwgeXl5eVwiXG4gICAgKTtcblxuICAgIHN0YXRSZWYuY3VycmVudC5pbm5lclRleHQgPSBgUHVibGlzaGVkOiAke2Zvcm1hdHRlZH1gO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJibG9nLWNhcmQtcmVjXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtpbWFnZX0pYCxcbiAgICAgICAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiMTAwJSAxMDAlXCIsXG4gICAgICB9fVxuICAgICAga2V5PXtpZH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctY2FyZC1pbmZvXCI+XG4gICAgICAgIDxwPnt0aXRsZX08L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0YXRzXCIgcmVmPXtzdGF0UmVmfT48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gVGFnKHsgdGFnTmFtZSwgbm93UnVuIH06IGFueSkge1xuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgdGFnUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwhKTtcbiAgY29uc3QgbGFiZWxSZWYgPSB1c2VSZWY8SFRNTExhYmVsRWxlbWVudD4obnVsbCEpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRhZ1JlZi5jdXJyZW50LmNoZWNrZWQpIHtcbiAgICAgIGxhYmVsUmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhYmVsUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWRcIik7XG4gICAgfVxuICB9LCBbY2hlY2tlZF0pO1xuXG4gIGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuICAgIHNldENoZWNrZWQoIWNoZWNrZWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGxhYmVsXG4gICAgICBjbGFzc05hbWU9XCJ0YWctY2Fwc3VsZVwiXG4gICAgICBodG1sRm9yPXt0YWdOYW1lfVxuICAgICAgcmVmPXtsYWJlbFJlZn1cbiAgICAgIG9uQ2xpY2s9eygpID0+IG5vd1J1bigpfVxuICAgID5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICBpZD17dGFnTmFtZX1cbiAgICAgICAgbmFtZT17dGFnTmFtZX1cbiAgICAgICAgcmVmPXt0YWdSZWZ9XG4gICAgICAgIG9uQ2hhbmdlPXtjaGVja1N0YXR1c31cbiAgICAgIC8+XG4gICAgICA8c3Bhbj57dGFnTmFtZX08L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICBjb25zdCBwb3N0UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsISk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYm9keVwiPlxuICAgICAgICAgIFdlbGNvbWUgdG8gbXkgZGlnaXRhbCBub3RlcGFkLiBUZWFjaGluZyBkZXZlbG9wbWVudCBza2lsbHMsIHNoYXJpbmcgbXlcbiAgICAgICAgICBrbm93bGVkZ2UgYW5kIGV4cGVyaWVuY2VzIG91dCB0aGVyZSwgYW5kIGhlbHBpbmcgd2l0aCBidWlsZGluZyBhXG4gICAgICAgICAgYnJpZ2h0ZXIgZnV0dXJlLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWltYWdlXCI+XHVEODNEXHVEQ0RBPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJibG9nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctY29udGVudFwiPlxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZWRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoMj5GZWF0dXJlZCBBcnRpY2xlPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctY2FyZCBibG9nLWNhcmQtZmVhdHVyZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1jYXJkLWluZm8gYmxvZy1jYXJkLWluZm8tZmVhdHVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmVhdFwiPkZlYXR1cmVkIGFydGljbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdC1tZXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgRG9uZWNcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RhdHMtZmVhdHVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDIzcmQgb2YgRmVicnVhcnksIDIwMjIgLSAzIG1pbiByZWFkXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmZWF0LWltZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICBSZWFkIHRoZSBhcnRpY2xlIDxidXR0b24gY2xhc3NOYW1lPVwic3Bpbm4gY2lyY2xlXCI+JiM4NTk0OzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdGFnc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGgzPlNlYXJjaCBBcnRpY2xlcyBieSBUb3BpY3M6PC9oMz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiIHJlZj17dGFnUGFyZW50UmVmfT5cbiAgICAgICAgICAgICAgICB7ZGF0YT8udGFncy5tYXAoKHRhZzogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VGFnIHRhZ05hbWU9e3RhZy5uYW1lfSBub3dSdW49e25vd1J1bn0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxoMj5SZWNlbnQgQXJ0aWNsZXMuLjwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHNcIiByZWY9e3Bvc3RSZWZ9PlxuICAgICAgICAgICAgICB7ZGF0YT8ubWFwKChwb3N0OiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgPExpbmsgdG89e3Bvc3Quc2x1Z30ga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICBkYXRlPXtwb3N0LmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICBpbWFnZT17cG9zdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgIGlkPXtwb3N0LmlkfVxuICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZXh0cmFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzbGV0dGVyXCI+PC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonYzljZWY0ZjYnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVBBWkZFM1JTLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1QT09WR0ZCQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMyNUQzN01TLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1PSkZaWVA3SS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fib3V0Jzp7J2lkJzoncm91dGVzL2Fib3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fib3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fib3V0LVpENDYyQk5RLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1OSEZPQVozVC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZyc6eydpZCc6J3JvdXRlcy9ibG9nJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy1ZWVU1VE5KUS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvJHNsdWcnOnsnaWQnOidyb3V0ZXMvYmxvZy8kc2x1ZycsJ3BhcmVudElkJzoncm91dGVzL2Jsb2cnLCdwYXRoJzonOnNsdWcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy8kc2x1Zy1SRUVUSEFQNy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1VYV09LQlguanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9pbmRleCc6eydpZCc6J3JvdXRlcy9ibG9nL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvYmxvZycsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL2luZGV4LUFDVUNJRVZMLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zVVhXT0tCWC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1DQ0ROTVU0Mi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUFVQQ1hWWkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OSEZPQVozVC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9ydGZvbGlvJzp7J2lkJzoncm91dGVzL3BvcnRmb2xpbycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwb3J0Zm9saW8nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9ydGZvbGlvLTdUNTRaSE81LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1QVVBDWFZaRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU5IRk9BWjNULmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Jlc291cmNlcy9tYW5pZmVzdFsuXWpzb24nOnsnaWQnOidyb3V0ZXMvcmVzb3VyY2VzL21hbmlmZXN0Wy5danNvbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidyZXNvdXJjZXMvbWFuaWZlc3QuanNvbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9yZXNvdXJjZXMvbWFuaWZlc3RbLl1qc29uLUVIMkZXRVFQLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9yZXNvdXJjZXMvc3Vic2NyaWJlJzp7J2lkJzoncm91dGVzL3Jlc291cmNlcy9zdWJzY3JpYmUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmVzb3VyY2VzL3N1YnNjcmliZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9yZXNvdXJjZXMvc3Vic2NyaWJlLUhYV0xQNFJILmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1DOUNFRjRGNi5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFB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
