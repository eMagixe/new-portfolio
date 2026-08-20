import { _ as _sfc_main$1 } from './Container-DctvYi3A.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-BiOVwRpD.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'reka-ui';
import './Tooltip-B4LAymKA.mjs';
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
import 'ipx';
import './index-BDxtzh9K.mjs';
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
import '@vueuse/core';
import 'tailwind-variants';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UContainer = _sfc_main$1;
  const _component_NuxtLink = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "bg-primary/60 not-sm:py-10 sm:py-20 min-h-screen bg-about"
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_UContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="my-5 title not-sm:text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("about.content.start_block.title"))}</h2><p${_scopeId}>${ssrInterpolate(_ctx.$t("about.content.start_block.text"))}</p><h2 class="my-5"${_scopeId}>${ssrInterpolate(_ctx.$t("about.content.vue_block.title"))}</h2><p${_scopeId}>${ssrInterpolate(_ctx.$t("about.content.vue_block.text"))} `);
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
        _push2(`</p>`);
      } else {
        return [
          createVNode("h2", { class: "my-5 title not-sm:text-center" }, toDisplayString(_ctx.$t("about.content.start_block.title")), 1),
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
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "SectionAbout" });

export { about as default };
//# sourceMappingURL=about-i4ehqUbE.mjs.map
