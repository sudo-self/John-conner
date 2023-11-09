var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/gen-styles/app-generated-do-not-edit.css
var app_generated_do_not_edit_default = "/build/_assets/app-generated-do-not-edit-MRRX7WXT.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  // Customize the title with your chatbot's name
  title: "Talk to [TS3K]",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "stylesheet", href: app_generated_do_not_edit_default },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  },
  { rel: "manifest", href: "/site.webmanifest" }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}
var ErrorBoundary = ({ error }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex flex-col items-center justify-start w-full h-screen", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex w-full md:max-w-md h-screen md:h-auto flex-col items-center text-center justify-start py-8 px-4", children: [
      "Oops! There was an error:",
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-red-500", children: error.message }),
      "Please reload the page."
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
  ] })
] });

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action,
  default: () => Home
});
var import_react3 = require("react"), import_react4 = require("@remix-run/react"), import_cloudflare = require("@remix-run/cloudflare"), import_jsx_runtime3 = require("react/jsx-runtime"), action = async ({ context, request }) => {
  let formData = await request.formData(), prompt = formData.get("prompt"), previousChats = formData.get("previous-chats"), latestChat = JSON.parse(previousChats).pop(), res = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      // Make sure you have set OPENAI_API_KEY in your top-level `.env` file
      Authorization: `Bearer ${context.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      // `text-curie-001` is the second-best model. You can customize  which one
      // to use. See https://beta.openai.com/docs/models/gpt-3
      model: "text-curie-001",
      temperature: 0.7,
      max_tokens: 100,
      // Customize this prompt based on the chatbot you want to create
      prompt: `You are an all-knowing wizard named [TS3k] talking to a visitor. Talk like a professor.
You: ${latestChat == null ? void 0 : latestChat.text}
Them: ${prompt}
You:`
    })
  }), { choices } = await res.json();
  return choices.length === 0 ? (0, import_cloudflare.json)({ error: "No choices returned" }, { status: 500 }) : (0, import_cloudflare.json)(
    {
      response: choices[0].text
    },
    { status: 200 }
  );
};
function ChatBubble({ chat }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    {
      className: `${chat.author === "ai" ? "bg-blue-300" : "bg-green-300"} w-3/4 p-3 rounded text-gray-900`,
      children: chat.text
    }
  );
}
function Home() {
  let data = (0, import_react4.useActionData)(), formRef = (0, import_react3.useRef)(null), chatsRef = (0, import_react3.useRef)(null), { state } = (0, import_react4.useTransition)(), [chats, setChats] = (0, import_react3.useState)([
    { author: "ai", text: "Hello, what would you like to ask me?" }
  ]), submit = (0, import_react4.useSubmit)();
  function onKeyDown(e) {
    e.key === "Enter" && formRef.current && (e.preventDefault(), submit(formRef.current, { replace: !0 }));
  }
  return (0, import_react3.useEffect)(() => {
    if (formRef.current && state === "submitting") {
      let newUserChat = {
        author: "user",
        text: formRef.current.prompt.value
      };
      setChats([...chats, newUserChat]), formRef.current.reset();
    }
  }, [state]), (0, import_react3.useEffect)(() => {
    if (data != null && data.response) {
      let newAiChat = { author: "ai", text: data.response };
      return setChats([...chats, newAiChat]);
    } else if (data != null && data.error) {
      let newErrorChat = {
        author: "ai",
        text: "Oops, I didn't get that. Could you try again?"
      };
      return setChats([...chats, newErrorChat]);
    }
  }, [data]), (0, import_react3.useEffect)(() => {
    var _a;
    chats && chatsRef.current && ((_a = chatsRef.current) == null || _a.scrollTo({
      top: chatsRef.current.scrollHeight,
      behavior: "smooth"
    }));
  }, [chats]), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex flex-col items-center justify-start w-full h-screen", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex w-full md:max-w-md h-screen md:h-auto flex-col items-center justify-start py-4 px-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-row items-center justify-start mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "img",
        {
          src: "/logo.png",
          width: 80,
          height: 80,
          className: "rounded-2xl mr-4",
          alt: "Logo"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { children: "Talk to [TS3K]" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col w-full h-[400px] md:h-[500px] p-2 bg-gray-800 border border-gray-600 rounded mt-8 overflow-y-scroll relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "ul",
        {
          className: "flex flex-col w-full h-full overflow-y-scroll space-y-4 pb-8",
          ref: chatsRef,
          children: chats.map((chat, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "li",
            {
              className: `flex flex-row ${chat.author === "ai" ? "justify-start" : "justify-end"}`,
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ChatBubble, { chat })
            },
            index
          ))
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react4.Form, { method: "post", ref: formRef, className: "relative h-24", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "textarea",
          {
            name: "prompt",
            required: !0,
            className: "w-full h-24 resize-none bg-gray-400 rounded p-3 pr-24 text-gray-900 placeholder:text-gray-600",
            placeholder: "Start chatting with [TS3K]...",
            onKeyDown
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "submit", className: "absolute bottom-3 right-3", children: "Send" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "input",
          {
            type: "hidden",
            name: "previous-chats",
            value: JSON.stringify(chats)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "mt-8 text-sm text-gray-400 text-center", children: [
      "TS3K was Made with",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: "https://github.com/sudo-self/", children: "superpowers" })
    ] })
  ] }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-43DMLAP4.js", imports: ["/build/_shared/chunk-Q7DGUZWU.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3XHOZQYV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-5FAP5XJQ.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "037a4407", hmr: void 0, url: "/build/manifest-037A4407.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
