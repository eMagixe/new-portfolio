import { _ as _sfc_main$6, c as _sfc_main$5, a as _sfc_main$7, t as tv } from './Button-C5RHR-UA.mjs';
import { _ as _sfc_main$2 } from './PageHeader-DHvPt5JG.mjs';
import { defineComponent, ref, withCtx, unref, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createTextVNode, computed, mergeProps, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { b as useSeoMeta, a as useAppConfig } from './server.mjs';
import { _ as _sfc_main$3 } from './PageCard-CHXe1NTY.mjs';
import { _ as _sfc_main$4 } from './Alert-D1REOHJc.mjs';
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
import './index-u2G7qdl6.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import './nuxt-link-D3Rj4bLi.mjs';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './useLocale-DUhtQrZS.mjs';

const theme = {
  "base": "relative flex flex-col",
  "variants": {
    "divide": {
      "true": "*:not-last:after:absolute *:not-last:after:inset-x-1 *:not-last:after:bottom-0 *:not-last:after:bg-border *:not-last:after:h-px"
    }
  }
};
const _sfc_main$1 = {
  __name: "UPageList",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    divide: { type: Boolean, required: false, default: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.pageList) || {} });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        role: "list",
        class: ui.value({ class: props.class, divide: props.divide })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "skills",
  __ssrInlineRender: true,
  setup(__props) {
    const first_skills = ref([
      {
        name: "Vue.js",
        description: "\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0439 JavaScript-\u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432 \u0438 \u043E\u0434\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0445 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 (SPA)",
        icon: "i-simple-icons-vuedotjs",
        to: "https://vuejs.org",
        target: "_blank"
      },
      {
        name: "Nuxt.js",
        description: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C \u043D\u0430 \u0431\u0430\u0437\u0435 Vue.js, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445, \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0438 SEO-\u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439",
        icon: "i-simple-icons-nuxt",
        to: "https://nuxt.com",
        target: "_blank"
      },
      {
        name: "Tailwind CSS",
        description: "CSS-\u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u0442\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u0435\u0431-\u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B, \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u044F \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0435, \u0433\u043E\u0442\u043E\u0432\u044B\u0435 \u043A \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044E \u0443\u0442\u0438\u043B\u0438\u0442\u0430\u0440\u043D\u044B\u0435 \u043A\u043B\u0430\u0441\u0441\u044B \u043F\u0440\u044F\u043C\u043E \u0432 HTML-\u0440\u0430\u0437\u043C\u0435\u0442\u043A\u0435",
        icon: "i-simple-icons-tailwindcss",
        to: "https://tailwindcss.com",
        target: "_blank"
      },
      {
        name: "JavaScript",
        description: "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u044F\u0437\u044B\u043A \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u043C\u0438, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044F \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442, \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438, \u0438\u0433\u0440\u044B \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0441\u0430\u0439\u0442\u0430",
        icon: "i-simple-icons-javascript",
        to: "https://learn.javascript.ru",
        target: "_blank"
      },
      {
        name: "TypeScript",
        description: "\u041D\u0430\u0434\u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E JavaScript, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0442\u0438\u043F\u0438\u0437\u0430\u0446\u0438\u044E \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0431\u043E\u043B\u0435\u0435 \u043D\u0430\u0434\u0435\u0436\u043D\u044B\u0445 \u0438 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439",
        icon: "i-simple-icons-typescript",
        to: "https://www.typescriptlang.org",
        target: "_blank"
      },
      {
        name: "GitHub",
        description: "\u0412\u0435\u0431-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0438 \u0445\u043E\u0441\u0442\u0438\u043D\u0433 \u0434\u043B\u044F IT-\u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u0432\u0435\u0440\u0441\u0438\u0439 Git",
        icon: "i-simple-icons-github",
        to: "https://www.github.com",
        target: "_blank"
      },
      {
        name: "GitLab",
        description: "\u0412\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u044F\u043C\u0438 Git \u0441 \u0444\u0443\u043D\u043A\u0446\u0438\u044F\u043C\u0438 CI/CD, \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433\u0430 \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438",
        icon: "i-simple-icons-gitlab",
        to: "https://www.gitlab.com",
        target: "_blank"
      }
    ]);
    const secondary_skills = ref([
      {
        name: "VueUse",
        description: "\u0411\u043E\u0433\u0430\u0442\u0430\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043A \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044E \u0432\u0441\u043F\u043E\u043C\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439 (composable-\u0444\u0443\u043D\u043A\u0446\u0438\u0439, \u0438\u043B\u0438 useXyz), \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F Vue.js Composition API",
        icon: "i-simple-icons-vueuse",
        to: "https://vueuse.org",
        target: "_blank"
      },
      {
        name: "Nuxt UI",
        description: "\u0412\u044B\u0441\u043E\u043A\u043E\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u0434\u043B\u044F \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0430 Nuxt.js, \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u043D\u0430 \u0431\u0430\u0437\u0435 Vue 3 \u0438 Tailwind CSS",
        icon: "i-simple-icons-nuxt",
        to: "https://ui.nuxt.com",
        target: "_blank"
      },
      {
        name: "Chart.js",
        description: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F, \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 JavaScript \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0438 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0445 \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C \u0438 \u0433\u0440\u0430\u0444\u0438\u043A\u043E\u0432 \u0432 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u0445",
        icon: "i-simple-icons-chartdotjs",
        to: "https://www.chartjs.org",
        target: "_blank"
      },
      {
        name: "Three.js",
        description: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F JavaScript-\u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0438 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0430\u043D\u0438\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 3D-\u0433\u0440\u0430\u0444\u0438\u043A\u0438 \u043F\u0440\u044F\u043C\u043E \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435",
        icon: "i-simple-icons-threedotjs",
        to: "https://threejs.org",
        target: "_blank"
      },
      {
        name: "Node.js",
        description: "\u041A\u0440\u043E\u0441\u0441\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435\u043D\u043D\u0430\u044F \u0441\u0440\u0435\u0434\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F JavaScript, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043D\u0430 \u0434\u0432\u0438\u0436\u043A\u0435 V8 \u043E\u0442 Chrome",
        icon: "i-simple-icons-nodedotjs",
        to: "https://nodejs.org",
        target: "_blank"
      },
      {
        name: "Strapi",
        description: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F, open-source headless CMS, \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u0430\u044F \u043D\u0430 Node.js, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430\u043C \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043E\u043C",
        icon: "i-simple-icons-strapi",
        to: "https://strapi.io",
        target: "_blank"
      },
      {
        name: "PHP",
        description: "\u0421\u043A\u0440\u0438\u043F\u0442\u043E\u0432\u044B\u0439 \u044F\u0437\u044B\u043A \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u0438 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439",
        icon: "i-simple-icons-php",
        to: "https://www.php.net",
        target: "_blank"
      }
    ]);
    useSeoMeta({
      title: "\u041D\u0430\u0432\u044B\u043A\u0438 - \u0415\u0432\u0447\u0435\u043D\u043A\u043E \u041C\u0430\u043A\u0441\u0438\u043C",
      ogTitle: "\u041D\u0430\u0432\u044B\u043A\u0438 - \u0415\u0432\u0447\u0435\u043D\u043A\u043E \u041C\u0430\u043A\u0441\u0438\u043C",
      description: "\u0421\u043F\u0438\u0441\u043E\u043A \u043D\u0430\u0432\u044B\u043A\u043E\u0432 \u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u043C\u0438 \u0432\u043B\u0430\u0434\u0435\u0435\u0442 \u0415\u0432\u0447\u0435\u043D\u043A\u043E \u041C\u0430\u043A\u0441\u0438\u043C, Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0441 \u043C\u043D\u043E\u0433\u043E\u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439.",
      ogDescription: "\u0421\u043F\u0438\u0441\u043E\u043A \u043D\u0430\u0432\u044B\u043A\u043E\u0432 \u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u043C\u0438 \u0432\u043B\u0430\u0434\u0435\u0435\u0442 \u0415\u0432\u0447\u0435\u043D\u043A\u043E \u041C\u0430\u043A\u0441\u0438\u043C, Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0441 \u043C\u043D\u043E\u0433\u043E\u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439.",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$6;
      const _component_UPageHeader = _sfc_main$2;
      const _component_UPageList = _sfc_main$1;
      const _component_UPageCard = _sfc_main$3;
      const _component_UIcon = _sfc_main$5;
      const _component_UAlert = _sfc_main$4;
      const _component_UButton = _sfc_main$7;
      _push(ssrRenderComponent(_component_UContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageHeader, { title: "\u041D\u0430\u0432\u044B\u043A\u0438" }, null, _parent2, _scopeId));
            _push2(`<div class="w-full flex flex-col md:flex-row justify-start items-start gap-5"${_scopeId}><section${_scopeId}><h3 class="mt-5 mb-5 border-b pb-5 border-b-gray-200"${_scopeId}>\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B</h3>`);
            _push2(ssrRenderComponent(_component_UPageList, { divide: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(first_skills), (skill, index) => {
                    _push3(ssrRenderComponent(_component_UPageCard, {
                      key: index,
                      variant: "ghost",
                      to: skill.to,
                      target: skill.target
                    }, {
                      body: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="w-full flex flex-row justify-start items-center gap-5"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: skill.icon,
                            class: "size-10 shrink-0"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div${_scopeId3}><h2${_scopeId3}>${ssrInterpolate(skill.name)}</h2><p class="mt-2 text-sm md:h-[50px]"${_scopeId3}>${ssrInterpolate(skill.description)}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "w-full flex flex-row justify-start items-center gap-5" }, [
                              createVNode(_component_UIcon, {
                                name: skill.icon,
                                class: "size-10 shrink-0"
                              }, null, 8, ["name"]),
                              createVNode("div", null, [
                                createVNode("h2", null, toDisplayString(skill.name), 1),
                                createVNode("p", { class: "mt-2 text-sm md:h-[50px]" }, toDisplayString(skill.description), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(first_skills), (skill, index) => {
                      return openBlock(), createBlock(_component_UPageCard, {
                        key: index,
                        variant: "ghost",
                        to: skill.to,
                        target: skill.target
                      }, {
                        body: withCtx(() => [
                          createVNode("div", { class: "w-full flex flex-row justify-start items-center gap-5" }, [
                            createVNode(_component_UIcon, {
                              name: skill.icon,
                              class: "size-10 shrink-0"
                            }, null, 8, ["name"]),
                            createVNode("div", null, [
                              createVNode("h2", null, toDisplayString(skill.name), 1),
                              createVNode("p", { class: "mt-2 text-sm md:h-[50px]" }, toDisplayString(skill.description), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to", "target"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section><section${_scopeId}><h3 class="mt-5 mb-5 border-b pb-5 border-b-gray-200"${_scopeId}>\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B</h3>`);
            _push2(ssrRenderComponent(_component_UPageList, { divide: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(secondary_skills), (skill, index) => {
                    _push3(ssrRenderComponent(_component_UPageCard, {
                      key: index,
                      variant: "ghost",
                      to: skill.to,
                      target: skill.target
                    }, {
                      body: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="w-full flex flex-row justify-start items-center gap-5"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: skill.icon,
                            class: "size-10 shrink-0"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div${_scopeId3}><h2${_scopeId3}>${ssrInterpolate(skill.name)}</h2><p class="mt-2 text-sm md:h-[50px]"${_scopeId3}>${ssrInterpolate(skill.description)}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "w-full flex flex-row justify-start items-center gap-5" }, [
                              createVNode(_component_UIcon, {
                                name: skill.icon,
                                class: "size-10 shrink-0"
                              }, null, 8, ["name"]),
                              createVNode("div", null, [
                                createVNode("h2", null, toDisplayString(skill.name), 1),
                                createVNode("p", { class: "mt-2 text-sm md:h-[50px]" }, toDisplayString(skill.description), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(secondary_skills), (skill, index) => {
                      return openBlock(), createBlock(_component_UPageCard, {
                        key: index,
                        variant: "ghost",
                        to: skill.to,
                        target: skill.target
                      }, {
                        body: withCtx(() => [
                          createVNode("div", { class: "w-full flex flex-row justify-start items-center gap-5" }, [
                            createVNode(_component_UIcon, {
                              name: skill.icon,
                              class: "size-10 shrink-0"
                            }, null, 8, ["name"]),
                            createVNode("div", null, [
                              createVNode("h2", null, toDisplayString(skill.name), 1),
                              createVNode("p", { class: "mt-2 text-sm md:h-[50px]" }, toDisplayString(skill.description), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to", "target"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section></div>`);
            _push2(ssrRenderComponent(_component_UAlert, {
              color: "neutral",
              variant: "subtle",
              title: "\u041A\u0440\u0430\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
              description: "\u0422\u0430\u043A \u0436\u0435 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u0437\u043D\u0430\u043D\u0438\u044F \u044F\u0437\u044B\u043A\u043E\u0432 C, C++, C# \u0438 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0438 \u0431\u0438\u0431\u043B\u0435\u043E\u0442\u0435\u043A \u0438\u0445 \u044F \u0432 \u0434\u0430\u043D\u043D\u043E\u043C \u0441\u043F\u0438\u0441\u043A\u0435 \u043D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E \u0442\u0430\u043A \u043A\u0430\u043A \u043E\u043D\u0438 \u043D\u0435 \u043E\u0442\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u043A \u043C\u043E\u0435\u0439 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u043E \u044F \u0433\u043E\u0442\u043E\u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0438\u0445 \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438.",
              icon: "i-lucide-info",
              class: "my-10"
            }, null, _parent2, _scopeId));
            _push2(`<div class="actions flex flex-row justify-between items-center w-full mb-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-lucide-arrow-left",
              to: "/jobs",
              color: "neutral",
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B`);
                } else {
                  return [
                    createTextVNode("\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}>\u041D\u0430\u0432\u044B\u043A\u0438</p>`);
            _push2(ssrRenderComponent(_component_UButton, {
              "trailing-icon": "i-lucide-arrow-right",
              to: "/projects",
              color: "neutral",
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u041F\u0440\u043E\u0435\u043A\u0442\u044B`);
                } else {
                  return [
                    createTextVNode("\u041F\u0440\u043E\u0435\u043A\u0442\u044B")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UPageHeader, { title: "\u041D\u0430\u0432\u044B\u043A\u0438" }),
              createVNode("div", { class: "w-full flex flex-col md:flex-row justify-start items-start gap-5" }, [
                createVNode("section", null, [
                  createVNode("h3", { class: "mt-5 mb-5 border-b pb-5 border-b-gray-200" }, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B"),
                  createVNode(_component_UPageList, { divide: "" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(first_skills), (skill, index) => {
                        return openBlock(), createBlock(_component_UPageCard, {
                          key: index,
                          variant: "ghost",
                          to: skill.to,
                          target: skill.target
                        }, {
                          body: withCtx(() => [
                            createVNode("div", { class: "w-full flex flex-row justify-start items-center gap-5" }, [
                              createVNode(_component_UIcon, {
                                name: skill.icon,
                                class: "size-10 shrink-0"
                              }, null, 8, ["name"]),
                              createVNode("div", null, [
                                createVNode("h2", null, toDisplayString(skill.name), 1),
                                createVNode("p", { class: "mt-2 text-sm md:h-[50px]" }, toDisplayString(skill.description), 1)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to", "target"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                createVNode("section", null, [
                  createVNode("h3", { class: "mt-5 mb-5 border-b pb-5 border-b-gray-200" }, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B"),
                  createVNode(_component_UPageList, { divide: "" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(secondary_skills), (skill, index) => {
                        return openBlock(), createBlock(_component_UPageCard, {
                          key: index,
                          variant: "ghost",
                          to: skill.to,
                          target: skill.target
                        }, {
                          body: withCtx(() => [
                            createVNode("div", { class: "w-full flex flex-row justify-start items-center gap-5" }, [
                              createVNode(_component_UIcon, {
                                name: skill.icon,
                                class: "size-10 shrink-0"
                              }, null, 8, ["name"]),
                              createVNode("div", null, [
                                createVNode("h2", null, toDisplayString(skill.name), 1),
                                createVNode("p", { class: "mt-2 text-sm md:h-[50px]" }, toDisplayString(skill.description), 1)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to", "target"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode(_component_UAlert, {
                color: "neutral",
                variant: "subtle",
                title: "\u041A\u0440\u0430\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
                description: "\u0422\u0430\u043A \u0436\u0435 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u0437\u043D\u0430\u043D\u0438\u044F \u044F\u0437\u044B\u043A\u043E\u0432 C, C++, C# \u0438 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0438 \u0431\u0438\u0431\u043B\u0435\u043E\u0442\u0435\u043A \u0438\u0445 \u044F \u0432 \u0434\u0430\u043D\u043D\u043E\u043C \u0441\u043F\u0438\u0441\u043A\u0435 \u043D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E \u0442\u0430\u043A \u043A\u0430\u043A \u043E\u043D\u0438 \u043D\u0435 \u043E\u0442\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u043A \u043C\u043E\u0435\u0439 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u043E \u044F \u0433\u043E\u0442\u043E\u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0438\u0445 \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438.",
                icon: "i-lucide-info",
                class: "my-10"
              }),
              createVNode("div", { class: "actions flex flex-row justify-between items-center w-full mb-10" }, [
                createVNode(_component_UButton, {
                  icon: "i-lucide-arrow-left",
                  to: "/jobs",
                  color: "neutral",
                  variant: "outline"
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B")
                  ]),
                  _: 1
                }),
                createVNode("p", null, "\u041D\u0430\u0432\u044B\u043A\u0438"),
                createVNode(_component_UButton, {
                  "trailing-icon": "i-lucide-arrow-right",
                  to: "/projects",
                  color: "neutral",
                  variant: "outline"
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u041F\u0440\u043E\u0435\u043A\u0442\u044B")
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/skills.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=skills-CJZACD5w.mjs.map
