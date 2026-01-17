import { _ as _sfc_main$8, a as _sfc_main$2$1, b as __nuxt_component_3, c as __nuxt_component_1, d as _sfc_main$3 } from './Main-wtsqNgKl.mjs';
import { a as useAppConfig, c as __nuxt_component_5 } from './server.mjs';
import { defineComponent, withCtx, unref, createVNode, mergeProps, toDisplayString, useSlots, computed, renderSlot, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { t as tv, _ as _sfc_main$6 } from './Button-C5RHR-UA.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '@vueuse/core';
import './useLocale-DUhtQrZS.mjs';
import 'vaul-vue';
import './nuxt-link-D3Rj4bLi.mjs';
import 'reka-ui/namespaced';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'tailwind-variants';
import './index-u2G7qdl6.mjs';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';

const theme = {
  "slots": {
    "root": "",
    "top": "py-8 lg:py-12",
    "bottom": "py-8 lg:py-12",
    "container": "py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3",
    "left": "flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1",
    "center": "mt-3 lg:mt-0 lg:order-2 flex items-center justify-center",
    "right": "lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3"
  }
};
const _sfc_main$2 = {
  __name: "UFooter",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "footer" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.footer) || {} })();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-slot": "root",
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            if (!!slots.top) {
              _push2(`<div data-slot="top" class="${ssrRenderClass(ui.value.top({ class: (_a2 = props.ui) == null ? void 0 : _a2.top }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$6, {
              "data-slot": "container",
              class: ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2, _c2, _d2, _e2, _f2;
                if (_push3) {
                  _push3(`<div data-slot="right" class="${ssrRenderClass(ui.value.right({ class: (_a3 = props.ui) == null ? void 0 : _a3.right }))}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "right", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div><div data-slot="center" class="${ssrRenderClass(ui.value.center({ class: (_b2 = props.ui) == null ? void 0 : _b2.center }))}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div><div data-slot="left" class="${ssrRenderClass(ui.value.left({ class: (_c2 = props.ui) == null ? void 0 : _c2.left }))}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "left", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      "data-slot": "right",
                      class: ui.value.right({ class: (_d2 = props.ui) == null ? void 0 : _d2.right })
                    }, [
                      renderSlot(_ctx.$slots, "right")
                    ], 2),
                    createVNode("div", {
                      "data-slot": "center",
                      class: ui.value.center({ class: (_e2 = props.ui) == null ? void 0 : _e2.center })
                    }, [
                      renderSlot(_ctx.$slots, "default")
                    ], 2),
                    createVNode("div", {
                      "data-slot": "left",
                      class: ui.value.left({ class: (_f2 = props.ui) == null ? void 0 : _f2.left })
                    }, [
                      renderSlot(_ctx.$slots, "left")
                    ], 2)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            if (!!slots.bottom) {
              _push2(`<div data-slot="bottom" class="${ssrRenderClass(ui.value.bottom({ class: (_c = props.ui) == null ? void 0 : _c.bottom }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !!slots.top ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "top",
                class: ui.value.top({ class: (_d = props.ui) == null ? void 0 : _d.top })
              }, [
                renderSlot(_ctx.$slots, "top")
              ], 2)) : createCommentVNode("", true),
              createVNode(_sfc_main$6, {
                "data-slot": "container",
                class: ui.value.container({ class: (_e = props.ui) == null ? void 0 : _e.container })
              }, {
                default: withCtx(() => {
                  var _a3, _b2, _c2;
                  return [
                    createVNode("div", {
                      "data-slot": "right",
                      class: ui.value.right({ class: (_a3 = props.ui) == null ? void 0 : _a3.right })
                    }, [
                      renderSlot(_ctx.$slots, "right")
                    ], 2),
                    createVNode("div", {
                      "data-slot": "center",
                      class: ui.value.center({ class: (_b2 = props.ui) == null ? void 0 : _b2.center })
                    }, [
                      renderSlot(_ctx.$slots, "default")
                    ], 2),
                    createVNode("div", {
                      "data-slot": "left",
                      class: ui.value.left({ class: (_c2 = props.ui) == null ? void 0 : _c2.left })
                    }, [
                      renderSlot(_ctx.$slots, "left")
                    ], 2)
                  ];
                }),
                _: 3
              }, 8, ["class"]),
              !!slots.bottom ? (openBlock(), createBlock("div", {
                key: 1,
                "data-slot": "bottom",
                class: ui.value.bottom({ class: (_f = props.ui) == null ? void 0 : _f.bottom })
              }, [
                renderSlot(_ctx.$slots, "bottom")
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "footer",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFooter = _sfc_main$2;
      const _component_UNavigationMenu = _sfc_main$2$1;
      const _component_ActionsLogo = __nuxt_component_1;
      _push(ssrRenderComponent(_component_UFooter, mergeProps({ class: "border border-t-gray-200 border-b-0 border-x-0" }, _attrs), {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-muted text-sm"${_scopeId}>Max Evchenko \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-muted text-sm" }, "Max Evchenko \xA9 " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()), 1)
            ];
          }
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ActionsLogo, { size: "14" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ActionsLogo, { size: "14" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UNavigationMenu, {
              items,
              variant: "link"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UNavigationMenu, {
                items,
                variant: "link"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = Object.assign(_sfc_main$1, { __name: "SectionFooter" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const [main] = useAppConfig().sidebar.links;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UHeader = _sfc_main$8;
      const _component_ActionsLogo = __nuxt_component_1;
      const _component_UNavigationMenu = _sfc_main$2$1;
      const _component_ActionsContacts = __nuxt_component_3;
      const _component_UMain = _sfc_main$3;
      const _component_NuxtPage = __nuxt_component_5;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UHeader, { "toggle-side": "left" }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ActionsLogo, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ActionsLogo)
            ];
          }
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ActionsContacts, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ActionsContacts)
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UNavigationMenu, {
              items: unref(main),
              orientation: "vertical"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UNavigationMenu, {
                items: unref(main),
                orientation: "vertical"
              }, null, 8, ["items"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UNavigationMenu, { items: unref(main) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UNavigationMenu, { items: unref(main) }, null, 8, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UMain, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BT3x93_e.mjs.map
