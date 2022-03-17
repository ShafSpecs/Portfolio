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
var styles_default = "/build/_assets/index-MNRXGNUC.css";

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
    "og:url": "https://shafspecs.fly.dev",
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
    background_color: "#1a1b1e",
    theme_color: "#0C0D0E",
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
      },
      {
        name: "Blog - Digital Garden",
        url: "/blog",
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
var portfolio_default = "/build/_assets/portfolio-FQ4JTWCA.css";

// route:C:\Users\fash\Documents\shafspecs\app\routes\portfolio.tsx
var import_bi = require("react-icons/bi");
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
    className: "feather-codepen",
    title: "CodePen"
  }))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement(import_bi.BiCoffeeTogo, {
    title: "Buy Me A Coffee",
    className: "feather-bmac"
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
var about_default = "/build/_assets/about-QZADYOPM.css";

// route:C:\Users\fash\Documents\shafspecs\app\routes\about.tsx
var import_bi2 = require("react-icons/bi");
var links3 = () => {
  return [{ rel: "stylesheet", href: about_default }];
};
var meta3 = () => {
  return {
    title: "ShafSpecs - About Me",
    description: "Learn more about Abdur-Rahman Fashola aka ShafSpecs, and let's connect!",
    "twitter:description": "Learn more about Abdur-Rahman Fashola aka ShafSpecs, and let's connect!",
    "og:description": "Learn more about Abdur-Rahman Fashola aka ShafSpecs, and let's connect!",
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
    className: "feather-codepen",
    title: "CodePen"
  }))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement(import_bi2.BiCoffeeTogo, {
    title: "Buy Me A Coffee",
    className: "feather-bmac"
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
var import_bi3 = require("react-icons/bi");

// app/styles/homepage.css
var homepage_default = "/build/_assets/homepage-NF55ZB4P.css";

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
    className: "feather-codepen",
    title: "CodePen"
  }))), /* @__PURE__ */ React.createElement("li", {
    className: "feather"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/ShafSpecs",
    target: "_blank",
    className: "a-link"
  }, /* @__PURE__ */ React.createElement(import_bi3.BiCoffeeTogo, {
    title: "Buy Me A Coffee",
    className: "feather-bmac"
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
  loader: () => loader4,
  meta: () => meta4
});
init_react();
var import_react2 = require("react");
var import_remix7 = __toESM(require_remix());
var import_date_fns = require("date-fns");
var import_js_confetti = __toESM(require("js-confetti"));

// app/styles/blog-slug.css
var blog_slug_default = "/build/_assets/blog-slug-TVG3Y6SB.css";

// app/styles/frame.css
var frame_default = "/build/_assets/frame-3TDCJRPA.css";

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
var meta4 = ({ data }) => {
  if (!data) {
  }
  return {
    title: data.data.title,
    description: data.data.description,
    keywords: `Remix,ShafSpecs,Shaf,Blog,Portfolio,Fashola,Abdur-Rahman,${data.data.title},${data.data.description}`,
    "twitter:image": data.data.image,
    "og:image": data.data.image,
    "twitter:card": "summary_large_image",
    "twitter:creator": "@ShafSpecs",
    "twitter:site": "@ShafSpecs",
    "twitter:title": data.data.title,
    "og:title": "ShafSpecs",
    "og:type": "website",
    "og:url": `https://shafspecs.fly.dev/blog/${data.data.slug}`,
    "twitter:description": data.data.description,
    "og:locale": "en_US",
    "og:image:alt": "ShafSpecs",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    "og:image:secure_url": data.data.image,
    "og:image:url": data.data.image,
    "og:description": data.data.description
  };
};
function Slug() {
  const data = (0, import_remix7.useLoaderData)();
  const transition = (0, import_remix7.useTransition)();
  const bodyRef = (0, import_react2.useRef)(null);
  const blogRef = (0, import_react2.useRef)(null);
  const avgRef = (0, import_react2.useRef)(null);
  const dateRef = (0, import_react2.useRef)(null);
  const copyRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    const jsConfetti = new import_js_confetti.default();
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
          if (navigator.clipboard) {
            navigator.clipboard.writeText(e.target.getAttribute("data-clipboard-text"));
            copyRef.current && (copyRef.current.style.display = "flex");
            setTimeout(() => {
              copyRef.current && (copyRef.current.style.display = "none");
            }, 2500);
          } else {
            document.execCommand("copy", false, e.target.getAttribute("data-clipboard-text"));
            copyRef.current && (copyRef.current.style.display = "flex");
            setTimeout(() => {
              copyRef.current && (copyRef.current.style.display = "none");
            }, 2500);
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
    className: "copy",
    ref: copyRef
  }, "Copied!"), /* @__PURE__ */ React.createElement("section", {
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
  loader: () => loader5,
  meta: () => meta5
});
init_react();
var import_react3 = require("react");
var import_remix8 = __toESM(require_remix());
var import_date_fns2 = require("date-fns");

// app/styles/blog.css
var blog_default = "/build/_assets/blog-UKBG7B5L.css";

// route:C:\Users\fash\Documents\shafspecs\app\routes\blog\index.tsx
var meta5 = () => {
  return {
    title: "ShafSpecs - Digital Garden",
    description: "Scraps and pieces of knowledge and maybe some wisdom from my digital garden.",
    "twitter:description": "Scraps and pieces of knowledge and maybe some wisdom from my digital garden.",
    "og:description": "Scraps and pieces of knowledge and maybe some wisdom from my digital garden."
  };
};
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
var assets_manifest_default = { "version": "e30bd060", "entry": { "module": "/build/entry.client-PAZFE3RS.js", "imports": ["/build/_shared/chunk-POOVGFBC.js", "/build/_shared/chunk-325D37MS.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-MOSQVS3O.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-3KEZRBQT.js", "imports": ["/build/_shared/chunk-CKZEQGTE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog": { "id": "routes/blog", "parentId": "root", "path": "blog", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog-YYU5TNJQ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$slug": { "id": "routes/blog/$slug", "parentId": "routes/blog", "path": ":slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$slug-4AUHPVQZ.js", "imports": ["/build/_shared/chunk-3UXWOKBX.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "routes/blog", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-V35DZSLU.js", "imports": ["/build/_shared/chunk-3UXWOKBX.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-Q44EMCKX.js", "imports": ["/build/_shared/chunk-PUPCXVZG.js", "/build/_shared/chunk-CKZEQGTE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/portfolio": { "id": "routes/portfolio", "parentId": "root", "path": "portfolio", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/portfolio-H5O3NJCU.js", "imports": ["/build/_shared/chunk-PUPCXVZG.js", "/build/_shared/chunk-CKZEQGTE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/resources/manifest[.]json": { "id": "routes/resources/manifest[.]json", "parentId": "root", "path": "resources/manifest.json", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/resources/manifest[.]json-BAK53HNK.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/resources/subscribe": { "id": "routes/resources/subscribe", "parentId": "root", "path": "resources/subscribe", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/resources/subscribe-HXWLP4RH.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-E30BD060.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6Li4vY2xpZW50L2RpY3Rpb25hcnkuY2xpZW50IiwgIi4uL2FwcC91dGlscy9wbHVnaW5zL21hcmtkb3duLWNvcHkuc2VydmVyLmpzIiwgIjxzdGRpbj4iLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHNoYWZzcGVjc1xcYXBwXFxyb290LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGZhc2hcXERvY3VtZW50c1xcc2hhZnNwZWNzXFxhcHBcXHJvdXRlc1xccmVzb3VyY2VzXFxtYW5pZmVzdFsuXWpzb24udHMiLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHNoYWZzcGVjc1xcYXBwXFxyb3V0ZXNcXHJlc291cmNlc1xcc3Vic2NyaWJlLnRzIiwgIi4uL2FwcC91dGlscy9zZXJ2ZXIvcHdhLXV0aWxzLnNlcnZlci50cyIsICJyb3V0ZTpDOlxcVXNlcnNcXGZhc2hcXERvY3VtZW50c1xcc2hhZnNwZWNzXFxhcHBcXHJvdXRlc1xccG9ydGZvbGlvLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGZhc2hcXERvY3VtZW50c1xcc2hhZnNwZWNzXFxhcHBcXHJvdXRlc1xcYWJvdXQudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxzaGFmc3BlY3NcXGFwcFxccm91dGVzXFxpbmRleC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHNoYWZzcGVjc1xcYXBwXFxyb3V0ZXNcXGJsb2cudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxzaGFmc3BlY3NcXGFwcFxccm91dGVzXFxibG9nXFwkc2x1Zy50c3giLCAiLi4vYXBwL3V0aWxzL3NlcnZlci9naXRodWIuc2VydmVyLnRzIiwgIi4uL2FwcC91dGlscy9oYW5kbGVycy9naXRodWItYXBpLnRzIiwgIi4uL2FwcC91dGlscy9zZXJ2ZXIvbWFya2Rvd24uc2VydmVyLnRzIiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxzaGFmc3BlY3NcXGFwcFxccm91dGVzXFxibG9nXFxpbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCAiLy9AdHMtbm9jaGVja1xyXG5jb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XHJcblxyXG50cnkge1xyXG5cdC8vIE5vZGUganMgd2lsbCB0aHJvdyBhbiBlcnJvclxyXG5cdHRoaXMgPT09IHdpbmRvdztcclxuXHJcblx0Y29uc3QgQ2xpcGJvYXJkID0gcmVxdWlyZSgnY2xpcGJvYXJkJyk7XHJcblx0bmV3IENsaXBib2FyZCgnLm1hcmtkb3duLWl0LWNvZGUtY29weScpO1xyXG59XHJcbmNhdGNoIChfZXJyKSB7XHJcbn1cclxuXHJcbmlmKHR5cGVvZiBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VBbGwgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZUFsbCA9IGZ1bmN0aW9uKG1hdGNoLCByZXBsYWNlKSB7XHJcbiAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAobWF0Y2gsICdnJyksICgpID0+IHJlcGxhY2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuXHRidXR0b25TdHlsZTogJ3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwLjYyNXJlbTsgcmlnaHQ6IDAuNjI1cmVtOyBjdXJzb3I6IHBvaW50ZXI7IG91dGxpbmU6IG5vbmU7JyxcclxuXHRidXR0b25DbGFzczogJ2NvcHktYnRuJ1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ29kZShvcmlnUnVsZSwgb3B0aW9ucykge1xyXG5cdG9wdGlvbnMgPSBfLm1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcclxuXHRyZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuXHRcdGNvbnN0IFt0b2tlbnMsIGlkeF0gPSBhcmdzO1xyXG5cdFx0Y29uc3QgY29udGVudCA9IHRva2Vuc1tpZHhdLmNvbnRlbnRcclxuXHRcdFx0LnJlcGxhY2VBbGwoJ1wiJywgJyZxdW90OycpXHJcblx0XHRcdC5yZXBsYWNlQWxsKFwiJ1wiLCBcIiZsdDtcIik7XHJcblx0XHRjb25zdCBvcmlnUmVuZGVyZWQgPSBvcmlnUnVsZSguLi5hcmdzKTtcclxuXHJcblx0XHRpZiAoY29udGVudC5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiBvcmlnUmVuZGVyZWQ7XHJcblxyXG5cdFx0cmV0dXJuIGBcclxuXHRcdFx0PGRpdiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZVwiPlxyXG5cdFx0XHRcdCR7b3JpZ1JlbmRlcmVkfVxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJtYXJrZG93bi1pdC1jb2RlLWNvcHkgJHtvcHRpb25zLmJ1dHRvbkNsYXNzfVwiIGlkPVwiY29weS1idG5cIiBkYXRhLWNsaXBib2FyZC10ZXh0PVwiJHtjb250ZW50fVwiIHN0eWxlPVwiJHtvcHRpb25zLmJ1dHRvblN0eWxlfVwiIHRpdGxlPVwiQ29weVwiPjwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdGA7XHJcblx0fTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAobWQsIG9wdGlvbnMpID0+IHtcclxuXHRtZC5yZW5kZXJlci5ydWxlcy5jb2RlX2Jsb2NrID0gcmVuZGVyQ29kZShtZC5yZW5kZXJlci5ydWxlcy5jb2RlX2Jsb2NrLCBvcHRpb25zKTtcclxuXHRtZC5yZW5kZXJlci5ydWxlcy5mZW5jZSA9IHJlbmRlckNvZGUobWQucmVuZGVyZXIucnVsZXMuZmVuY2UsIG9wdGlvbnMpO1xyXG59OyIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHNoYWZzcGVjc1xcXFxhcHBcXFxcZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxzaGFmc3BlY3NcXFxcYXBwXFxcXHJvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHNoYWZzcGVjc1xcXFxhcHBcXFxccm91dGVzXFxcXHJlc291cmNlc1xcXFxtYW5pZmVzdFsuXWpzb24udHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxcc2hhZnNwZWNzXFxcXGFwcFxcXFxyb3V0ZXNcXFxccmVzb3VyY2VzXFxcXHN1YnNjcmliZS50c1wiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxzaGFmc3BlY3NcXFxcYXBwXFxcXHJvdXRlc1xcXFxwb3J0Zm9saW8udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHNoYWZzcGVjc1xcXFxhcHBcXFxccm91dGVzXFxcXGFib3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxzaGFmc3BlY3NcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxcc2hhZnNwZWNzXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYmxvZy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxcc2hhZnNwZWNzXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYmxvZ1xcXFwkc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxcc2hhZnNwZWNzXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYmxvZ1xcXFxpbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3Jlc291cmNlcy9tYW5pZmVzdFsuXWpzb25cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Jlc291cmNlcy9tYW5pZmVzdFsuXWpzb25cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicmVzb3VyY2VzL21hbmlmZXN0Lmpzb25cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3Jlc291cmNlcy9zdWJzY3JpYmVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Jlc291cmNlcy9zdWJzY3JpYmVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicmVzb3VyY2VzL3N1YnNjcmliZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9ydGZvbGlvXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb3J0Zm9saW9cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicG9ydGZvbGlvXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9hYm91dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWJvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWJvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2dcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2dcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZ1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy8kc2x1Z1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy8kc2x1Z1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Jsb2dcIixcbiAgICAgIHBhdGg6IFwiOnNsdWdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9ibG9nXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgTmF2TGluayxcbiAgTGluayxcbiAgdXNlTG9jYXRpb24sXG4gIHVzZU1hdGNoZXNcbn0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uLCBMaW5rc0Z1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuaW1wb3J0IHN1biBmcm9tIFwiLi9wcm9qZWN0cy9zdW4tc3ZncmVwby1jb20uc3ZnXCI7XG5pbXBvcnQgbW9vbiBmcm9tIFwiLi9wcm9qZWN0cy9tb29uLXN2Z3JlcG8tY29tLnN2Z1wiO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiU2hhZlNwZWNzXCIsXG4gICAgdmlld3BvcnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiLFxuICAgIGtleXdvcmRzOiBcIlJlbWl4LFNoYWZTcGVjcyxTaGFmLEJsb2csUG9ydGZvbGlvLEZhc2hvbGEsQWJkdXItUmFobWFuXCIsXG4gICAgXCJ0d2l0dGVyOmltYWdlXCI6IFwiaHR0cHM6Ly91Y2FyZWNkbi5jb20vNDI5MzE5NWItZGY0OS00ODg2LWFiMTYtM2IwNDViM2ZiMTg1L0ZyZWVjb2RlY2FtcC5wbmdcIixcbiAgICBcIm9nOmltYWdlXCI6IFwiaHR0cHM6Ly91Y2FyZWNkbi5jb20vNDI5MzE5NWItZGY0OS00ODg2LWFiMTYtM2IwNDViM2ZiMTg1L0ZyZWVjb2RlY2FtcC5wbmdcIixcbiAgICBcInR3aXR0ZXI6Y2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcbiAgICBcInR3aXR0ZXI6Y3JlYXRvclwiOiBcIkBTaGFmU3BlY3NcIixcbiAgICBcInR3aXR0ZXI6c2l0ZVwiOiBcIkBTaGFmU3BlY3NcIixcbiAgICBcInR3aXR0ZXI6dGl0bGVcIjogXCJTaGFmU3BlY3NcIixcbiAgICBcIm9nOnRpdGxlXCI6IFwiU2hhZlNwZWNzXCIsXG4gICAgXCJvZzp0eXBlXCI6IFwid2Vic2l0ZVwiLFxuICAgIFwib2c6dXJsXCI6IFwiaHR0cHM6Ly9zaGFmc3BlY3MuZmx5LmRldlwiLFxuICAgIFwidHdpdHRlcjpkZXNjcmlwdGlvblwiOiBcIkhlbGxvIHRoZXJlIGZyaWVuZHMuIE15IG5hbWUgaXMgQWJkdXItUmFobWFuLCB3ZWxjb21lIHRvIG15IHNpdGUgd2hlcmUgSSBzaG93Y2FzZSBteSBwcm9qZWN0cywgc2hhcmUgbXkgdGhvdWdodHMgJiBleHBlcmllbmNlcywgYW5kIG15IERpZ2l0YWwgR2FyZGVuLiBJIGFtIFNoYWZTcGVjcyBhbmQgd2VsY29tZSB0byBteSBVbml2ZXJzZS5cIixcbiAgICBcIm9nOmxvY2FsZVwiOiBcImVuX1VTXCIsXG4gICAgXCJvZzppbWFnZTphbHRcIjogXCJTaGFmU3BlY3NcIixcbiAgICBcIm9nOmltYWdlOndpZHRoXCI6IFwiMTIwMFwiLFxuICAgIFwib2c6aW1hZ2U6aGVpZ2h0XCI6IFwiNjMwXCIsXG4gICAgXCJvZzppbWFnZTp0eXBlXCI6IFwiaW1hZ2UvcG5nXCIsXG4gICAgXCJvZzppbWFnZTpzZWN1cmVfdXJsXCI6IFwiaHR0cHM6Ly91Y2FyZWNkbi5jb20vNDI5MzE5NWItZGY0OS00ODg2LWFiMTYtM2IwNDViM2ZiMTg1L0ZyZWVjb2RlY2FtcC5wbmdcIixcbiAgICBcIm9nOmltYWdlOnVybFwiOiBcImh0dHBzOi8vdWNhcmVjZG4uY29tLzQyOTMxOTViLWRmNDktNDg4Ni1hYjE2LTNiMDQ1YjNmYjE4NS9GcmVlY29kZWNhbXAucG5nXCIsXG4gICAgXCJvZzpkZXNjcmlwdGlvblwiOiBcIkhlbGxvIHRoZXJlIGZyaWVuZHMuIE15IG5hbWUgaXMgQWJkdXItUmFobWFuIGFuZCB3ZWxjb21lIHRvIG15IHNpdGUgd2hlcmUgSSBzaG93Y2FzZSBteSBwcm9qZWN0cywgc2hhcmUgbXkgdGhvdWdodHMgJiBleHBlcmllbmNlcywgYW5kIG15IERpZ2l0YWwgR2FyZGVuLiBJIGFtIFNoYWZTcGVjcyBhbmQgd2VsY29tZSB0byBteSBVbml2ZXJzZS5cIixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IG1hdGNoZXMgPSB1c2VNYXRjaGVzKCk7XG5cbiAgbGV0IGlzTW91bnQgPSB0cnVlO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG1vdW50ZWQgPSBpc01vdW50O1xuICAgIGlzTW91bnQgPSBmYWxzZTtcbiAgICBpZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XG4gICAgICBpZiAobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyPy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgdHlwZTogXCJSRU1JWF9OQVZJR0FUSU9OXCIsXG4gICAgICAgICAgaXNNb3VudDogbW91bnRlZCxcbiAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICBtYXRjaGVzLFxuICAgICAgICAgIG1hbmlmZXN0OiB3aW5kb3cuX19yZW1peE1hbmlmZXN0LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBsaXN0ZW5lciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeTtcbiAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyPy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcIlJFTUlYX05BVklHQVRJT05cIixcbiAgICAgICAgICAgIGlzTW91bnQ6IG1vdW50ZWQsXG4gICAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICAgIG1hdGNoZXMsXG4gICAgICAgICAgICBtYW5pZmVzdDogd2luZG93Ll9fcmVtaXhNYW5pZmVzdCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRyb2xsZXJjaGFuZ2VcIiwgbGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNvbnRyb2xsZXJjaGFuZ2VcIixcbiAgICAgICAgICAgIGxpc3RlbmVyXG4gICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtsb2NhdGlvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fSBkYXRhLXRoZW1lPVwiZGFya1wiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+IFxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2NsYXNzTmFtZXRoPWRldmljZS13Y2xhc3NOYW1ldGgsaW5pdGlhbC1zY2FsZT0xXCIvPiBcbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL3Jlc291cmNlcy9tYW5pZmVzdC5qc29uXCIgLz4gXG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2ljb25zL2Zhdmljb24uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG4gICAgICAgIDxMaW5rcyAvPiBcbiAgICAgIDwvaGVhZD4gXG4gICAgICA8Ym9keT5cbiAgICAgICAgICA8SGVhZGVyIC8+IFxuICAgICAgICAgIDxPdXRsZXQgLz4gXG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPiBcbiAgICAgICAgPFNjcmlwdHMgLz4gXG4gICAgICAgIDxMaXZlUmVsb2FkIC8+IFxuICAgICAgPC9ib2R5PiBcbiAgICA8L2h0bWw+XG4gICk7XG59XG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBbZGFya01vZGUsIHNldERhcmttb2RlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuXG4gIGNvbnN0IGFjdGl2ZUNsYXNzTmFtZSA9IFwiYWN0aXZlLW5hdlwiO1xuICBjb25zdCBhY3RpdmVNb2JpbGVDbGFzc05hbWUgPSBcImFjdGl2ZS1uYXYtbW9iaWxlXCI7XG5cbiAgY29uc3QgYnRuUmVmID0gdXNlUmVmPEhUTUxCdXR0b25FbGVtZW50PihudWxsISk7XG4gIGNvbnN0IG1vYmlsZVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCEpO1xuICBjb25zdCBtb2JpbGVUb2dnbGVSZWYgPSB1c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwhKTtcblxuICBjb25zdCB0b2dnbGVNb2JpbGVOYXYgPSAoKSA9PiB7XG4gICAgaWYgKG1vYmlsZVJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpIHtcbiAgICAgIG1vYmlsZVJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIG1vYmlsZVRvZ2dsZVJlZi5jdXJyZW50LmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb2JpbGVSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBtb2JpbGVUb2dnbGVSZWYuY3VycmVudC5pbm5lckhUTUwgPSBcIiYjOTc3NjtcIjtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gdG9nZ2xlRGFya01vZGUoKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gdW5kZWZpbmVkICYmICFkYXJrTW9kZSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIiwgXCJkYXJrXCIpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSB1bmRlZmluZWQgJiYgZGFya01vZGUpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsIFwibGlnaHRcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPiAgXG4gICAgICA8TGluayB0bz1cIi9cIj4gICBcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5TaGFmU3BlY3M8L2gxPiBcbiAgICAgIDwvTGluaz4gXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPiAgXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtd3JhcHBlclwiPiBcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj4gICBcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwicG9ydGZvbGlvXCI+ICAgIFxuICAgICAgICAgICAgICB7KHsgaXNBY3RpdmUgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBhY3RpdmVDbGFzc05hbWUgOiB1bmRlZmluZWR9PiAgICAgXG4gICAgICAgICAgICAgICAgICBQb3J0Zm9saW8gXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApfSBcbiAgICAgICAgICAgIDwvTmF2TGluaz4gXG4gICAgICAgICAgPC9saT4gXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+ICBcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiYmxvZ1wiPiAgIFxuICAgICAgICAgICAgICB7KHsgaXNBY3RpdmUgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBhY3RpdmVDbGFzc05hbWUgOiB1bmRlZmluZWR9PiAgICAgICBcbiAgICAgICAgICAgICAgICAgIEJsb2cgXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApfSBcbiAgICAgICAgICAgIDwvTmF2TGluaz4gXG4gICAgICAgICAgPC9saT4gXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TmF2TGluayB0bz1cImFib3V0XCI+ICAgXG4gICAgICAgICAgICAgIHsoeyBpc0FjdGl2ZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IGFjdGl2ZUNsYXNzTmFtZSA6IHVuZGVmaW5lZH0+ICAgICAgXG4gICAgICAgICAgICAgICAgICBBYm91dCBcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICl9IFxuICAgICAgICAgICAgPC9OYXZMaW5rPiBcbiAgICAgICAgICA8L2xpPiBcbiAgICAgICAgPC91bD4gXG4gICAgICA8L25hdj4gXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm1vYmlsZU5hdlwiIHJlZj17bW9iaWxlUmVmfSBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT4gICBcbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT4gICAgIFxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCJwb3J0Zm9saW9cIj4gICAgIFxuICAgICAgICAgICAgICB7KHsgaXNBY3RpdmUgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBhY3RpdmVNb2JpbGVDbGFzc05hbWUgOiB1bmRlZmluZWR9PiAgICAgIFxuICAgICAgICAgICAgICAgICAgUG9ydGZvbGlvIFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKX0gXG4gICAgICAgICAgICA8L05hdkxpbms+IFxuICAgICAgICAgIDwvbGk+IFxuICAgICAgICAgIDxsaT4gICAgICAgXG4gICAgICAgICAgICA8TmF2TGluayB0bz1cImJsb2dcIj4gICAgICAgICBcbiAgICAgICAgICAgICAgeyh7IGlzQWN0aXZlIH0pID0+IChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2lzQWN0aXZlID8gYWN0aXZlTW9iaWxlQ2xhc3NOYW1lIDogdW5kZWZpbmVkfT4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgQmxvZyBcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICl9IFxuICAgICAgICAgICAgPC9OYXZMaW5rPiBcbiAgICAgICAgICA8L2xpPiBcbiAgICAgICAgICA8bGk+ICAgICAgXG4gICAgICAgICAgICA8TmF2TGluayB0bz1cImFib3V0XCI+ICAgICAgICBcbiAgICAgICAgICAgICAgeyh7IGlzQWN0aXZlIH0pID0+IChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2lzQWN0aXZlID8gYWN0aXZlTW9iaWxlQ2xhc3NOYW1lIDogdW5kZWZpbmVkfT4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBBYm91dCBcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICl9IFxuICAgICAgICAgICAgPC9OYXZMaW5rPiBcbiAgICAgICAgICA8L2xpPiBcbiAgICAgICAgPC91bD4gXG4gICAgICA8L25hdj4gXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtb2JpbGVOYXYxXCI+ICBcbiAgICAgICAgPGJ1dHRvbiByZWY9e21vYmlsZVRvZ2dsZVJlZn0gb25DbGljaz17dG9nZ2xlTW9iaWxlTmF2fT4gICBcbiAgICAgICAgICAmIzk3NzY7IFxuICAgICAgICA8L2J1dHRvbj4gXG4gICAgICA8L3NlY3Rpb24+IFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS10b2dnbGVcIj4gICAgXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICByZWY9e2J0blJlZn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbW9kZVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlRGFya01vZGUoKTtcbiAgICAgICAgICAgIHNldERhcmttb2RlKChwcmV2KSA9PiAhcHJldik7XG4gICAgICAgICAgfX1cbiAgICAgICAgPiAgICAgICBcbiAgICAgICAgICB7ZGFya01vZGUgPyAoXG4gICAgICAgICAgICA8aW1nIHNyYz17bW9vbn0gYWx0PVwibW9vblwiIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpbWcgc3JjPXtzdW59IGFsdD1cInN1blwiIC8+XG4gICAgICAgICAgKX0gXG4gICAgICAgIDwvYnV0dG9uPiBcbiAgICAgIDwvZGl2PiBcbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBqc29uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIGpzb24oXG4gICAge1xuICAgICAgc2hvcnRfbmFtZTogXCJQV0FcIixcbiAgICAgIG5hbWU6IFwiUmVtaXggUFdBXCIsXG4gICAgICBzdGFydF91cmw6IFwiL1wiLFxuICAgICAgZGlzcGxheTogXCJzdGFuZGFsb25lXCIsXG4gICAgICBiYWNrZ3JvdW5kX2NvbG9yOiBcIiMxYTFiMWVcIixcbiAgICAgIHRoZW1lX2NvbG9yOiBcIiMwQzBEMEVcIixcbiAgICAgIHNob3J0Y3V0czogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJIb21lcGFnZVwiLFxuICAgICAgICAgIHVybDogXCIvXCIsXG4gICAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3JjOiBcIi9pY29ucy9hbmRyb2lkLWljb24tOTZ4OTYucG5nXCIsXG4gICAgICAgICAgICAgIHNpemVzOiBcIjk2eDk2XCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICAgIHB1cnBvc2U6IFwiYW55IG1vbm9jaHJvbWVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiQmxvZyAtIERpZ2l0YWwgR2FyZGVuXCIsXG4gICAgICAgICAgdXJsOiBcIi9ibG9nXCIsXG4gICAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3JjOiBcIi9pY29ucy9hbmRyb2lkLWljb24tOTZ4OTYucG5nXCIsXG4gICAgICAgICAgICAgIHNpemVzOiBcIjk2eDk2XCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICAgIHB1cnBvc2U6IFwiYW55IG1vbm9jaHJvbWVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBpY29uczogW1xuICAgICAgICB7XG4gICAgICAgICAgc3JjOiBcIi9pY29ucy9hbmRyb2lkLWljb24tMzZ4MzYucG5nXCIsXG4gICAgICAgICAgc2l6ZXM6IFwiMzZ4MzZcIixcbiAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIGRlbnNpdHk6IFwiMC43NVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiBcIi9pY29ucy9hbmRyb2lkLWljb24tNDh4NDgucG5nXCIsXG4gICAgICAgICAgc2l6ZXM6IFwiNDh4NDhcIixcbiAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIGRlbnNpdHk6IFwiMS4wXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6IFwiL2ljb25zL2FuZHJvaWQtaWNvbi03Mng3Mi5wbmdcIixcbiAgICAgICAgICBzaXplczogXCI3Mng3MlwiLFxuICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgZGVuc2l0eTogXCIxLjVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogXCIvaWNvbnMvYW5kcm9pZC1pY29uLTk2eDk2LnBuZ1wiLFxuICAgICAgICAgIHNpemVzOiBcIjk2eDk2XCIsXG4gICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICBkZW5zaXR5OiBcIjIuMFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiBcIi9pY29ucy9hbmRyb2lkLWljb24tMTQ0eDE0NC5wbmdcIixcbiAgICAgICAgICBzaXplczogXCIxNDR4MTQ0XCIsXG4gICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICBkZW5zaXR5OiBcIjMuMFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiBcIi9pY29ucy9hbmRyb2lkLWljb24tMTkyeDE5Mi5wbmdcIixcbiAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICBkZW5zaXR5OiBcIjQuMFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDYWNoZS1Db250cm9sXCI6IFwicHVibGljLCBtYXgtYWdlPTYwMFwiLFxuICAgICAgfSxcbiAgICB9LFxuICApO1xufTtcbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgUHVzaE5vdGlmaWNhdGlvbiwgU2F2ZVN1YnNjcmlwdGlvbiB9IGZyb20gXCIuLi8uLi91dGlscy9zZXJ2ZXIvcHdhLXV0aWxzLnNlcnZlclwiO1xyXG5cclxuY29uc3Qgd2ViUHVzaCA9IHJlcXVpcmUoXCJ3ZWItcHVzaFwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGRhdGEuc3Vic2NyaXB0aW9uO1xyXG5cclxuICBTYXZlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XHJcblxyXG4gIHJldHVybiB7IG1lc3NhZ2U6IFwiRG9uZVwiIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gIGlmICghcHJvY2Vzcy5lbnYuVkFQSURfUFVCTElDX0tFWSB8fCAhcHJvY2Vzcy5lbnYuVkFQSURfUFJJVkFURV9LRVkpIHtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBcIllvdSBtdXN0IHNldCB0aGUgVkFQSURfUFVCTElDX0tFWSBhbmQgVkFQSURfUFJJVkFURV9LRVkgXCIgK1xyXG4gICAgICAgIFwiZW52aXJvbm1lbnQgdmFyaWFibGVzLiBZb3UgY2FuIHVzZSB0aGUgZm9sbG93aW5nIG9uZXM6XCJcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyh3ZWJQdXNoLmdlbmVyYXRlVkFQSURLZXlzKCkpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHVibGljS2V5ID0gcHJvY2Vzcy5lbnYuVkFQSURfUFVCTElDX0tFWTtcclxuXHJcbiAgcmV0dXJuIG5ldyBSZXNwb25zZShwdWJsaWNLZXksIHtcclxuICAgIHN0YXR1czogMjAyLFxyXG4gICAgc3RhdHVzVGV4dDogXCJTdWNjZXNzZnVsIE9wZXJhdGlvblwiLFxyXG4gIH0pO1xyXG59O1xyXG4iLCAiY29uc3Qgc3RvcmFnZSA9IHJlcXVpcmUoXCJub2RlLXBlcnNpc3RcIik7XHJcbmNvbnN0IHdlYlB1c2ggPSByZXF1aXJlKFwid2ViLXB1c2hcIik7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gU2F2ZVN1YnNjcmlwdGlvbihzdWI6IFB1c2hTdWJzY3JpcHRpb24pIHtcclxuICBhd2FpdCBzdG9yYWdlLmluaXQoKTtcclxuICBhd2FpdCBzdG9yYWdlLnNldEl0ZW0oXCJzdWJzY3JpcHRpb25cIiwgc3ViKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFB1c2hOb3RpZmljYXRpb24oY29udGVudDogc3RyaW5nLCBkZWxheTogbnVtYmVyID0gMCkge1xyXG4gIGlmICghcHJvY2Vzcy5lbnYuVkFQSURfUFVCTElDX0tFWSB8fCAhcHJvY2Vzcy5lbnYuVkFQSURfUFJJVkFURV9LRVkpIHtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBcIllvdSBtdXN0IHNldCB0aGUgVkFQSURfUFVCTElDX0tFWSBhbmQgVkFQSURfUFJJVkFURV9LRVkgXCIgK1xyXG4gICAgICAgIFwiZW52aXJvbm1lbnQgdmFyaWFibGVzLiBZb3UgY2FuIHVzZSB0aGUgZm9sbG93aW5nIG9uZXM6XCJcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyh3ZWJQdXNoLmdlbmVyYXRlVkFQSURLZXlzKCkpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgd2ViUHVzaC5zZXRWYXBpZERldGFpbHMoXHJcbiAgICBcImh0dHBzOi8vc2VydmljZXdvcmtlLnJzL1wiLFxyXG4gICAgcHJvY2Vzcy5lbnYuVkFQSURfUFVCTElDX0tFWSxcclxuICAgIHByb2Nlc3MuZW52LlZBUElEX1BSSVZBVEVfS0VZXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgc3Vic2NyaXB0aW9uID0gYXdhaXQgc3RvcmFnZS5nZXRJdGVtKFwic3Vic2NyaXB0aW9uXCIpO1xyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHdlYlB1c2hcclxuICAgICAgLnNlbmROb3RpZmljYXRpb24oc3Vic2NyaXB0aW9uLCBjb250ZW50KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcInN1Y2Nlc3NcIiwge1xyXG4gICAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZTogRXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiRmFpbGVkIVwiLCB7XHJcbiAgICAgICAgICBzdGF0dXM6IDUwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfSwgZGVsYXkgKiAxMDAwKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEZhQ29kZXBlbiB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IE5pZ2h0eSBmcm9tIFwiLi4vcHJvamVjdHMvTmlnaHR5TmlnaHQucG5nXCI7XG5pbXBvcnQgQ29kZVBsYXkgZnJvbSBcIi4uL3Byb2plY3RzL0NvZGVQbGF5X0Jhbm5lcl9BTFBIQS5wbmdcIjtcbmltcG9ydCBUcmFja2VyIGZyb20gXCIuLi9wcm9qZWN0cy90cmFja2VyLnN2Z1wiO1xuXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9wb3J0Zm9saW8uY3NzXCI7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQmlDb2ZmZWVUb2dvIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlIH1dO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJTaGFmU3BlY3MgLSBQb3J0Zm9saW9cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVmlldyBteSBzaG93Y2FzZWQgcHJvamVjdHMgYW5kIHZpZXcgdGhlaXIgc291cmNlIGNvZGUsIGlmIGF2YWlsYWJsZSA6d2luazosIG9uIG15IHBvcnRmb2xpby5cIixcbiAgICBrZXl3b3JkczogXCJTaGFmU3BlY3MsIEFiZHVyLVJhaG1hbiwgRmFzaG9sYSwgU2hhZiwgUG9ydGZvbGlvLCBQcm9qZWN0c1wiLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCB5ZXQhXCIpO1xuICByZXR1cm4gZXJyO1xufTtcblxuZnVuY3Rpb24gQ2FyZCh7IGltYWdlLCBhbHQsIHRpdGxlLCBkZXNjLCBnaXRodWIsIHByZXZpZXcgfTogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD17YWx0fSBjbGFzc05hbWU9XCJpbWdcIiAvPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57dGl0bGV9PC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntkZXNjfTwvcD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxhIGhyZWY9e2dpdGh1Yn0gY2xhc3NOYW1lPVwiYnRuLWxpbmtcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNhcmQtYnRuXCI+R2l0aHViPC9idXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgICAge3ByZXZpZXcgJiYgKFxuICAgICAgICAgIDxhIGhyZWY9e3ByZXZpZXd9IGNsYXNzTmFtZT1cImJ0bi1saW5rXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNhcmQtYnRuXCI+UHJldmlldzwvYnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW8oKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpb1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidS1saXN0XCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU2hhZlNwZWNzXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctbGluayBmZWF0aGVyLWdpdGh1YlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGl0bGU+R2l0SHViPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkgMTljLTUgMS41LTUtMi41LTctM20xNCA2di0zLjg3YTMuMzcgMy4zNyAwIDAgMC0uOTQtMi42MWMzLjE0LS4zNSA2LjQ0LTEuNTQgNi40NC03QTUuNDQgNS40NCAwIDAgMCAyMCA0Ljc3IDUuMDcgNS4wNyAwIDAgMCAxOS45MSAxUzE4LjczLjY1IDE2IDIuNDhhMTMuMzggMTMuMzggMCAwIDAtNyAwQzYuMjcuNjUgNS4wOSAxIDUuMDkgMUE1LjA3IDUuMDcgMCAwIDAgNSA0Ljc3YTUuNDQgNS40NCAwIDAgMC0xLjUgMy43OGMwIDUuNDIgMy4zIDYuNjEgNi40NCA3QTMuMzcgMy4zNyAwIDAgMCA5IDE4LjEzVjIyXCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9TaGFmU3BlY3NcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhLWxpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1saW5rIGZlYXRoZXItdHdpdHRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGl0bGU+VHdpdHRlcjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMyAzYTEwLjkgMTAuOSAwIDAgMS0zLjE0IDEuNTMgNC40OCA0LjQ4IDAgMCAwLTcuODYgM3YxQTEwLjY2IDEwLjY2IDAgMCAxIDMgNHMtNCA5IDUgMTNhMTEuNjQgMTEuNjQgMCAwIDEtNyAyYzkgNSAyMCAwIDIwLTExLjVhNC41IDQuNSAwIDAgMC0uMDgtLjgzQTcuNzIgNy43MiAwIDAgMCAyMyAzelwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdGhlclwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZGV2LnRvL3NoYWZzcGVjc1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImEtbGlua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAzMiA0NDcuOTk5OTk5OTk5OTk5OTQgNDQ4XCJcbiAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjI1MDBcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjIzMjFcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXRoZXItZ2l0aHViXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5ERVYudG88L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIwLjEyIDIwOC4yOWMtMy44OC0yLjktNy43Ny00LjM1LTExLjY1LTQuMzVIOTEuMDN2MTA0LjQ3aDE3LjQ1YzMuODggMCA3Ljc3LTEuNDUgMTEuNjUtNC4zNXM1LjgyLTcuMjUgNS44Mi0xMy4wNnYtNjkuNjVjLS4wMS01LjgtMS45Ni0xMC4xNi01LjgzLTEzLjA2ek00MDQuMSAzMkg0My45QzE5LjcgMzIgLjA2IDUxLjU5IDAgNzUuOHYzNjAuNEMuMDYgNDYwLjQxIDE5LjcgNDgwIDQzLjkgNDgwaDM2MC4yYzI0LjIxIDAgNDMuODQtMTkuNTkgNDMuOS00My44Vjc1LjhjLS4wNi0yNC4yMS0xOS43LTQzLjgtNDMuOS00My44ek0xNTQuMiAyOTEuMTljMCAxOC44MS0xMS42MSA0Ny4zMS00OC4zNiA0Ny4yNWgtNDYuNFYxNzIuOThoNDcuMzhjMzUuNDQgMCA0Ny4zNiAyOC40NiA0Ny4zNyA0Ny4yOHptMTAwLjY4LTg4LjY2SDIwMS42djM4LjQyaDMyLjU3djI5LjU3SDIwMS42djM4LjQxaDUzLjI5djI5LjU3aC02Mi4xOGMtMTEuMTYuMjktMjAuNDQtOC41My0yMC43Mi0xOS42OVYxOTMuN2MtLjI3LTExLjE1IDguNTYtMjAuNDEgMTkuNzEtMjAuNjloNjMuMTl6bTEwMy42NCAxMTUuMjljLTEzLjIgMzAuNzUtMzYuODUgMjQuNjMtNDcuNDQgMGwtMzguNTMtMTQ0LjhoMzIuNTdsMjkuNzEgMTEzLjcyIDI5LjU3LTExMy43MmgzMi41OHpcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL1NoYWZTcGVjc1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImEtbGlua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGYUNvZGVwZW4gY2xhc3NOYW1lPVwiZmVhdGhlci1jb2RlcGVuXCIgdGl0bGU9XCJDb2RlUGVuXCIvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU2hhZlNwZWNzXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJpQ29mZmVlVG9nbyB0aXRsZT1cIkJ1eSBNZSBBIENvZmZlZVwiIGNsYXNzTmFtZT1cImZlYXRoZXItYm1hY1wiLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmaWxsSGVpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlXCI+TXkgUG9ydGZvbGlvPC9kaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmRzXCI+XG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGltYWdlPXtOaWdodHl9XG4gICAgICAgICAgICBhbHQ9XCJQb3J0Zm9saW9cIlxuICAgICAgICAgICAgdGl0bGU9XCJOaWdodHkgTmlnaHQgVGhlbWVcIlxuICAgICAgICAgICAgZGVzYz1cIkEgbWluaW1hbCwgZGFyayBibHVpc2gtYmxhY2sgdGhlbWUgZm9yIFZTIENvZGUsIHdpdGggY2FsbWluZyBjb2xvcnMgYW5kIGhpZ2ggY29udHJhc3QsIGl0IGlzIGEgXHVEODNEXHVEQzRELiBBdmFpbGFibGUgb24gVmlzdWFsIFN0dWRpbyBNYXJrZXRwbGFjZS5cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGltYWdlPXtUcmFja2VyfVxuICAgICAgICAgICAgYWx0PVwiUG9ydGZvbGlvXCJcbiAgICAgICAgICAgIHRpdGxlPVwiR2V0IEl0IERvbmUgVGFzayBUcmFja2VyXCJcbiAgICAgICAgICAgIGRlc2M9XCJBIHNpbXBsZSB0YXNrIHRyYWNrZXIgZm9yIG1hbmFnaW5nIHlvdXIgZGFpbHkgdGFza3MuIEl0IGlzIGEgXHVEODNEXHVEQzRELlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5cIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlXCI+XG4gICAgICAgICAgU2hhZlNwZWNzIGlzIHdvcmtpbmcgdG8gYWRkIG1vcmUgY2xlYW5lZCB1cCBwcm9qZWN0cyBoZXJlLi4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogRm9vdGVyIGZvciBNb2JpbGUgKi99XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtZGl2XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibW9iaWxlLXVsXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU2hhZlNwZWNzXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhLWxpbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLWxpbmsgZmVhdGhlci1naXRodWJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+R2l0SHViPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05IDE5Yy01IDEuNS01LTIuNS03LTNtMTQgNnYtMy44N2EzLjM3IDMuMzcgMCAwIDAtLjk0LTIuNjFjMy4xNC0uMzUgNi40NC0xLjU0IDYuNDQtN0E1LjQ0IDUuNDQgMCAwIDAgMjAgNC43NyA1LjA3IDUuMDcgMCAwIDAgMTkuOTEgMVMxOC43My42NSAxNiAyLjQ4YTEzLjM4IDEzLjM4IDAgMCAwLTcgMEM2LjI3LjY1IDUuMDkgMSA1LjA5IDFBNS4wNyA1LjA3IDAgMCAwIDUgNC43N2E1LjQ0IDUuNDQgMCAwIDAtMS41IDMuNzhjMCA1LjQyIDMuMyA2LjYxIDYuNDQgN0EzLjM3IDMuMzcgMCAwIDAgOSAxOC4xM1YyMlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vU2hhZlNwZWNzXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhLWxpbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLWxpbmsgZmVhdGhlci10d2l0dGVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPlR3aXR0ZXI8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIzIDNhMTAuOSAxMC45IDAgMCAxLTMuMTQgMS41MyA0LjQ4IDQuNDggMCAwIDAtNy44NiAzdjFBMTAuNjYgMTAuNjYgMCAwIDEgMyA0cy00IDkgNSAxM2ExMS42NCAxMS42NCAwIDAgMS03IDJjOSA1IDIwIDAgMjAtMTEuNWE0LjUgNC41IDAgMCAwLS4wOC0uODNBNy43MiA3LjcyIDAgMCAwIDIzIDN6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdGhlclwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kZXYudG8vc2hhZnNwZWNzXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhLWxpbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDMyIDQ0Ny45OTk5OTk5OTk5OTk5NCA0NDhcIlxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjMyMVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRldiBmZWF0aGVyLWdpdGh1YlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+REVWLnRvPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMjAuMTIgMjA4LjI5Yy0zLjg4LTIuOS03Ljc3LTQuMzUtMTEuNjUtNC4zNUg5MS4wM3YxMDQuNDdoMTcuNDVjMy44OCAwIDcuNzctMS40NSAxMS42NS00LjM1czUuODItNy4yNSA1LjgyLTEzLjA2di02OS42NWMtLjAxLTUuOC0xLjk2LTEwLjE2LTUuODMtMTMuMDZ6TTQwNC4xIDMySDQzLjlDMTkuNyAzMiAuMDYgNTEuNTkgMCA3NS44djM2MC40Qy4wNiA0NjAuNDEgMTkuNyA0ODAgNDMuOSA0ODBoMzYwLjJjMjQuMjEgMCA0My44NC0xOS41OSA0My45LTQzLjhWNzUuOGMtLjA2LTI0LjIxLTE5LjctNDMuOC00My45LTQzLjh6TTE1NC4yIDI5MS4xOWMwIDE4LjgxLTExLjYxIDQ3LjMxLTQ4LjM2IDQ3LjI1aC00Ni40VjE3Mi45OGg0Ny4zOGMzNS40NCAwIDQ3LjM2IDI4LjQ2IDQ3LjM3IDQ3LjI4em0xMDAuNjgtODguNjZIMjAxLjZ2MzguNDJoMzIuNTd2MjkuNTdIMjAxLjZ2MzguNDFoNTMuMjl2MjkuNTdoLTYyLjE4Yy0xMS4xNi4yOS0yMC40NC04LjUzLTIwLjcyLTE5LjY5VjE5My43Yy0uMjctMTEuMTUgOC41Ni0yMC40MSAxOS43MS0yMC42OWg2My4xOXptMTAzLjY0IDExNS4yOWMtMTMuMiAzMC43NS0zNi44NSAyNC42My00Ny40NCAwbC0zOC41My0xNDQuOGgzMi41N2wyOS43MSAxMTMuNzIgMjkuNTctMTEzLjcyaDMyLjU4elwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vU2hhZlNwZWNzXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhLWxpbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxGYUNvZGVwZW4gY2xhc3NOYW1lPVwiZmVhdGhlci1naXRodWJcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9tYWluPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXphcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aXBcIj5cdUQ4M0RcdURFQTcgUGFnZSBpcyBzdGlsbCBiZWluZyBjb25zdHJ1Y3RlZCFcdUQ4M0RcdURDNzdcdTIwMERcdTI2NDJcdUZFMEYgXHVEODNEXHVERUE3PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBGYUNvZGVwZW4gfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBzdmcgZnJvbSBcIi4uL3Byb2plY3RzL2ZhY2VfY28uc3ZnXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9hYm91dC5jc3NcIjtcblxuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEJpQ29mZmVlVG9nbyB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZSB9XTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiU2hhZlNwZWNzIC0gQWJvdXQgTWVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiTGVhcm4gbW9yZSBhYm91dCBBYmR1ci1SYWhtYW4gRmFzaG9sYSBha2EgU2hhZlNwZWNzLCBhbmQgbGV0J3MgY29ubmVjdCFcIixcbiAgICBcInR3aXR0ZXI6ZGVzY3JpcHRpb25cIjpcbiAgICAgIFwiTGVhcm4gbW9yZSBhYm91dCBBYmR1ci1SYWhtYW4gRmFzaG9sYSBha2EgU2hhZlNwZWNzLCBhbmQgbGV0J3MgY29ubmVjdCFcIixcbiAgICBcIm9nOmRlc2NyaXB0aW9uXCI6XG4gICAgICBcIkxlYXJuIG1vcmUgYWJvdXQgQWJkdXItUmFobWFuIEZhc2hvbGEgYWthIFNoYWZTcGVjcywgYW5kIGxldCdzIGNvbm5lY3QhXCIsXG4gICAga2V5d29yZHM6XG4gICAgICBcIlNoYWZTcGVjcywgQWJkdXItUmFobWFuLCBGYXNob2xhLCBTaGFmLCBEaWdpdGFsIEdhcmRlbiwgQWJvdXQgTWUsIEFib3V0LCBBYm91dCBTaGFmXCIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidS1saXN0XCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU2hhZlNwZWNzXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctbGluayBmZWF0aGVyLWdpdGh1YlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGl0bGU+R2l0SHViPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkgMTljLTUgMS41LTUtMi41LTctM20xNCA2di0zLjg3YTMuMzcgMy4zNyAwIDAgMC0uOTQtMi42MWMzLjE0LS4zNSA2LjQ0LTEuNTQgNi40NC03QTUuNDQgNS40NCAwIDAgMCAyMCA0Ljc3IDUuMDcgNS4wNyAwIDAgMCAxOS45MSAxUzE4LjczLjY1IDE2IDIuNDhhMTMuMzggMTMuMzggMCAwIDAtNyAwQzYuMjcuNjUgNS4wOSAxIDUuMDkgMUE1LjA3IDUuMDcgMCAwIDAgNSA0Ljc3YTUuNDQgNS40NCAwIDAgMC0xLjUgMy43OGMwIDUuNDIgMy4zIDYuNjEgNi40NCA3QTMuMzcgMy4zNyAwIDAgMCA5IDE4LjEzVjIyXCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9TaGFmU3BlY3NcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhLWxpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1saW5rIGZlYXRoZXItdHdpdHRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGl0bGU+VHdpdHRlcjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMyAzYTEwLjkgMTAuOSAwIDAgMS0zLjE0IDEuNTMgNC40OCA0LjQ4IDAgMCAwLTcuODYgM3YxQTEwLjY2IDEwLjY2IDAgMCAxIDMgNHMtNCA5IDUgMTNhMTEuNjQgMTEuNjQgMCAwIDEtNyAyYzkgNSAyMCAwIDIwLTExLjVhNC41IDQuNSAwIDAgMC0uMDgtLjgzQTcuNzIgNy43MiAwIDAgMCAyMyAzelwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdGhlclwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZGV2LnRvL3NoYWZzcGVjc1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImEtbGlua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAzMiA0NDcuOTk5OTk5OTk5OTk5OTQgNDQ4XCJcbiAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjI1MDBcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjIzMjFcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXRoZXItZ2l0aHViXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5ERVYudG88L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIwLjEyIDIwOC4yOWMtMy44OC0yLjktNy43Ny00LjM1LTExLjY1LTQuMzVIOTEuMDN2MTA0LjQ3aDE3LjQ1YzMuODggMCA3Ljc3LTEuNDUgMTEuNjUtNC4zNXM1LjgyLTcuMjUgNS44Mi0xMy4wNnYtNjkuNjVjLS4wMS01LjgtMS45Ni0xMC4xNi01LjgzLTEzLjA2ek00MDQuMSAzMkg0My45QzE5LjcgMzIgLjA2IDUxLjU5IDAgNzUuOHYzNjAuNEMuMDYgNDYwLjQxIDE5LjcgNDgwIDQzLjkgNDgwaDM2MC4yYzI0LjIxIDAgNDMuODQtMTkuNTkgNDMuOS00My44Vjc1LjhjLS4wNi0yNC4yMS0xOS43LTQzLjgtNDMuOS00My44ek0xNTQuMiAyOTEuMTljMCAxOC44MS0xMS42MSA0Ny4zMS00OC4zNiA0Ny4yNWgtNDYuNFYxNzIuOThoNDcuMzhjMzUuNDQgMCA0Ny4zNiAyOC40NiA0Ny4zNyA0Ny4yOHptMTAwLjY4LTg4LjY2SDIwMS42djM4LjQyaDMyLjU3djI5LjU3SDIwMS42djM4LjQxaDUzLjI5djI5LjU3aC02Mi4xOGMtMTEuMTYuMjktMjAuNDQtOC41My0yMC43Mi0xOS42OVYxOTMuN2MtLjI3LTExLjE1IDguNTYtMjAuNDEgMTkuNzEtMjAuNjloNjMuMTl6bTEwMy42NCAxMTUuMjljLTEzLjIgMzAuNzUtMzYuODUgMjQuNjMtNDcuNDQgMGwtMzguNTMtMTQ0LjhoMzIuNTdsMjkuNzEgMTEzLjcyIDI5LjU3LTExMy43MmgzMi41OHpcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL1NoYWZTcGVjc1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImEtbGlua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGYUNvZGVwZW4gY2xhc3NOYW1lPVwiZmVhdGhlci1jb2RlcGVuXCIgdGl0bGU9XCJDb2RlUGVuXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWZTcGVjc1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImEtbGlua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCaUNvZmZlZVRvZ28gdGl0bGU9XCJCdXkgTWUgQSBDb2ZmZWVcIiBjbGFzc05hbWU9XCJmZWF0aGVyLWJtYWNcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9uZy5saW5rZWRpbi5jb20vaW4vYWJkdXItcmFobWFuLWZhc2hvbGEtMTQ2MTJhMjE1XCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctbGluayBmZWF0aGVyLWxpbmtlZGluXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5MaW5rZWRJbjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNiA4YTYgNiAwIDAgMSA2IDZ2N2gtNHYtN2EyIDIgMCAwIDAtMi0yIDIgMiAwIDAgMC0yIDJ2N2gtNHYtN2E2IDYgMCAwIDEgNi02elwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMlwiIHk9XCI5XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiMTJcIj48L3JlY3Q+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjRcIiBjeT1cIjRcIiByPVwiMlwiPjwvY2lyY2xlPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmlsbEhlaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXRpdGxlXCI+QWJvdXQgTWU8L2Rpdj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEhlbGxvIFx1RDgzRFx1REM0QiEgTXkgbmFtZSBpcyBBYmR1ci1SYWhtYW4gRmFzaG9sYSwga25vd24gdG8gbWFueSBhc1xuICAgICAgICAgICAgICBTaGFmc3BlY3Mgb3Igc2ltcGx5IFNoYWYuIEknbSBhIDE2IHllYXIgb2xkIGhpZ2ggc2Nob29sIGdyYWR1YXRlXG4gICAgICAgICAgICAgIGFuZCBJIGFtIHBhc3Npb25hdGUgYWJvdXQgY3JlYXRpbmcgdGhpbmdzIHRoYXQgbGl2ZSBvbiB0aGUgd2ViLiBJXG4gICAgICAgICAgICAgIHN0YXJ0ZWQgbXkgam91cm5leSBhcyBhIGRldmVsb3BlciBieSBhdHRlbmRpbmcgYSBXb3JkUHJlc3MgY2FtcCBpblxuICAgICAgICAgICAgICB0aGUgc3VtbWVyIG9mIDIwMTksIGFuZCBpbiB0aGUgc3VtbWVyIG9mIDIwMjAsIEkgZGVjaWRlZCB0byBwbGF5XG4gICAgICAgICAgICAgIGFyb3VuZCB3aXRoIEhUTUwgJiBDU1MuIFR1cm5zIG91dCwgSSBoYWQgZm91bmQgYSBsaWZlLWxvbmcgcGFzc2lvblxuICAgICAgICAgICAgICBmb3Igd2ViIGRldmVsb3BtZW50IGFuZCBJIGRlY2lkZWQgdG8gcHVyc3VlIGl0LlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLWJyZWFrXCI+XG4gICAgICAgICAgICAgICAgTXkgbWFpbiBmb2N1cyB0aGlzIGRheXMgYXJlIHRyeWluZyB0byBpbXByb3ZlIG15IHNraWxscyBpblxuICAgICAgICAgICAgICAgIEZ1bGwtU3RhY2sgV2ViIERldmVsb3BtZW50IGFuZCBVbml0eSBHYW1lIERldmVsb3BtZW50IGFuZCBhbHNvXG4gICAgICAgICAgICAgICAgaGVscGluZyB0byBidWlsZCBhIGJldHRlciB0b21vcnJvdyBieSBjb250cmlidXRpbmcgdG93YXJkc1xuICAgICAgICAgICAgICAgIG9wZW4tc291cmNlZCBkZXZlbG9wbWVudC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLWJyZWFrXCI+XG4gICAgICAgICAgICAgICAgSGVyZSBhcmUgYSBmZXcgdGVjaG5vbG9naWVzIEkgaGF2ZSBiZWVuIHdvcmtpbmcgd2l0aCByZWNlbnRseTpcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2tpbGwtbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaT5SZW1peDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlR5cGVTY3JpcHQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5KYXZhU2NyaXB0IChFUzYrKTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPk5leHQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5SZWFjdDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkMjL1VuaXR5PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+U1FMPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+V29yZFByZXNzPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Tm9kZS5qczwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0cmFpdFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e3N2Z30gY2xhc3NOYW1lPVwiaW1nXCIgYWx0PVwiUG9ydHJhaXRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtdGl0bGVcIj5cbiAgICAgICAgICAgIDx1PkxldCdzIFRhbGsgXHVEODNDXHVERjk5PC91PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgICAgV2FudCB0byByZWFjaCBvdXQ/IEZlZWwgZnJlZSB0byBjb250YWN0IG1lIHZpYSBvbmUgb2YgbXkgYXZpYWxhYmxlXG4gICAgICAgICAgICBtZWRpYSBvdXRsZXRzOlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtYnRuXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmFiYmFkc2hhZjA1QGdtYWlsLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIHNoYXBlLXJlbmRlcmluZz1cImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgICAgICAgICAgICAgICB0ZXh0LXJlbmRlcmluZz1cImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgICAgICAgICAgICAgICBpbWFnZS1yZW5kZXJpbmc9XCJvcHRpbWl6ZVF1YWxpdHlcIlxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmZWF0aGVyLW1haWxcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjcuMDg2IDcuMDg3IDEyNzcuMTQ5IDkyNC4wMDhcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMTM4LjczNCA5MzEuMDk1aC4yODNNMTEzOS4wMTcgOTMxLjA5NWgtLjI4M1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMTc5LjQzOSA3LjA4N2M1Ny41NDMgMCAxMDQuNjI3IDQ3LjA4MyAxMDQuNjI3IDEwNC42MjZ2MzAuMzMxbC0xNDUuMzYgMTAzLjgzMy00OTQuODczIDM0MC44OTRMMTQ4Ljk2IDI0Mi40MTl2Njg4LjY3NmgtMzcuMjQ3Yy01Ny41NDMgMC0xMDQuNjI3LTQ3LjA4Mi0xMDQuNjI3LTEwNC42MjVWMTExLjc0MkM3LjA4NiA1NC4xOTggNTQuMTcgNy4xMTUgMTExLjcxMyA3LjExNWw1MzIuMTIgMzk0LjUyNUwxMTc5LjQxIDcuMTE1bC4wMjktLjAyOHpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2U3NWE0ZFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYVwiXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgICAgIHgxPVwiMTk1OS43MTJcIlxuICAgICAgICAgICAgICAgICAgICB5MT1cIjczNy4xMDdcIlxuICAgICAgICAgICAgICAgICAgICB4Mj1cIjI2MDY2LjIxM1wiXG4gICAgICAgICAgICAgICAgICAgIHkyPVwiNzM3LjEwN1wiXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KC4wMjgzIDAgMCAtLjAyODMgMjQ4LjM2IDIyNS4yNDQpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNmOGY2ZWZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI2U3ZTRkNlwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cInVybCgjYSlcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTExMS43MTMgNy4wODdsNTMyLjEyIDM5NC41MjVMMTE3OS40MzkgNy4wODd6XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2U3ZTRkN1wiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTQ4Ljk2IDI0Mi40MTl2Njg4LjY3Nmg5ODkuNzc0VjI0NS44NzdMNjQzLjgzMyA1ODYuNzcxelwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNiOGI3YWVcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTE0OC45NiA5MzEuMDk1bDQ5NC44NzMtMzQ0LjMyNC0yLjI0LTEuNTg2TDE0OC45NiA5MjMuNTI3elwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNiN2I2YWRcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTExMzguNzM0IDI0NS44NzdsLjI4MyA2ODUuMjE4LTQ5NS4xODQtMzQ0LjMyNHpcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTI4NC4wNjYgMTQyLjA0NGwuMTcgNjg0LjUxYy0yLjQ5NCA3Ni4wODItMzUuNDYxIDEwMy4yMzgtMTQ1LjIxOSAxMDQuNTE0bC0uMjgzLTY4NS4yMTkgMTQ1LjM2LTEwMy44MzMtLjAyOC4wMjh6XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNiMjM5MmZcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImJcIlxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICB4MT1cIjE5NTkuNzEyXCJcbiAgICAgICAgICAgICAgICAgICAgeTE9XCI3MzcuMTA3XCJcbiAgICAgICAgICAgICAgICAgICAgeDI9XCIyNjA2Ni4yMTNcIlxuICAgICAgICAgICAgICAgICAgICB5Mj1cIjczNy4xMDdcIlxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFRyYW5zZm9ybT1cIm1hdHJpeCguMDI4MyAwIDAgLS4wMjgzIDI0OC4zNiAyMjUuMjQ0KVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZjhmNmVmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNlN2U0ZDZcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2IpXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMTEuNzEzIDcuMDg3bDUzMi4xMiAzOTQuNTI1TDExNzkuNDM5IDcuMDg3elwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY1wiXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgICAgIHgxPVwiMTk1OS43MTJcIlxuICAgICAgICAgICAgICAgICAgICB5MT1cIjczNy4xMDdcIlxuICAgICAgICAgICAgICAgICAgICB4Mj1cIjI2MDY2LjIxM1wiXG4gICAgICAgICAgICAgICAgICAgIHkyPVwiNzM3LjEwN1wiXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KC4wMjgzIDAgMCAtLjAyODMgMjQ4LjM2IDIyNS4yNDQpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNmOGY2ZWZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI2U3ZTRkNlwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cInVybCgjYylcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTExMS43MTMgNy4wODdsNTMyLjEyIDM5NC41MjVMMTE3OS40MzkgNy4wODd6XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkXCJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9XCIxOTU5LjcxMlwiXG4gICAgICAgICAgICAgICAgICAgIHkxPVwiNzM3LjEwN1wiXG4gICAgICAgICAgICAgICAgICAgIHgyPVwiMjYwNjYuMjEzXCJcbiAgICAgICAgICAgICAgICAgICAgeTI9XCI3MzcuMTA3XCJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoLjAyODMgMCAwIC0uMDI4MyAyNDguMzYgMjI1LjI0NClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2Y4ZjZlZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjZTdlNGQ2XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNkKVwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTExLjcxMyA3LjA4N2w1MzIuMTIgMzk0LjUyNUwxMTc5LjQzOSA3LjA4N3pcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImVcIlxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICB4MT1cIjE5NTkuNzEyXCJcbiAgICAgICAgICAgICAgICAgICAgeTE9XCI3MzcuMTA3XCJcbiAgICAgICAgICAgICAgICAgICAgeDI9XCIyNjA2Ni4yMTNcIlxuICAgICAgICAgICAgICAgICAgICB5Mj1cIjczNy4xMDdcIlxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFRyYW5zZm9ybT1cIm1hdHJpeCguMDI4MyAwIDAgLS4wMjgzIDI0OC4zNiAyMjUuMjQ0KVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZjhmNmVmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNlN2U0ZDZcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2UpXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMTEuNzEzIDcuMDg3bDUzMi4xMiAzOTQuNTI1TDExNzkuNDM5IDcuMDg3elwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZlwiXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgICAgIHgxPVwiMTk1OS43MTJcIlxuICAgICAgICAgICAgICAgICAgICB5MT1cIjczNy4xMDdcIlxuICAgICAgICAgICAgICAgICAgICB4Mj1cIjI2MDY2LjIxM1wiXG4gICAgICAgICAgICAgICAgICAgIHkyPVwiNzM3LjEwN1wiXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KC4wMjgzIDAgMCAtLjAyODMgMjQ4LjM2IDIyNS4yNDQpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNmOGY2ZWZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI2U3ZTRkNlwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cInVybCgjZilcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTExMS43MTMgNy4wODdsNTMyLjEyIDM5NC41MjVMMTE3OS40MzkgNy4wODd6XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJnXCJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9XCIxOTU5LjcxMlwiXG4gICAgICAgICAgICAgICAgICAgIHkxPVwiNzM3LjEwN1wiXG4gICAgICAgICAgICAgICAgICAgIHgyPVwiMjYwNjYuMjEzXCJcbiAgICAgICAgICAgICAgICAgICAgeTI9XCI3MzcuMTA3XCJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoLjAyODMgMCAwIC0uMDI4MyAyNDguMzYgMjI1LjI0NClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2Y4ZjZlZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjZTdlNGQ2XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNnKVwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTExLjcxMyA3LjA4N2w1MzIuMTIgMzk0LjUyNUwxMTc5LjQzOSA3LjA4N3pcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImhcIlxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICB4MT1cIjE5NTkuNzEyXCJcbiAgICAgICAgICAgICAgICAgICAgeTE9XCI3MzcuMTA3XCJcbiAgICAgICAgICAgICAgICAgICAgeDI9XCIyNjA2Ni4yMTNcIlxuICAgICAgICAgICAgICAgICAgICB5Mj1cIjczNy4xMDdcIlxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudFRyYW5zZm9ybT1cIm1hdHJpeCguMDI4MyAwIDAgLS4wMjgzIDI0OC4zNiAyMjUuMjQ0KVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZjhmNmVmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNlN2U0ZDZcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2gpXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMTEuNzEzIDcuMDg3bDUzMi4xMiAzOTQuNTI1TDExNzkuNDM5IDcuMDg3elwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmN2Y1ZWRcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTExMS43MTMgNy4wODdsNTMyLjEyIDM5NC41MjVMMTE3OS40MzkgNy4wODd6XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgJm5ic3A7Q29ubmVjdCB2aWEgR21haWxcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9zaGFmc3BlY3NcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzAwOGRiOFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmZWF0aGVyLW1haWxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx0aXRsZT5Ud2l0dGVyPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjMgM2ExMC45IDEwLjkgMCAwIDEtMy4xNCAxLjUzIDQuNDggNC40OCAwIDAgMC03Ljg2IDN2MUExMC42NiAxMC42NiAwIDAgMSAzIDRzLTQgOSA1IDEzYTExLjY0IDExLjY0IDAgMCAxLTcgMmM5IDUgMjAgMCAyMC0xMS41YTQuNSA0LjUgMCAwIDAtLjA4LS44M0E3LjcyIDcuNzIgMCAwIDAgMjMgM3pcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgJm5ic3A7IENvbm5lY3QgdmlhIFR3aXR0ZXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgey8qIEZvb3RlciBmb3IgTW9iaWxlICovfVxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLWRpdlwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1vYmlsZS11bFwiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdGhlclwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWZTcGVjc1wiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1saW5rIGZlYXRoZXItZ2l0aHViXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkdpdEh1YjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOSAxOWMtNSAxLjUtNS0yLjUtNy0zbTE0IDZ2LTMuODdhMy4zNyAzLjM3IDAgMCAwLS45NC0yLjYxYzMuMTQtLjM1IDYuNDQtMS41NCA2LjQ0LTdBNS40NCA1LjQ0IDAgMCAwIDIwIDQuNzcgNS4wNyA1LjA3IDAgMCAwIDE5LjkxIDFTMTguNzMuNjUgMTYgMi40OGExMy4zOCAxMy4zOCAwIDAgMC03IDBDNi4yNy42NSA1LjA5IDEgNS4wOSAxQTUuMDcgNS4wNyAwIDAgMCA1IDQuNzdhNS40NCA1LjQ0IDAgMCAwLTEuNSAzLjc4YzAgNS40MiAzLjMgNi42MSA2LjQ0IDdBMy4zNyAzLjM3IDAgMCAwIDkgMTguMTNWMjJcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1NoYWZTcGVjc1wiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1saW5rIGZlYXRoZXItdHdpdHRlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5Ud2l0dGVyPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMyAzYTEwLjkgMTAuOSAwIDAgMS0zLjE0IDEuNTMgNC40OCA0LjQ4IDAgMCAwLTcuODYgM3YxQTEwLjY2IDEwLjY2IDAgMCAxIDMgNHMtNCA5IDUgMTNhMTEuNjQgMTEuNjQgMCAwIDEtNyAyYzkgNSAyMCAwIDIwLTExLjVhNC41IDQuNSAwIDAgMC0uMDgtLjgzQTcuNzIgNy43MiAwIDAgMCAyMyAzelwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZGV2LnRvL3NoYWZzcGVjc1wiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAzMiA0NDcuOTk5OTk5OTk5OTk5OTQgNDQ4XCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjUwMFwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIzMjFcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXYgZmVhdGhlci1naXRodWJcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRFVi50bzwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIwLjEyIDIwOC4yOWMtMy44OC0yLjktNy43Ny00LjM1LTExLjY1LTQuMzVIOTEuMDN2MTA0LjQ3aDE3LjQ1YzMuODggMCA3Ljc3LTEuNDUgMTEuNjUtNC4zNXM1LjgyLTcuMjUgNS44Mi0xMy4wNnYtNjkuNjVjLS4wMS01LjgtMS45Ni0xMC4xNi01LjgzLTEzLjA2ek00MDQuMSAzMkg0My45QzE5LjcgMzIgLjA2IDUxLjU5IDAgNzUuOHYzNjAuNEMuMDYgNDYwLjQxIDE5LjcgNDgwIDQzLjkgNDgwaDM2MC4yYzI0LjIxIDAgNDMuODQtMTkuNTkgNDMuOS00My44Vjc1LjhjLS4wNi0yNC4yMS0xOS43LTQzLjgtNDMuOS00My44ek0xNTQuMiAyOTEuMTljMCAxOC44MS0xMS42MSA0Ny4zMS00OC4zNiA0Ny4yNWgtNDYuNFYxNzIuOThoNDcuMzhjMzUuNDQgMCA0Ny4zNiAyOC40NiA0Ny4zNyA0Ny4yOHptMTAwLjY4LTg4LjY2SDIwMS42djM4LjQyaDMyLjU3djI5LjU3SDIwMS42djM4LjQxaDUzLjI5djI5LjU3aC02Mi4xOGMtMTEuMTYuMjktMjAuNDQtOC41My0yMC43Mi0xOS42OVYxOTMuN2MtLjI3LTExLjE1IDguNTYtMjAuNDEgMTkuNzEtMjAuNjloNjMuMTl6bTEwMy42NCAxMTUuMjljLTEzLjIgMzAuNzUtMzYuODUgMjQuNjMtNDcuNDQgMGwtMzguNTMtMTQ0LjhoMzIuNTdsMjkuNzEgMTEzLjcyIDI5LjU3LTExMy43MmgzMi41OHpcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdGhlclwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL1NoYWZTcGVjc1wiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RmFDb2RlcGVuIGNsYXNzTmFtZT1cImZlYXRoZXItZ2l0aHViXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBGYUNvZGVwZW4gfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEJpQ29mZmVlVG9nbyB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaG9tZXBhZ2UuY3NzXCI7XG5cbmltcG9ydCBOaWdodHkgZnJvbSBcIi4uL3Byb2plY3RzL05pZ2h0eU5pZ2h0LnBuZ1wiO1xuaW1wb3J0IENvZGVQbGF5IGZyb20gXCIuLi9wcm9qZWN0cy9Db2RlUGxheV9CYW5uZXJfQUxQSEEucG5nXCI7XG5pbXBvcnQgVHJhY2tlciBmcm9tIFwiLi4vcHJvamVjdHMvdHJhY2tlci5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH0sXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiLFxuICAgIH0sXG4gIF07XG59XG5cbmZ1bmN0aW9uIFByb2plY3RDYXJkKHsgdGl0bGUsIGRlc2MsIGdpdCwgbGluaywgcGljLCBzdmcgfTogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwLWNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcC1jYXJkLWlubmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcC1jYXJkLWZyb250XCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3R5bGU9e3N2ZyA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiM3ZTdlN2VcIiB9IDoge319XG4gICAgICAgICAgICBzcmM9e3BpY31cbiAgICAgICAgICAgIGFsdD1cIlByb2plY3RcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXAtY2FyZC1iYWNrXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgPHA+e2Rlc2N9PC9wPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAgICA8YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMS41cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxLjVyZW1cIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEwIDZINmEyIDIgMCAwMC0yIDJ2MTBhMiAyIDAgMDAyIDJoMTBhMiAyIDAgMDAyLTJ2LTRNMTQgNGg2bTAgMHY2bTAtNkwxMCAxNFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIHtcIiAgXCJ9VmlldyBEZW1vXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj17Z2l0fSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxLjMyNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMS4zMjVyZW1cIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRpdGxlPkdpdEh1YjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkgMTljLTUgMS41LTUtMi41LTctM20xNCA2di0zLjg3YTMuMzcgMy4zNyAwIDAgMC0uOTQtMi42MWMzLjE0LS4zNSA2LjQ0LTEuNTQgNi40NC03QTUuNDQgNS40NCAwIDAgMCAyMCA0Ljc3IDUuMDcgNS4wNyAwIDAgMCAxOS45MSAxUzE4LjczLjY1IDE2IDIuNDhhMTMuMzggMTMuMzggMCAwIDAtNyAwQzYuMjcuNjUgNS4wOSAxIDUuMDkgMUE1LjA3IDUuMDcgMCAwIDAgNSA0Ljc3YTUuNDQgNS40NCAwIDAgMC0xLjUgMy43OGMwIDUuNDIgMy4zIDYuNjEgNi40NCA3QTMuMzcgMy4zNyAwIDAgMCA5IDE4LjEzVjIyXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIHtcIiAgXCJ9R2l0aHViXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkaXZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInUtbGlzdFwiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWZTcGVjc1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImEtbGlua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLWxpbmsgZmVhdGhlci1naXRodWJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkdpdEh1YjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk05IDE5Yy01IDEuNS01LTIuNS03LTNtMTQgNnYtMy44N2EzLjM3IDMuMzcgMCAwIDAtLjk0LTIuNjFjMy4xNC0uMzUgNi40NC0xLjU0IDYuNDQtN0E1LjQ0IDUuNDQgMCAwIDAgMjAgNC43NyA1LjA3IDUuMDcgMCAwIDAgMTkuOTEgMVMxOC43My42NSAxNiAyLjQ4YTEzLjM4IDEzLjM4IDAgMCAwLTcgMEM2LjI3LjY1IDUuMDkgMSA1LjA5IDFBNS4wNyA1LjA3IDAgMCAwIDUgNC43N2E1LjQ0IDUuNDQgMCAwIDAtMS41IDMuNzhjMCA1LjQyIDMuMyA2LjYxIDYuNDQgN0EzLjM3IDMuMzcgMCAwIDAgOSAxOC4xM1YyMlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdGhlclwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vU2hhZlNwZWNzXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctbGluayBmZWF0aGVyLXR3aXR0ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlR3aXR0ZXI8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjMgM2ExMC45IDEwLjkgMCAwIDEtMy4xNCAxLjUzIDQuNDggNC40OCAwIDAgMC03Ljg2IDN2MUExMC42NiAxMC42NiAwIDAgMSAzIDRzLTQgOSA1IDEzYTExLjY0IDExLjY0IDAgMCAxLTcgMmM5IDUgMjAgMCAyMC0xMS41YTQuNSA0LjUgMCAwIDAtLjA4LS44M0E3LjcyIDcuNzIgMCAwIDAgMjMgM3pcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Rldi50by9zaGFmc3BlY3NcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhLWxpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMzIgNDQ3Ljk5OTk5OTk5OTk5OTk0IDQ0OFwiXG4gICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyNTAwXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMzIxXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXYgZmVhdGhlci1naXRodWJcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkRFVi50bzwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMjAuMTIgMjA4LjI5Yy0zLjg4LTIuOS03Ljc3LTQuMzUtMTEuNjUtNC4zNUg5MS4wM3YxMDQuNDdoMTcuNDVjMy44OCAwIDcuNzctMS40NSAxMS42NS00LjM1czUuODItNy4yNSA1LjgyLTEzLjA2di02OS42NWMtLjAxLTUuOC0xLjk2LTEwLjE2LTUuODMtMTMuMDZ6TTQwNC4xIDMySDQzLjlDMTkuNyAzMiAuMDYgNTEuNTkgMCA3NS44djM2MC40Qy4wNiA0NjAuNDEgMTkuNyA0ODAgNDMuOSA0ODBoMzYwLjJjMjQuMjEgMCA0My44NC0xOS41OSA0My45LTQzLjhWNzUuOGMtLjA2LTI0LjIxLTE5LjctNDMuOC00My45LTQzLjh6TTE1NC4yIDI5MS4xOWMwIDE4LjgxLTExLjYxIDQ3LjMxLTQ4LjM2IDQ3LjI1aC00Ni40VjE3Mi45OGg0Ny4zOGMzNS40NCAwIDQ3LjM2IDI4LjQ2IDQ3LjM3IDQ3LjI4em0xMDAuNjgtODguNjZIMjAxLjZ2MzguNDJoMzIuNTd2MjkuNTdIMjAxLjZ2MzguNDFoNTMuMjl2MjkuNTdoLTYyLjE4Yy0xMS4xNi4yOS0yMC40NC04LjUzLTIwLjcyLTE5LjY5VjE5My43Yy0uMjctMTEuMTUgOC41Ni0yMC40MSAxOS43MS0yMC42OWg2My4xOXptMTAzLjY0IDExNS4yOWMtMTMuMiAzMC43NS0zNi44NSAyNC42My00Ny40NCAwbC0zOC41My0xNDQuOGgzMi41N2wyOS43MSAxMTMuNzIgMjkuNTctMTEzLjcyaDMyLjU4elwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vU2hhZlNwZWNzXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhQ29kZXBlbiBjbGFzc05hbWU9XCJmZWF0aGVyLWNvZGVwZW5cIiB0aXRsZT1cIkNvZGVQZW5cIi8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdGhlclwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFmU3BlY3NcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhLWxpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QmlDb2ZmZWVUb2dvIHRpdGxlPVwiQnV5IE1lIEEgQ29mZmVlXCIgY2xhc3NOYW1lPVwiZmVhdGhlci1ibWFjXCIvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9uZy5saW5rZWRpbi5jb20vaW4vYWJkdXItcmFobWFuLWZhc2hvbGEtMTQ2MTJhMjE1XCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYS1saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctbGluayBmZWF0aGVyLWxpbmtlZGluXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5MaW5rZWRJbjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNiA4YTYgNiAwIDAgMSA2IDZ2N2gtNHYtN2EyIDIgMCAwIDAtMi0yIDIgMiAwIDAgMC0yIDJ2N2gtNHYtN2E2IDYgMCAwIDEgNi02elwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMlwiIHk9XCI5XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiMTJcIj48L3JlY3Q+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjRcIiBjeT1cIjRcIiByPVwiMlwiPjwvY2lyY2xlPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmlsbEhlaWdodFwiPlxuICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBoZWlnaHQ6IFwibWF4LWNvbnRlbnRcIiwgZGlzcGxheTogXCJibG9ja1wiIH19PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyZWV0aW5nc1wiPkhlbGxvIHRoZXJlIFx1RDgzRFx1REM0QiwgbXkgbmFtZSBpczwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+QWJkdXItUmFobWFuIEZhc2hvbGEuPC9zcGFuPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNwaW5cIj48L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIEknbSBhIEZ1bGwtU3RhY2sgRGV2ZWxvcGVyIHNwZWNpYWxpemluZyBpbiBidWlsZGluZyBhbmQgZGVzaWduaW5nXG4gICAgICAgICAgICBxdWFsaXR5IHNvZnR3YXJlcyBhbmQgZXhjZXB0aW9uYWwgdXNlciBleHBlcmllbmNlcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvamVjdFwiPlxuICAgICAgICAgIDxoMz5NeSBXb3JrPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzXCI+XG4gICAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAgcGljPXtOaWdodHl9XG4gICAgICAgICAgICAgIHN2Zz17ZmFsc2V9XG4gICAgICAgICAgICAgIHRpdGxlPVwiTmlnaHR5IE5pZ2h0IFx1RDgzQ1x1REYxOVwiXG4gICAgICAgICAgICAgIGRlc2M9XCJBIG1pbmltYWwsIGRhcmsgYmx1aXNoLWJsYWNrIHRoZW1lIGZvciBWUyBDb2RlLCB3aXRoIGNhbG1pbmcgY29sb3JzIGFuZCBoaWdoIGNvbnRyYXN0LCBpdCBpcyBhIFx1RDgzRFx1REM0RC4gQXZhaWxhYmxlIG9uIFZpc3VhbCBTdHVkaW8gTWFya2V0cGxhY2UuXCJcbiAgICAgICAgICAgICAgZ2l0PVwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWZTcGVjcy9OaWdodHktTmlnaHQtVGhlbWVcIlxuICAgICAgICAgICAgICBsaW5rPVwiaHR0cHM6Ly9tYXJrZXRwbGFjZS52aXN1YWxzdHVkaW8uY29tL2l0ZW1zP2l0ZW1OYW1lPVNoYWZTcGVjcy5uaWdodHktbmlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgICBwaWM9e0NvZGVQbGF5fVxuICAgICAgICAgICAgICBzdmc9e2ZhbHNlfVxuICAgICAgICAgICAgICB0aXRsZT1cIlx1RDgzRFx1REM2OFx1MjAwRFx1RDgzRFx1RENCQiBDb2RlUGxheVwiXG4gICAgICAgICAgICAgIGRlc2M9XCJBIHNpbXBsZSwgeWV0IHBvd2VyZnVsLCBjb2RlIHBsYXlncm91bmQgZm9yIGxlYXJuaW5nIGFuZCBwcmFjdGljaW5nIGJhc2ljIFdlYiBEZXZlbG9wbWVudCBsYW5ndWFnZXMuXCJcbiAgICAgICAgICAgICAgZ2l0PVwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWZTcGVjcy9Db2RlUGxheS1FZGl0b3JcIlxuICAgICAgICAgICAgICBsaW5rPVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAgcGljPXtUcmFja2VyfVxuICAgICAgICAgICAgICBzdmc9e3RydWV9XG4gICAgICAgICAgICAgIHRpdGxlPVwiXHVEODNDXHVERkMzXHUyMDBEXHUyNjQyXHVGRTBGIFRhc2sgVHJhY2tlclwiXG4gICAgICAgICAgICAgIGRlc2M9XCJBIHNpbXBsZSB0YXNrIHRyYWNrZXIgZm9yIG1hbmFnaW5nIHlvdXIgZGFpbHkgdGFza3MuIEl0IGlzIGEgXHVEODNEXHVEQzRELlwiXG4gICAgICAgICAgICAgIGdpdD1cImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFmU3BlY3MvVGFzay1UcmFja2VyX1JlbWl4XCJcbiAgICAgICAgICAgICAgbGluaz1cImh0dHBzOi8vdGFzay10cmFja2VyLXJlbWl4LnZlcmNlbC5hcHAvXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5leHQtd29ya1wiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9wb3J0Zm9saW9cIj5cbiAgICAgICAgICAgICAgICA8cD5DaGVjayBvdXQgbXkgcG9ydGZvbGlvICYjODU5NDs8L3A+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFib3V0XCI+XG4gICAgICAgICAgPGgzPkFib3V0IE1lPC9oMz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEhlbGxvISBNeSBuYW1lIGlzIEFiZHVyLVJhaG1hbiBhbmQgSSBlbmpveSBjcmVhdGluZyB0aGluZ3MgdGhhdFxuICAgICAgICAgICAgICBsaXZlIG9uIHRoZSBpbnRlcm5ldC4gSSBzdGFydGVkIG15IHByb2dyYW1taW5nIGpvdXJuZXkgYnlcbiAgICAgICAgICAgICAgYXR0ZW5kaW5nIGEgV29yZFByZXNzLWhvc3RlZCBldmVudCBhbmQgYWZ0ZXIgb25lIHRoaW5nIHRoYXQgbGVkIHRvXG4gICAgICAgICAgICAgIHRoZSBvdGhlciwgZXZlbnR1YWxseSBsYW5kZWQgaW4gdGhlIHdvcmxkIG9mIHdlYiBkZXZlbG9wbWVudC4gSVxuICAgICAgICAgICAgICBsb3ZlIGxlYXJuaW5nIG5ldyB0ZWNobm9sb2dpZXMgYW5kIG9mdGVuIGFtYXplZCBieSB0aGUgcHJvZ3Jlc3Mgd2VcbiAgICAgICAgICAgICAgaHVtYW5zIGhhdmUgbWFkZSBzbyBmYXIgaW4gdGhpcyBhbWF6aW5nIGZpZWxkLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5XaG8gaXMgU2hhZlNwZWNzPzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cbiAgICAgICAgICA8aDM+R2V0IGluIFRvdWNoPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdhbm5hIGdldCBpbiB0b3VjaD8gSGF2ZSBhIHF1ZXN0aW9uLCBvciBhbiBvZmZlciwgb3IgeW91IGp1c3QgZmVlbFxuICAgICAgICAgICAgbGlrZSBzYXlpbmcgaGksIHNlbmQgbWUgYW4gZW1haWwgYW5kIGxldCdzIGNvbm5lY3QhIFx1RDgzRFx1REUwNFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmFiYmFkc2hhZjA1QGdtYWlsLmNvbVwiPlxuICAgICAgICAgICAgPGJ1dHRvbj5HZXQgaW4gdG91Y2g8L2J1dHRvbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1kaXZcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtb2JpbGUtdWxcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFmU3BlY3NcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImEtbGlua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctbGluayBmZWF0aGVyLWdpdGh1YlwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5HaXRIdWI8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkgMTljLTUgMS41LTUtMi41LTctM20xNCA2di0zLjg3YTMuMzcgMy4zNyAwIDAgMC0uOTQtMi42MWMzLjE0LS4zNSA2LjQ0LTEuNTQgNi40NC03QTUuNDQgNS40NCAwIDAgMCAyMCA0Ljc3IDUuMDcgNS4wNyAwIDAgMCAxOS45MSAxUzE4LjczLjY1IDE2IDIuNDhhMTMuMzggMTMuMzggMCAwIDAtNyAwQzYuMjcuNjUgNS4wOSAxIDUuMDkgMUE1LjA3IDUuMDcgMCAwIDAgNSA0Ljc3YTUuNDQgNS40NCAwIDAgMC0xLjUgMy43OGMwIDUuNDIgMy4zIDYuNjEgNi40NCA3QTMuMzcgMy4zNyAwIDAgMCA5IDE4LjEzVjIyXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdGhlclwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9TaGFmU3BlY3NcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImEtbGlua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctbGluayBmZWF0aGVyLXR3aXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+VHdpdHRlcjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjMgM2ExMC45IDEwLjkgMCAwIDEtMy4xNCAxLjUzIDQuNDggNC40OCAwIDAgMC03Ljg2IDN2MUExMC42NiAxMC42NiAwIDAgMSAzIDRzLTQgOSA1IDEzYTExLjY0IDExLjY0IDAgMCAxLTcgMmM5IDUgMjAgMCAyMC0xMS41YTQuNSA0LjUgMCAwIDAtLjA4LS44M0E3LjcyIDcuNzIgMCAwIDAgMjMgM3pcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0aGVyXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Rldi50by9zaGFmc3BlY3NcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImEtbGlua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMzIgNDQ3Ljk5OTk5OTk5OTk5OTk0IDQ0OFwiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1MDBcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMzIxXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV2IGZlYXRoZXItZ2l0aHViXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5ERVYudG88L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyMC4xMiAyMDguMjljLTMuODgtMi45LTcuNzctNC4zNS0xMS42NS00LjM1SDkxLjAzdjEwNC40N2gxNy40NWMzLjg4IDAgNy43Ny0xLjQ1IDExLjY1LTQuMzVzNS44Mi03LjI1IDUuODItMTMuMDZ2LTY5LjY1Yy0uMDEtNS44LTEuOTYtMTAuMTYtNS44My0xMy4wNnpNNDA0LjEgMzJINDMuOUMxOS43IDMyIC4wNiA1MS41OSAwIDc1Ljh2MzYwLjRDLjA2IDQ2MC40MSAxOS43IDQ4MCA0My45IDQ4MGgzNjAuMmMyNC4yMSAwIDQzLjg0LTE5LjU5IDQzLjktNDMuOFY3NS44Yy0uMDYtMjQuMjEtMTkuNy00My44LTQzLjktNDMuOHpNMTU0LjIgMjkxLjE5YzAgMTguODEtMTEuNjEgNDcuMzEtNDguMzYgNDcuMjVoLTQ2LjRWMTcyLjk4aDQ3LjM4YzM1LjQ0IDAgNDcuMzYgMjguNDYgNDcuMzcgNDcuMjh6bTEwMC42OC04OC42NkgyMDEuNnYzOC40MmgzMi41N3YyOS41N0gyMDEuNnYzOC40MWg1My4yOXYyOS41N2gtNjIuMThjLTExLjE2LjI5LTIwLjQ0LTguNTMtMjAuNzItMTkuNjlWMTkzLjdjLS4yNy0xMS4xNSA4LjU2LTIwLjQxIDE5LjcxLTIwLjY5aDYzLjE5em0xMDMuNjQgMTE1LjI5Yy0xMy4yIDMwLjc1LTM2Ljg1IDI0LjYzLTQ3LjQ0IDBsLTM4LjUzLTE0NC44aDMyLjU3bDI5LjcxIDExMy43MiAyOS41Ny0xMTMuNzJoMzIuNTh6XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXRoZXJcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby9TaGFmU3BlY3NcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImEtbGlua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEZhQ29kZXBlbiBjbGFzc05hbWU9XCJmZWF0aGVyLWdpdGh1YlwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4gIHJldHVybiA8T3V0bGV0IC8+O1xufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBKU0NvbmZldHRpIGZyb20gJ2pzLWNvbmZldHRpJztcblxuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2Jsb2ctc2x1Zy5jc3NcIjtcbmltcG9ydCBmcmFtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2ZyYW1lLmNzc1wiO1xuaW1wb3J0IGdpdGh1YiBmcm9tIFwiLi4vLi4vc3R5bGVzL2dpdGh1Yi5jc3NcIjtcbmltcG9ydCB7IGdldFNpbmdsZVBvc3QgfSBmcm9tIFwifi91dGlscy9zZXJ2ZXIvZ2l0aHViLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IHN0eWxlLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IGZyYW1lLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IGdpdGh1YixcbiAgICB9LFxuICBdO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICAvL0B0cy1pZ25vcmVcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFNpbmdsZVBvc3QoYCR7cGFyYW1zLnNsdWd9Lm1kYCk7XG5cbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiBkYXRhLmRhdGEsXG4gICAgZGF0YTogZGF0YS5mcm9udG1hdHRlcixcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoeyBkYXRhIH0pID0+IHtcbiAgaWYgKCFkYXRhKSB7fVxuICByZXR1cm4ge1xuICAgIHRpdGxlOiBkYXRhLmRhdGEudGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGRhdGEuZGF0YS5kZXNjcmlwdGlvbixcbiAgICBrZXl3b3JkczogYFJlbWl4LFNoYWZTcGVjcyxTaGFmLEJsb2csUG9ydGZvbGlvLEZhc2hvbGEsQWJkdXItUmFobWFuLCR7ZGF0YS5kYXRhLnRpdGxlfSwke2RhdGEuZGF0YS5kZXNjcmlwdGlvbn1gLFxuICAgIFwidHdpdHRlcjppbWFnZVwiOiBkYXRhLmRhdGEuaW1hZ2UsXG4gICAgXCJvZzppbWFnZVwiOiBkYXRhLmRhdGEuaW1hZ2UsXG4gICAgXCJ0d2l0dGVyOmNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG4gICAgXCJ0d2l0dGVyOmNyZWF0b3JcIjogXCJAU2hhZlNwZWNzXCIsXG4gICAgXCJ0d2l0dGVyOnNpdGVcIjogXCJAU2hhZlNwZWNzXCIsXG4gICAgXCJ0d2l0dGVyOnRpdGxlXCI6IGRhdGEuZGF0YS50aXRsZSxcbiAgICBcIm9nOnRpdGxlXCI6IFwiU2hhZlNwZWNzXCIsXG4gICAgXCJvZzp0eXBlXCI6IFwid2Vic2l0ZVwiLFxuICAgIFwib2c6dXJsXCI6IGBodHRwczovL3NoYWZzcGVjcy5mbHkuZGV2L2Jsb2cvJHtkYXRhLmRhdGEuc2x1Z31gLFxuICAgIFwidHdpdHRlcjpkZXNjcmlwdGlvblwiOiBkYXRhLmRhdGEuZGVzY3JpcHRpb24sXG4gICAgXCJvZzpsb2NhbGVcIjogXCJlbl9VU1wiLFxuICAgIFwib2c6aW1hZ2U6YWx0XCI6IFwiU2hhZlNwZWNzXCIsXG4gICAgXCJvZzppbWFnZTp3aWR0aFwiOiBcIjEyMDBcIixcbiAgICBcIm9nOmltYWdlOmhlaWdodFwiOiBcIjYzMFwiLFxuICAgIFwib2c6aW1hZ2U6dHlwZVwiOiBcImltYWdlL3BuZ1wiLFxuICAgIFwib2c6aW1hZ2U6c2VjdXJlX3VybFwiOiBkYXRhLmRhdGEuaW1hZ2UsXG4gICAgXCJvZzppbWFnZTp1cmxcIjogZGF0YS5kYXRhLmltYWdlLFxuICAgIFwib2c6ZGVzY3JpcHRpb25cIjogZGF0YS5kYXRhLmRlc2NyaXB0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2x1ZygpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcbiAgY29uc3QgYm9keVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCEpO1xuXG4gIGNvbnN0IGJsb2dSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwhKTtcbiAgY29uc3QgYXZnUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsISk7XG4gIGNvbnN0IGRhdGVSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwhKTtcbiAgY29uc3QgY29weVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCEpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QganNDb25mZXR0aSA9IG5ldyBKU0NvbmZldHRpKClcblxuICAgIGlmICh0cmFuc2l0aW9uLnN0YXRlID09IFwiaWRsZVwiKSB7XG4gICAgICBibG9nUmVmLmN1cnJlbnQgJiYgKGJsb2dSZWYuY3VycmVudC5pbm5lckhUTUwgPSBkYXRhLmNvbnRlbnQpO1xuXG4gICAgICBzZXRSZWFkaW5nVGltZSgpO1xuXG4gICAgICAvLyBFc3RpbWF0ZSB0aGUgYXZlcmFnZSByZWFkaW5nIHRpbWUgb2YgdGhlIHBvc3RcblxuICAgICAgZnVuY3Rpb24gc2V0UmVhZGluZ1RpbWUoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IGdldFdvcmRDb3VudCgpO1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgbGV0IHRpbWUgPSBNYXRoLmNlaWwoY291bnQgLyAyNDApO1xuXG4gICAgICAgIGF2Z1JlZi5jdXJyZW50ICYmIChhdmdSZWYuY3VycmVudC5pbm5lclRleHQgPSB0aW1lICsgXCIgbWluIHJlYWRcIik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldFdvcmRDb3VudCgpIHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGlmIChibG9nUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICByZXR1cm4gYmxvZ1JlZi5jdXJyZW50Py5pbm5lclRleHQubWF0Y2goL1xcdysvZykubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hdGNoID0gZGF0YS5kYXRhLmRhdGUubWF0Y2goL1teLV0rL2cpO1xuICAgICAgY29uc3QgZm9ybWF0dGVkID0gZm9ybWF0KFxuICAgICAgICBuZXcgRGF0ZShtYXRjaFswXSwgbWF0Y2hbMV0gLSAxLCBtYXRjaFsyXS5zbGljZSgwLCAyKSksXG4gICAgICAgIFwiTU1NTSBkZCwgeXl5eVwiXG4gICAgICApO1xuXG4gICAgICBkYXRlUmVmLmN1cnJlbnQgJiYgKGRhdGVSZWYuY3VycmVudC5pbm5lclRleHQgPSBmb3JtYXR0ZWQpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuaWQgPT0gXCJjb3B5LWJ0blwiKSB7XG4gICAgICAgICAgaWYobmF2aWdhdG9yLmNsaXBib2FyZCkge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNsaXBib2FyZC10ZXh0XCIpKTtcbiAgICAgICAgICAgIC8vIGpzQ29uZmV0dGkuYWRkQ29uZmV0dGkoKVxuICAgICAgICAgICAgY29weVJlZi5jdXJyZW50ICYmIChjb3B5UmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvcHlSZWYuY3VycmVudCAmJiAoY29weVJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIilcbiAgICAgICAgICAgIH0sIDI1MDApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIsIGZhbHNlLCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNsaXBib2FyZC10ZXh0XCIpKTtcbiAgICAgICAgICAgIC8vIGpzQ29uZmV0dGkuYWRkQ29uZmV0dGkoKVxuICAgICAgICAgICAgY29weVJlZi5jdXJyZW50ICYmIChjb3B5UmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvcHlSZWYuY3VycmVudCAmJiAoY29weVJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIilcbiAgICAgICAgICAgIH0sIDI1MDApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWRpdlwiIHJlZj17Ym9keVJlZn0+XG4gICAgICA8YSBocmVmPVwiL2Jsb2dcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ28tYmFja1wiPlxuICAgICAgICAgIDxzcGFuPiYjODU5Mjs8L3NwYW4+IFJldHVybiBiYWNrIHRvIG92ZXJ2aWV3XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvYT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvcHlcIiByZWY9e2NvcHlSZWZ9PlxuICAgICAgICBDb3BpZWQhXG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZWFkXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2ctbWV0YVwiPlxuICAgICAgICAgIDxoMT57ZGF0YT8uZGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdFwiPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIiByZWY9e2RhdGVSZWZ9Pjwvc3Bhbj4gLXtcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXZnLXRpbWVcIiByZWY9e2F2Z1JlZn0+PC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtkYXRhPy5kYXRhLmltYWdlfSlgLFxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiMTAwJSAxMDAlXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPjwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgY2xhc3NOYW1lPVwibWFya2Rvd24tYm9keVwiXG4gICAgICAgIHJlZj17YmxvZ1JlZn1cbiAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMS4xMjc1cmVtXCIsIHBvaW50ZXJFdmVudHM6IFwiYWxsXCIgfX1cbiAgICAgID48L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhY3Rpb24tY2FsbFwiPlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJuZXdzbGV0dGVyXCI+XG4gICAgICAgICAgPGgzPlNpZ24gVXA8L2gzPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjAuODc1cmVtXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgIFNpZ24gdXAgZm9yIHRoZSBuZXdzbGV0dGVyIHRvIGdldCBhY2Nlc3MgdG8gZXhjbHVzaXZlIHBvc3RzIGFuZFxuICAgICAgICAgICAgZWFybHkgYWNjZXNzIHRvIGFydGljbGVzXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJuZXdzbGV0dGVyXCJcbiAgICAgICAgICAgIGlkPVwibmV3c2xldHRlclwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBTaWduIFVwe1wiIFwifVxuICAgICAgICAgICAgPEZpU2VuZFxuICAgICAgICAgICAgICBjb2xvcj1cIiNmZmZcIlxuICAgICAgICAgICAgICBmb250U2l6ZT17XCIxcmVtXCJ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRvcDogXCIwLjEyNXJlbVwiIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvci1zZXBhcmF0b3JcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVydGljYWwtbGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdj5vcjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC1saW5lXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHIgaGlkZGVuIC8+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJtYWNcIj5cbiAgICAgICAgICA8c3Bhbj5Zb3UgY291bGQgc3VwcG9ydCBtZSBieSBidXlpbmcgYSBkaWdpdGFsIGNvZmZlZSBcdUQ4M0RcdURFMDE8L3NwYW4+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5idXltZWFjb2ZmZWUuY29tL3NoYWZzcGVjc1wiXG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5idXltZWFjb2ZmZWUuY29tL2J1dHRvbnMvdjIvZGVmYXVsdC15ZWxsb3cucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiQnV5IE1lIEEgRGlnaXRhbCBDb2ZmZWVcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiM3JlbVwiLCB3aWR0aDogXCIxMDAlXCIsIG1hcmdpblRvcDogXCIwLjI1cmVtXCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBPY3Rva2l0IH0gZnJvbSBcIkBvY3Rva2l0L2NvcmVcIjtcclxuaW1wb3J0IHsgUmVwbyB9IGZyb20gXCIuLi9oYW5kbGVycy9naXRodWItYXBpXCI7XHJcbmltcG9ydCB7IHRvSFRNTCB9IGZyb20gXCJtYXJrZG93bi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IG1hcmtkb3duSXRFbmdpbmUsIGNvbXBvbmVudHMsIG1kIH0gZnJvbSAnLi9tYXJrZG93bi5zZXJ2ZXInO1xyXG5jb25zdCBncmF5TWF0dGVyID0gcmVxdWlyZShcImdyYXktbWF0dGVyXCIpXHJcblxyXG5jb25zdCBvY3Rva2l0ID0gbmV3IE9jdG9raXQoeyBhdXRoOiBwcm9jZXNzLmVudi5HSVRIVUJfVE9LRU4gfSk7XHJcblxyXG5pbnRlcmZhY2UgUG9zdERhdGEge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgc2hhOiBzdHJpbmc7XHJcbiAgc2l6ZTogbnVtYmVyO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGh0bWxfdXJsOiBzdHJpbmc7XHJcbiAgZ2l0X3VybDogc3RyaW5nO1xyXG4gIGRvd25sb2FkX3VybDogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBfbGlua3M6IHtcclxuICAgIGdpdDogc3RyaW5nO1xyXG4gICAgc2VsZjogc3RyaW5nO1xyXG4gICAgaHRtbDogc3RyaW5nO1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIEdldCBhbGwgcG9zdHMgZnJvbSB0aGUgcmVwb3NpdG9yeVxyXG5hc3luYyBmdW5jdGlvbiBnZXRQb3N0cygpIHtcclxuICBjb25zdCBwb3N0RGlyID0gYXdhaXQgb2N0b2tpdC5yZXF1ZXN0KFxyXG4gICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3twYXRofVwiLFxyXG4gICAge1xyXG4gICAgICAuLi5SZXBvLFxyXG4gICAgICBwYXRoOiBcInBvc3RzXCIsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHBvc3REaXI7XHJcbn1cclxuXHJcbi8qXHJcbiogIEV4dHJhY3QgcmVxdWlyZWQgcG9zdCBkYXRhIGZyb20gdGhlIEdpdEh1YiBBUEkgcmVzcG9uc2VcclxuKlxyXG4qL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBvc3RzRGF0YSgpIHtcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldFBvc3RzKCk7XHJcblxyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIGNvbnN0IHBvc3RzSW5mbyA9IFByb21pc2UuYWxsKHBvc3RzLmRhdGEubWFwKGFzeW5jIChwb3N0OiBQb3N0RGF0YSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCBkb3dubG9hZF91cmwsIHNoYSB9ID0gcG9zdDtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmZXRjaChkb3dubG9hZF91cmwpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGdyYXlNYXR0ZXIoY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIHsgbmFtZSwgZnJvbnRtYXR0ZXI6IGRhdGEgfTtcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiBwb3N0c0luZm87XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaW5nbGVQb3N0KG5hbWU6IHN0cmluZykge1xyXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoXHJcbiAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29udGVudHMve3BhdGh9XCIsXHJcbiAgICB7XHJcbiAgICAgIC4uLlJlcG8sXHJcbiAgICAgIHBhdGg6IGBwb3N0cy8ke25hbWV9YCxcclxuICAgIH1cclxuICApO1xyXG4gIFxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBjb25zdCBkZWNvZGVkID0gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShhdG9iKHBvc3QuZGF0YS5jb250ZW50KSkpO1xyXG4gIFxyXG4gIGNvbnN0IHBhcnNlZCA9IGdyYXlNYXR0ZXIoZGVjb2RlZCk7XHJcbiAgY29uc3QgeyBkYXRhLCBjb250ZW50IH0gPSBwYXJzZWQ7XHJcblxyXG4gIGNvbnN0IGh0bWwgPSBtZC5yZW5kZXIoY29udGVudCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBodG1sLFxyXG4gICAgZnJvbnRtYXR0ZXI6IGRhdGEsXHJcbiAgfTtcclxufSIsICJleHBvcnQgY29uc3QgUmVwbyA9IHtcclxuICAgIG93bmVyOiBcIlNoYWZTcGVjc1wiLFxyXG4gICAgcmVwbzogXCJyZW1peC1jbXNcIixcclxufSIsICJpbXBvcnQgeyBBYmJyRGljdGlvbmFyeSB9IGZyb20gXCIuLi9jbGllbnQvZGljdGlvbmFyeS5jbGllbnRcIjtcblxuY29uc3QgbWFyID0gcmVxdWlyZShcIi4uL3BsdWdpbnMvbWFya2Rvd24tY29weS5zZXJ2ZXIuanNcIik7XG5cbmNvbnN0IGhsanMgPSByZXF1aXJlKFwiaGlnaGxpZ2h0LmpzXCIpO1xuXG5leHBvcnQgY29uc3QgbWQgPSByZXF1aXJlKFwibWFya2Rvd24taXRcIikoe1xuICBodG1sOiB0cnVlLFxuICB0eXBvZ3JhcGhlcjogdHJ1ZSxcbn0pXG4gIC51c2UocmVxdWlyZShcIm1hcmtkb3duLWl0LXRvYy1kb25lLXJpZ2h0XCIpKVxuICAudXNlKHJlcXVpcmUoXCJtYXJrZG93bi1pdC1hbGVydHNcIikpXG4gIC51c2UocmVxdWlyZShcIm1hcmtkb3duLWl0LWhpZ2hsaWdodGpzXCIpLCB7IGhsanMgfSlcbiAgLnVzZShyZXF1aXJlKFwibWFya2Rvd24taXQtbXVsdGltZC10YWJsZVwiKSwge1xuICAgIG11bHRpbGluZTogZmFsc2UsXG4gICAgcm93c3BhbjogZmFsc2UsXG4gICAgaGVhZGVybGVzczogZmFsc2UsXG4gIH0pXG4gIC51c2UobWFyKVxuICAudXNlKHJlcXVpcmUoXCJtYXJrZG93bi1pdC1hYmJyXCIpLCBBYmJyRGljdGlvbmFyeSlcbiAgLnVzZShyZXF1aXJlKFwibWFya2Rvd24taXQtY29udGFpbmVyXCIpLCBcInNwb2lsZXJcIiwge1xuICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIHtcbiAgICAgIHJldHVybiBwYXJhbXMudHJpbSgpLm1hdGNoKC9ec3BvaWxlclxccysoLiopJC8pO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICh0b2tlbnM6IGFueSwgaWR4OiBhbnkpIHtcbiAgICAgIHZhciBtID0gdG9rZW5zW2lkeF0uaW5mby50cmltKCkubWF0Y2goL15zcG9pbGVyXFxzKyguKikkLyk7XG5cbiAgICAgIGlmICh0b2tlbnNbaWR4XS5uZXN0aW5nID09PSAxKSB7XG4gICAgICAgIC8vIG9wZW5pbmcgdGFnXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgXCI8ZGV0YWlscz48c3VtbWFyeT5cIiArIG1kLnV0aWxzLmVzY2FwZUh0bWwobVsxXSkgKyBcIjwvc3VtbWFyeT5cXG5cIlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY2xvc2luZyB0YWdcbiAgICAgICAgcmV0dXJuIFwiPC9kZXRhaWxzPlxcblwiO1xuICAgICAgfVxuICAgIH0sXG4gIH0pXG4gIC51c2UocmVxdWlyZShcIkBnZXJob2JiZWx0L21hcmtkb3duLWl0LWdpdGh1Yi1oZWFkaW5nc1wiKSlcbiAgLnVzZShyZXF1aXJlKFwibWFya2Rvd24taXQtY29udGFpbmVyXCIpLCBcImR5bmFtaWNcIiwge1xuICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKHRva2VuczogYW55LCBpZHg6IGFueSkge1xuICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2lkeF07XG5cbiAgICAgIGlmICh0b2tlbi5uZXN0aW5nID09PSAxKSB7XG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cIicgKyB0b2tlbi5pbmZvLnRyaW0oKSArICdcIj4nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiPC9kaXY+XCI7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG5cbi8vIEN1c3RvbSBNYXJrZG93biBDb21wb25lbnRzXG5leHBvcnQgY29uc3QgY29tcG9uZW50cyA9IHt9O1xuXG4vLyBNYXJrZG93biBFbmdpbmVcbmV4cG9ydCBmdW5jdGlvbiBtYXJrZG93bkl0RW5naW5lKCkge1xuICByZXR1cm4gZnVuY3Rpb24gbWFya2Rvd25SZW5kZXJlcihtZFRleHQ6IHN0cmluZywgcmVuZGVyOiBhbnkpIHtcbiAgICB2YXIgdGV4dCA9IG1kLnJlbmRlcihtZFRleHQpO1xuICAgIGlmICh0ZXh0W3RleHQubGVuZ3RoIC0gMV0gPT09IFwiXFxuXCIpIHtcbiAgICAgIHJlbmRlcih0ZXh0LnNsaWNlKDAsIHRleHQubGVuZ3RoIC0gMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXIodGV4dCk7XG4gICAgfVxuICB9O1xufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBQb3N0c0RhdGEgfSBmcm9tIFwifi91dGlscy9zZXJ2ZXIvZ2l0aHViLnNlcnZlclwiXG5cbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2Jsb2cuY3NzXCJcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJTaGFmU3BlY3MgLSBEaWdpdGFsIEdhcmRlblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNjcmFwcyBhbmQgcGllY2VzIG9mIGtub3dsZWRnZSBhbmQgbWF5YmUgc29tZSB3aXNkb20gZnJvbSBteSBkaWdpdGFsIGdhcmRlbi5cIixcbiAgICBcInR3aXR0ZXI6ZGVzY3JpcHRpb25cIjogXCJTY3JhcHMgYW5kIHBpZWNlcyBvZiBrbm93bGVkZ2UgYW5kIG1heWJlIHNvbWUgd2lzZG9tIGZyb20gbXkgZGlnaXRhbCBnYXJkZW4uXCIsXG4gICAgXCJvZzpkZXNjcmlwdGlvblwiOiBcIlNjcmFwcyBhbmQgcGllY2VzIG9mIGtub3dsZWRnZSBhbmQgbWF5YmUgc29tZSB3aXNkb20gZnJvbSBteSBkaWdpdGFsIGdhcmRlbi5cIlxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IFBvc3RzRGF0YSgpO1xuICBjb25zdCBtYXR0ZXI6IGFueVtdID0gcG9zdHMubWFwKChwb3N0OiBhbnkpID0+IHtcbiAgICBjb25zdCB7IGZyb250bWF0dGVyIH0gPSBwb3N0O1xuICAgIHJldHVybiBmcm9udG1hdHRlclxuICB9KVxuXG4gIGNvbnN0IHNvcnRlZFBvc3RzID0gbWF0dGVyLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgcmV0dXJuIGIuaWQgLSBhLmlkXG4gIH0pO1xuICBcbiAgcmV0dXJuIHNvcnRlZFBvc3RzO1xufTtcblxuZnVuY3Rpb24gQ2FyZCh7IHRpdGxlLCBpbWFnZSwgaWQsIGRhdGUgfTogYW55KSB7XG4gIGNvbnN0IHN0YXRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwhKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1hdGNoID0gZGF0ZS5tYXRjaCgvW14tXSsvZyk7XG4gICAgY29uc3QgZm9ybWF0dGVkID0gZm9ybWF0KFxuICAgICAgbmV3IERhdGUobWF0Y2hbMF0sIG1hdGNoWzFdIC0gMSwgbWF0Y2hbMl0uc2xpY2UoMCwgMikpLFxuICAgICAgXCJNTU1NIGRkLCB5eXl5XCJcbiAgICApO1xuXG4gICAgc3RhdFJlZi5jdXJyZW50LmlubmVyVGV4dCA9IGBQdWJsaXNoZWQ6ICR7Zm9ybWF0dGVkfWA7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImJsb2ctY2FyZC1yZWNcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZDogYHVybCgke2ltYWdlfSlgLFxuICAgICAgICBvYmplY3RGaXQ6IFwiY29udGFpblwiLFxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCIxMDAlIDEwMCVcIixcbiAgICAgIH19XG4gICAgICBrZXk9e2lkfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1jYXJkLWluZm9cIj5cbiAgICAgICAgPHA+e3RpdGxlfTwvcD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RhdHNcIiByZWY9e3N0YXRSZWZ9Pjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBUYWcoeyB0YWdOYW1lLCBub3dSdW4gfTogYW55KSB7XG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCB0YWdSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCEpO1xuICBjb25zdCBsYWJlbFJlZiA9IHVzZVJlZjxIVE1MTGFiZWxFbGVtZW50PihudWxsISk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodGFnUmVmLmN1cnJlbnQuY2hlY2tlZCkge1xuICAgICAgbGFiZWxSZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFiZWxSZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZFwiKTtcbiAgICB9XG4gIH0sIFtjaGVja2VkXSk7XG5cbiAgY29uc3QgY2hlY2tTdGF0dXMgPSAoKSA9PiB7XG4gICAgc2V0Q2hlY2tlZCghY2hlY2tlZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bGFiZWxcbiAgICAgIGNsYXNzTmFtZT1cInRhZy1jYXBzdWxlXCJcbiAgICAgIGh0bWxGb3I9e3RhZ05hbWV9XG4gICAgICByZWY9e2xhYmVsUmVmfVxuICAgICAgb25DbGljaz17KCkgPT4gbm93UnVuKCl9XG4gICAgPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIGlkPXt0YWdOYW1lfVxuICAgICAgICBuYW1lPXt0YWdOYW1lfVxuICAgICAgICByZWY9e3RhZ1JlZn1cbiAgICAgICAgb25DaGFuZ2U9e2NoZWNrU3RhdHVzfVxuICAgICAgLz5cbiAgICAgIDxzcGFuPnt0YWdOYW1lfTwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIGNvbnN0IHBvc3RSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwhKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1ib2R5XCI+XG4gICAgICAgICAgV2VsY29tZSB0byBteSBkaWdpdGFsIG5vdGVwYWQuIFRlYWNoaW5nIGRldmVsb3BtZW50IHNraWxscywgc2hhcmluZyBteVxuICAgICAgICAgIGtub3dsZWRnZSBhbmQgZXhwZXJpZW5jZXMgb3V0IHRoZXJlLCBhbmQgaGVscGluZyB3aXRoIGJ1aWxkaW5nIGFcbiAgICAgICAgICBicmlnaHRlciBmdXR1cmUuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8taW1hZ2VcIj5cdUQ4M0RcdURDREE8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1jb250ZW50XCI+XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPkZlYXR1cmVkIEFydGljbGU8L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1jYXJkIGJsb2ctY2FyZC1mZWF0dXJlZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWNhcmQtaW5mbyBibG9nLWNhcmQtaW5mby1mZWF0dXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmZWF0XCI+RmVhdHVyZWQgYXJ0aWNsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0LW1ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICBEb25lY1xuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGF0cy1mZWF0dXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgMjNyZCBvZiBGZWJydWFyeSwgMjAyMiAtIDMgbWluIHJlYWRcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZlYXQtaW1nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgIFJlYWQgdGhlIGFydGljbGUgPGJ1dHRvbiBjbGFzc05hbWU9XCJzcGlubiBjaXJjbGVcIj4mIzg1OTQ7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10YWdzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDM+U2VhcmNoIEFydGljbGVzIGJ5IFRvcGljczo8L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCIgcmVmPXt0YWdQYXJlbnRSZWZ9PlxuICAgICAgICAgICAgICAgIHtkYXRhPy50YWdzLm1hcCgodGFnOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUYWcgdGFnTmFtZT17dGFnLm5hbWV9IG5vd1J1bj17bm93UnVufSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGgyPlJlY2VudCBBcnRpY2xlcy4uPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0c1wiIHJlZj17cG9zdFJlZn0+XG4gICAgICAgICAgICAgIHtkYXRhPy5tYXAoKHBvc3Q6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICA8TGluayB0bz17cG9zdC5zbHVnfSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgIGRhdGU9e3Bvc3QuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtwb3N0LmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgaWQ9e3Bvc3QuaWR9XG4gICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJleHRyYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NsZXR0ZXJcIj48L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidlMzBiZDA2MCcsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtUEFaRkUzUlMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVBPT1ZHRkJDLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzI1RDM3TVMuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LU1PU1FWUzNPLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWJvdXQnOnsnaWQnOidyb3V0ZXMvYWJvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWJvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWJvdXQtM0tFWlJCUVQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUNLWkVRR1RFLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nJzp7J2lkJzoncm91dGVzL2Jsb2cnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nLVlZVTVUTkpRLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy8kc2x1Zyc6eydpZCc6J3JvdXRlcy9ibG9nLyRzbHVnJywncGFyZW50SWQnOidyb3V0ZXMvYmxvZycsJ3BhdGgnOic6c2x1ZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nLyRzbHVnLTRBVUhQVlFaLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zVVhXT0tCWC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL2luZGV4Jzp7J2lkJzoncm91dGVzL2Jsb2cvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9ibG9nJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvaW5kZXgtVjM1RFpTTFUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNVWFdPS0JYLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVE0NEVNQ0tYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1QVVBDWFZaRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUNLWkVRR1RFLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3J0Zm9saW8nOnsnaWQnOidyb3V0ZXMvcG9ydGZvbGlvJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BvcnRmb2xpbycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3J0Zm9saW8tSDVPM05KQ1UuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVBVUENYVlpHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQ0taRVFHVEUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcmVzb3VyY2VzL21hbmlmZXN0Wy5danNvbic6eydpZCc6J3JvdXRlcy9yZXNvdXJjZXMvbWFuaWZlc3RbLl1qc29uJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Jlc291cmNlcy9tYW5pZmVzdC5qc29uJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Jlc291cmNlcy9tYW5pZmVzdFsuXWpzb24tQkFLNTNITksuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Jlc291cmNlcy9zdWJzY3JpYmUnOnsnaWQnOidyb3V0ZXMvcmVzb3VyY2VzL3N1YnNjcmliZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidyZXNvdXJjZXMvc3Vic2NyaWJlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Jlc291cmNlcy9zdWJzY3JpYmUtSFhXTFA0UkguanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUUzMEJEMDYwLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FB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
