import { _ as _sfc_main$6, a as _sfc_main$2 } from './Button-GqGlf87S.mjs';
import { _ as _sfc_main$1 } from './PageHeader-CHx2fFk4.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-C2KaZWET.mjs';
import { defineComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { b as useI18n, c as useSeoMeta } from './server.mjs';
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
import 'tailwind-variants';
import '@vueuse/core';
import './index-DIr8QGQd.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: t("about.seo.title"),
      ogTitle: t("about.seo.title"),
      description: t("about.seo.description"),
      ogDescription: t("about.seo.description"),
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$6;
      const _component_UPageHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UButton = _sfc_main$2;
      _push(ssrRenderComponent(_component_UContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageHeader, {
              title: _ctx.$t("about.title")
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="my-5"${_scopeId}>${ssrInterpolate(_ctx.$t("about.content.start_block.title"))}</h2><p${_scopeId}>${ssrInterpolate(_ctx.$t("about.content.start_block.text"))}</p><h2 class="my-5"${_scopeId}>${ssrInterpolate(_ctx.$t("about.content.vue_block.title"))}</h2><p${_scopeId}>${ssrInterpolate(_ctx.$t("about.content.vue_block.text"))} `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "underline",
              to: _ctx.$t("about.content.vue_block.link.to")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("about.content.vue_block.link.text"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("about.content.vue_block.link.text")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p><h2 class="my-5"${_scopeId}>${ssrInterpolate(_ctx.$t("about.content.nuxt_block.title"))}</h2><p${_scopeId}>${ssrInterpolate(_ctx.$t("about.content.nuxt_block.text"))}</p><h2 class="my-5"${_scopeId}>${ssrInterpolate(_ctx.$t("about.content.future_block.title"))}</h2><p${_scopeId}>${ssrInterpolate(_ctx.$t("about.content.future_block.text"))} `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "underline",
              to: _ctx.$t("about.content.future_block.link.to")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("about.content.future_block.link.text"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("about.content.future_block.link.text")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p><div class="actions flex flex-row justify-between items-center w-full my-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-lucide-arrow-left",
              to: _ctx.$t("about.buttons.prev.to"),
              color: "neutral",
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("about.buttons.prev.text"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("about.buttons.prev.text")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("about.title"))}</p>`);
            _push2(ssrRenderComponent(_component_UButton, {
              "trailing-icon": "i-lucide-arrow-right",
              to: _ctx.$t("about.buttons.next.to"),
              color: "neutral",
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("about.buttons.next.text"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("about.buttons.next.text")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UPageHeader, {
                title: _ctx.$t("about.title")
              }, null, 8, ["title"]),
              createVNode("h2", { class: "my-5" }, toDisplayString(_ctx.$t("about.content.start_block.title")), 1),
              createVNode("p", null, toDisplayString(_ctx.$t("about.content.start_block.text")), 1),
              createVNode("h2", { class: "my-5" }, toDisplayString(_ctx.$t("about.content.vue_block.title")), 1),
              createVNode("p", null, [
                createTextVNode(toDisplayString(_ctx.$t("about.content.vue_block.text")) + " ", 1),
                createVNode(_component_NuxtLink, {
                  class: "underline",
                  to: _ctx.$t("about.content.vue_block.link.to")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("about.content.vue_block.link.text")), 1)
                  ]),
                  _: 1
                }, 8, ["to"])
              ]),
              createVNode("h2", { class: "my-5" }, toDisplayString(_ctx.$t("about.content.nuxt_block.title")), 1),
              createVNode("p", null, toDisplayString(_ctx.$t("about.content.nuxt_block.text")), 1),
              createVNode("h2", { class: "my-5" }, toDisplayString(_ctx.$t("about.content.future_block.title")), 1),
              createVNode("p", null, [
                createTextVNode(toDisplayString(_ctx.$t("about.content.future_block.text")) + " ", 1),
                createVNode(_component_NuxtLink, {
                  class: "underline",
                  to: _ctx.$t("about.content.future_block.link.to")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("about.content.future_block.link.text")), 1)
                  ]),
                  _: 1
                }, 8, ["to"])
              ]),
              createVNode("div", { class: "actions flex flex-row justify-between items-center w-full my-10" }, [
                createVNode(_component_UButton, {
                  icon: "i-lucide-arrow-left",
                  to: _ctx.$t("about.buttons.prev.to"),
                  color: "neutral",
                  variant: "outline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("about.buttons.prev.text")), 1)
                  ]),
                  _: 1
                }, 8, ["to"]),
                createVNode("p", null, toDisplayString(_ctx.$t("about.title")), 1),
                createVNode(_component_UButton, {
                  "trailing-icon": "i-lucide-arrow-right",
                  to: _ctx.$t("about.buttons.next.to"),
                  color: "neutral",
                  variant: "outline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("about.buttons.next.text")), 1)
                  ]),
                  _: 1
                }, 8, ["to"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-B745ywLU.mjs.map
