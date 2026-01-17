import { _ as _sfc_main$6, a as _sfc_main$5, t as tv, b as _sfc_main$3$1, c as _sfc_main$5$1 } from './Button-C5RHR-UA.mjs';
import { _ as _sfc_main$3 } from './PageHeader-DHvPt5JG.mjs';
import { defineComponent, withCtx, mergeModels, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createTextVNode, useSlots, useModel, computed, unref, mergeProps, renderSlot, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive, Separator, useForwardProps } from 'reka-ui';
import { b as useSeoMeta, a as useAppConfig } from './server.mjs';
import { reactivePick } from '@vueuse/core';
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

const theme$1 = {
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
const _sfc_main$2 = {
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
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$1), ...((_a = appConfig.ui) == null ? void 0 : _a.timeline) || {} })({
        orientation: props.orientation,
        size: props.size,
        color: props.color,
        reverse: props.reverse
      });
    });
    const currentStepIndex = computed(() => {
      var _a, _b;
      const value = (_a = modelValue.value) != null ? _a : props.defaultValue;
      if (typeof value === "string") {
        return (_b = props.items.findIndex((item) => item.value === value)) != null ? _b : -1;
      }
      if (props.reverse) {
        return value != null ? props.items.length - 1 - value : -1;
      } else {
        return value != null ? value : -1;
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
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.items, (item, index) => {
              var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
              _push2(`<div data-slot="item" class="${ssrRenderClass(ui.value.item({ class: [(_a2 = props.ui) == null ? void 0 : _a2.item, (_b = item.ui) == null ? void 0 : _b.item, item.class] }))}"${ssrRenderAttr("data-state", getItemState(index))}${_scopeId}><div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: [(_c = props.ui) == null ? void 0 : _c.container, (_d = item.ui) == null ? void 0 : _d.container] }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3$1, mergeProps({
                size: __props.size,
                icon: item.icon
              }, { ref_for: true }, typeof item.avatar === "object" ? item.avatar : {}, {
                "data-slot": "indicator",
                class: ui.value.indicator({ class: [(_e = props.ui) == null ? void 0 : _e.indicator, (_f = item.ui) == null ? void 0 : _f.indicator] }),
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
                  class: ui.value.separator({ class: [(_g = props.ui) == null ? void 0 : _g.separator, (_h = item.ui) == null ? void 0 : _h.separator] }),
                  orientation: props.orientation
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: [(_i = props.ui) == null ? void 0 : _i.wrapper, (_j = item.ui) == null ? void 0 : _j.wrapper] }))}"${_scopeId}>`);
              if (item.date) {
                _push2(`<div data-slot="date" class="${ssrRenderClass(ui.value.date({ class: [(_k = props.ui) == null ? void 0 : _k.date, (_l = item.ui) == null ? void 0 : _l.date] }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-date` : "date", { item }, () => {
                  _push2(`${ssrInterpolate(item.date)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.title || !!slots.title) {
                _push2(`<div data-slot="title" class="${ssrRenderClass(ui.value.title({ class: [(_m = props.ui) == null ? void 0 : _m.title, (_n = item.ui) == null ? void 0 : _n.title] }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-title` : "title", { item }, () => {
                  _push2(`${ssrInterpolate(item.title)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.description || !!slots.description) {
                _push2(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: [(_o = props.ui) == null ? void 0 : _o.description, (_p = item.ui) == null ? void 0 : _p.description] }))}"${_scopeId}>`);
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
                var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
                return openBlock(), createBlock("div", {
                  key: (_a2 = item.value) != null ? _a2 : index,
                  "data-slot": "item",
                  class: ui.value.item({ class: [(_b = props.ui) == null ? void 0 : _b.item, (_c = item.ui) == null ? void 0 : _c.item, item.class] }),
                  "data-state": getItemState(index)
                }, [
                  createVNode("div", {
                    "data-slot": "container",
                    class: ui.value.container({ class: [(_d = props.ui) == null ? void 0 : _d.container, (_e = item.ui) == null ? void 0 : _e.container] })
                  }, [
                    createVNode(_sfc_main$3$1, mergeProps({
                      size: __props.size,
                      icon: item.icon
                    }, { ref_for: true }, typeof item.avatar === "object" ? item.avatar : {}, {
                      "data-slot": "indicator",
                      class: ui.value.indicator({ class: [(_f = props.ui) == null ? void 0 : _f.indicator, (_g = item.ui) == null ? void 0 : _g.indicator] }),
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
                      class: ui.value.separator({ class: [(_h = props.ui) == null ? void 0 : _h.separator, (_i = item.ui) == null ? void 0 : _i.separator] }),
                      orientation: props.orientation
                    }, null, 8, ["class", "orientation"])) : createCommentVNode("", true)
                  ], 2),
                  createVNode("div", {
                    "data-slot": "wrapper",
                    class: ui.value.wrapper({ class: [(_j = props.ui) == null ? void 0 : _j.wrapper, (_k = item.ui) == null ? void 0 : _k.wrapper] })
                  }, [
                    item.date ? (openBlock(), createBlock("div", {
                      key: 0,
                      "data-slot": "date",
                      class: ui.value.date({ class: [(_l = props.ui) == null ? void 0 : _l.date, (_m = item.ui) == null ? void 0 : _m.date] })
                    }, [
                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-date` : "date", { item }, () => [
                        createTextVNode(toDisplayString(item.date), 1)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    item.title || !!slots.title ? (openBlock(), createBlock("div", {
                      key: 1,
                      "data-slot": "title",
                      class: ui.value.title({ class: [(_n = props.ui) == null ? void 0 : _n.title, (_o = item.ui) == null ? void 0 : _o.title] })
                    }, [
                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-title` : "title", { item }, () => [
                        createTextVNode(toDisplayString(item.title), 1)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    item.description || !!slots.description ? (openBlock(), createBlock("div", {
                      key: 2,
                      "data-slot": "description",
                      class: ui.value.description({ class: [(_p = props.ui) == null ? void 0 : _p.description, (_q = item.ui) == null ? void 0 : _q.description] })
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Timeline.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "flex items-center align-center text-center",
    "border": "",
    "container": "font-medium text-default flex",
    "icon": "shrink-0 size-5",
    "avatar": "shrink-0",
    "avatarSize": "2xs",
    "label": "text-sm"
  },
  "variants": {
    "color": {
      "primary": {
        "border": "border-primary"
      },
      "secondary": {
        "border": "border-secondary"
      },
      "success": {
        "border": "border-success"
      },
      "info": {
        "border": "border-info"
      },
      "warning": {
        "border": "border-warning"
      },
      "error": {
        "border": "border-error"
      },
      "neutral": {
        "border": "border-default"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "w-full flex-row",
        "border": "w-full",
        "container": "mx-3 whitespace-nowrap"
      },
      "vertical": {
        "root": "h-full flex-col",
        "border": "h-full",
        "container": "my-2"
      }
    },
    "size": {
      "xs": "",
      "sm": "",
      "md": "",
      "lg": "",
      "xl": ""
    },
    "type": {
      "solid": {
        "border": "border-solid"
      },
      "dashed": {
        "border": "border-dashed"
      },
      "dotted": {
        "border": "border-dotted"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": {
        "border": "border-t"
      }
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": {
        "border": "border-t-[2px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": {
        "border": "border-t-[3px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": {
        "border": "border-t-[4px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": {
        "border": "border-t-[5px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": {
        "border": "border-s"
      }
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": {
        "border": "border-s-[2px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": {
        "border": "border-s-[3px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": {
        "border": "border-s-[4px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": {
        "border": "border-s-[5px]"
      }
    }
  ],
  "defaultVariants": {
    "color": "neutral",
    "size": "xs",
    "type": "solid"
  }
};
const _sfc_main$1 = {
  __name: "USeparator",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    label: { type: String, required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    color: { type: null, required: false },
    size: { type: null, required: false },
    type: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    decorative: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "as", "decorative", "orientation"));
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.separator) || {} })({
        color: props.color,
        orientation: props.orientation,
        size: props.size,
        type: props.type
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Separator), mergeProps(unref(rootProps), {
        "data-slot": "root",
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div data-slot="border" class="${ssrRenderClass(ui.value.border({ class: (_a2 = props.ui) == null ? void 0 : _a2.border }))}"${_scopeId}></div>`);
            if (__props.label || __props.icon || __props.avatar || !!slots.default) {
              _push2(`<!--[--><div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, () => {
                var _a3, _b2, _c2, _d2;
                if (__props.label) {
                  _push2(`<span data-slot="label" class="${ssrRenderClass(ui.value.label({ class: (_a3 = props.ui) == null ? void 0 : _a3.label }))}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
                } else if (__props.icon) {
                  _push2(ssrRenderComponent(_sfc_main$5$1, {
                    name: __props.icon,
                    "data-slot": "icon",
                    class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon })
                  }, null, _parent2, _scopeId));
                } else if (__props.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$3$1, mergeProps({
                    size: ((_c2 = props.ui) == null ? void 0 : _c2.avatarSize) || ui.value.avatarSize()
                  }, __props.avatar, {
                    "data-slot": "avatar",
                    class: ui.value.avatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.avatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</div><div data-slot="border" class="${ssrRenderClass(ui.value.border({ class: (_c = props.ui) == null ? void 0 : _c.border }))}"${_scopeId}></div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                "data-slot": "border",
                class: ui.value.border({ class: (_d = props.ui) == null ? void 0 : _d.border })
              }, null, 2),
              __props.label || __props.icon || __props.avatar || !!slots.default ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("div", {
                  "data-slot": "container",
                  class: ui.value.container({ class: (_e = props.ui) == null ? void 0 : _e.container })
                }, [
                  renderSlot(_ctx.$slots, "default", { ui: ui.value }, () => {
                    var _a3, _b2, _c2, _d2;
                    return [
                      __props.label ? (openBlock(), createBlock("span", {
                        key: 0,
                        "data-slot": "label",
                        class: ui.value.label({ class: (_a3 = props.ui) == null ? void 0 : _a3.label })
                      }, toDisplayString(__props.label), 3)) : __props.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                        key: 1,
                        name: __props.icon,
                        "data-slot": "icon",
                        class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon })
                      }, null, 8, ["name", "class"])) : __props.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
                        key: 2,
                        size: ((_c2 = props.ui) == null ? void 0 : _c2.avatarSize) || ui.value.avatarSize()
                      }, __props.avatar, {
                        "data-slot": "avatar",
                        class: ui.value.avatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.avatar })
                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                    ];
                  })
                ], 2),
                createVNode("div", {
                  "data-slot": "border",
                  class: ui.value.border({ class: (_f = props.ui) == null ? void 0 : _f.border })
                }, null, 2)
              ], 64)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "jobs",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        date: "\u041D\u043E\u044F\u0431\u0440\u044C, 2023",
        title: "\u041E\u041E\u041E \u0411\u0435\u043B\u043B\u0444\u043E\u0440\u0434",
        description: "Middle+ Frontend Developer",
        skills: [
          "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 SPA/SSR-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C \u043D\u0430 Nuxt 3/4",
          "\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 Python/Django API",
          "\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 Nuxt.js \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043E\u0439, FSD \u0438 \u043C\u0438\u043A\u0440\u043E\u0441\u0435\u0440\u0432\u0438\u0441\u043D\u043E\u0439 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043E\u0439",
          "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0432\u044B\u0441\u043E\u043A\u043E\u043D\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0445 CRM \u0441\u0438\u0441\u0442\u0435\u043C",
          "\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 VueUse, Nuxt UI, PrimeVue, TailwindCSS \u0438 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u043C\u0438 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430\u043C\u0438",
          "TypeScript (Generics, Utility Types, \u0442\u0438\u043F\u0438\u0437\u0430\u0446\u0438\u044F API, \u0442\u0438\u043F\u0438\u0437\u0430\u0446\u0438\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u0438 \u043F\u0440\u043E\u043F\u0441\u043E\u0432)",
          "Vitest (\u043C\u043E\u0434\u0443\u043B\u044C\u043D\u043E\u0435 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432)",
          "Lighthouse-\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044F, \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044F \u0438 \u043A\u0435\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432"
        ],
        icon: "i-lucide-check-circle"
      },
      {
        date: "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C, 2022",
        title: "\u0421\u0442\u0443\u0434\u0438\u044F AWA.agency",
        icon: "i-lucide-check-circle",
        description: "Middle Frontend Developer",
        skills: [
          "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432 \u043D\u0430 Nuxt3 / Vue3",
          "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0444\u043E\u0440\u043C \u0441 PrimeVue \u0438 Tailwind CSS",
          "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0439 \u0447\u0430\u0441\u0442\u0438 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
          "\u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0442\u0435\u0441\u0442\u043E\u0432 \u0438 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432\u044B\u044F\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0431\u0430\u0433\u043E\u0432"
        ]
      },
      {
        date: "\u0424\u0435\u0432\u0440\u0430\u043B\u044C, 2020",
        title: '\u041E\u041E\u041E "\u0410\u0432\u0430\u043A\u0441"',
        description: "Junior Fullstack Developer",
        icon: "i-lucide-check-circle",
        skills: [
          "\u041C\u0438\u043A\u0440\u043E\u0441\u0435\u0440\u0432\u0438\u0441\u044B \u043D\u0430 Node.js + Vue, \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0441 API Laravel",
          "PHP (Laravel, October CMS). - \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0431\u0438\u0437\u043D\u0435\u0441 \u043B\u043E\u0433\u0438\u043A\u0438",
          "\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430\u043C\u0438\u0438 \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0430 Google-\u0442\u0430\u0431\u043B\u0438\u0446 \u0438 PDF \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432",
          "\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 API CDEK \u0438 \u042F\u043D\u0434\u0435\u043A\u0441 \u041A\u0430\u0440\u0442\u044B",
          "\u0411\u043E\u0442\u044B \u0434\u043B\u044F Telegram, VK"
        ]
      },
      {
        date: "\u041C\u0430\u0439, 2019",
        title: '\u041C\u0410\u0423 "\u0410\u0420\u0422"',
        description: "Web-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442",
        icon: "i-lucide-rocket",
        skills: [
          "JavaScript, Vue.js, (Vuex, Vue-router), Vuetify, React - \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",
          "PHP (Laravel, October CMS). - \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0431\u0438\u0437\u043D\u0435\u0441 \u043B\u043E\u0433\u0438\u043A\u0438",
          "\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 MySQL, PostgreSQL, MongoDB",
          "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"
        ]
      }
    ];
    useSeoMeta({
      title: "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B - \u0415\u0432\u0447\u0435\u043D\u043A\u043E \u041C\u0430\u043A\u0441\u0438\u043C",
      ogTitle: "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B - \u0415\u0432\u0447\u0435\u043D\u043A\u043E \u041C\u0430\u043A\u0441\u0438\u043C",
      description: "\u0421\u043F\u0438\u0441\u043E\u043A \u043C\u0435\u0441\u0442 \u0440\u0430\u0431\u043E\u0442\u044B, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0415\u0432\u0447\u0435\u043D\u043A\u043E \u041C\u0430\u043A\u0441\u0438\u043C, Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0441 \u043C\u043D\u043E\u0433\u043E\u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439.",
      ogDescription: "\u0421\u043F\u0438\u0441\u043E\u043A \u043C\u0435\u0441\u0442 \u0440\u0430\u0431\u043E\u0442\u044B, \u043D\u0430\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0415\u0432\u0447\u0435\u043D\u043A\u043E \u041C\u0430\u043A\u0441\u0438\u043C, Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0441 \u043C\u043D\u043E\u0433\u043E\u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439.",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$6;
      const _component_UPageHeader = _sfc_main$3;
      const _component_UTimeline = _sfc_main$2;
      const _component_USeparator = _sfc_main$1;
      const _component_UAlert = _sfc_main$4;
      const _component_UButton = _sfc_main$5;
      _push(ssrRenderComponent(_component_UContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageHeader, { title: "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UTimeline, {
              items,
              class: "mt-5"
            }, {
              title: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2${_scopeId2}>${ssrInterpolate(item.title)}</h2>`);
                } else {
                  return [
                    createVNode("h2", null, toDisplayString(item.title), 1)
                  ];
                }
              }),
              description: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="p-3 my-2 bg-neutral-100 shadow border-t-gray-500 mb-5"${_scopeId2}>${ssrInterpolate(item.description)}</h3><ul${_scopeId2}><!--[-->`);
                  ssrRenderList(item.skills, (skill) => {
                    _push3(`<li class="list-disc ml-5 mb-1"${_scopeId2}>${ssrInterpolate(skill)}</li>`);
                  });
                  _push3(`<!--]--></ul>`);
                  _push3(ssrRenderComponent(_component_USeparator, { class: "mt-5" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h3", { class: "p-3 my-2 bg-neutral-100 shadow border-t-gray-500 mb-5" }, toDisplayString(item.description), 1),
                    createVNode("ul", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.skills, (skill) => {
                        return openBlock(), createBlock("li", {
                          key: skill,
                          class: "list-disc ml-5 mb-1"
                        }, toDisplayString(skill), 1);
                      }), 128))
                    ]),
                    createVNode(_component_USeparator, { class: "mt-5" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UAlert, {
              color: "neutral",
              variant: "subtle",
              title: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
              description: "\u041D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0436\u0438\u0437\u043D\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0443\u0442\u0438 \u044F \u0440\u0430\u0431\u043E\u0442\u0430\u043B \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u043E\u043C \u0435\u0449\u0435 \u0432 \u0440\u044F\u0434\u0435 \u043C\u0435\u0441\u0442 \u0438 \u0438\u0437\u0443\u0447\u0438\u043B \u0442\u0430\u043A\u0438\u0435 \u044F\u0437\u044B\u043A\u0438 \u043A\u0430\u043A\n			PHP, C, C++, C# \u043D\u043E \u0438\u0445 \u044F \u0432 \u0434\u0430\u043D\u043D\u043E\u043C \u0441\u043F\u0438\u0441\u043A\u0435 \u043D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E \u0442\u0430\u043A \u043A\u0430\u043A \u043E\u043D\u0438 \u043D\u0435 \u043E\u0442\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u043A \u043C\u043E\u0435\u0439 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438",
              icon: "i-lucide-info",
              class: "mb-10"
            }, null, _parent2, _scopeId));
            _push2(`<div class="actions flex flex-row justify-between items-center w-full mb-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-lucide-arrow-left",
              to: "/",
              color: "neutral",
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u0413\u043B\u0430\u0432\u043D\u0430\u044F`);
                } else {
                  return [
                    createTextVNode("\u0413\u043B\u0430\u0432\u043D\u0430\u044F")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}>\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B</p>`);
            _push2(ssrRenderComponent(_component_UButton, {
              "trailing-icon": "i-lucide-arrow-right",
              to: "/skills",
              color: "neutral",
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u041D\u0430\u0432\u044B\u043A\u0438`);
                } else {
                  return [
                    createTextVNode("\u041D\u0430\u0432\u044B\u043A\u0438")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UPageHeader, { title: "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B" }),
              createVNode(_component_UTimeline, {
                items,
                class: "mt-5"
              }, {
                title: withCtx(({ item }) => [
                  createVNode("h2", null, toDisplayString(item.title), 1)
                ]),
                description: withCtx(({ item }) => [
                  createVNode("h3", { class: "p-3 my-2 bg-neutral-100 shadow border-t-gray-500 mb-5" }, toDisplayString(item.description), 1),
                  createVNode("ul", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(item.skills, (skill) => {
                      return openBlock(), createBlock("li", {
                        key: skill,
                        class: "list-disc ml-5 mb-1"
                      }, toDisplayString(skill), 1);
                    }), 128))
                  ]),
                  createVNode(_component_USeparator, { class: "mt-5" })
                ]),
                _: 1
              }),
              createVNode(_component_UAlert, {
                color: "neutral",
                variant: "subtle",
                title: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
                description: "\u041D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0436\u0438\u0437\u043D\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0443\u0442\u0438 \u044F \u0440\u0430\u0431\u043E\u0442\u0430\u043B \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u043E\u043C \u0435\u0449\u0435 \u0432 \u0440\u044F\u0434\u0435 \u043C\u0435\u0441\u0442 \u0438 \u0438\u0437\u0443\u0447\u0438\u043B \u0442\u0430\u043A\u0438\u0435 \u044F\u0437\u044B\u043A\u0438 \u043A\u0430\u043A\n			PHP, C, C++, C# \u043D\u043E \u0438\u0445 \u044F \u0432 \u0434\u0430\u043D\u043D\u043E\u043C \u0441\u043F\u0438\u0441\u043A\u0435 \u043D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E \u0442\u0430\u043A \u043A\u0430\u043A \u043E\u043D\u0438 \u043D\u0435 \u043E\u0442\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u043A \u043C\u043E\u0435\u0439 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438",
                icon: "i-lucide-info",
                class: "mb-10"
              }),
              createVNode("div", { class: "actions flex flex-row justify-between items-center w-full mb-10" }, [
                createVNode(_component_UButton, {
                  icon: "i-lucide-arrow-left",
                  to: "/",
                  color: "neutral",
                  variant: "outline"
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u0413\u043B\u0430\u0432\u043D\u0430\u044F")
                  ]),
                  _: 1
                }),
                createVNode("p", null, "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B"),
                createVNode(_component_UButton, {
                  "trailing-icon": "i-lucide-arrow-right",
                  to: "/skills",
                  color: "neutral",
                  variant: "outline"
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u041D\u0430\u0432\u044B\u043A\u0438")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jobs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=jobs-CRQ6lsKT.mjs.map
