import { _ as _sfc_main$8, a as _sfc_main$2, b as __nuxt_component_3, c as __nuxt_component_1, d as _sfc_main$1 } from './Main-wtsqNgKl.mjs';
import { a as useAppConfig, c as __nuxt_component_5 } from './server.mjs';
import { defineComponent, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import 'reka-ui';
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
import './Button-C5RHR-UA.mjs';
import 'tailwind-variants';
import './index-u2G7qdl6.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import './nuxt-link-D3Rj4bLi.mjs';
import 'vaul-vue';
import 'reka-ui/namespaced';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    const [main] = useAppConfig().sidebar.links;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UHeader = _sfc_main$8;
      const _component_ActionsLogo = __nuxt_component_1;
      const _component_UNavigationMenu = _sfc_main$2;
      const _component_ActionsContacts = __nuxt_component_3;
      const _component_UMain = _sfc_main$1;
      const _component_NuxtPage = __nuxt_component_5;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UHeader, { "toggle-side": "right" }, {
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home-BePXAbMZ.mjs.map
