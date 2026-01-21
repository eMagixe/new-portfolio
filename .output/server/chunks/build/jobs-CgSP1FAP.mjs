import { _ as _sfc_main$6, a as _sfc_main$5, t as tv, b as _sfc_main$3$1, c as _sfc_main$5$1 } from './Button-GqGlf87S.mjs';
import { _ as _sfc_main$3 } from './PageHeader-CHx2fFk4.mjs';
import { defineComponent, computed, withCtx, mergeModels, unref, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createTextVNode, useSlots, useModel, mergeProps, renderSlot, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive, Separator, useForwardProps } from 'reka-ui';
import { b as useI18n, a as useAppConfig, c as useSeoMeta } from './server.mjs';
import { reactivePick } from '@vueuse/core';
import { _ as _sfc_main$4 } from './Alert-DzdK5BZm.mjs';
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
import './index-DIr8QGQd.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import './nuxt-link-C2KaZWET.mjs';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './useLocale-BYt3Qt2w.mjs';

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
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.timeline || {} })({
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
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.separator || {} })({
      color: props.color,
      orientation: props.orientation,
      size: props.size,
      type: props.type
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Separator), mergeProps(unref(rootProps), {
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="border" class="${ssrRenderClass(ui.value.border({ class: props.ui?.border }))}"${_scopeId}></div>`);
            if (__props.label || __props.icon || __props.avatar || !!slots.default) {
              _push2(`<!--[--><div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, () => {
                if (__props.label) {
                  _push2(`<span data-slot="label" class="${ssrRenderClass(ui.value.label({ class: props.ui?.label }))}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
                } else if (__props.icon) {
                  _push2(ssrRenderComponent(_sfc_main$5$1, {
                    name: __props.icon,
                    "data-slot": "icon",
                    class: ui.value.icon({ class: props.ui?.icon })
                  }, null, _parent2, _scopeId));
                } else if (__props.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$3$1, mergeProps({
                    size: props.ui?.avatarSize || ui.value.avatarSize()
                  }, __props.avatar, {
                    "data-slot": "avatar",
                    class: ui.value.avatar({ class: props.ui?.avatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</div><div data-slot="border" class="${ssrRenderClass(ui.value.border({ class: props.ui?.border }))}"${_scopeId}></div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                "data-slot": "border",
                class: ui.value.border({ class: props.ui?.border })
              }, null, 2),
              __props.label || __props.icon || __props.avatar || !!slots.default ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("div", {
                  "data-slot": "container",
                  class: ui.value.container({ class: props.ui?.container })
                }, [
                  renderSlot(_ctx.$slots, "default", { ui: ui.value }, () => [
                    __props.label ? (openBlock(), createBlock("span", {
                      key: 0,
                      "data-slot": "label",
                      class: ui.value.label({ class: props.ui?.label })
                    }, toDisplayString(__props.label), 3)) : __props.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                      key: 1,
                      name: __props.icon,
                      "data-slot": "icon",
                      class: ui.value.icon({ class: props.ui?.icon })
                    }, null, 8, ["name", "class"])) : __props.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
                      key: 2,
                      size: props.ui?.avatarSize || ui.value.avatarSize()
                    }, __props.avatar, {
                      "data-slot": "avatar",
                      class: ui.value.avatar({ class: props.ui?.avatar })
                    }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                  ])
                ], 2),
                createVNode("div", {
                  "data-slot": "border",
                  class: ui.value.border({ class: props.ui?.border })
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
    const { locale, t } = useI18n();
    const items = computed(() => {
      return locale.value === "ru" ? useAppConfig().ru.jobs : useAppConfig().en.jobs;
    });
    useSeoMeta({
      title: t("jobs.seo.title"),
      ogTitle: t("jobs.seo.title"),
      description: t("jobs.seo.description"),
      ogDescription: t("jobs.seo.description"),
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
            _push2(ssrRenderComponent(_component_UPageHeader, {
              title: _ctx.$t("jobs.title")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UTimeline, {
              items: unref(items),
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
              title: _ctx.$t("jobs.block_info.title"),
              description: _ctx.$t("jobs.block_info.description"),
              icon: "i-lucide-info",
              class: "mb-10"
            }, null, _parent2, _scopeId));
            _push2(`<div class="actions flex flex-row justify-between items-center w-full mb-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-lucide-arrow-left",
              to: _ctx.$t("jobs.buttons.prev.to"),
              color: "neutral",
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("jobs.buttons.prev.text"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("jobs.buttons.prev.text")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("jobs.title"))}</p>`);
            _push2(ssrRenderComponent(_component_UButton, {
              "trailing-icon": "i-lucide-arrow-right",
              to: _ctx.$t("jobs.buttons.next.to"),
              color: "neutral",
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("jobs.buttons.next.text"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("jobs.buttons.next.text")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UPageHeader, {
                title: _ctx.$t("jobs.title")
              }, null, 8, ["title"]),
              createVNode(_component_UTimeline, {
                items: unref(items),
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
              }, 8, ["items"]),
              createVNode(_component_UAlert, {
                color: "neutral",
                variant: "subtle",
                title: _ctx.$t("jobs.block_info.title"),
                description: _ctx.$t("jobs.block_info.description"),
                icon: "i-lucide-info",
                class: "mb-10"
              }, null, 8, ["title", "description"]),
              createVNode("div", { class: "actions flex flex-row justify-between items-center w-full mb-10" }, [
                createVNode(_component_UButton, {
                  icon: "i-lucide-arrow-left",
                  to: _ctx.$t("jobs.buttons.prev.to"),
                  color: "neutral",
                  variant: "outline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("jobs.buttons.prev.text")), 1)
                  ]),
                  _: 1
                }, 8, ["to"]),
                createVNode("p", null, toDisplayString(_ctx.$t("jobs.title")), 1),
                createVNode(_component_UButton, {
                  "trailing-icon": "i-lucide-arrow-right",
                  to: _ctx.$t("jobs.buttons.next.to"),
                  color: "neutral",
                  variant: "outline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("jobs.buttons.next.text")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jobs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=jobs-CgSP1FAP.mjs.map
