import { _ as _sfc_main$2 } from './Container-DctvYi3A.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSlots, useModel, renderSlot, createCommentVNode, createTextVNode, mergeModels, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive, Separator } from 'reka-ui';
import { t as tv } from './Tooltip-B4LAymKA.mjs';
import { b as _sfc_main$3$1 } from './Button-DDZVeAG-.mjs';
import { b as useI18n, a as useAppConfig } from './server.mjs';
import { _ as _sfc_main$3 } from './Alert-VXWL7gdP.mjs';
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
import './nuxt-link-BiOVwRpD.mjs';
import 'tailwind-variants';

const theme = {
  "slots": {
    "root": "flex gap-1.5",
    "item": "group relative flex flex-1 gap-3",
    "container": "relative flex items-center gap-1.5",
    "indicator": "group-data-[state=completed]:text-inverted group-data-[state=active]:text-inverted text-muted",
    "separator": "flex-1 rounded-full bg-elevated",
    "wrapper": "w-full",
    "date": "text-dimmed text-xs/5",
    "title": "font-medium text-highlighted text-sm",
    "description": "text-muted text-wrap text-sm"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "flex-row w-full",
        "item": "flex-col",
        "separator": "h-0.5"
      },
      "vertical": {
        "root": "flex-col",
        "container": "flex-col",
        "separator": "w-0.5"
      }
    },
    "color": {
      "primary": {
        "indicator": "group-data-[state=completed]:bg-primary group-data-[state=active]:bg-primary"
      },
      "secondary": {
        "indicator": "group-data-[state=completed]:bg-secondary group-data-[state=active]:bg-secondary"
      },
      "success": {
        "indicator": "group-data-[state=completed]:bg-success group-data-[state=active]:bg-success"
      },
      "info": {
        "indicator": "group-data-[state=completed]:bg-info group-data-[state=active]:bg-info"
      },
      "warning": {
        "indicator": "group-data-[state=completed]:bg-warning group-data-[state=active]:bg-warning"
      },
      "error": {
        "indicator": "group-data-[state=completed]:bg-error group-data-[state=active]:bg-error"
      },
      "neutral": {
        "indicator": "group-data-[state=completed]:bg-inverted group-data-[state=active]:bg-inverted"
      }
    },
    "size": {
      "3xs": "",
      "2xs": "",
      "xs": "",
      "sm": "",
      "md": "",
      "lg": "",
      "xl": "",
      "2xl": "",
      "3xl": ""
    },
    "reverse": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-primary"
      }
    },
    {
      "color": "secondary",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-secondary"
      }
    },
    {
      "color": "success",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-success"
      }
    },
    {
      "color": "info",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-info"
      }
    },
    {
      "color": "warning",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-warning"
      }
    },
    {
      "color": "error",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-error"
      }
    },
    {
      "color": "primary",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-primary group-data-[state=completed]:bg-primary"
      }
    },
    {
      "color": "secondary",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-secondary group-data-[state=completed]:bg-secondary"
      }
    },
    {
      "color": "success",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-success group-data-[state=completed]:bg-success"
      }
    },
    {
      "color": "info",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-info group-data-[state=completed]:bg-info"
      }
    },
    {
      "color": "warning",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-warning group-data-[state=completed]:bg-warning"
      }
    },
    {
      "color": "error",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-error group-data-[state=completed]:bg-error"
      }
    },
    {
      "color": "neutral",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-inverted"
      }
    },
    {
      "color": "neutral",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-inverted group-data-[state=completed]:bg-inverted"
      }
    },
    {
      "orientation": "horizontal",
      "size": "3xs",
      "class": {
        "wrapper": "pe-4.5"
      }
    },
    {
      "orientation": "horizontal",
      "size": "2xs",
      "class": {
        "wrapper": "pe-5"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": {
        "wrapper": "pe-5.5"
      }
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": {
        "wrapper": "pe-6"
      }
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": {
        "wrapper": "pe-6.5"
      }
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": {
        "wrapper": "pe-7"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": {
        "wrapper": "pe-7.5"
      }
    },
    {
      "orientation": "horizontal",
      "size": "2xl",
      "class": {
        "wrapper": "pe-8"
      }
    },
    {
      "orientation": "horizontal",
      "size": "3xl",
      "class": {
        "wrapper": "pe-8.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "3xs",
      "class": {
        "wrapper": "-mt-0.5 pb-4.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "2xs",
      "class": {
        "wrapper": "pb-5"
      }
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": {
        "wrapper": "mt-0.5 pb-5.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": {
        "wrapper": "mt-1 pb-6"
      }
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": {
        "wrapper": "mt-1.5 pb-6.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": {
        "wrapper": "mt-2 pb-7"
      }
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": {
        "wrapper": "mt-2.5 pb-7.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "2xl",
      "class": {
        "wrapper": "mt-3 pb-8"
      }
    },
    {
      "orientation": "vertical",
      "size": "3xl",
      "class": {
        "wrapper": "mt-3.5 pb-8.5"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary"
  }
};
const _sfc_main$1 = {
  __name: "UTimeline",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    items: { type: Array, required: true },
    size: { type: null, required: false },
    color: { type: null, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    defaultValue: { type: [String, Number], required: false },
    reverse: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  }, {
    "modelValue": { type: [String, Number] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const modelValue = useModel(__props, "modelValue");
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.timeline || {} })({
      orientation: props.orientation,
      size: props.size,
      color: props.color,
      reverse: props.reverse
    }));
    const currentStepIndex = computed(() => {
      const value = modelValue.value ?? props.defaultValue;
      if (typeof value === "string") {
        return props.items.findIndex((item) => item.value === value) ?? -1;
      }
      if (props.reverse) {
        return value != null ? props.items.length - 1 - value : -1;
      } else {
        return value ?? -1;
      }
    });
    function getItemState(index) {
      if (currentStepIndex.value === -1) return void 0;
      if (index === currentStepIndex.value) return "active";
      if (props.reverse) {
        return index > currentStepIndex.value ? "completed" : void 0;
      } else {
        return index < currentStepIndex.value ? "completed" : void 0;
      }
    }
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
            ssrRenderList(__props.items, (item, index) => {
              _push2(`<div data-slot="item" class="${ssrRenderClass(ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class] }))}"${ssrRenderAttr("data-state", getItemState(index))}${_scopeId}><div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: [props.ui?.container, item.ui?.container] }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3$1, mergeProps({
                size: __props.size,
                icon: item.icon
              }, { ref_for: true }, typeof item.avatar === "object" ? item.avatar : {}, {
                "data-slot": "indicator",
                class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] }),
                ui: { icon: "text-inherit", fallback: "text-inherit" }
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-indicator` : "indicator", { item }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-indicator` : "indicator", { item })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (index < __props.items.length - 1) {
                _push2(ssrRenderComponent(unref(Separator), {
                  "data-slot": "separator",
                  class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator] }),
                  orientation: props.orientation
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: [props.ui?.wrapper, item.ui?.wrapper] }))}"${_scopeId}>`);
              if (item.date) {
                _push2(`<div data-slot="date" class="${ssrRenderClass(ui.value.date({ class: [props.ui?.date, item.ui?.date] }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-date` : "date", { item }, () => {
                  _push2(`${ssrInterpolate(item.date)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.title || !!slots.title) {
                _push2(`<div data-slot="title" class="${ssrRenderClass(ui.value.title({ class: [props.ui?.title, item.ui?.title] }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-title` : "title", { item }, () => {
                  _push2(`${ssrInterpolate(item.title)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.description || !!slots.description) {
                _push2(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: [props.ui?.description, item.ui?.description] }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "description", { item }, () => {
                  _push2(`${ssrInterpolate(item.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                return openBlock(), createBlock("div", {
                  key: item.value ?? index,
                  "data-slot": "item",
                  class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class] }),
                  "data-state": getItemState(index)
                }, [
                  createVNode("div", {
                    "data-slot": "container",
                    class: ui.value.container({ class: [props.ui?.container, item.ui?.container] })
                  }, [
                    createVNode(_sfc_main$3$1, mergeProps({
                      size: __props.size,
                      icon: item.icon
                    }, { ref_for: true }, typeof item.avatar === "object" ? item.avatar : {}, {
                      "data-slot": "indicator",
                      class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] }),
                      ui: { icon: "text-inherit", fallback: "text-inherit" }
                    }), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, item.slot ? `${item.slot}-indicator` : "indicator", { item })
                      ]),
                      _: 2
                    }, 1040, ["size", "icon", "class"]),
                    index < __props.items.length - 1 ? (openBlock(), createBlock(unref(Separator), {
                      key: 0,
                      "data-slot": "separator",
                      class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator] }),
                      orientation: props.orientation
                    }, null, 8, ["class", "orientation"])) : createCommentVNode("", true)
                  ], 2),
                  createVNode("div", {
                    "data-slot": "wrapper",
                    class: ui.value.wrapper({ class: [props.ui?.wrapper, item.ui?.wrapper] })
                  }, [
                    item.date ? (openBlock(), createBlock("div", {
                      key: 0,
                      "data-slot": "date",
                      class: ui.value.date({ class: [props.ui?.date, item.ui?.date] })
                    }, [
                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-date` : "date", { item }, () => [
                        createTextVNode(toDisplayString(item.date), 1)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    item.title || !!slots.title ? (openBlock(), createBlock("div", {
                      key: 1,
                      "data-slot": "title",
                      class: ui.value.title({ class: [props.ui?.title, item.ui?.title] })
                    }, [
                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-title` : "title", { item }, () => [
                        createTextVNode(toDisplayString(item.title), 1)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    item.description || !!slots.description ? (openBlock(), createBlock("div", {
                      key: 2,
                      "data-slot": "description",
                      class: ui.value.description({ class: [props.ui?.description, item.ui?.description] })
                    }, [
                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "description", { item }, () => [
                        createTextVNode(toDisplayString(item.description), 1)
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 2)
                ], 10, ["data-state"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Timeline.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "jobs",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const items = computed(() => {
      return locale.value === "ru" ? useAppConfig().ru.jobs : useAppConfig().en.jobs;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$2;
      const _component_UTimeline = _sfc_main$1;
      const _component_UAlert = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "jobs",
        class: "bg-primary/30 not-sm:py-10 sm:py-20 min-h-screen bg-jobs"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="title not-sm:text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("jobs.title"))}</h2>`);
            _push2(ssrRenderComponent(_component_UTimeline, {
              items: unref(items),
              class: "mt-10"
            }, {
              title: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-ui-text"${_scopeId2}>${ssrInterpolate(item.title)}</h2>`);
                } else {
                  return [
                    createVNode("h2", { class: "text-ui-text" }, toDisplayString(item.title), 1)
                  ];
                }
              }),
              description: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="p-3 my-2 mb-5"${_scopeId2}>${ssrInterpolate(item.description)}</h3><ul${_scopeId2}><!--[-->`);
                  ssrRenderList(item.skills, (skill) => {
                    _push3(`<li class="list-disc ml-5 mb-1"${_scopeId2}>${ssrInterpolate(skill)}</li>`);
                  });
                  _push3(`<!--]--></ul>`);
                } else {
                  return [
                    createVNode("h3", { class: "p-3 my-2 mb-5" }, toDisplayString(item.description), 1),
                    createVNode("ul", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.skills, (skill) => {
                        return openBlock(), createBlock("li", {
                          key: skill,
                          class: "list-disc ml-5 mb-1"
                        }, toDisplayString(skill), 1);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UAlert, {
              color: "neutral",
              title: _ctx.$t("jobs.block_info.title"),
              description: _ctx.$t("jobs.block_info.description"),
              icon: "i-lucide-info",
              class: "mb-10 bg-ui-surface text-ui-text border-0"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", { class: "title not-sm:text-center" }, toDisplayString(_ctx.$t("jobs.title")), 1),
              createVNode(_component_UTimeline, {
                items: unref(items),
                class: "mt-10"
              }, {
                title: withCtx(({ item }) => [
                  createVNode("h2", { class: "text-ui-text" }, toDisplayString(item.title), 1)
                ]),
                description: withCtx(({ item }) => [
                  createVNode("h3", { class: "p-3 my-2 mb-5" }, toDisplayString(item.description), 1),
                  createVNode("ul", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(item.skills, (skill) => {
                      return openBlock(), createBlock("li", {
                        key: skill,
                        class: "list-disc ml-5 mb-1"
                      }, toDisplayString(skill), 1);
                    }), 128))
                  ])
                ]),
                _: 1
              }, 8, ["items"]),
              createVNode(_component_UAlert, {
                color: "neutral",
                title: _ctx.$t("jobs.block_info.title"),
                description: _ctx.$t("jobs.block_info.description"),
                icon: "i-lucide-info",
                class: "mb-10 bg-ui-surface text-ui-text border-0"
              }, null, 8, ["title", "description"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/jobs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jobs = Object.assign(_sfc_main, { __name: "SectionJobs" });

export { jobs as default };
//# sourceMappingURL=jobs-Cd9x8iVL.mjs.map
