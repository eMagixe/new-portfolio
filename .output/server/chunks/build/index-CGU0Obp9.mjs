import { I as ImageComponent, _ as __nuxt_component_0$1, a as _sfc_main$3, b as _sfc_main$3$1, t as tv } from './Tooltip-B4LAymKA.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, computed, renderSlot, defineAsyncComponent, h, useSSRContext, hydrateOnVisible } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { _ as _export_sfc, b as useI18n, c as useSeoMeta, n as navigateTo, a as useAppConfig, d as useNuxtApp } from './server.mjs';
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
import '@vueuse/core';
import './nuxt-link-BiOVwRpD.mjs';
import 'tailwind-variants';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const theme = {
  "slots": {
    "root": "group relative flex items-center overflow-hidden gap-(--gap) [--gap:--spacing(16)] [--duration:20s]",
    "content": "flex items-center shrink-0 justify-around gap-(--gap) min-w-max"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "content": "w-full"
      },
      "vertical": {
        "content": "h-full"
      }
    },
    "pauseOnHover": {
      "true": {
        "content": "group-hover:[animation-play-state:paused]"
      }
    },
    "reverse": {
      "true": {
        "content": "![animation-direction:reverse]"
      }
    },
    "overlay": {
      "true": {
        "root": 'before:absolute before:pointer-events-none before:content-[""] before:z-2 before:from-default before:to-transparent after:absolute after:pointer-events-none after:content-[""] after:z-2 after:from-default after:to-transparent'
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "class": {
        "root": "flex-row",
        "content": "flex-row animate-[marquee_var(--duration)_linear_infinite] rtl:animate-[marquee-rtl_var(--duration)_linear_infinite] backface-hidden"
      }
    },
    {
      "orientation": "horizontal",
      "overlay": true,
      "class": {
        "root": "before:inset-y-0 before:left-0 before:h-full before:w-1/3 before:bg-gradient-to-r after:inset-y-0 after:right-0 after:h-full after:w-1/3 after:bg-gradient-to-l backface-hidden"
      }
    },
    {
      "orientation": "vertical",
      "class": {
        "root": "flex-col",
        "content": "flex-col animate-[marquee-vertical_var(--duration)_linear_infinite] rtl:animate-[marquee-vertical-rtl_var(--duration)_linear_infinite] h-[fit-content] backface-hidden"
      }
    },
    {
      "orientation": "vertical",
      "overlay": true,
      "class": {
        "root": "before:inset-x-0 before:top-0 before:w-full before:h-1/3 before:bg-gradient-to-b after:inset-x-0 after:bottom-0 after:w-full after:h-1/3 after:bg-gradient-to-t backface-hidden"
      }
    }
  ]
};
const _sfc_main$2 = {
  __name: "UMarquee",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    pauseOnHover: { type: Boolean, required: false },
    reverse: { type: Boolean, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    repeat: { type: Number, required: false, default: 4 },
    overlay: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.marquee || {} })({
      pauseOnHover: props.pauseOnHover,
      orientation: props.orientation,
      reverse: props.reverse,
      overlay: props.overlay
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.repeat, (i) => {
              _push2(`<div data-slot="content" class="${ssrRenderClass(ui.value.content({ class: [props.ui?.content] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.repeat, (i) => {
                return openBlock(), createBlock("div", {
                  key: i,
                  "data-slot": "content",
                  class: ui.value.content({ class: [props.ui?.content] })
                }, [
                  renderSlot(_ctx.$slots, "default")
                ], 2);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Marquee.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "welcome",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: t("index.seo.title"),
      description: t("index.seo.description"),
      ogTitle: t("index.seo.title"),
      ogDescription: t("index.seo.description"),
      ogImage: "summary_large_image",
      twitterCard: "summary_large_image"
    });
    const links = ref([
      { label: t("index.buttons.projects.text"), to: t("index.buttons.projects.to"), icon: "i-lucide-folder-open" },
      { label: t("index.buttons.about.text"), to: t("index.buttons.about.to"), trailingIcon: "i-lucide-arrow-right" }
    ]);
    const icons = [
      "i-simple-icons-vuedotjs",
      "i-simple-icons-nuxt",
      "i-simple-icons-github",
      "i-simple-icons-gitlab",
      "i-simple-icons-tailwindcss",
      "i-simple-icons-typescript",
      "i-simple-icons-javascript"
    ].map((i) => ({ icon: i, name: i.replace("i-simple-icons-", "") }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = ImageComponent;
      const _component_AnimatedButton = __nuxt_component_0$1;
      const _component_UMarquee = _sfc_main$2;
      const _component_UTooltip = _sfc_main$3;
      const _component_UIcon = _sfc_main$3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-welcome border-b-2 border-default pb-10" }, _attrs))}><div class="flex flex-col justify-center items-center pt-10 photo">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        alt: "photo",
        src: "/images/photo.png",
        preload: "",
        loading: "lazy",
        class: "mx-auto rounded-[50%] object-cover",
        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("#about")
      }, null, _parent));
      _push(`</div><div><div class="flex flex-col justify-center items-center text-center py-10 space-y-6"><h1 class="text-3xl font-bold text-primary!">${ssrInterpolate(_ctx.$t("index.name"))}</h1><p class="text-[clamp(1rem,1vw+0.3rem,1.2rem)] not-md:w-4/5 md:w-1/2 m-5">${ssrInterpolate(_ctx.$t("index.description"))}</p><div class="flex flex-wrap gap-4 justify-center mt-5"><!--[-->`);
      ssrRenderList(unref(links), (link) => {
        _push(ssrRenderComponent(_component_AnimatedButton, {
          key: link.label,
          label: link.label,
          to: link.to,
          icon: link.icon,
          "trailing-icon": link.trailingIcon
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="flex flex-col justify-center items-center"><p class="text-primary! text-sm">${ssrInterpolate(_ctx.$t("index.skills").toUpperCase())}</p>`);
      _push(ssrRenderComponent(_component_UMarquee, {
        "pause-on-hover": "",
        class: "w-[50%] mx-auto mt-10 p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(icons), (icon) => {
              _push2(ssrRenderComponent(_component_UTooltip, {
                key: icon.name,
                text: icon.name
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: icon.icon,
                      class: "size-10 shrink-0"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UIcon, {
                        name: icon.icon,
                        class: "size-10 shrink-0"
                      }, null, 8, ["name"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(icons), (icon) => {
                return openBlock(), createBlock(_component_UTooltip, {
                  key: icon.name,
                  text: icon.name
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UIcon, {
                      name: icon.icon,
                      class: "size-10 shrink-0"
                    }, null, 8, ["name"])
                  ]),
                  _: 2
                }, 1032, ["text"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/welcome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "SectionWelcome" });
function defineLazyComponent(props, defineStrategy) {
  return (id, loader) => defineComponent({
    inheritAttrs: false,
    props,
    emits: ["hydrated"],
    setup(props2, ctx) {
      {
        const nuxtApp = useNuxtApp();
        nuxtApp.hook("app:rendered", ({ ssrContext }) => {
          ssrContext["~lazyHydratedModules"] ||= /* @__PURE__ */ new Set();
          ssrContext["~lazyHydratedModules"].add(id);
        });
      }
      const child = defineAsyncComponent({ loader });
      const comp = defineAsyncComponent({
        hydrate: defineStrategy(props2),
        loader: () => Promise.resolve(child)
      });
      const onVnodeMounted = () => {
        ctx.emit("hydrated");
      };
      return () => h(comp, mergeProps(ctx.attrs, { onVnodeMounted }), ctx.slots);
    }
  });
}
const createLazyVisibleComponent = defineLazyComponent(
  {
    hydrateOnVisible: {
      type: [Object, Boolean],
      required: false,
      default: true
    }
  },
  (props) => hydrateOnVisible(props.hydrateOnVisible === true ? void 0 : props.hydrateOnVisible)
);
const __nuxt_component_1_lazy_visible = createLazyVisibleComponent("components/section/about.vue", () => import('./about-CcEphuHp.mjs').then((c) => c.default || c));
const __nuxt_component_2_lazy_visible = createLazyVisibleComponent("components/section/jobs.vue", () => import('./jobs-Cd9x8iVL.mjs').then((c) => c.default || c));
const __nuxt_component_3_lazy_visible = createLazyVisibleComponent("components/section/skills.vue", () => import('./skills-DKcJvsxA.mjs').then((c) => c.default || c));
const __nuxt_component_4_lazy_visible = createLazyVisibleComponent("components/section/projects.vue", () => import('./projects-B99c1mwm.mjs').then((c) => c.default || c));
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionWelcome = __nuxt_component_0;
  const _component_LazyVisibleSectionAbout = __nuxt_component_1_lazy_visible;
  const _component_LazyVisibleSectionJobs = __nuxt_component_2_lazy_visible;
  const _component_LazyVisibleSectionSkills = __nuxt_component_3_lazy_visible;
  const _component_LazyVisibleSectionProjects = __nuxt_component_4_lazy_visible;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SectionWelcome, null, null, _parent));
  _push(ssrRenderComponent(_component_LazyVisibleSectionAbout, { "hydrate-on-visible": "" }, null, _parent));
  _push(ssrRenderComponent(_component_LazyVisibleSectionJobs, { "hydrate-on-visible": "" }, null, _parent));
  _push(ssrRenderComponent(_component_LazyVisibleSectionSkills, { "hydrate-on-visible": "" }, null, _parent));
  _push(ssrRenderComponent(_component_LazyVisibleSectionProjects, { "hydrate-on-visible": "" }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));

export { _sfc_main$2 as _, index$1 as i };
//# sourceMappingURL=index-CGU0Obp9.mjs.map
