import { defineComponent, ref, withCtx, unref, createVNode, toDisplayString, useSlots, computed, mergeProps, renderSlot, createBlock, createCommentVNode, openBlock, createTextVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { Primitive, Slot } from 'reka-ui';
import { b as _sfc_main$3$1, c as _sfc_main$5$1, t as tv, _ as _sfc_main$6$1, a as _sfc_main$7, g as getSlotChildrenText, d as _sfc_main$1$1 } from './Button-GqGlf87S.mjs';
import { b as useI18n, c as useSeoMeta, a as useAppConfig } from './server.mjs';
import { _ as _sfc_main$5 } from './Marquee-C2nShsEu.mjs';
import { _ as _sfc_main$6 } from './Tooltip-D4MhE30v.mjs';
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
import './nuxt-link-C2KaZWET.mjs';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const theme$3 = {
  "slots": {
    "root": "flex flex-col lg:grid lg:grid-cols-10 lg:gap-10",
    "left": "lg:col-span-2",
    "center": "lg:col-span-8",
    "right": "lg:col-span-2 order-first lg:order-last"
  },
  "variants": {
    "left": {
      "true": ""
    },
    "right": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "left": true,
      "right": true,
      "class": {
        "center": "lg:col-span-6"
      }
    },
    {
      "left": false,
      "right": false,
      "class": {
        "center": "lg:col-span-10"
      }
    }
  ]
};
const _sfc_main$4 = {
  __name: "UPage",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$3), ...appConfig.ui?.page || {} })({
      left: !!slots.left,
      right: !!slots.right
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.left) {
              _push2(ssrRenderComponent(unref(Slot), {
                "data-slot": "left",
                class: ui.value.left({ class: props.ui?.left })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "left", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "left")
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div data-slot="center" class="${ssrRenderClass(ui.value.center({ class: props.ui?.center }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (!!slots.right) {
              _push2(ssrRenderComponent(unref(Slot), {
                "data-slot": "right",
                class: ui.value.right({ class: props.ui?.right })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "right", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "right")
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !!slots.left ? (openBlock(), createBlock(unref(Slot), {
                key: 0,
                "data-slot": "left",
                class: ui.value.left({ class: props.ui?.left })
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "left")
                ]),
                _: 3
              }, 8, ["class"])) : createCommentVNode("", true),
              createVNode("div", {
                "data-slot": "center",
                class: ui.value.center({ class: props.ui?.center })
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2),
              !!slots.right ? (openBlock(), createBlock(unref(Slot), {
                key: 1,
                "data-slot": "right",
                class: ui.value.right({ class: props.ui?.right })
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "right")
                ]),
                _: 3
              }, 8, ["class"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Page.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const theme$2 = {
  "base": "mt-8 pb-24 space-y-12"
};
const _sfc_main$3 = {
  __name: "UPageBody",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$2), ...appConfig.ui?.pageBody || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value({ class: props.class })
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageBody.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "root": "relative",
    "wrapper": "",
    "leading": "inline-flex items-center justify-center",
    "leadingIcon": "size-5 shrink-0 text-primary",
    "title": "text-base text-pretty font-semibold text-highlighted",
    "description": "text-[15px] text-pretty text-muted"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "flex items-start gap-2.5",
        "leading": "p-0.5"
      },
      "vertical": {
        "leading": "mb-2.5"
      }
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    }
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UPageFeature",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    icon: { type: null, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    to: { type: null, required: false },
    target: { type: [String, Object, null], required: false },
    onClick: { type: Function, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.pageFeature || {} })({
      orientation: props.orientation,
      title: !!props.title || !!slots.title
    }));
    const ariaLabel = computed(() => {
      const slotText = slots.title && getSlotChildrenText(slots.title());
      return (slotText || props.title || "Feature link").trim();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] }),
        onClick: __props.onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.icon || !!slots.leading) {
              _push2(`<div data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: props.ui?.leading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                if (__props.icon) {
                  _push2(ssrRenderComponent(_sfc_main$5$1, {
                    name: __props.icon,
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId}>`);
            if (__props.to) {
              _push2(ssrRenderComponent(_sfc_main$1$1, mergeProps({ "aria-label": ariaLabel.value }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
                class: "focus:outline-none peer",
                tabindex: "-1",
                raw: ""
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="absolute inset-0" aria-hidden="true"${_scopeId2}></span>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: "absolute inset-0",
                        "aria-hidden": "true"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              if (__props.title || !!slots.title) {
                _push2(`<div data-slot="title" class="${ssrRenderClass(ui.value.title({ class: props.ui?.title }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                  _push2(`${ssrInterpolate(__props.title)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.description || !!slots.description) {
                _push2(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              __props.icon || !!slots.leading ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "leading",
                class: ui.value.leading({ class: props.ui?.leading })
              }, [
                renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                  __props.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                    key: 0,
                    name: __props.icon,
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true),
              createVNode("div", {
                "data-slot": "wrapper",
                class: ui.value.wrapper({ class: props.ui?.wrapper })
              }, [
                __props.to ? (openBlock(), createBlock(_sfc_main$1$1, mergeProps({
                  key: 0,
                  "aria-label": ariaLabel.value
                }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
                  class: "focus:outline-none peer",
                  tabindex: "-1",
                  raw: ""
                }), {
                  default: withCtx(() => [
                    createVNode("span", {
                      class: "absolute inset-0",
                      "aria-hidden": "true"
                    })
                  ]),
                  _: 1
                }, 16, ["aria-label"])) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default", {}, () => [
                  __props.title || !!slots.title ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-slot": "title",
                    class: ui.value.title({ class: props.ui?.title })
                  }, [
                    renderSlot(_ctx.$slots, "title", {}, () => [
                      createTextVNode(toDisplayString(__props.title), 1)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                    key: 1,
                    "data-slot": "description",
                    class: ui.value.description({ class: props.ui?.description })
                  }, [
                    renderSlot(_ctx.$slots, "description", {}, () => [
                      createTextVNode(toDisplayString(__props.description), 1)
                    ])
                  ], 2)) : createCommentVNode("", true)
                ])
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageFeature.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "relative isolate",
    "container": "flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16",
    "wrapper": "",
    "header": "",
    "leading": "flex items-center mb-6",
    "leadingIcon": "size-10 shrink-0 text-primary",
    "headline": "mb-3",
    "title": "text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted",
    "description": "text-base sm:text-lg text-muted",
    "body": "mt-8",
    "features": "grid",
    "footer": "mt-8",
    "links": "flex flex-wrap gap-x-6 gap-y-3"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "container": "lg:grid-cols-2 lg:items-center",
        "description": "text-pretty",
        "features": "gap-4"
      },
      "vertical": {
        "container": "",
        "headline": "justify-center",
        "leading": "justify-center",
        "title": "text-center",
        "description": "text-center text-balance",
        "links": "justify-center",
        "features": "sm:grid-cols-2 lg:grid-cols-3 gap-8"
      }
    },
    "reverse": {
      "true": {
        "wrapper": "lg:order-last"
      }
    },
    "headline": {
      "true": {
        "headline": "font-semibold text-primary flex items-center gap-1.5"
      }
    },
    "title": {
      "true": {
        "description": "mt-6"
      }
    },
    "description": {
      "true": ""
    },
    "body": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "orientation": "vertical",
      "title": true,
      "class": {
        "body": "mt-16"
      }
    },
    {
      "orientation": "vertical",
      "description": true,
      "class": {
        "body": "mt-16"
      }
    },
    {
      "orientation": "vertical",
      "body": true,
      "class": {
        "footer": "mt-16"
      }
    }
  ]
};
const _sfc_main$1 = {
  __name: "UPageSection",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "section" },
    headline: { type: String, required: false },
    icon: { type: null, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    links: { type: Array, required: false },
    features: { type: Array, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    reverse: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.pageSection || {} })({
      orientation: props.orientation,
      reverse: props.reverse,
      title: !!props.title || !!slots.title,
      description: !!props.description || !!slots.description,
      body: !!slots.body || (!!props.features?.length || !!slots.features)
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
            ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_sfc_main$6$1, {
              "data-slot": "container",
              class: ui.value.container({ class: props.ui?.container })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!!slots.header || (__props.icon || !!slots.leading) || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.body || (__props.features?.length || !!slots.features) || !!slots.footer || (__props.links?.length || !!slots.links)) {
                    _push3(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId2}>`);
                    if (!!slots.header || (__props.icon || !!slots.leading) || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description)) {
                      _push3(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                        if (__props.icon || !!slots.leading) {
                          _push3(`<div data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: props.ui?.leading }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                            if (__props.icon) {
                              _push3(ssrRenderComponent(_sfc_main$5$1, {
                                name: __props.icon,
                                "data-slot": "leadingIcon",
                                class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                              }, null, _parent3, _scopeId2));
                            } else {
                              _push3(`<!---->`);
                            }
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (__props.headline || !!slots.headline) {
                          _push3(`<div data-slot="headline" class="${ssrRenderClass(ui.value.headline({ class: props.ui?.headline, headline: !slots.headline }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "headline", {}, () => {
                            _push3(`${ssrInterpolate(__props.headline)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (__props.title || !!slots.title) {
                          _push3(`<h2 data-slot="title" class="${ssrRenderClass(ui.value.title({ class: props.ui?.title }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                            _push3(`${ssrInterpolate(__props.title)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</h2>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (__props.description || !!slots.description) {
                          _push3(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                            _push3(`${ssrInterpolate(__props.description)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (!!slots.body || (__props.features?.length || !!slots.features)) {
                      _push3(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "body", {}, () => {
                        if (__props.features?.length || !!slots.features) {
                          _push3(`<ul data-slot="features" class="${ssrRenderClass(ui.value.features({ class: props.ui?.features }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "features", {}, () => {
                            _push3(`<!--[-->`);
                            ssrRenderList(__props.features, (feature, index) => {
                              _push3(ssrRenderComponent(_sfc_main$2, mergeProps({
                                key: index,
                                as: "li"
                              }, { ref_for: true }, feature), null, _parent3, _scopeId2));
                            });
                            _push3(`<!--]-->`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</ul>`);
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (!!slots.footer || (__props.links?.length || !!slots.links)) {
                      _push3(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
                        if (__props.links?.length || !!slots.links) {
                          _push3(`<div data-slot="links" class="${ssrRenderClass(ui.value.links({ class: props.ui?.links }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                            _push3(`<!--[-->`);
                            ssrRenderList(__props.links, (link, index) => {
                              _push3(ssrRenderComponent(_sfc_main$7, mergeProps({
                                key: index,
                                size: "lg"
                              }, { ref_for: true }, link), null, _parent3, _scopeId2));
                            });
                            _push3(`<!--]-->`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!!slots.default) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else if (__props.orientation === "horizontal") {
                    _push3(`<div class="hidden lg:block"${_scopeId2}></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    !!slots.header || (__props.icon || !!slots.leading) || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.body || (__props.features?.length || !!slots.features) || !!slots.footer || (__props.links?.length || !!slots.links) ? (openBlock(), createBlock("div", {
                      key: 0,
                      "data-slot": "wrapper",
                      class: ui.value.wrapper({ class: props.ui?.wrapper })
                    }, [
                      !!slots.header || (__props.icon || !!slots.leading) || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                        key: 0,
                        "data-slot": "header",
                        class: ui.value.header({ class: props.ui?.header })
                      }, [
                        renderSlot(_ctx.$slots, "header", {}, () => [
                          __props.icon || !!slots.leading ? (openBlock(), createBlock("div", {
                            key: 0,
                            "data-slot": "leading",
                            class: ui.value.leading({ class: props.ui?.leading })
                          }, [
                            renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                              __props.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                                key: 0,
                                name: __props.icon,
                                "data-slot": "leadingIcon",
                                class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          __props.headline || !!slots.headline ? (openBlock(), createBlock("div", {
                            key: 1,
                            "data-slot": "headline",
                            class: ui.value.headline({ class: props.ui?.headline, headline: !slots.headline })
                          }, [
                            renderSlot(_ctx.$slots, "headline", {}, () => [
                              createTextVNode(toDisplayString(__props.headline), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          __props.title || !!slots.title ? (openBlock(), createBlock("h2", {
                            key: 2,
                            "data-slot": "title",
                            class: ui.value.title({ class: props.ui?.title })
                          }, [
                            renderSlot(_ctx.$slots, "title", {}, () => [
                              createTextVNode(toDisplayString(__props.title), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                            key: 3,
                            "data-slot": "description",
                            class: ui.value.description({ class: props.ui?.description })
                          }, [
                            renderSlot(_ctx.$slots, "description", {}, () => [
                              createTextVNode(toDisplayString(__props.description), 1)
                            ])
                          ], 2)) : createCommentVNode("", true)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      !!slots.body || (__props.features?.length || !!slots.features) ? (openBlock(), createBlock("div", {
                        key: 1,
                        "data-slot": "body",
                        class: ui.value.body({ class: props.ui?.body })
                      }, [
                        renderSlot(_ctx.$slots, "body", {}, () => [
                          __props.features?.length || !!slots.features ? (openBlock(), createBlock("ul", {
                            key: 0,
                            "data-slot": "features",
                            class: ui.value.features({ class: props.ui?.features })
                          }, [
                            renderSlot(_ctx.$slots, "features", {}, () => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.features, (feature, index) => {
                                return openBlock(), createBlock(_sfc_main$2, mergeProps({
                                  key: index,
                                  as: "li"
                                }, { ref_for: true }, feature), null, 16);
                              }), 128))
                            ])
                          ], 2)) : createCommentVNode("", true)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      !!slots.footer || (__props.links?.length || !!slots.links) ? (openBlock(), createBlock("div", {
                        key: 2,
                        "data-slot": "footer",
                        class: ui.value.footer({ class: props.ui?.footer })
                      }, [
                        renderSlot(_ctx.$slots, "footer", {}, () => [
                          __props.links?.length || !!slots.links ? (openBlock(), createBlock("div", {
                            key: 0,
                            "data-slot": "links",
                            class: ui.value.links({ class: props.ui?.links })
                          }, [
                            renderSlot(_ctx.$slots, "links", {}, () => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                                return openBlock(), createBlock(_sfc_main$7, mergeProps({
                                  key: index,
                                  size: "lg"
                                }, { ref_for: true }, link), null, 16);
                              }), 128))
                            ])
                          ], 2)) : createCommentVNode("", true)
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ], 2)) : createCommentVNode("", true),
                    !!slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : __props.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "hidden lg:block"
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "top"),
              createVNode(_sfc_main$6$1, {
                "data-slot": "container",
                class: ui.value.container({ class: props.ui?.container })
              }, {
                default: withCtx(() => [
                  !!slots.header || (__props.icon || !!slots.leading) || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.body || (__props.features?.length || !!slots.features) || !!slots.footer || (__props.links?.length || !!slots.links) ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-slot": "wrapper",
                    class: ui.value.wrapper({ class: props.ui?.wrapper })
                  }, [
                    !!slots.header || (__props.icon || !!slots.leading) || (__props.headline || !!slots.headline) || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                      key: 0,
                      "data-slot": "header",
                      class: ui.value.header({ class: props.ui?.header })
                    }, [
                      renderSlot(_ctx.$slots, "header", {}, () => [
                        __props.icon || !!slots.leading ? (openBlock(), createBlock("div", {
                          key: 0,
                          "data-slot": "leading",
                          class: ui.value.leading({ class: props.ui?.leading })
                        }, [
                          renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                            __props.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                              key: 0,
                              name: __props.icon,
                              "data-slot": "leadingIcon",
                              class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        __props.headline || !!slots.headline ? (openBlock(), createBlock("div", {
                          key: 1,
                          "data-slot": "headline",
                          class: ui.value.headline({ class: props.ui?.headline, headline: !slots.headline })
                        }, [
                          renderSlot(_ctx.$slots, "headline", {}, () => [
                            createTextVNode(toDisplayString(__props.headline), 1)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        __props.title || !!slots.title ? (openBlock(), createBlock("h2", {
                          key: 2,
                          "data-slot": "title",
                          class: ui.value.title({ class: props.ui?.title })
                        }, [
                          renderSlot(_ctx.$slots, "title", {}, () => [
                            createTextVNode(toDisplayString(__props.title), 1)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                          key: 3,
                          "data-slot": "description",
                          class: ui.value.description({ class: props.ui?.description })
                        }, [
                          renderSlot(_ctx.$slots, "description", {}, () => [
                            createTextVNode(toDisplayString(__props.description), 1)
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    !!slots.body || (__props.features?.length || !!slots.features) ? (openBlock(), createBlock("div", {
                      key: 1,
                      "data-slot": "body",
                      class: ui.value.body({ class: props.ui?.body })
                    }, [
                      renderSlot(_ctx.$slots, "body", {}, () => [
                        __props.features?.length || !!slots.features ? (openBlock(), createBlock("ul", {
                          key: 0,
                          "data-slot": "features",
                          class: ui.value.features({ class: props.ui?.features })
                        }, [
                          renderSlot(_ctx.$slots, "features", {}, () => [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.features, (feature, index) => {
                              return openBlock(), createBlock(_sfc_main$2, mergeProps({
                                key: index,
                                as: "li"
                              }, { ref_for: true }, feature), null, 16);
                            }), 128))
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    !!slots.footer || (__props.links?.length || !!slots.links) ? (openBlock(), createBlock("div", {
                      key: 2,
                      "data-slot": "footer",
                      class: ui.value.footer({ class: props.ui?.footer })
                    }, [
                      renderSlot(_ctx.$slots, "footer", {}, () => [
                        __props.links?.length || !!slots.links ? (openBlock(), createBlock("div", {
                          key: 0,
                          "data-slot": "links",
                          class: ui.value.links({ class: props.ui?.links })
                        }, [
                          renderSlot(_ctx.$slots, "links", {}, () => [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                              return openBlock(), createBlock(_sfc_main$7, mergeProps({
                                key: index,
                                size: "lg"
                              }, { ref_for: true }, link), null, 16);
                            }), 128))
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  !!slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : __props.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "hidden lg:block"
                  })) : createCommentVNode("", true)
                ]),
                _: 3
              }, 8, ["class"]),
              renderSlot(_ctx.$slots, "bottom")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const links = ref([
      {
        label: t("index.buttons.projects.text"),
        to: t("index.buttons.projects.to"),
        variant: "subtle",
        icon: "i-lucide-folder-open",
        color: "neutral"
      },
      {
        label: t("index.buttons.about.text"),
        to: t("index.buttons.about.to"),
        color: "neutral",
        variant: "subtle",
        trailingIcon: "i-lucide-arrow-right"
      }
    ]);
    useSeoMeta({
      title: t("index.seo.title"),
      description: t("index.seo.description"),
      ogTitle: t("index.seo.title"),
      ogDescription: t("index.seo.description"),
      ogImage: "summary_large_image",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPage = _sfc_main$4;
      const _component_UAvatar = _sfc_main$3$1;
      const _component_UPageBody = _sfc_main$3;
      const _component_UPageSection = _sfc_main$1;
      const _component_UMarquee = _sfc_main$5;
      const _component_UTooltip = _sfc_main$6;
      const _component_UIcon = _sfc_main$5$1;
      _push(ssrRenderComponent(_component_UPage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col justify-center items-center mt-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              src: "/images/photo.jpg",
              size: "3xl"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UPageBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UPageSection, {
                    ui: {
                      container: "m-auto !p-5 text-center w-full"
                    },
                    class: "actions",
                    title: _ctx.$t("index.name"),
                    description: _ctx.$t("index.description"),
                    links: unref(links)
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col justify-center items-center"${_scopeId2}><p${_scopeId2}>${ssrInterpolate(_ctx.$t("index.skills"))}</p>`);
                  _push3(ssrRenderComponent(_component_UMarquee, {
                    "pause-on-hover": "",
                    class: "w-[50%] mx-auto mt-10"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UTooltip, { text: "Vue.js" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UIcon, {
                                name: "i-simple-icons-vuedotjs",
                                class: "size-10 shrink-0"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UIcon, {
                                  name: "i-simple-icons-vuedotjs",
                                  class: "size-10 shrink-0"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UTooltip, { text: "Nuxt.js" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UIcon, {
                                name: "i-simple-icons-nuxt",
                                class: "size-10 shrink-0"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UIcon, {
                                  name: "i-simple-icons-nuxt",
                                  class: "size-10 shrink-0"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UTooltip, { text: "github.com" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UIcon, {
                                name: "i-simple-icons-github",
                                class: "size-10 shrink-0"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UIcon, {
                                  name: "i-simple-icons-github",
                                  class: "size-10 shrink-0"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UTooltip, { text: "gitlab.com" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UIcon, {
                                name: "i-simple-icons-gitlab",
                                class: "size-10 shrink-0"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UIcon, {
                                  name: "i-simple-icons-gitlab",
                                  class: "size-10 shrink-0"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UTooltip, { text: "Tailwind CSS" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UIcon, {
                                name: "i-simple-icons-tailwindcss",
                                class: "size-10 shrink-0"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UIcon, {
                                  name: "i-simple-icons-tailwindcss",
                                  class: "size-10 shrink-0"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UTooltip, { text: "TypeScript" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UIcon, {
                                name: "i-simple-icons-typescript",
                                class: "size-10 shrink-0"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UIcon, {
                                  name: "i-simple-icons-typescript",
                                  class: "size-10 shrink-0"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UTooltip, { text: "JavaScript" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UIcon, {
                                name: "i-simple-icons-javascript",
                                class: "size-10 shrink-0"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UIcon, {
                                  name: "i-simple-icons-javascript",
                                  class: "size-10 shrink-0"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UTooltip, { text: "Vue.js" }, {
                            default: withCtx(() => [
                              createVNode(_component_UIcon, {
                                name: "i-simple-icons-vuedotjs",
                                class: "size-10 shrink-0"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UTooltip, { text: "Nuxt.js" }, {
                            default: withCtx(() => [
                              createVNode(_component_UIcon, {
                                name: "i-simple-icons-nuxt",
                                class: "size-10 shrink-0"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UTooltip, { text: "github.com" }, {
                            default: withCtx(() => [
                              createVNode(_component_UIcon, {
                                name: "i-simple-icons-github",
                                class: "size-10 shrink-0"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UTooltip, { text: "gitlab.com" }, {
                            default: withCtx(() => [
                              createVNode(_component_UIcon, {
                                name: "i-simple-icons-gitlab",
                                class: "size-10 shrink-0"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UTooltip, { text: "Tailwind CSS" }, {
                            default: withCtx(() => [
                              createVNode(_component_UIcon, {
                                name: "i-simple-icons-tailwindcss",
                                class: "size-10 shrink-0"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UTooltip, { text: "TypeScript" }, {
                            default: withCtx(() => [
                              createVNode(_component_UIcon, {
                                name: "i-simple-icons-typescript",
                                class: "size-10 shrink-0"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UTooltip, { text: "JavaScript" }, {
                            default: withCtx(() => [
                              createVNode(_component_UIcon, {
                                name: "i-simple-icons-javascript",
                                class: "size-10 shrink-0"
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_UPageSection, {
                      ui: {
                        container: "m-auto !p-5 text-center w-full"
                      },
                      class: "actions",
                      title: _ctx.$t("index.name"),
                      description: _ctx.$t("index.description"),
                      links: unref(links)
                    }, null, 8, ["title", "description", "links"]),
                    createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                      createVNode("p", null, toDisplayString(_ctx.$t("index.skills")), 1),
                      createVNode(_component_UMarquee, {
                        "pause-on-hover": "",
                        class: "w-[50%] mx-auto mt-10"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UTooltip, { text: "Vue.js" }, {
                            default: withCtx(() => [
                              createVNode(_component_UIcon, {
                                name: "i-simple-icons-vuedotjs",
                                class: "size-10 shrink-0"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UTooltip, { text: "Nuxt.js" }, {
                            default: withCtx(() => [
                              createVNode(_component_UIcon, {
                                name: "i-simple-icons-nuxt",
                                class: "size-10 shrink-0"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UTooltip, { text: "github.com" }, {
                            default: withCtx(() => [
                              createVNode(_component_UIcon, {
                                name: "i-simple-icons-github",
                                class: "size-10 shrink-0"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UTooltip, { text: "gitlab.com" }, {
                            default: withCtx(() => [
                              createVNode(_component_UIcon, {
                                name: "i-simple-icons-gitlab",
                                class: "size-10 shrink-0"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UTooltip, { text: "Tailwind CSS" }, {
                            default: withCtx(() => [
                              createVNode(_component_UIcon, {
                                name: "i-simple-icons-tailwindcss",
                                class: "size-10 shrink-0"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UTooltip, { text: "TypeScript" }, {
                            default: withCtx(() => [
                              createVNode(_component_UIcon, {
                                name: "i-simple-icons-typescript",
                                class: "size-10 shrink-0"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UTooltip, { text: "JavaScript" }, {
                            default: withCtx(() => [
                              createVNode(_component_UIcon, {
                                name: "i-simple-icons-javascript",
                                class: "size-10 shrink-0"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex flex-col justify-center items-center mt-10" }, [
                createVNode(_component_UAvatar, {
                  src: "/images/photo.jpg",
                  size: "3xl"
                })
              ]),
              createVNode(_component_UPageBody, null, {
                default: withCtx(() => [
                  createVNode(_component_UPageSection, {
                    ui: {
                      container: "m-auto !p-5 text-center w-full"
                    },
                    class: "actions",
                    title: _ctx.$t("index.name"),
                    description: _ctx.$t("index.description"),
                    links: unref(links)
                  }, null, 8, ["title", "description", "links"]),
                  createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                    createVNode("p", null, toDisplayString(_ctx.$t("index.skills")), 1),
                    createVNode(_component_UMarquee, {
                      "pause-on-hover": "",
                      class: "w-[50%] mx-auto mt-10"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UTooltip, { text: "Vue.js" }, {
                          default: withCtx(() => [
                            createVNode(_component_UIcon, {
                              name: "i-simple-icons-vuedotjs",
                              class: "size-10 shrink-0"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UTooltip, { text: "Nuxt.js" }, {
                          default: withCtx(() => [
                            createVNode(_component_UIcon, {
                              name: "i-simple-icons-nuxt",
                              class: "size-10 shrink-0"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UTooltip, { text: "github.com" }, {
                          default: withCtx(() => [
                            createVNode(_component_UIcon, {
                              name: "i-simple-icons-github",
                              class: "size-10 shrink-0"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UTooltip, { text: "gitlab.com" }, {
                          default: withCtx(() => [
                            createVNode(_component_UIcon, {
                              name: "i-simple-icons-gitlab",
                              class: "size-10 shrink-0"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UTooltip, { text: "Tailwind CSS" }, {
                          default: withCtx(() => [
                            createVNode(_component_UIcon, {
                              name: "i-simple-icons-tailwindcss",
                              class: "size-10 shrink-0"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UTooltip, { text: "TypeScript" }, {
                          default: withCtx(() => [
                            createVNode(_component_UIcon, {
                              name: "i-simple-icons-typescript",
                              class: "size-10 shrink-0"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UTooltip, { text: "JavaScript" }, {
                          default: withCtx(() => [
                            createVNode(_component_UIcon, {
                              name: "i-simple-icons-javascript",
                              class: "size-10 shrink-0"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DTNWbKEA.mjs.map
